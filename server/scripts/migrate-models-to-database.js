var server  = require('../server');
var ds = server.dataSources.Cluster0;

const models = ['grant', 'category', 'country', 'auditory'];

ds.automigrate(models,function(error, result){
	ds.disconnect();
});