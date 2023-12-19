--------------DAY'6---------------------
--29-GROUP BY clause: tablomuzdaki kayıtları belirli bir veya daha fazla sütuna
-- göre guruplandırabiliriz

CREATE TABLE manav
(
isim varchar(50),
urun_adi varchar(50),
urun_miktar int
);

INSERT INTO manav VALUES( 'Ali', 'Elma', 5);
INSERT INTO manav VALUES( 'Ayse', 'Armut', 3);
INSERT INTO manav VALUES( 'Veli', 'Elma', 2);  
INSERT INTO manav VALUES( 'Hasan', 'Uzum', 4);  
INSERT INTO manav VALUES( 'Ali', 'Armut', 2);  
INSERT INTO manav VALUES( 'Ayse', 'Elma', 3);  
INSERT INTO manav VALUES( 'Veli', 'Uzum', 5);  
INSERT INTO manav VALUES( 'Ali', 'Armut', 2);  
INSERT INTO manav VALUES( 'Veli', 'Elma', 3);  
INSERT INTO manav VALUES( 'Ayse', 'Uzum', 2);


SELECT * FROM manav;

--Manav tablosundaki tüm isimleri ve her bir isim için toplam ürün miktarını görüntüleyiniz.

SELECT isim,urun_adi SUM(urun_miktar) toplam_kg
FROM manav
GROUP BY isim,urun_adi
ORDER BY isim

--NOT:GROUP BY ile gruplama yapıldığında SELECTden sonra
-- sadece gruplanan sütün ya da bir sütunun AGGREGATE fonk 
--ile kullanılabilir

SELECT isim, SUM(urun_miktar)
FROM manav
GROUP BY isim

---------------------------------------------------

--Ürün ismine göre her bir ürünü alan toplam kişi sayısı gösteriniz

SELECT urun_adi, COUNT( DISTINC isim) kisi_sayisi
FROM manav
GROUP BY urun_adi

--Isme göre alınan toplam ürün miktarı ve ürün çeşit miktarını bulunuz

SELECT isim, SUM(urun_miktar) toplam_kg, COUNT (DISTINCT urun_adi) cesit_sayisi
FROM manav
GROUP BY isim






--30-HAVING clause: GROUP BY komutundan sonra yapılan işlemle
-- ilgili bir koşul ile sonuçları filitrelemek için AGGREGATE 
-- fonk ile birlikte kullanılır.

DROP TABLE personel;

CREATE TABLE personel  (
id int,
isim varchar(50),
sehir varchar(50), 
maas int,  
sirket varchar(20)
);

INSERT INTO personel VALUES(123456789, 'Ali Yilmaz', 'Istanbul', 5500, 'Honda'); 
INSERT INTO personel VALUES(234567890, 'Veli Sahin', 'Istanbul', 4500, 'Toyota'); 
INSERT INTO personel VALUES(345678901, 'Mehmet Ozturk', 'Ankara', 3500, 'Honda');
INSERT INTO personel VALUES(456789012, 'Mehmet Ozturk', 'Izmir', 6000, 'Ford'); 
INSERT INTO personel VALUES(567890123, 'Mehmet Ozturk', 'Ankara', 7000, 'Tofas');
INSERT INTO personel VALUES(678901245, 'Veli Sahin', 'Ankara', 4500, 'Ford');  
INSERT INTO personel VALUES(123456710, 'Hatice Sahin', 'Bursa', 4500, 'Honda');

SELECT * FROM personel;


-- Her bir şirketin MIN maas bilgisini, bu bilgi eğer 4000 den fazla ise görüntüleyiniz
SELECT sirket, MIN (maas) min_maas
FROM personel
GROUP BY sirket
HAVING MIN(maas) > 4000

-- Maaşı 4000 den fazla olan çalışanların çalıştığı, her bir
-- şirketin MIN maas bilgisini görüntüleyiniz

SELECT sirket,MIN(maas) min_maas
FROM personel 
WHERE maas>4000
GROUP BY sirket

-- NOT : GROUP BY ile gruplamada sonra elde ettiğimiz hesaplama 
-- sonucuna göre koşul belirtmek için
--HAVING GROUP BY dan SONRA
-- TABLODAKİ MEVCUT OLAN KAYITLARI MEVCUT 

--Her bir ismin aldığı toplam gelir 10000 liradan fazla ise
--ismi ve toplam maasi göstren sorgu

SELECT isim, SUM(maas) toplam_gelir
FROM personel
GROUP BY isim 
HAVING SUM(maas)>10000;

--Eğer bir şehirde çalışan personel (id) sayısı 1'den çoksa
-- sehir ismini ve personel sayısını veren sorgu yazınız

SELECT sehir, COUNT(DISTINCT id) kisi_sayisi
FROM personel 
GROUP BY sehir
HAVING COUNT (DISTINCT id) >1;



--31-UNION: iki farklı sorgunun sonucunu birleştirerek tek bir 
-- sütunda/raporda görüntülemeyi sağlar.
-- tekrarlı olanları göstermez
--UNION ALL: UNION gibi kullanılır, tekrarlı olanları da gösterir


