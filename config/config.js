const dotnenv = require('dotenv').config();
module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'develoment',
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || '3000',
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
}