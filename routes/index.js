const router = require('koa-router')();

const webHook =require('./webHook');

router.post('/webHook',webHook)

module.exports=router;



