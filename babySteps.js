var args = process.argv;
args = args.slice(2, process.argv.length);
var argLen = args.length;
var total = 0;
for (var i = 0; i < argLen; i++) {
	total += Number(args[i]);
}
console.log(total)
