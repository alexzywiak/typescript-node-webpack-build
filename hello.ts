(function(){
	const router = require('koa-router')();

	router.use('/hello', require('./routes/hello').routes());
	router.use('/whatup', require('./routes/whatup').routes());
	
	module.exports = router;
})();