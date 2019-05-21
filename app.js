const koa = require('koa')
const requireDirectory = require('require-directory')
const Router = require('koa-router')
const app = new koa()

// {visit:funtion}
requireDirectory(module,'./app/api',{
    visit:LoadRouter
})

// 自动加载路由
function LoadRouter(obj){
    if( obj instanceof Router){
        app.use(obj.routes())
    }
}

app.listen(3000);