// 1. why element_plus
// 最开始考虑使用的UI库是vant,尝试做移动端项目,vant版本3.4.9打包时会出问题,替换成element_plus
// [DEP0148] DeprecationWarning: Use of deprecated folder mapping "./lib/" in the "exports" field module resolution of the package

// 问题解决方案：打包时在nuxt.config.ts transpile中将vant包排除，不进行二次打包即可 -- 感觉element_plus 丰富一点，暂时不换回去了hhh
