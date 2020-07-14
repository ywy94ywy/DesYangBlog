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

 Date: 14/07/2020 17:58:44
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
  `Published` tinyint(0) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (28, '测试', '## 防抖\n描述：在n秒内只执行一次，期间如果再次触发，将重新计时\n#### 立即执行\n```javascript\nconst debounce = (() => {\n  let time\n  return () => {\n    if (time) {\n      clearTimeout(time)\n    }\n    time = setTimeout(() => {\n      // do something\n    }, 1000)\n  }\n})()\n```\n#### 非立即执行\n```javascript\nconst debounce = (() => {\n  let time\n  return () => {\n    if (!time) {\n      // do something\n    } else {\n      clearTimeout(time)\n    }\n    time = setTimeout(() => {\n      time = null\n    }, 1000)\n  }\n})()\n```\n\n## 节流\n描述：在n秒内只执行一次\n#### 定时器\n```javascript\nconst throttle = (() => {\n  let time\n  return () => {\n    if (!time) {\n      // do something\n      time = setTimeout(() => {\n        time = null\n      }, 1000)\n    }\n  }\n})()\n```\n#### 时间戳\n```javascript\nconst throttle = (() => {\n  let time = 0\n  return () => {\n    let now = new Date()\n    if (now - time > 1000) {\n      // do something\n      time = now\n    }\n  }\n})()\n\n```', '2020-07-14 09:12:18', '2020-07-14 17:18:55', 0, 43, NULL, '[45,46,47]', 0);
INSERT INTO `article` VALUES (29, '标题标题！！！', '## 防抖\n描述：在n秒内只执行一次，期间如果再次触发，将重新计时\n#### 立即执行\n```javascript\nconst debounce = (() => {\n  let time\n  return () => {\n    if (time) {\n      clearTimeout(time)\n    }\n    time = setTimeout(() => {\n      // do something\n    }, 1000)\n  }\n})()\n```\n#### 非立即执行\n```javascript\nconst debounce = (() => {\n  let time\n  return () => {\n    if (!time) {\n      // do something\n    } else {\n      clearTimeout(time)\n    }\n    time = setTimeout(() => {\n      time = null\n    }, 1000)\n  }\n})()\n```\n\n## 节流\n描述：在n秒内只执行一次\n#### 定时器\n```javascript\nconst throttle = (() => {\n  let time\n  return () => {\n    if (!time) {\n      // do something\n      time = setTimeout(() => {\n        time = null\n      }, 1000)\n    }\n  }\n})()\n```\n#### 时间戳\n```javascript\nconst throttle = (() => {\n  let time = 0\n  return () => {\n    let now = new Date()\n    if (now - time > 1000) {\n      // do something\n      time = now\n    }\n  }\n})()\n\n```', '2020-07-14 10:36:52', '2020-07-14 10:46:59', 0, 0, NULL, '[46]', 1);
INSERT INTO `article` VALUES (30, '标题标题！！！', '## 防抖\n描述：在n秒内只执行一次，期间如果再次触发，将重新计时\n#### 立即执行\n```javascript\nconst debounce = (() => {\n  let time\n  return () => {\n    if (time) {\n      clearTimeout(time)\n    }\n    time = setTimeout(() => {\n      // do something\n    }, 1000)\n  }\n})()\n```\n#### 非立即执行\n```javascript\nconst debounce = (() => {\n  let time\n  return () => {\n    if (!time) {\n      // do something\n    } else {\n      clearTimeout(time)\n    }\n    time = setTimeout(() => {\n      time = null\n    }, 1000)\n  }\n})()\n```\n\n## 节流\n描述：在n秒内只执行一次\n#### 定时器\n```javascript\nconst throttle = (() => {\n  let time\n  return () => {\n    if (!time) {\n      // do something\n      time = setTimeout(() => {\n        time = null\n      }, 1000)\n    }\n  }\n})()\n```\n#### 时间戳\n```javascript\nconst throttle = (() => {\n  let time = 0\n  return () => {\n    let now = new Date()\n    if (now - time > 1000) {\n      // do something\n      time = now\n    }\n  }\n})()\n\n```', '2020-07-14 10:36:52', '2020-07-14 10:36:52', 0, 0, NULL, '[46]', 0);
INSERT INTO `article` VALUES (31, '标题标题！！！', '## 防抖\n描述：在n秒内只执行一次，期间如果再次触发，将重新计时\n#### 立即执行\n```javascript\nconst debounce = (() => {\n  let time\n  return () => {\n    if (time) {\n      clearTimeout(time)\n    }\n    time = setTimeout(() => {\n      // do something\n    }, 1000)\n  }\n})()\n```\n#### 非立即执行\n```javascript\nconst debounce = (() => {\n  let time\n  return () => {\n    if (!time) {\n      // do something\n    } else {\n      clearTimeout(time)\n    }\n    time = setTimeout(() => {\n      time = null\n    }, 1000)\n  }\n})()\n```\n\n## 节流\n描述：在n秒内只执行一次\n#### 定时器\n```javascript\nconst throttle = (() => {\n  let time\n  return () => {\n    if (!time) {\n      // do something\n      time = setTimeout(() => {\n        time = null\n      }, 1000)\n    }\n  }\n})()\n```\n#### 时间戳\n```javascript\nconst throttle = (() => {\n  let time = 0\n  return () => {\n    let now = new Date()\n    if (now - time > 1000) {\n      // do something\n      time = now\n    }\n  }\n})()\n\n```', '2020-07-14 10:36:53', '2020-07-14 10:36:53', 0, 0, NULL, '[46]', 0);
INSERT INTO `article` VALUES (32, '标题标题！！！', '## 防抖\n描述：在n秒内只执行一次，期间如果再次触发，将重新计时\n#### 立即执行\n```javascript\nconst debounce = (() => {\n  let time\n  return () => {\n    if (time) {\n      clearTimeout(time)\n    }\n    time = setTimeout(() => {\n      // do something\n    }, 1000)\n  }\n})()\n```\n#### 非立即执行\n```javascript\nconst debounce = (() => {\n  let time\n  return () => {\n    if (!time) {\n      // do something\n    } else {\n      clearTimeout(time)\n    }\n    time = setTimeout(() => {\n      time = null\n    }, 1000)\n  }\n})()\n```\n\n## 节流\n描述：在n秒内只执行一次\n#### 定时器\n```javascript\nconst throttle = (() => {\n  let time\n  return () => {\n    if (!time) {\n      // do something\n      time = setTimeout(() => {\n        time = null\n      }, 1000)\n    }\n  }\n})()\n```\n#### 时间戳\n```javascript\nconst throttle = (() => {\n  let time = 0\n  return () => {\n    let now = new Date()\n    if (now - time > 1000) {\n      // do something\n      time = now\n    }\n  }\n})()\n\n```', '2020-07-14 10:36:59', '2020-07-14 10:36:59', 0, 0, NULL, '[46]', 0);

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
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB AUTO_INCREMENT = 52 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tag
-- ----------------------------
INSERT INTO `tag` VALUES (45, 'java', 'article', '2020-07-13 22:00:22', '2020-07-13 22:00:22');
INSERT INTO `tag` VALUES (46, 'javascript', 'article', '2020-07-13 22:00:26', '2020-07-13 22:00:26');
INSERT INTO `tag` VALUES (47, 'github', 'article', '2020-07-13 22:00:39', '2020-07-13 22:00:39');
INSERT INTO `tag` VALUES (50, 'nodejs', 'article', '2020-07-13 22:42:16', '2020-07-13 22:42:16');

SET FOREIGN_KEY_CHECKS = 1;
