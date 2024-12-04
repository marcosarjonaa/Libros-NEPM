CREATE DATABASE  `libreria`;

USE `libreria`;

DROP TABLE IF EXISTS libros;
DROP TABLE IF EXISTS autores;
DROP TABLE IF EXISTS venta;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS ventas_libro;

-- para los logins 
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL, 
  `enabled` BOOL,
  tipo ENUM('CLIENTE' , 'ADMIN') 
);
INSERT INTO `users` (`id`, `username`, `password`, `enabled`, `tipo`) VALUES
(1,	'marda',	'$2a$10$.1Op/U.7n9PoNLlcf1vN3O08N690kP/TBO5Pmj.P9k7IBmirB//cS',	1,	2);

CREATE TABLE libros (
	id INT AUTO_INCREMENT PRIMARY KEY, 
	titulo VARCHAR(25) NOT NULL, 
	fPublicacion DATE NOT NULL, 
	precio DECIMAL(10, 2) NOT NULL
);

CREATE TABLE autores (
	id INT AUTO_INCREMENT PRIMARY KEY, 
	nombre VARCHAR(25) NOT NULL , 
	paisOrigen VARCHAR(50) NOT NULL );

    	
CREATE TABLE clientes (
	id INT AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL,
	correo VARCHAR(100) NOT NULL
);


CREATE TABLE venta (
	id INT AUTO_INCREMENT PRIMARY KEY,
	fecha DATE NOT NULL,
	total DECIMAL(10, 2) NOT NULL
);


-- para que los acentos salgan bien
SET NAMES utf8mb4;

/**
INSERTS DE LA TABLA AUTORES
*/
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('Ana', 'USA');
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('Sofía', 'Spain');
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('María', 'Spain');
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('Luis', 'Spain');
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('José', 'USA');
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('Carlos', 'USA');
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('Sofía', 'Spain');
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('María', 'México');
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('José', 'México');
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('Sofía', 'USA');

/**
INSERTS DE LA TABLA LIBROS
*/

INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro1', '2012-12-08', '35.65');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro2', '2006-01-02', '97.37');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro3', '2020-11-18', '87.73');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro4', '2007-09-24', '22.37');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro5', '1997-09-27', '68.97');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro6', '2005-05-24', '96.48');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro7', '2014-05-21', '83.46');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro8', '2021-06-12', '47.42');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro9', '1998-01-07', '60.28');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro10', '2014-02-11', '10.53');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro11', '2001-01-19', '76.03');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro12', '1993-07-01', '22.45');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro13', '2020-02-27', '23.91');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro14', '1990-03-11', '51.75');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro15', '2011-04-28', '18.96');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro16', '1990-11-15', '31.3');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro17', '2007-09-24', '12.16');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro18', '2012-10-09', '25.92');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro19', '2002-09-29', '20.67');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro20', '2001-04-19', '66.88');

/*
INSERTS TABLA CLIENTES
*/

INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('Sofia', 'cliente1@correo.com');
INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('Lucía', 'cliente2@correo.com');
INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('José', 'cliente3@correo.com');
INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('María', 'cliente4@correo.com');
INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('John', 'cliente5@correo.com');
INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('José', 'cliente6@correo.com');
INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('Sofia', 'cliente7@correo.com');
INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('María', 'cliente8@correo.com');
INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('Sofia', 'cliente9@correo.com');
INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('Carlos', 'cliente10@correo.com');

/**
INSERTS TABLA VENTAS
*/

INSERT INTO `venta` (`fecha`, `total`) VALUES ('2017-02-23', '45.72');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2012-03-10', '125.68');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2015-12-29', '118.80');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2022-01-01', '180.21');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2009-08-25', '261.00');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2018-06-23', '279.77');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2019-09-14', '66.72');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2007-06-29', '244.26');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2011-06-19', '161.50');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2002-03-26', '117.89');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('1991-01-15', '219.33');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2014-07-30', '155.37');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2008-11-26', '70.56');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2003-07-29', '109.30');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('1991-05-27', '257.80');
