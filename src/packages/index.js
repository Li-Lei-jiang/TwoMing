// 1 . 导入组件

import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Icon from './Icon';

// 2 . 定义install
const install = (Vue) => {
        // 把所有组件设为全局组件
        Vue.component('em-button', Button)
    }
    // 3 . 导出
export default {
    install
}