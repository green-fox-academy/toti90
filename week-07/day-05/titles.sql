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

INSERT INTO posts(title, url, owner_name) VALUES ('Hello World', 'http://helloworld.com', 'pistike');
INSERT INTO posts(title, url, owner_name) VALUES ('Cat world', 'http://cats.com', 'pistike');
INSERT INTO posts(title, url, owner_name) VALUES ('Table Tennis Daily', 'http://pingpong.hu', 'pistike');
INSERT INTO posts(title, url, owner_name) VALUES ('Green Fox Academy', 'http://zoldroka.hu', 'pistike');

CREATE TABLE `users` (
	`user_id` INT NOT NULL AUTO_INCREMENT,
	`user_name` VARCHAR(255) NOT NULL,
	KEY `user_id` (`user_id`) USING BTREE
);

INSERT INTO users(user_name) VALUES ('Feri');
INSERT INTO users(user_name) VALUES ('Pisti');
INSERT INTO users(user_name) VALUES ('Marcsi');




