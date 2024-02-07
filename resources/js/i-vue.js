// 定义一个名为IVue的类，用来模拟Vue的基本功能之一：数据代理
class IVue {
    // 构造函数接收一个选项对象（options），类似于在Vue中使用的对象
    constructor(options) {
        // options对象通常包含多个属性和配置，此处我们关注data属性
        // data属性是一个对象，包含我们想要处理的数据

        // 使用Object.keys方法获取data对象上所有的属性名（即键名）
        // 然后遍历这些属性名，为每个属性在IVue实例上设置代理
        Object.keys(options.data).forEach((propertyName) => {
            // 通过检查属性名，避免代理以_和$开头的属性，因为它们可能与Vue内部属性冲突
            if (!propertyName.startsWith("_") && !propertyName.startsWith("$")) {
                // 使用Object.defineProperty在IVue实例上定义属性
                // 这些属性具有特殊的getter和setter
                Object.defineProperty(this, propertyName, {
                    // getter函数在访问属性时被调用
                    // 数据代理
                    get() {
                        // 当在IVue实例上访问该属性时，实际上返回的是data对象中对应属性的值
                        return options.data[propertyName];
                    },
                    // setter函数在属性值被修改时调用
                    // 数据劫持
                    set(val) {
                        // 当在IVue实例上设置该属性的值时，实际上修改的是data对象中对应属性的值
                        // set方法的作用：
                        // 1. 修改内存中该对象的属性值
                        // 2. 重新渲染页面
                        options.data[propertyName] = val;
                    }
                });
            }
        });
        // // 获取所有的方法名
        // Object.keys(options.methods).forEach((methodName) => {
        //     // 给当前的Vue实例扩展一个方法
        //     this[methodName] = options.methods[methodName]
        // })
    }
}
