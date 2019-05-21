const koa = require('koa')
const InitManager = require('./core/init')
const app = new koa()

// entry
InitManager.initApp(app)

app.listen(3000)