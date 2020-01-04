var server = require('../server');
var ds = server.dataSources.Cluster0;
const lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];

ds.automigrate(lbTables, function(err){
	if(err) throw err;
	ds.disconnect();
});