//此文件为generator的核心入口
//需要导出一个继承自yeoman-generator的类型
//yeoman generator在工作时会自动调用不同生命周期的方法
//我们在这些方法中可以通过调用父类提供的一些方法实现一些功能


const Generator = require('yeoman-generator');

module.exports = class extends Generator {
   
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name:'name',
                message:'Your project name',
                default:this.appname
            },
            {
                type: 'input',
                name:'version',
                message:'Your project version',
                default:'1.0.0'
            }


        ]).then(answers=>{
            this.answers=answers
        })
    }
    writing(){
        const templates=['src/index.js','package.json'];
        templates.forEach(item=>{
            this.fs.copyTpl(this.templatePath(item),this.destinationPath(item),this.answers)
        })


    }
}