CREATE TABLE developers(
id SERIAL PRIMARY KEY,
name varchar(50),
email varchar(50) UNIQUE,
salary real,
prog_lang varchar(20),
city varchar(50),
age int	
);

INSERT INTO developers(name,email,salary,prog_lang,city,age) VALUES('Abdullah Berk','abdullah@mail.com',4000,'Java','Ankara',28);
INSERT INTO developers(name,email,salary,prog_lang,city,age) VALUES('Mehmet Cenk','mehmet@mail.com',5000,'JavaScript','Istanbul',35);
INSERT INTO developers(name,email,salary,prog_lang,city,age) VALUES('Ayşenur Han ','aysenur@mail.com',5000,'Java','Izmir',38);
INSERT INTO developers(name,email,salary,prog_lang,city,age) VALUES('Kübra Han','kubra@mail.com',4000,'JavaScript','Istanbul',32);
INSERT INTO developers(name,email,salary,prog_lang,city,age) VALUES('Muhammed Demir','muhammed@mail.com',6000,'Java','Izmir',25);
INSERT INTO developers(name,email,salary,prog_lang,city,age) VALUES('Fevzi Kaya','fevzi@mail.com',6000,'Html','Istanbul',28);
INSERT INTO developers(name,email,salary,prog_lang,city,age) VALUES('Enes Can','enes@mail.com',5500,'Css','Ankara',28);
INSERT INTO developers(name,email,salary,prog_lang,city,age) VALUES('Tansu Han','tansu@mail.com',5000,'Java','Bursa',32);
INSERT INTO developers(name,email,salary,prog_lang,city,age) VALUES('Said Ran','said@mail.com',4500,'Html','Izmir',33);
INSERT INTO developers(name,email,salary,prog_lang,city,age) VALUES('Mustafa Pak','mustafa@mail.com',4500,'Css','Bursa',32);
INSERT INTO developers(name,email,salary,prog_lang,city,age) VALUES('Hakan Tek','hakan@mail.com',7000,'C++','Konya',38);
INSERT INTO developers(name,email,salary,prog_lang,city,age) VALUES('Deniz Çetin','deniz@mail.com',4000,'C#','Istanbul',30);
INSERT INTO developers(name,email,salary,prog_lang,city,age) VALUES('Betül Çetin','btl@mail.com',4000,'C#','Bursa',29);
INSERT INTO developers(name,email,salary,prog_lang,city,age) VALUES('Ayse Gul','ayse@mail.com',4000,'C#','Ankara',29);
INSERT INTO developers(name,email,salary,prog_lang,city,age) VALUES('Ali Seker','ali@mail.com',4000,'C#','Ankara',29);


CREATE TABLE contact_info(
address_id int,
street varchar(30),
number int,	
city varchar(30),
FOREIGN KEY(address_id) REFERENCES developers(id)	
);

INSERT INTO contact_info VALUES(1,'Kaya Sok.',5,'Bursa');
INSERT INTO contact_info VALUES(2,'Kaya Sok.',3,'Ankara');
INSERT INTO contact_info VALUES(3,'Can Sok.',10,'Bursa');
INSERT INTO contact_info VALUES(4,'Gül Sok.',12,'Ankara');
INSERT INTO contact_info VALUES(5,'Can Sok.',4,'Afyon');
INSERT INTO contact_info VALUES(6,'Taş Sok.',6,'Bolu');
INSERT INTO contact_info VALUES(7,'Dev Sok.',6,'Sivas');
INSERT INTO contact_info VALUES(8,'Dev Sok.',8,'Van');

--Ankarada yaşayan developer ve istanbulda yaşayan
--çalışanların isimlerini
--birlikte tekrarsız gösteren sorguyu yaziniz

SELECT name FROM developers WHERE city = 'Ankara'
UNION ALL
SELECT isim FROM calisanlar4 WHERE sehir ='Istanbul'


--Yaşı 25'den büyük olan developer isimlerini ve
-- yaşı 30'dan küçük developerların kullandığı prog dillerini
-- birlikte tekrarlı gösteren sorguyu yaziniz

SELECT name AS name_prog_lang FROM developers WHERE age>25
UNION ALL
SELECT prog_lang FROM calisanlar4 WHERE age<30




SELECT * FROM developers;
SELECT * FROM contact_info;
SELECT * FROM calisanlar4;






--32-INTERSECT:iki farklı sorgunun sonuçlarından ortak olanları(kesişimi)
--tekrarsız olarak gösterir.

--deveopers tablosundaki java kullannaların
--calisanlar 4 tablosunda maaşı 100 den fazla  olanlar
--aynı olanını tekrarsız olarak listeleyiniz

SELECT city FROM developers WHERE prog_lang='java'
INTERSECT
SELECT sehir FROM calisanlar4 WHERE maas>1000

--33-EXCEPT:bir sorgunun sonuçlarından diğer bir sorgunun sonuçlarından 
--farklı olanları gösterir.

SELECT sehir FROM calisanlar4
EXCEPT
SELECT city FROM developers

