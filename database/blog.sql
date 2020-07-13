/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80020
 Source Host           : localhost:3306
 Source Schema         : blog

 Target Server Type    : MySQL
 Target Server Version : 80020
 File Encoding         : 65001

 Date: 14/07/2020 00:34:09
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `text` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `create_time` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `update_time` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  `original` tinyint(1) NOT NULL DEFAULT 0,
  `visits` int(0) NOT NULL DEFAULT 0,
  `classify_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `tags` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (27, '测试1', '# sha.js\n[![NPM Package](https://img.shields.io/npm/v/sha.js.svg?style=flat-square)](https://www.npmjs.org/package/sha.js)\n[![Build Status](https://img.shields.io/travis/crypto-browserify/sha.js.svg?branch=master&style=flat-square)](https://travis-ci.org/crypto-browserify/sha.js)\n[![Dependency status](https://img.shields.io/david/crypto-browserify/sha.js.svg?style=flat-square)](https://david-dm.org/crypto-browserify/sha.js#info=dependencies)\n\n[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)\n\nNode style `SHA` on pure JavaScript.\n\n```js\nvar shajs = require(\'sha.js\')\n\nconsole.log(shajs(\'sha256\').update(\'42\').digest(\'hex\'))\n// => 73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049\nconsole.log(new shajs.sha256().update(\'42\').digest(\'hex\'))\n// => 73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049\n\nvar sha256stream = shajs(\'sha256\')\nsha256stream.end(\'42\')\nconsole.log(sha256stream.read().toString(\'hex\'))\n// => 73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049\n```\n\n## supported hashes\n`sha.js` currently implements:\n\n  - SHA (SHA-0) -- **legacy, do not use in new systems**\n  - SHA-1 -- **legacy, do not use in new systems**\n  - SHA-224\n  - SHA-256\n  - SHA-384\n  - SHA-512\n\n\n## Not an actual stream\nNote, this doesn\'t actually implement a stream, but wrapping this in a stream is trivial.\nIt does update incrementally, so you can hash things larger than RAM, as it uses a constant amount of memory (except when using base64 or utf8 encoding, see code comments).\n\n\n## Acknowledgements\nThis work is derived from Paul Johnston\'s [A JavaScript implementation of the Secure Hash Algorithm](http://pajhome.org.uk/crypt/md5/sha1.html).\n\n\n## LICENSE [MIT](LICENSE)\n', '2020-07-14 00:11:57', '2020-07-14 00:11:57', 0, 0, NULL, '[46]');

-- ----------------------------
-- Table structure for classify
-- ----------------------------
DROP TABLE IF EXISTS `classify`;
CREATE TABLE `classify`  (
  `id` int(0) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `p_id` int(0) NOT NULL,
  `level` int(0) NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for dictionary
-- ----------------------------
DROP TABLE IF EXISTS `dictionary`;
CREATE TABLE `dictionary`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `value` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `create_time` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `update_time` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dictionary
-- ----------------------------
INSERT INTO `dictionary` VALUES (8, 'tag', 'tag', '[   {     \"key\": \"article\",     \"value\": \"article\"   },   {     \"key\": \"css\",     \"value\": \"css\"   } ]', '2020-07-13 21:57:47', '2020-07-13 21:57:47');

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `create_time` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `update_time` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 44 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tag
-- ----------------------------
INSERT INTO `tag` VALUES (45, 'java', 'article', '2020-07-13 22:00:22', '2020-07-13 22:00:22');
INSERT INTO `tag` VALUES (46, 'javascript', 'article', '2020-07-13 22:00:26', '2020-07-13 22:00:26');
INSERT INTO `tag` VALUES (47, 'github', 'article', '2020-07-13 22:00:39', '2020-07-13 22:00:39');
INSERT INTO `tag` VALUES (50, 'nodejs', 'article', '2020-07-13 22:42:16', '2020-07-13 22:42:16');

SET FOREIGN_KEY_CHECKS = 1;
