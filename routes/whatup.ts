(function(){
	const router = require('koa-router')();

	function spitUser(user:User): User {
		user.name = 'chicken';
		return user;
	}

	router.get('/', function *(next){
		this.body = spitUser({
			name: 'billy',
			age: 12
		});
	});

	module.exports = router;
})()