DROP DATABASE reddit;
CREATE DATABASE reddit;
USE reddit;

CREATE TABLE `posts` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(255) NOT NULL,
	`url` VARCHAR(255) NOT NULL,
	`timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`score` INT(20) DEFAULT '0',
  `owner_name` VARCHAR(100) NOT NULL,
	KEY `id` (`id`) USING BTREE
);

INSERT INTO posts(title, url, owner_name) VALUES ('Hello World', 'http://helloworld.com', 'Feri');
INSERT INTO posts(title, url, owner_name) VALUES ('Cat world', 'http://cats.com', 'Marcsi');
INSERT INTO posts(title, url, owner_name) VALUES ('Table Tennis Daily', 'http://pingpong.hu', 'Feri');
INSERT INTO posts(title, url, owner_name) VALUES ('Green Fox Academy', 'http://zoldroka.hu', 'Pist');
INSERT INTO posts(title, url, owner_name) VALUES ('Something', 'http://something.hu', 'Pisti');

CREATE TABLE `users` (
	`user_id` INT NOT NULL AUTO_INCREMENT,
	`user_name` VARCHAR(255) NOT NULL,
	KEY `user_id` (`user_id`) USING BTREE
);

INSERT INTO users(user_name) VALUES ('Feri');
INSERT INTO users(user_name) VALUES ('Pisti');
INSERT INTO users(user_name) VALUES ('Marcsi');

CREATE TABLE `votes` (
	`post_id` INT NOT NULL,
	`user_name` CHAR(100) NOT NULL,
  `vote` INT
 );

 INSERT INTO votes(post_id, user_name, vote) VALUES (1,'Feri',1);
 INSERT INTO votes(post_id, user_name, vote) VALUES (2,'Feri',1);
 INSERT INTO votes(post_id, user_name, vote) VALUES (3,'Feri',1);
 INSERT INTO votes(post_id, user_name, vote) VALUES (5,'Pisti',-1);
 INSERT INTO votes(post_id, user_name, vote) VALUES (1,'Marcsi',1);
 INSERT INTO votes(post_id, user_name, vote) VALUES (2,'Marcsi',1);
 INSERT INTO votes(post_id, user_name, vote) VALUES (4,'Marcsi',1);




