<details open>
    <summary>快速预览</summary>

-   [只能为数字](#1-只能为数字 '只能为数字')
-   [只能为英文小写](#2-只能为英文小写 '只能为英文小写')
-   [只能为英文大写](#3-只能为英文大写 '只能为英文大写')
-   [只能为英文,不区分大小写](#4-只能为英文不区分大小写 '只能为英文,不区分大小写')
-   [只能为数字，英文，不区分大小写](#5-只能为数字英文不区分大小写 '只能为数字，英文，不区分大小写')
-   [只能为中文](#6-只能为中文 '只能为中文')

</details>

#### 1. 只能为数字

```javascript
const reg = /\d+$/g;

[1, '2', 'a', '.', ',', ''].forEach(function (v) {
    console.log(v, reg.test(v));
    reg.lastIndex = 0;
});
// 1 true
// 2 false
// a false
// . false
// , false
//  false
```

#### 2. 只能为英文小写

```javascript
const reg = /^[a-z]+$/g;

['a', 'b', 'C', '123', ''].forEach(function (letter) {
    console.log(letter, reg.test(letter));
    reg.lastIndex = 0;
});

// a true
// b true
// C false
// 123 false
//  false
```

#### 3. 只能为英文大写

```javascript
const reg = /^[A-Z]+$/g;

['ABC', 'abc', '123', 'ABC123', 'abc123'].forEach(function (str) {
    console.log(str, reg.test(str));
    reg.lastIndex = 0;
});

// ABC true
// abc false
// 123 false
// ABC123 false
// abc123 false
```

#### 4. 只能为英文,不区分大小写

```javascript
const reg = /^[a-zA-Z]+$/gi;

['abc', 'ABC', 'asdasdasdAZ', ''].map(i => {
    console.log(i, reg.test(i));
    reg.lastIndex = 0;
});

// abc true
// ABC true
// asdasdasdAZ true
//  false
```

#### 5. 只能为数字，英文，不区分大小写

```javascript
const reg = /^[0-9a-zA-Z]+$/gi;

['', '123', '123abc', '123abcABC', '_', ','].map(i => {
    console.log(i, reg.test(i));
    reg.lastIndex = 0;
});

// false
// 123 true
// 123abc true
// 123abcABC true
// _ false
// , false
```

#### 6. 只能为中文

```javascript
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
```

