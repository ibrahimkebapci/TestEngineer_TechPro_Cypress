------------DAY 5 DT/NT-------------

1.13 TE KALDIM

--26-UPDATE

CREATE TABLE calisanlar4 (
id INT UNIQUE, 
isim VARCHAR(50), 
sehir VARCHAR(50), 
maas INT, 
isyeri VARCHAR(20)
);

INSERT INTO calisanlar4 VALUES(123456789, 'Ali Seker', 'Istanbul', 2500, 'Vakko');
INSERT INTO calisanlar4 VALUES(234567890, 'Ayse Gul', 'Istanbul', 1500, 'LCWaikiki');
INSERT INTO calisanlar4 VALUES(345678901, null, 'Ankara', 3000, 'Vakko');
INSERT INTO calisanlar4 VALUES(456789012, 'Veli Yilmaz', 'Izmir', 1000, 'Pierre Cardin');
INSERT INTO calisanlar4 VALUES(567890123, 'Veli Yilmaz', 'Ankara', 7000, 'Adidas');
INSERT INTO calisanlar4 VALUES(678901234, 'Ayse Gul', 'Ankara', 1500, 'Pierre Cardin');
INSERT INTO calisanlar4 VALUES(789012345, 'Fatma Yasa', null, 2500, 'Vakko');
INSERT INTO calisanlar4 VALUES(890123456, null, 'Bursa', 2500, 'Vakko');
INSERT INTO calisanlar4 VALUES(901234567, 'Ali Han', null, 2500, 'Vakko');


-- id si 123456789 olan çalışanın işyeri ismini
--'Trendyol' olarak güncelleyiniz

UPDATE calisanlar4
SET isyeri='Trendyol'
WHERE id = 123456789;

-- id si 567890123 olan çalışanın  ismini 'Veli Yıldırım'
-- şehiri 'Bursa' olarak güncelleyiniz

UPDATE calisanlar4
SET isim='Veli Yıldırım',sehir='Bursa'
WHERE id = 56789123;


--Markalar tablosundaki marka_id değeri 102 ye eşit  veya büyük
--olanların id sini 2 ile çarp

UPDATE markalar
SET marka_id=marka_id*2
WHERE marka_id>=102;

--Markalar tablosundaki tüm markaların calisan_sayisi
--değerlerini marka_id ile toplayarak güncelleyiniz

UPDATE markalar
SET calisan_sayisi= marka_id+calisan_sayisi;

SELECT * FROM markalar

-- calisanlar4 tablosunda Ali Seker'in isyerini
--567890123 idli çalışan isyeri ismi ile güncelle

UPDATE markalar
SET isyeri = (SELECT isyeri FROM calisanlar WHERE id = 567890123)
WHERE isim ='Ali Seker'

-- calisanlar4 tablosunda maasi 1500 olanların isyerini,
--markalar tablosunda marka_id= 206 olan markanın ismi ile
--değiştiriniz

UPDATE calisanlar4
SET isyeri = (SELECT marka_isim FROM markalar WHERE marka_id = 103)
WHERE maas = 1500;

SELECT * FROM calisanlar4

--calisanlar4 tablosunda isyeri 'Vakko' olanların sehir bilgisinin
-- sonuna ' Şubesi' ekleyiniz.

UPDATE calisanlar4
SET sehir = CONCAT (sehir ||'Şubesi')
WHERE isyeri = 'Vakko'


--27-IS NULL condition  

--calisanlar4 tablosunda isim sütunu null olanlarıb isim değerini
--'MISSING..' listele

SELECT * FROM calisanlar4
WHERE isim IS NULL

--calisanlar4 tablosunda isim sütununda 
-- iş yeri null olanları

SELECT * FROM calisanlar4
WHERE isyeri IS NULL


--missing olarak güncelleme
UPDATE calisanlar4
SET isyeri='MISSING...'
WHERE isyeri IS NULL



--28-ORDER BY: kayıtları belirli fielda göre
--azalan/artan şekilde sırala

DROP TABLE person;

CREATE TABLE person
(
ssn char(9),
isim varchar(50),
soyisim varchar(50),  
adres varchar(50)
);

INSERT INTO person VALUES(123456789, 'Ali','Can', 'Istanbul');
INSERT INTO person VALUES(234567890, 'Veli','Cem', 'Ankara');  
INSERT INTO person VALUES(345678901, 'Mine','Bulut', 'Ankara');  
INSERT INTO person VALUES(256789012, 'Mahmut','Bulut', 'Istanbul'); 
INSERT INTO person VALUES (344678901, 'Mine','Yasa', 'Ankara');  
INSERT INTO person VALUES (345678901, 'Veli','Yilmaz', 'Istanbul');
INSERT INTO person VALUES(256789018, 'Samet','Bulut', 'Izmir'); 
INSERT INTO person VALUES(256789013, 'Veli','Cem', 'Bursa'); 
INSERT INTO person VALUES(256789010, 'Samet','Bulut', 'Ankara'); 

SELECT * FROM person;



--preson tablosundaki tüm kayıtları adrese göre(artan)
--sıralayarak listeleyiniz.
SELECT * FROM person
ORDER BY adres ASC

--preson tablosundaki tüm kayıtları soyisim göre(artan)
--sıralayarak listeleyiniz.
SELECT * FROM person
ORDER BY soyisim DESC --Descending(azalan)


--PERSON tablosundaki soyisimi bulut olanları 
--isime göre azalan sıralayarak listeleyiniz

SELECT * FROM person
WHERE soyisim='Bulut'
ORDER BY isim DESC

--ALTERNATİF

SELECT * FROM person
WHERE soyisim='Bulut'
ORDER BY 2 DESC;

--PERSON tablosundaki isimE göre azalan  
--soyada göre artan sıralayarak listeleyiniz

SELECT * FROM person
ORDER BY isim DESC, soyisim ASC



--İSİM VE SOYİSİM DEĞERLERİNİ, soyisim kelime uzunluklarına göre sıralayarak listeleyiniz

SELECT isim,soyisim,LENGTH(soyisim) AS karakter_sayisi
FROM person
ORDER BY karakter_sayisi

--tüm isim ve soyisim değerlerini aralarında bir boşluk ile 
--aynı sutunda çağrılarak her bir isim ve soyisim değerlerinin
--toplam uzunluğuna göre sıralayınız

SELECT CONCAT(isim,' ',soyisim) AS isim_soyisim
FROM person
ORDER BY LENGTH (isim)+LENGTH(soyisim)

SELECT CONCAT(isim,' ',soyisim) AS isim_soyisim,LENGTH (CONCAT(isim,soyisim)) karakter_sayisi
FROM person
ORDER BY LENGTH (CONCAT(isim,soyisim))




