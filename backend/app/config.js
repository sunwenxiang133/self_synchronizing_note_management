const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

//TODO: 登陆验证，密钥

dotenv.config({ path: './config.env' })

module.exports = {
  APP_HOST,
  APP_PORT,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DATABASE,
  MONGO_USER,
  MONGO_PASSWORD,
  QQ_USER,
  QQ_SMTP,
  SERVER_PORT
} = process.env
