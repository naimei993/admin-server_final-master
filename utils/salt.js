//使用crypto生成了一个密钥，并且暴露出去
var crypto = require('crypto')

const md5 = require('blueimp-md5')




salt = {
    MD5_SUFFIX: "zosiodf", //固定长度的盐值salt
    secretKey: () => {
        let md5 = crypto.createHash("md5");
        return md5.update("iodf").digest("hex");
    },
    // secretKey : "zosiodf"
};




module.exports = salt

