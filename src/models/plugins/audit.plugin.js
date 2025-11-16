/**
 * Mongoose plugin to add audit fields (createdBy, createdAt, updatedBy, updatedAt)
 * to all schemas that use it.
 *
 * Usage: schema.plugin(auditPlugin);
 *
 * The plugin adds the fields and enables timestamps.
 * Services should set createdBy/updatedBy directly before saving.
 * createdAt/updatedAt are handled automatically by Mongoose timestamps.
 */
const auditPlugin = function(schema) {
  // Add audit fields to schema (only if they don't exist)
  if (!schema.path('createdBy')) {
    schema.add({
      createdBy: {
        type: schema.constructor.Types.ObjectId,
        ref: 'User',
        default: null
      }
    });
  }

  if (!schema.path('updatedBy')) {
    schema.add({
      updatedBy: {
        type: schema.constructor.Types.ObjectId,
        ref: 'User',
        default: null
      }
    });
  }

  // Enable timestamps (adds createdAt and updatedAt automatically)
  // This is safe even if timestamps are already enabled
  schema.set('timestamps', true);
};

module.exports = auditPlugin;