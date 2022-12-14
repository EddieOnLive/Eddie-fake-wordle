-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-12-2022 a las 21:55:40
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `wordlefake`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `palabras`
--

CREATE TABLE `palabras` (
  `id` int(11) NOT NULL,
  `palabra` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `palabras`
--

INSERT INTO `palabras` (`id`, `palabra`) VALUES
(1, 'ARCOS'),
(2, 'BARRA'),
(3, 'CODOS'),
(4, 'DOLOR'),
(5, 'ESTAR'),
(6, 'FUNGI'),
(7, 'GUISO'),
(8, 'HIPPO'),
(9, 'ICONO'),
(10, 'JODER'),
(11, 'ATADO'),
(12, 'LOADO'),
(13, 'MANOS'),
(14, 'NODOS'),
(15, 'OTROS'),
(16, 'POTRO'),
(17, 'QUISO'),
(18, 'RUIDO'),
(19, 'SIMIO'),
(20, 'TUMBA'),
(21, 'UNICO'),
(22, 'VAGAR'),
(23, 'GASTA'),
(24, 'VIRGO'),
(25, 'URGAR'),
(26, 'BRAVO'),
(27, 'VARGO'),
(28, 'DANZA'),
(29, 'ARABE'),
(30, 'BURRO'),
(31, 'ELEVA'),
(32, 'BOTAS'),
(33, 'JUEGA'),
(34, 'COMER'),
(35, 'SUPER'),
(36, 'TRAPO'),
(37, 'LENTE'),
(38, 'YERBA'),
(39, 'TECLA'),
(40, 'TERMO'),
(41, 'BORDE'),
(42, 'OSCAR'),
(43, 'ESTOS'),
(44, 'INGLE'),
(45, 'BOINA'),
(46, 'CARRO'),
(47, 'QUESO'),
(48, 'NEGRO'),
(49, 'POSTE'),
(50, 'SUBIR'),
(51, 'MONTE'),
(52, 'EXCEL'),
(53, 'PESTE'),
(54, 'SESOS'),
(55, 'HOTEL'),
(56, 'LOBOS'),
(57, 'NOCHE'),
(58, 'RETRO'),
(59, 'NUBES'),
(60, 'BIRRA'),
(61, 'CORRE'),
(62, 'PECHO'),
(63, 'SOSOS'),
(64, 'SOBRA'),
(65, 'HONOR'),
(66, 'PANSA'),
(67, 'TANGO'),
(68, 'MOSCA'),
(69, 'AIRES'),
(70, 'HIELO'),
(71, 'JUEGO'),
(72, 'USADO'),
(73, 'SUAVE'),
(74, 'VERDE'),
(75, 'COGER'),
(76, 'ESTAS'),
(77, 'OSCOS'),
(78, 'POBRE'),
(79, 'VOLAR'),
(80, 'JUGAR'),
(81, 'SALAR'),
(82, 'GORDO'),
(83, 'COMBO'),
(84, 'ANTES'),
(85, 'SURCA'),
(86, 'OLIVO'),
(87, 'HIJOS'),
(88, 'PISTA'),
(89, 'LOMAS'),
(90, 'MOUSE'),
(91, 'BOLSA'),
(92, 'GATOS'),
(93, 'MILLA'),
(94, 'KANES'),
(95, 'KILOS'),
(96, 'ENTES'),
(97, 'ISTIO'),
(98, 'ENTRO'),
(99, 'TESIS'),
(100, 'PLANO'),
(101, 'OSTRA'),
(102, 'HITOS'),
(103, 'REGLA'),
(104, 'VIDAS'),
(105, 'LUEGO'),
(106, 'JARRA'),
(107, 'MAMBO'),
(108, 'QATAR'),
(109, 'VALOR'),
(110, 'TACOS'),
(111, 'REMAR'),
(112, 'JADEA'),
(113, 'HACEN'),
(114, 'SETAS'),
(115, 'PANES'),
(116, 'CASCO'),
(117, 'CANOS'),
(118, 'OGROS'),
(119, 'MITOS'),
(120, 'MOCOS'),
(121, 'ORDEN'),
(122, 'MUSAS'),
(123, 'MOTAS'),
(124, 'MANDA'),
(125, 'TURCO'),
(126, 'ALTAS'),
(127, 'PERLA'),
(128, 'MANGO'),
(129, 'COCOA'),
(130, 'CUELA'),
(131, 'DARDO'),
(132, 'CROMO'),
(133, 'SALTO'),
(134, 'APILA'),
(135, 'ALTEO'),
(136, 'AGRIO'),
(137, 'AGUDA'),
(138, 'CACAO'),
(139, 'BETAS'),
(140, 'CACEO'),
(141, 'MAZOS'),
(142, 'TORCO'),
(143, 'TERCO'),
(144, 'AEREO'),
(145, 'CORTO'),
(146, 'FARDO'),
(147, 'NARDO'),
(148, 'CARDO'),
(149, 'TOSCO'),
(150, 'MUERE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sugerencias`
--

CREATE TABLE `sugerencias` (
  `id` int(11) NOT NULL,
  `content` varchar(5) NOT NULL,
  `aidiuser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sugerencias`
--

INSERT INTO `sugerencias` (`id`, `content`, `aidiuser`) VALUES
(1, 'SALSA', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `user` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `palabra` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `user`, `password`, `palabra`) VALUES
(1, 'admin', 'admin', 10),
(2, 'Imanol', 'Imanol', 1),
(3, 'Eddie', '1234', 2),
(4, 'Rata', '1234', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `palabras`
--
ALTER TABLE `palabras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sugerencias`
--
ALTER TABLE `sugerencias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `palabras`
--
ALTER TABLE `palabras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- AUTO_INCREMENT de la tabla `sugerencias`
--
ALTER TABLE `sugerencias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
