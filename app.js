#!/usr/bin/env node

var args = forageForArguments();
var argNum = args.length;
console.log(argNum + " arguments");

// swot <name> <'add'/'rm'> <'str'/'weak'/'opp'/'thr'> <text>
if (argNum === 4) {
  if (boards.indexOf(args[0]) > -1 &&
     (args[1] === "add" || args[1] === "rm") &&
     (args[2] === "str" || args[2] === "weak" || args[2] === "opp" || args[2] === "thr")
  ) {
    modify(args);
  }

} else if (argNum === 2) {

  // swot new <name>
  if (args[0] === "new") {
    create(args[1]);

  // swot rm <name>
  } else if (args[0] === "rm" &&
             boards.indexOf(args[1]) > -1
  ) {
    remove(args[1]);

  // swot list [query]
  } else if (args[0] === "list") {
    list(args[1]);

  } else {
    // error
    console.log("first of two arguments can be 'new', 'rm', or 'list'");
  }
} else if (argNum === 1) {

  // swot <name>
  if (boards.indexOf(args[1]) > -1) {
    open(args[1]);

  // swot list
  } else if (args[1] === "list") {
    list();

  } else {
    // error
    console.log("a single argument can be 'list' or a board's name");
  }
} else {
  // error
  console.log("different number of arguments than expected (" + argNum + ")");
  console.log("args: ", args);
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



// swot new <name>
// swot <name>
// swot rm <name>
// swot list [query]
// swot <name> <'add'/'rm'> <'str'/'weak'/'opp'/'thr'> <text>
