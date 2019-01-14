# node-etcd-result-parser
##### a result-parser for module node-etcd
##### This module will help you to parse the callback from the module [node-etcd](https://github.com/stianeikeland/node-etcd)

### Quick Example

##### use npm to install node-etcd-result-parser
```
npm i node-etcd-result-parser
```

##### Import node-etcd-result-parser for your project
```
var etcdParser = require('node-etcd-result-parser');
```
##### Then use it
```
let parsedResult = etcdParser(result);
```

### Full Example
```
var Etcd = require('node-etcd'),
    etcdParser = require('node-etcd-result-parser'),
    etcd = new Etcd('http://127.0.0.1:2379/');
    
etcd.get('/', (err, result) => {
    let parsedResult = etcdParser(result);
    
    console.log(parsedResult);
});
```
##### And it will return an object like
```
{
	"Services": {
		"ServiceCenter": {
			"ip": "127.0.0.1",
			"port": "9081"
		},
		"Services": {
			"Bots": {},
			"Cluster": {
				"f85cc4d2-265b-6b05-4d72-401bf7282267": {
					"IP": "127.0.0.1",
					"ServicePort": "9992"
				}
			},
			"3eb4dd18-9ff0-8bfa-b9d3-c407cdba9b2d": {}
		}
	},
	"node": {}
}
```

# Other Information
##### The resource is host on [GitHub - SakuraLove/node-etcd-result-parser](https://github.com/SakuraLove/node-etcd-result-parser)
##### VERY WELCOME to contribute this module by whatever opening an issue or pulling the code on GitHub