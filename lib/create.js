const utils = require('./utils')
/**
 * 初始化项目
 * @param {*} projectName  新建项目的名称
 * @param {*} otherArg  其它参数
 */
const initProject =async (projectName, otherArg)=>{
    // 自动克隆模板
    let url = ""
    if(otherArg[0] === 'React'){
        url = "webpack4.0-react-redux.git"
        await utils.printWelcome('REACT CLI')
    }else if (otherArg[0] === 'Vue'){
        url = "webpack4.0-vue-vuex.git"
        await utils.printWelcome('VUE CLI')
    }else{
        console.log("Info: Please enter the template to install React or Vue")
        return
    }
    console.log(`新建项目:${projectName}`)
    await utils.cloneProject('direct:https://github.com/gaorenfei/' + url, projectName, { clone: true })

  
    // 3.自动安装依赖
  
    // 4.自动打开浏览器
  
    // 5.自动运行项目
     
  }
  module.exports = {
    initProject
  }