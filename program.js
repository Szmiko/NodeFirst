process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		if (instruction === '/exit') {
			process.stdout.write('Quitting app!\n');
			process.exit();
		} else {
			process.stderr.write('Wrong instruction!');		
		};
	};
	var info = input.toString().trim();
	switch (info) {
		case 'Info':
			console.log(process.env);
			break;
		default:
			console.log("Wrong instruction. We can't show you " + info + " about Node.js");
	};
});
