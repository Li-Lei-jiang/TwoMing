// 1 . 导入组件

import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Icon from './Icon';

// 2 . 定义install
const install = (Vue) => {
        // 把所有组件设为全局组件
        // Vue.component(Button.name, Button) 这样不效率 不优雅
        //优化 自动全部导入 require.context()
        //require.context('.',true,/\.vue/) 第一个是文件的路径，第二是是否遍历文件的子目录，第三个是匹配文件的正则表达式  
        const requireComponent = require.context('.', true, /\.vue/);
        // console.log(requireComponent.keys()); 打印出匹配到的文件以供检查，遍历拿到每个文件的Mod 模块
        requireComponent.keys().forEach(fileName => {
            const config = requireComponent(fileName);
            // console.log(config);
            Vue.component(config.default.name, config.default);
        });

    }
    //3 . 判断引入的方式  script vue是放在window下 ，还是模块下 这是为了处理兼容性
if (typeof window.vue !== 'undefined') {
    install(vue);


}
// 4. 导出
export default {
    install
}