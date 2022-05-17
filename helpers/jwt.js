const { expressjwt: jwt } = require("express-jwt");
const userService = require('../user/service/user.service');
const dotenv = require("dotenv");

dotenv.config();

module.exports = jwtMiddleware;

function jwtMiddleware() {
    const secret = process.env.SECRET;
    return jwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            '/users/authenticate',
            '/users/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.payload.sub);
    // if user no longer exists
    if (!user) {
        return 'user no longer exists!'
    }
    done;
};