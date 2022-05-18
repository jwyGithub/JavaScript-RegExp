// 只能为中文
const reg = /^[\u4e00-\u9fa5]+$/g;

['测试', 'abc', 123, '1231', ''].forEach(item => {
    console.log(item, reg.test(item));
    reg.lastIndex = 0;
});

// 测试 true
// abc false
// 123 false
// 1231 false
//  false
