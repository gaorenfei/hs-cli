// Node8 就提供了 util.promisify() 这个方法，方便我们快捷的把原来的异步回调方法改成返回 Promise 实例的方法
const { promisify } = require('util')
// figlet 工具可以将 message 转化为空心的字体
const figlet = promisify(require('figlet'))
// clear 清空终端的屏幕
const clear = require('clear')
// chalk是一个颜色的插件，可以修改终端字体颜色
const chalk = require('chalk')

// 输出绿色字体
const log = (str)=>{
  console.log(chalk.green(str))
}
// 打印欢迎界面
const printWelcome = async (str)=>{
  clear()
  const welcome = await figlet(str)
  log(welcome)
}
// 2.克隆模板项目(Download a git `repository` to a `destination` folder  with `options`  )
const cloneProject = async (repository, destination, options)=>{
  // download-git-repo 用来 clone Github GitLab仓库项目的node库
  const download = promisify(require('download-git-repo'))
  // 进度条
  const ora = require('ora') // 一个优雅的 Node.js 终端加载动画效果
  const process = ora(`git clone ${repository} .....`)
  process.start()
  // clone
  await download(repository, destination, options ? options : { clone: false })
  // 关闭进度条
  process.succeed()
}

module.exports = {
  printWelcome,
  cloneProject,
  log
}