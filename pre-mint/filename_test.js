const fs = require('fs');
const { traits } = require('./consts');

traits.forEach(trait => {
	trait.data.forEach(fe => {
		const res = fs.existsSync('../images/'+trait.type+'/'+fe.name+'.png');
		if (res === false) {
			console.log(trait.type + '/' + fe.name);
		}
	})
})