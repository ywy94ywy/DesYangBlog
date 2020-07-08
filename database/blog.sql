/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80020
 Source Host           : localhost:3306
 Source Schema         : blog

 Target Server Type    : MySQL
 Target Server Version : 80020
 File Encoding         : 65001

 Date: 08/07/2020 18:00:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `article_id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `text` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `create_time` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `update_time` datetime(0) NULL DEFAULT NULL,
  `original` tinyint(1) NULL DEFAULT NULL,
  `visits` int(0) NULL DEFAULT NULL,
  `classify_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `tags` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`article_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (22, '文章一', '## 浏览器请求的发展与详解\n### 早期资源获取方式\n> 早期请求，比如提交表单会根据服务器返回刷新整个页面，资源浪费，并且用户体验较差\n\n* URL\n* html\n    * <Link/> \n    * <script/>\n    * <form>\n* javascript\n    * window.location.href\n    * src\n\n### XMLHttpRequest(ajax)\n> 在不重新加载页面的情况下获取和发送数据，并局部刷新页面  \n> 详细的属性、事件、方法参考[MDN_XMLHTTPRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)  \n\n普通的请求编写方式：\n```js\nvar xhr;\n// 处理浏览器兼容\nif(window.XMLHttpRequest){ // 非IE\n    xhr = new XMLHttpRequest() ;\n} else if (window.ActiveXObject){ // IE\n    xhr = new ActiveXObject(\'Microsoft.XMLHTTP\');\n}\nif(xhr){\n    xhr.onreadystatechange = function(){\n        if(xhr.readyState === 4 && xhr.status === 200){\n            // 请求返回成功\n        }else{\n            // 请求返回失败\n        }\n    }; // 设置监听函数\n    xhr.open(method, url, async); // 打开链接\n    xhr.setRequestHeader(\'Content-Type\', MIME) // 设置请求头\n    xhr.send(data) // 发送请求\n}\n```\n\n优点：\n* 页面加载后请求接收数据，局部渲染页面  \n\n缺点：\n* 繁琐与兼容性\n\n### JQuery.Ajax\n> jquery对XHR的封装\n\n```js\n$.ajax({\n  type: \'POST\',\n  url: url, \n  data: data,\n  dataType: dataType,\n  success: function () {},\n  error: function () {}\n})\n```\n\n优点：\n* 兼容较好\n* 支持jsonp\n\n缺点：\n* 多请求依赖形成回调地狱\n* 依赖jquery\n\n### Fetch\n> 基于ES6 Promise的异步处理机制,实际应用需要做封装处理\n\n```js\nfetch(url)\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => console.log(error))\n```\n\n优点：\n* 解决回调地狱\n* promise链式调用\n\n缺点：\n* 没有拦截器\n* 默认不带cookie\n* 底层API，需要封装\n* 兼容性\n* ...\n\n### Axios\n> 封装原生XHR，同时依赖ES6 Promise\n\n```js\naxios.post（\'/user\', data)\n  .then(function (response) {\n    console.log(response);\n  })\n  .catch(function (error) {\n    console.log(error);\n  });\n```\n\n优点：\n* 支持promise\n* 支持浏览器(xmlhttprequest)与node(http)场景\n* 自动转换JSON\n* 转换请求和响应数据\n* 拦截器\n* 取消请求\n* 浏览器支持防御CSRF(跨站请求伪造)\n* 解决回调地狱\n\n', '2020-07-08 15:03:02', NULL, NULL, NULL, NULL, '[34,33]');
INSERT INTO `article` VALUES (23, '阿萨德安抚34', '## 浏览器请求的发展与详解\n### 早期资源获取方式\n> 早期请求，比如提交表单会根据服务器返回刷新整个页面，资源浪费，并且用户体验较差\n\n* URL\n* html\n    * <Link/> \n    * <script/>\n    * <form>\n* javascript\n    * window.location.href\n    * src\n\n### XMLHttpRequest(ajax)\n> 在不重新加载页面的情况下获取和发送数据，并局部刷新页面  \n> 详细的属性、事件、方法参考[MDN_XMLHTTPRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)  \n\n普通的请求编写方式：\n```js\nvar xhr;\n// 处理浏览器兼容\nif(window.XMLHttpRequest){ // 非IE\n    xhr = new XMLHttpRequest() ;\n} else if (window.ActiveXObject){ // IE\n    xhr = new ActiveXObject(\'Microsoft.XMLHTTP\');\n}\nif(xhr){\n    xhr.onreadystatechange = function(){\n        if(xhr.readyState === 4 && xhr.status === 200){\n            // 请求返回成功\n        }else{\n            // 请求返回失败\n        }\n    }; // 设置监听函数\n    xhr.open(method, url, async); // 打开链接\n    xhr.setRequestHeader(\'Content-Type\', MIME) // 设置请求头\n    xhr.send(data) // 发送请求\n}\n```\n\n优点：\n* 页面加载后请求接收数据，局部渲染页面  \n\n缺点：\n* 繁琐与兼容性\n\n### JQuery.Ajax\n> jquery对XHR的封装\n\n```js\n$.ajax({\n  type: \'POST\',\n  url: url, \n  data: data,\n  dataType: dataType,\n  success: function () {},\n  error: function () {}\n})\n```\n\n优点：\n* 兼容较好\n* 支持jsonp\n\n缺点：\n* 多请求依赖形成回调地狱\n* 依赖jquery\n\n### Fetch\n> 基于ES6 Promise的异步处理机制,实际应用需要做封装处理\n\n```js\nfetch(url)\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => console.log(error))\n```\n\n优点：\n* 解决回调地狱\n* promise链式调用\n\n缺点：\n* 没有拦截器\n* 默认不带cookie\n* 底层API，需要封装\n* 兼容性\n* ...\n\n### Axios\n> 封装原生XHR，同时依赖ES6 Promise\n\n```js\naxios.post（\'/user\', data)\n  .then(function (response) {\n    console.log(response);\n  })\n  .catch(function (error) {\n    console.log(error);\n  });\n```\n\n优点：\n* 支持promise\n* 支持浏览器(xmlhttprequest)与node(http)场景\n* 自动转换JSON\n* 转换请求和响应数据\n* 拦截器\n* 取消请求\n* 浏览器支持防御CSRF(跨站请求伪造)\n* 解决回调地狱\n\n', '2020-07-08 15:08:33', NULL, NULL, NULL, NULL, '[33,34,36]');

-- ----------------------------
-- Table structure for classify
-- ----------------------------
DROP TABLE IF EXISTS `classify`;
CREATE TABLE `classify`  (
  `classify_id` int(0) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `p_id` int(0) NOT NULL,
  `level` int(0) NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag`  (
  `tag_id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`tag_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tag
-- ----------------------------
INSERT INTO `tag` VALUES (33, 'javascript');
INSERT INTO `tag` VALUES (34, 'git');
INSERT INTO `tag` VALUES (36, 'node');
INSERT INTO `tag` VALUES (37, 'java');

SET FOREIGN_KEY_CHECKS = 1;
