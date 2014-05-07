		it('/*{{it}}*/',function(done){
			var request = connection['/*{{verb}}*/'];
			request&&request('/*{{url}}*/',function(err,data){
				tools.testOData(data);
				done();
			});
		});
