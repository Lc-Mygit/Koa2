# MySQL-Front 5.1  (Build 4.13)

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE */;
/*!40101 SET SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES */;
/*!40103 SET SQL_NOTES='ON' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;


# Host: localhost    Database: myblogs
# ------------------------------------------------------
# Server version 5.7.3-m13

CREATE DATABASE `myblogs` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `myblogs`;

#
# Source for table users
#

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user__ip` varchar(255) DEFAULT NULL COMMENT '用户的ip地址',
  `username` varchar(20) DEFAULT NULL COMMENT '用户名',
  `nickname` varchar(255) DEFAULT NULL COMMENT '昵称',
  `password` varchar(255) DEFAULT NULL COMMENT '用户密码',
  `email` varchar(50) DEFAULT NULL COMMENT '用户的邮箱',
  `avatar_img` varchar(255) DEFAULT NULL COMMENT '用户头像',
  `user_level` int(11) DEFAULT NULL COMMENT '用户等级',
  `permission` varchar(100) DEFAULT NULL COMMENT '用户的权限',
  `regtime` datetime DEFAULT NULL COMMENT '注册日期',
  `user_birthday` date DEFAULT NULL COMMENT '用户生日',
  `user__age` int(11) DEFAULT NULL COMMENT '用户年龄',
  `user_phone` varchar(30) DEFAULT NULL COMMENT '用户手机号',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户表';

#
# Dumping data for table users
#

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'192.168.1.5','wander','wander','lc19960623','274454439@qq.com',NULL,1,NULL,'2019-08-03','1996-06-23',23,'15676197605');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
