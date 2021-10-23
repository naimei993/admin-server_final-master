//用一个单独模块来放生成token和验证token的方法，方便后面调用。
const { secretKey } = require("./salt");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");




//生成 token
const createToken = payload =>{

    console.log(payload)
    console.log(secretKey())
    return jwt.sign(
        payload, 
        secretKey(), 
        {
            expiresIn: 60 * 60 * 240 // 设置token的有效期 单位（秒）   
        }
      );
}
  

// 验证 token
const jwtAuth = expressJwt({
  secret: secretKey(),
  algorithms: ["HS256"],
  credentialsRequired: true//  false：不校验
}).unless({
  path: ["/login", "/register"] //不需要校验的路径
})




module.exports = { jwtAuth, createToken };


