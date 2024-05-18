const methodNotAllowed = (req, res, next) => {
    const methods = Object.keys(req.route?.methods ?? []).filter(k => k !== '_all').map(e => e.toUpperCase());
    if (methods.includes('GET') && !methods.includes('HEAD')) {
        methods.push('HEAD');
    }
    res.set('Allow', methods.join(', '));
    res.status(405).send();
};

module.exports = methodNotAllowed;
