#!/usr/bin/env node

var args = forageForArguments();
var argNum = args.length;
console.log(argNum + " arguments");

if (argNum === 4) {

} else if (argNum === 3) {

} else if (argNum === 2) {

} else if (argNum === 1) {

} else {
  console.log("more arguments than expected (" + argNum + ")");
  console.log(args);
}



//.../././..///./..FUNCTIONS

function forageForArguments() {
  var args = [];
  for (var i = 2; i < process.argv.length; i++) {
    console.log('pushing ' + process.argv[i] + " to args");
    args.push(process.argv[i]);
  }

  return args;
}

