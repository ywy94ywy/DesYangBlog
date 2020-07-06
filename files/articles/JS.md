## 浏览器请求的发展与详解
### 早期资源获取方式
> 早期请求，比如提交表单会根据服务器返回刷新整个页面，资源浪费，并且用户体验较差

* URL
* html
    * <Link/> 
    * <script/>
    * <form>
* javascript
    * window.location.href
    * src

### XMLHttpRequest(ajax)
> 在不重新加载页面的情况下获取和发送数据，并局部刷新页面  
> 详细的属性、事件、方法参考[MDN_XMLHTTPRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)  

普通的请求编写方式：
```js
var xhr;
// 处理浏览器兼容
if(window.XMLHttpRequest){ // 非IE
    xhr = new XMLHttpRequest() ;
} else if (window.ActiveXObject){ // IE
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
}
if(xhr){
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            // 请求返回成功
        }else{
            // 请求返回失败
        }
    }; // 设置监听函数
    xhr.open(method, url, async); // 打开链接
    xhr.setRequestHeader('Content-Type', MIME) // 设置请求头
    xhr.send(data) // 发送请求
}
```

优点：
* 页面加载后请求接收数据，局部渲染页面  

缺点：
* 繁琐与兼容性

### JQuery.Ajax
> jquery对XHR的封装

```js
$.ajax({
  type: 'POST',
  url: url, 
  data: data,
  dataType: dataType,
  success: function () {},
  error: function () {}
})
```

优点：
* 兼容较好
* 支持jsonp

缺点：
* 多请求依赖形成回调地狱
* 依赖jquery

### Fetch
> 基于ES6 Promise的异步处理机制,实际应用需要做封装处理

```js
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

优点：
* 解决回调地狱
* promise链式调用

缺点：
* 没有拦截器
* 默认不带cookie
* 底层API，需要封装
* 兼容性
* ...

### Axios
> 封装原生XHR，同时依赖ES6 Promise

```js
axios.post（'/user', data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

优点：
* 支持promise
* 支持浏览器(xmlhttprequest)与node(http)场景
* 自动转换JSON
* 转换请求和响应数据
* 拦截器
* 取消请求
* 浏览器支持防御CSRF(跨站请求伪造)
* 解决回调地狱

