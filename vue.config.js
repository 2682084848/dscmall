module.exports={
    publicPath:"./",
    devServer:{
        host:"0.0.0.0",
        open:true,
        // 服务器代理解决跨域问题
        // 配置跨域请求
        proxy:{
            // 配置：以后再用https://x.dscmall.cn/api时用  /api代替
            "/api":{
                // 配置要代理的域名
                target:"https://x.dscmall.cn/api",
                // 允许跨域请求
                changeOrigin:true,
                // 路径重写
                pathRewrite:{
                    "^/api":""
                }
            
            
            }        
    }
   }
}