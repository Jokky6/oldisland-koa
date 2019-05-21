const requireDirectory = require('require-directory')
const Router = require('koa-router')

class InitManager{
    // 入口方法
    static initApp(app){
        InitManager.app = app
        InitManager.initRouters()
    }

    static initRouters(){
        // process.cwd()为项目根目录
        const apiDirectory = `${process.cwd()}/app/api`
        // {visit:funtion}
        requireDirectory(module, apiDirectory, {
            visit: LoadRouter
        })

        // 自动加载路由
        function LoadRouter(obj) {
            if (obj instanceof Router) {
                InitManager.app.use(obj.routes())
            }
        }
    }
}

module.exports = InitManager