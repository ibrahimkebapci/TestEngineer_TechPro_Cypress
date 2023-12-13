---------Day 2 NT--------
-------- Tekrar ---------
CREATE TABLE IF NOT EXISTS sairler(
	id INTEGER,
	name VARCHAR(30),
	email VARCHAR(50)
);

INSERT INTO sairler VALUES(1001,'Necip Fazıl','sair@mail.com');
INSERT INTO sairler VALUES(1001,'Necip Hikmet','sair@mail.com');

INSERT INTO sairler(name) VALUES('Atilla İlhan');

SELECT * FROM sairler;

-- 9 - tabloya UNIQUE cnstrainti ekleme
CREATE TABLE programmers(
id SERIAL,  --INİQUE OLMASI GARANTİ ETMEZ
name VARCHAR(30),
email VARCHAR(50) UNIQUE,
salart REAL,
prog_lang VARCHAR(20)
);

INSERT INTO programmers(name,email,salary,prog_lang) VALUES('Tom','mail@gmail2.com',5000,'Java');
INSERT INTO programmers(name,email,salary,prog_lang) VALUES('Jerry','mail@gmail3.com',6000,'JavaScript');

SELECT * FROM programmers;

INSERT INTO programmers(email,salary,prog_lang) VALUES('mail@gmail4.com',6000,'JavaScript');


--10-tabloya Not NULL constrainti ekleme
CREATE TABLE doctors(
id SERIAL,
name VARCHAR(30) NOT NULL,
salary REAL,
email VARCHAR(50) UNIQUE
);

INSERT INTO doctors(name,salary,email) VALUES('Dr. Gregory House',6000,'dr@mail.com');
INSERT INTO doctors(salary,email) VALUES(6000,'doctor@mail.com');

--name null olamazdı
INSERT INTO doctors(name,salary,email) VALUES('',6000,'dr@mail.com');

SELECT * FROM doctors;

1.25 te kaldım
