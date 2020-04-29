const  path = require('path'); // 引入path模块
function resolve(dir) {
    return path.join(__dirname,dir) //path.join(_dirname)设置绝对路径
}

module.exports = {
    chainWebpack:(config)=> {
        config.resolve.alias
            //第一个参数：别名 第二个参数：路径
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'))
    },
    devServer:{
        host:'localhost',
        //host:'172.16.78.1',//电脑ip地址
        port:8080,
        https:false,
        open:true,
        proxy:null

    }
};