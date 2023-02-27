require('dotenv').config()
const connection_string=`postgres://${process.env.DB_USER}@${process.env.DB_HOST}/${process.env.DB_NAME}`;
module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
}
