// Check if username and password exist

function validateUsernameAndPassword(req, res, next) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).send('Please enter a username and password');
    }

    next();
}



module.exports = {
    validateUsernameAndPassword
}