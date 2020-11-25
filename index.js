#! node
console.log("first cli")
var create = require('./lib/create')
var program = require('commander'); // node.js 命令行界面的完整解决方案
program.version(require('./package.json').version,  '-v, --version')
program.option('-i, --integer <n>', 'An integer argument')
program
  .command('create <project> [otherArg...]')
  .action(function (project, otherArg) {
    create.initProject(project,otherArg)
  });

program.on('--help', function(){
  console.log('')
  console.log('Other:');
  console.log('  $ js-cli --help -h');
  console.log('  $ js-cli --version -v');
  console.log('  $ js-cli -i 1');
  console.log('  $ js-cli --interger 1');
  console.log('  $ js-cli create projectName Vue or React');
});
program.parse(process.argv);