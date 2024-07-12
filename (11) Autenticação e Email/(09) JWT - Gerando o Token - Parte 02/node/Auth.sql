CREATE DATABASE auths;

USE DATABASE auths;

CREATE TABLE users(
   id SERIAL,
   email VARCHAR UNIQUE NOT NULL,
   password VARCHAR NOT NULL
);

DROP TABLE users;
INSERT INTO users (email, password) VALUES ('test@test.com', '1234');

SELECT * FROM users;