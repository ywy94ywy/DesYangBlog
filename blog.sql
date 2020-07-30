CREATE TABLE `article` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`title` varchar(255) NOT NULL COMMENT '标题',
`body` text NOT NULL COMMENT '正文',
`original` tinyint NOT NULL COMMENT '是否原创',
`classify_id` int(11) NULL COMMENT '分类id',
`created_at` datetime NOT NULL COMMENT '创建时间',
`updated_at` datetime NOT NULL COMMENT '修改时间',
`click` int(11) NULL COMMENT '点击数',
`published` tinyint NULL COMMENT '是否发布',
PRIMARY KEY (`id`) 
);
CREATE TABLE `user` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`profile` varchar(255) NULL COMMENT '头像',
`nickname` varchar(255) NOT NULL COMMENT '昵称',
`signature` varchar(255) NULL COMMENT '签名',
`identity` varchar(255) NOT NULL COMMENT '身份',
`github` varchar(255) NULL COMMENT 'github',
`qq` varchar(255) NULL COMMENT 'qq',
`wechat` varchar(255) NULL COMMENT '微信',
`created_at` datetime NOT NULL COMMENT '创建时间',
`updated_at` datetime NOT NULL COMMENT '修改时间',
PRIMARY KEY (`id`) 
);
CREATE TABLE `tag` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`name` varchar(255) NOT NULL COMMENT '标签名称',
`created_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
`updated_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (`id`) 
);
CREATE TABLE `classify` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`name` varchar(255) NOT NULL COMMENT '分类名称',
`p_id` int(11) NOT NULL COMMENT '父ID',
`level` int(3) NOT NULL COMMENT '层级',
`created_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
`updated_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (`id`) 
);
CREATE TABLE `tag_relation` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`article_id` int(11) NOT NULL,
`tag_id` int(11) NOT NULL,
`created_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
`updated_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (`id`) 
);
