const debug = require('debug')('deploy-tool:routes:webHook');

module.exports=function* webHook(next){
    debug('webHook post message %O',this.request.body)
    this.body=this.request.body
}