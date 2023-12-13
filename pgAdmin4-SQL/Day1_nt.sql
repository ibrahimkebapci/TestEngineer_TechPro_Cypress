/*
------
*/
--------------DAY 1 NT-------------
--1- Database oluşturma--DDL
CREATE DATABASE Deneme;

--SQL komutları küçük/büyük harf duyarlılığı
create database Deneme2;

--2- Database silme
DROP DATABASE Deneme;

--3- Tablo oluşturma
CREATE TABLE Students(
id CHAR(4),
name VARCHAR(20),
grade REAL,
register_date DATE
);

--4- Mevcut bir tablodan yeni bir tablo oluşturma

CREATE TABLE grades AS SELECT name, grade FROM students;

--5-tabloyu silme-DDL
DROP TABLE grades;

--6- Tabloya tüm fieldlarıyla data ekleme
INSERT INTO students VALUES('1001','Sherlock holmes',99.8,'2023-12-11');
INSERT INTO students VALUES('1002','Harry Potter',99,now());


--7- Data okuma/çekme
--a- tablodaki tüm kayıtları tüm fieldlarıyla okuma
SELECT * FROM students;

--b- tablodaki tüm kayıtları barı fieldlarıyla okuma
SELECT name, grade FROM students;

--8- tabloya bazı filedlarıyla data ekleme
INSERT INTO students(name,grade) VALUES('Jack Sparrow',99.7);

