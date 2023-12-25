const app = require('./app')

const config = require('./app/config')

let APP_PORT = config.APP_PORT

app.listen(config.APP_PORT, () => {
  console.log(`服务器已启动，端口${APP_PORT}`)
})
