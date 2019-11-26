# AJAX知识点梳理

> 
当网页要向服务器请求数据时，浏览器会向服务器发起 HTTP 请求。JavaScript 作为一种脚本语言嵌入到网页中，来控制浏览器的行为。JavaScript 使用原生对象 `XMLHttpRequest` 向服务器发起 HTTP 请求，因此`AJAX` 成为了围绕这个功能进行开发的一整套做法的代名词。
AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。
虽然 `XMLHttpRequest` 由 `XML` `HTTP` `Request` 三个单词组成，但并不代表 AJAX 只可以使用 XML 数据格式和 HTTP 协议，其实 `AJAX` 可以使用各种数据格式 和 还支持 FTP等其他传输协议。

## 基本用法
```js
// 创建AJAX对象
var AJAX = new XMLHttpRequest();

// 发起请求，第三个参数表示是否异步请求，用同步的，浏览器会警告，说会有 “堵塞效应”
AJAX.open('GET', 'URL', true); 

// 开始发送
AJAX.send(null);
```

## 实例属性
> 
- `AJAX.UNSENT` === 0，实例已经生成，但是open()方法还没有被调用
- `AJAX.OPENED` === 1，send方法还没有被调用，仍然可以使用setRequestHeader()
- `AJAX.HEADERS_RECEIVED` === 2，send()方法已经执行，并且头信息和状态码已经收到
- `AJAX.LOADING` === 3，表示正在接收服务器传来的body部分的数据
- `AJAX.DONE` === 4，表示服务器数据已经完全接收，或者本次接收已经失败了
- `AJAX.readyState` 表示当前请求所处的状态，值的范围为 `0 - 4` 分别与上面5个常量相对应
- `AJAX.status`，服务器返回状态码，比如`200`，`404` 等
- `AJAX.timeout`，设置超时处理方式，数据类型为整数，表示毫秒，0表示没有时间限制
- `AJAX.response`，服务器返回的数据体（body部分）
- `AJAX.responseText`，返回从服务器接收到的字符串
- `AJAX.responseXML`，返回从服务器接收到的Document对象
- `AJAX.withCredentials`，表示跨域请求时，用户信息是否会包含在请求之中，默认 false
- `AJAX.statusText`，比方说是 'ok',即访问成功，对应 AJAX.status === 200
- `AJAX.responseType`，设置服务器返回数据类型，比如 `'' 字符串（默认值）` `'json' JSON对象` 

## 实例方法
```js
// 终止已经发出的HTTP请求
AJAX.abort();

// 返回服务器发来的所有HTTP头信息,格式为字符串,
// 如果没有受到服务器回应，该属性返回null
AJAX.getAllResponseHeaders();

// 返回HTTP头信息指定字段的值
// 如果还没有收到服务器回应或者指定字段不存在，则该属性为null
AJAX.getResponseHeader();

// 发送HTTP请求的参数
// 如果对使用过open()方法的请求，再次使用这个方法，等同于调用abort()
AJAX.open(
    string method,
    string url,
    optional boolean async,
    optional string user,
    optional string password
);

// 用于设置HTTP头信息。该方法必须在open()之后、send()之前调用
AJAX.setRequestHeader();

// 指定服务器返回数据的MIME类型。该方法必须在send()之前调用
AJAX.overrideMimeType();

// 实际发出HTTP请求，可以带参数
// 所有XMLHttpRequest的监听事件，都必须在send()方法调用之前设定
AJAX.send();
```


## 事件及事件监听
```js
AJAX.onloadstart = function () {
    // 当调用send方法时会被触发
    // 然后会触发AJAX.upload.onloadstart，代表开始上传数据
};
AJAX.onreadystatechange = function () {
  // readyStateChange事件,readyState属性的值发生改变时会被触发
  // 使用abort方法，onreadystatechange回调函数也会被调用。
  switch(AJAX.readyState) {
    case 0:
      console.log('XMLHttpRequest实例已经生成，但是open()方法还没有被调用');
      break;
    case 1:
      console.log('send方法还没有被调用，仍然可以使用setRequestHeader()');
      break;
    case 2:
      console.log('send方法已经执行，并且头信息和状态码已经收到');
      break;
    case 3:
      console.log('正在接收服务器传来的body部分的数据');
      break;
    case 4:
      console.log('表示服务器数据已经完全接收，或者本次接收已经失败了');
      break;
  }
};
AJAX.upload.onprogress = function () {
    // progress事件，上传文件时会不断返回上传的进度
    // 正在发送和加载数据
};
AJAX.onabort = function () {
    // abort事件表示请求被中断
    // 请求被中止
};
AJAX.onerror = function () {
    // error事件表示请求出错，
    // 请求失败
};
AJAX.onload = function () {
    // load事件表示服务器传来的数据接收完毕，
    // 请求成功完成
};
AJAX.onloadend = function () {
    // abort、load和error这三个事件，会伴随一个loadend事件，
    // 表示请求结束，不管成果或失败
};
AJAX.ontimeout = function () {
    // 用户指定的时限到期，请求还未完成
};
```