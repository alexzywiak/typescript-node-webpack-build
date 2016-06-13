(function(){
	const router = require('koa-router')();

	router.get('/', function *(next){
		this.body = 'hello';
	});

	module.exports = router;
})();