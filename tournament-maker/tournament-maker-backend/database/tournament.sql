Drop database IF EXISTS tournaments_db;
CREATE DATABASE tournaments_db;
USE tournaments_db;

CREATE TABLE tournaments(
    id INTEGER(21) AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
)

CREATE TABLE competitors(
    id INTEGER(21) AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
)

CREATE TABLE matches(
    id INTEGER(21) AUTO_INCREMENT NOT NULL,
    competitor1 VARCHAR(100) NOT NULL,
    competitor2 VARCHAR(100),
    PRIMARY KEY(id)
)


INSERT INTO tournaments (title)
VALUES ("Sample");

INSERT INTO competitors(name)
VALUES ("Frank"), ("Strawberry"), ("Sneaky"), ("Reinheart"), ("Yoda"), ("Scorpion");