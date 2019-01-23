/*
Navicat MySQL Data Transfer

Source Server         : W1807
Source Server Version : 50051
Source Host           : 127.0.0.1:3306
Source Database       : w1807_4

Target Server Type    : MYSQL
Target Server Version : 50051
File Encoding         : 65001

Date: 2019-01-17 10:37:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `w_username` varchar(30) default NULL,
  `w_password` varchar(30) default NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('张三', '123456');
INSERT INTO `users` VALUES ('test', '123456');
INSERT INTO `users` VALUES ('w1804_1', 'test');
INSERT INTO `users` VALUES ('w1804_2', 'test666');
INSERT INTO `users` VALUES ('hello', '123456');
INSERT INTO `users` VALUES ('wangwu', '1234556');
INSERT INTO `users` VALUES ('twt1', '131313');
