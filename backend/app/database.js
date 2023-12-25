const { default: mongoose } = require('mongoose')

const mongoose = require(mongoose)

const config = require('./config')

const db = mongoose.createConnection(
  `mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DATABASE}`,
  {
    // useCreateIndex: true,
    useNewUrlParser: true, //使用一个新的URL解析器
    useUnifiedTopology: true // 使用一个统一的新的拓扑结构
  }
)
db.on('error', console.error.bind(console, 'connection error'))

db.once('open', function () {
  console.info('数据库连接成功')
})

module.exports = db
