var server = require('node-http-server');
var config = new server.Config;

config.errors['404'] = 'Halaman Tidak Ditemukan !';
config.port = 8090;
config.root = './out'
server.deploy(config, () => {
  console.log(`Running On Port ${config.port}`);
});
