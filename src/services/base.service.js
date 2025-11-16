const { ServiceError, NotFoundServiceError } = require("./errors");

class BaseService {
  constructor(dao, limit = 20, defaultSortBy = "-createdAt,_id") {
    this.dao = dao;
    this.limit = limit;
    this.defaultSortBy = defaultSortBy;
  }

  get notFoundMessage() {
    return `${this.entityName} not found`;
  }

  get entityName() {
    return this.constructor.name.replace("Service", "");
  }

  /**
   * List
   * @param {Object} filters - Filters
   * @param {Object} options - Options
   * @param {string} options.select - Fields to select (supports +password for explicit inclusion)
   * @returns {Promise<QueryResult>}
   */
  async list(filters = {}, options = {}) {
    //const { pagination, order } = this._getPaginationAndOrder(options);
    let query = this.dao.find(filters);

    if (options.exclude) {
      const projection = {};
      options.exclude.forEach((field) => {
        projection[field] = 0;
      });
      query = query.select(projection);
    }
    if (options.include) {
      query = options.include.reduce(
        (acc, field) => acc.populate(field),
        query
      );
    }
    if (options.lean) {
      query = query.lean();
    }
    if (options.select) {
      query = query.select(options.select);
    }

    //query = query.skip(pagination.offset);

    //if (pagination.limit) {
    //  query.limit(pagination.limit);
    //}

    //const count = await this.dao.count(filters);
    const results = await query.sort(this.defaultSortBy).exec();

    return results;
  }

  /**
   * Get an entity by id
   * @param {string} entityId
   * @returns {Promise<Entity|null>}
   */
  async getById(entityId) {
    try {
      return await this.dao.findById(entityId);
    } catch (err) {
      throw new ServiceError(err);
    }
  }

  /**
   * Create an entity
   * @param {Object} entityBody
   * @param {Object} createdBy
   * @param {Object} transaction
   * @returns {Promise<Entity>}
   */
  async create(entityBody, createdBy) {
    try {
      const entity = new this.dao(entityBody);
      // Set audit fields explicitly
      if (createdBy?._id) {
        entity.createdBy = createdBy._id;
        entity.updatedBy = createdBy._id;
      }
      await entity.save();
      return entity;
    } catch (err) {
      throw new ServiceError(err);
    }
  }

  /**
   * Delete an entity by id
   * @param {string} entityId
   * @param {Object} deletedBy
   * @param {Object} transaction
   * @throws {NotFoundServiceError} entity not found
   * @returns {Promise<boolean>}
   */
  async deleteById(entityId, deletedBy) {
    const entity = await this.getById(entityId);
    if (!entity) {
      throw new NotFoundServiceError(this.notFoundMessage);
    }
    try {
      const { deletedCount } = await this.dao.deleteOne({ _id: entityId });
      return deletedCount > 0;
    } catch (err) {
      throw new ServiceError(err);
    }
  }

  /**
   * Update an entity by id
   * @param {string} entityId
   * @param {Object} toUpdate
   * @param {Object} updatedBy
   * @throws {NotFoundServiceError} entity not found
   * @returns {Promise<Entity>}
   */
  async updateById(entityId, toUpdate, updatedBy) {
    try {
      const updatedData = { ...toUpdate };
      if (updatedBy?._id) {
        updatedData.updatedBy = updatedBy._id;
      }
      let result = await this.dao.updateOne({ _id: entityId }, updatedData);
      if (!result.matchedCount) {
        throw new NotFoundServiceError(this.notFoundMessage);
      }
      return await this.getById(entityId);
    } catch (err) {
      throw new ServiceError(err);
    }
  }
}

module.exports = BaseService;
