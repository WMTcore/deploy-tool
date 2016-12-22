const app = require('Koa')();
const bodyParser = require('koa-bodyparser');

const routes =require('../routes');
const config = require('../config');


// import session from "koa-session-redis"
// import csrf from 'koa-csrf'
// import jwt from 'koa-jwt'
// import etag from 'koa-etag'
// import Router from 'koa-router'
// import compress from 'koa-compress'
// import request from 'request'

app.use(bodyParser({jsonLimit:'1mb'})); 

// router.get('/api', function* (next){
// 	console.log(111);
// 	this.body = JSON.stringify({
// 		hello: 'world'
// 	});
// })

// router.post('/', (ctx) => {
// 	console.error(ctx.request.body, ctx.session)
// 	ctx.body = ctx.request.body
// });

app.use(routes.routes());

app.listen(config.port);