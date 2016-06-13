(function(){
	const koa = require('koa');
	const app = module.exports = koa();

	const rootRouter = require('./hello'); 

	app.use(rootRouter.routes());

	app.listen(3000);
})();