const proxy = require("http-proxy-middleware")

module.exports = (app)=>{
    app.use("/v3",proxy({
        target:"https://mall.api.epet.com",
        changeOrigin:true
    }))

    app.use("/api",proxy({
        target:"https://mall.api.epet.com",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))

}

//