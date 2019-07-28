DROP DATABASE IF EXISTS `krusty_krab`;

CREATE DATABASE `krusty_krab`;

USE `krusty_krab`;

CREATE TABLE `ordered_burgers` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `burger_name` VARCHAR(60) NOT NULL DEFAULT("Jason"),
    `devoured` BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY(`id`)
)