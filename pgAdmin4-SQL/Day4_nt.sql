---Day 4 NT---
--22-AGGREGATE Fork.

CREATE TABLE calisanlar3 (
id INT, 
isim VARCHAR(50), 
sehir VARCHAR(50), 
maas INT, 
isyeri VARCHAR(20)
);

INSERT INTO calisanlar3 VALUES(123456789, 'Ali Seker', 'Istanbul', 2500, 'Vakko');
INSERT INTO calisanlar3 VALUES(234567890, 'Ayse Gul', 'Istanbul', 1500, 'LCWaikiki');
INSERT INTO calisanlar3 VALUES(345678901, 'Veli Yilmaz', 'Ankara', 3000, 'Vakko');
INSERT INTO calisanlar3 VALUES(456789012, 'Veli Yilmaz', 'Izmir', 1000, 'Pierre Cardin');
INSERT INTO calisanlar3 VALUES(567890123, 'Veli Yilmaz', 'Ankara', 7000, 'Adidas');
INSERT INTO calisanlar3 VALUES(456789012, 'Ayse Gul', 'Ankara', 1500, 'Pierre Cardin');
INSERT INTO calisanlar3 VALUES(123456710, 'Fatma Yasa', 'Bursa', 2500, 'Vakko');

CREATE TABLE markalar
(
marka_id INT UNIQUE, 
marka_isim VARCHAR(20), 
calisan_sayisi INT
);

INSERT INTO markalar VALUES(100, 'Vakko', 12000);
INSERT INTO markalar VALUES(101, 'Pierre Cardin', 18000);
INSERT INTO markalar VALUES(102, 'Adidas', 10000);
INSERT INTO markalar VALUES(103, 'LCWaikiki', 21000);

SELECT * FROM markalar;
SELECT * FROM calisanlar3;


SELECT MAX(maas) FROM calisanlar3;

SELECT MIN(maas) FROM calisanlar3;

SELECT AVG(maas) FROM calisanlar3;

SELECT ROUND(AVG(maas),1) FROM calisanlar3;

SELECT SUM(maas) FROM calisanlar3;
--calisanlar3 tablosundaki kayıt sayısını görüntüleyelim
SELECT COUNT(*) FROM calisanlar3;

SELECT COUNT(*) FROM calisanlar3 WHERE maas=2500;


--23-ALIASES:


CREATE TABLE workers(
calisan_id CHAR(9),
calisan_isim VARCHAR(50),
calisan_dogdugu_sehir VARCHAR(50)
);

INSERT INTO workers VALUES(123456789, 'Ali Can', 'Istanbul'); 
INSERT INTO workers VALUES(234567890, 'Veli Cem', 'Ankara');  
INSERT INTO workers VALUES(345678901, 'Mine Bulut', 'Izmir');


SELECT * FROM workers;


SELECT * FROM workers;

SELECT calisan_id AS id FROM workers;

-- Altta ki bütün satırlar aynı işlevi yapıyor
SELECT calisan_isim AS isim FROM workers AS w;
SELECT calisan_isim  isim FROM workers w;


--24-SUBQUERY--NESTED QUERY
--24-a-SUBQUERY: WHERE ile kullanımı

--marka_id si 100 olan markada çalışanları listeleyiniz
SELECT marka_isim FROM markalar WHERE marka_id = 100;
SELECT * FROM calisanlar3 WHERE İSYERİ = 'Vakko';


SELECT * FROM calisanlar3 
WHERE isyeri = (SELECT marka_isim 
				FROM markalar WHERE marka_id = 100)
				


SELECT * FROM calisanlar3
WHERE maas = (SELECT MAX (maas) 
			  FROM calisanlar3) OR


SELECT * FROM calisanlar3
WHERE maas = (SELECT MAX (maas) FROM calisanlar3) OR maas = (SELECT MIN (maas) FROM calisanlar3))

--Ankara da 

SELECT marka_id, calisan_sayisi
FROM markalar
WHERE marka_isimIN IN ('Vakko','Pierre Cardin')

---

SELECT marka_id, calisan_sayisi
FROM markalar
WHERE marka_isimIN IN (SELECT isyeri FROM calisanlar3 
					  WHERE sehir = 'Ankara');
					 

--marka_id'si 101 den büyük marka çalışanlarinin tüm bilgilerini listeleyiniz

SELECT * FROM 
calisanlar3 WHERE isyeri
IN (SEKECT marka_isim FROM markalar WHERE marka_id>101);

-- Çalışan sayisi 15.000'den cok olan markalarin isimlerini ve
-- bu öarkada calisanlarin isimlerini ve maaşlarını listeleyiniz

SELECT isim,maas,isyeri
FROM calisanlar3
WHERE isyeri IN (SELECT marka_isim FROM markalar WHERE calisan_sayisi>15000)


--24-b-SUBQUERY: SELECT komutundan sonra kullanımı
-- Her markanin id'sini, ismini ve toplam kaç şehirde bulunduğunu listeleyen bir SORGU yaziniz.

SELECT marka_id,marka_isim,(SELECT COUNT(DISTINCT (sehir)) FROM calisanlar3 WHERE isyeri = marka_isim)
FROM markalar;
 
SELECT DISTINC(isteri) FROM calisanlar3; --DISTINC

-- Her markanin ismini, calisan sayisini ve markaya ait
-- calisanların maksimum maaşını ve minimum maaşını listeleyen bir sorgu yazınız

SELECT marka_isim,calisan_sayisi,(SELECT MAX(maas) FROM calisanlar WHERE isyeri = marka_isim) AS max_maas,
								 (SELECT MIN(maas) FROM calisanlar WHERE isyeri = marka_isim) AS min_maas
FROM markalar;



--25-EXISTS Cond.

CREATE TABLE mart
(     
urun_id INT,      
musteri_isim VARCHAR(50),
urun_isim VARCHAR(50)
);

INSERT INTO mart VALUES (10, 'Mark', 'Honda');
INSERT INTO mart VALUES (20, 'John', 'Toyota');
INSERT INTO mart VALUES (30, 'Amy', 'Ford');
INSERT INTO mart VALUES (20, 'Mark', 'Toyota');
INSERT INTO mart VALUES (10, 'Adam', 'Honda');
INSERT INTO mart VALUES (40, 'John', 'Hyundai');
INSERT INTO mart VALUES (20, 'Eddie', 'Toyota');

CREATE TABLE nisan 
(     
urun_id INT ,
musteri_isim VARCHAR(50),
urun_isim VARCHAR(50)
);

INSERT INTO nisan VALUES (10, 'Hasan', 'Honda');
INSERT INTO nisan VALUES (10, 'Kemal', 'Honda');
INSERT INTO nisan VALUES (20, 'Ayse', 'Toyota');
INSERT INTO nisan VALUES (50, 'Yasar', 'Volvo');
INSERT INTO nisan VALUES (20, 'Mine', 'Toyota');

select * from mart;
select * from nisan;

-- Mart ayında 'Toyota' satışı yapılmış ise Nisan ayındaki
--tüm ütünleri bilgilerini listeleyiniz

SELECT * FROM nisan
WHERE EXISTS(SELECT * FROM mart WHERE urun_isim='Toyota')


-- MART ayında 'Volvo' satışı yapılmış ise Nisan ayındaki tüm
-- ürünlerin bilgilerini listeleyiniz.

SELECT *
FROM nisan
WHERE EXISTS (SELECT * FROM mart WHERE urun_isim='Volvo')


SELECT urun_id, musteri_isim
FROM mart AS M
WHERE EXISTS(SELECT * FROM nisan AS n WHERE n.urun_isim=m.urun_isim)
