process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (!input) {
		return;
	};
	
	var instruction = input.toString().trim();
	switch (instruction) {
		case 'Info':
			console.log(process.env);
			break;
		case '/exit':
			process.stdout.write('Quitting app!\n');
			process.exit();
		default:
		console.log("Wrong instruction. We can't show you " + instruction + " about Node.js");
	};
});
