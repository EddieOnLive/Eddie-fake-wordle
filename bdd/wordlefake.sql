-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-10-2022 a las 23:16:11
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
(1, 'ARCOS')
(2, 'BARRA')
(3, 'CODOS')
(4, 'DOLOR')
(5, 'ESTAR')
(6, 'FUNGI')
(7, 'GUISO')
(8, 'HIPPO')
(9, 'ICONO')
(10, 'JODER')
(11, 'ATADO')
(12, 'LOADO')
(13, 'MANOS')
(14, 'NODOS')
(15, 'OTROS')
(16, 'POTRO')
(17, 'QUISO')
(18, 'RUIDO')
(19, 'SIMIO')
(20, 'TUMBA')
(21, 'UNICO')
(22, 'VAGAR')
(23, 'GASTA')
(24, 'VIRGO')
(25, 'URGAR')
(26, 'BRAVO')
(27, 'VARGO')
(28, 'DANZA')
(29, 'ARABE')
(30, 'BURRO')
(31, 'ELEVA')
(32, 'BOTAS')
(33, 'JUEGA')
(34, 'COMER')
(35, 'SUPER')
(36, 'TRAPO')
(37, 'LENTE')
(38, 'YERBA')
(39, 'TECLA')
(40, 'TERMO')
(41, 'BORDE')
(42, 'OSCAR')
(43, 'ESTOS')
(44, 'INGLE')
(45, 'BOINA')
(46, 'CARRO')
(47, 'QUESO')
(48, 'NEGRO')
(49, 'POSTE')
(50, 'SENTIR')
(51, 'MONTE')
(52, 'EXCEL')
(53, 'PESTE')
(54, 'SESOS')
(55, 'HOTEL')
(56, 'LOBOS')
(57, 'NOCHE')
(58, 'RETRO')
(59, 'NUBES')
(60, 'BIRRA')
(61, 'CORRE')
(62, 'PECHO')
(63, 'SOSOS')
(64, 'SOBRA')
(65, 'HONOR')
(66, 'PANSA')
(67, 'TANGO')
(68, 'MOSCA')
(69, 'AIRES')
(70, 'HIELO')
(71, 'JUEGO')
(72, 'USADO')
(73, 'SUAVE')
(74, 'VERDE')
(75, 'COGER')
(76, 'ESTAS')
(77, 'OSCOS')
(78, 'POBRE')
(79, 'VOLAR')
(79, 'REMOS')
(80, 'JUGAR')
(81, 'SALAR')
(82, 'GORDO')
(83, 'COMBO')
(84, 'ANTES')
(85, 'SURCA')
(86, 'OLIVO')
(87, 'HIJOS')
(88, 'PISTA')
(89, 'LOMAS')
(90, 'MOUSE')
(91, 'BOLSA')
(92, 'GATOS')
(93, 'MILLA')
(94, 'KANES')
(95, 'KILOS')
(96, 'ENTES')
(97, 'ISTIO')
(98, 'ENTRO')
(99, 'TESIS')
(100, 'PLANO')
(101, 'OSTRA')
(102, 'HITOS')
(103, 'REGLA')
(104, 'VIDAS')
(105, 'LUEGO')
(106, 'JARRA')
(107, 'MAMBO')
(108, 'QATAR')
(109, 'VALOR')
(110, 'TACOS')
(111, 'REMAR')
(112, 'JADEA')
(113, 'HACEN')
(114, 'SETAS')
(115, 'PANES')
(116, 'CASCO')
(117, 'CANOS')
(118, 'OGROS')
(119, 'MITOS')
(120, 'MOCOS')
(121, 'ORDEN')
(122, 'MUSAS')
(123, 'MOTAS')
(124, 'MANDA')
(125, 'TURCO')
(126, 'ALTAS')
(127, 'PERLA')
(128, 'MANGO')
(129, 'COCOA')
(130, 'CUELA')
(131, 'DARDO')
(132, 'CROMO')
(133, 'SALTO')
(134, 'APILA')
(135, 'ALTEO')
(136, 'AGRIO')
(137, 'AGUDA')
(138, 'CACAO')
(139, 'BETAS')
(140, 'CACEO')
(141, 'MAZOS')
(142, 'TORCO')
(143, 'TERCO')
(144, 'AEREO')
(145, 'CORTO')
(146, 'FARDO')
(147, 'NARDO')
(148, 'CARDO')
(149, 'TOSCO')
(150, 'MUERE')
(160, '')
(161, '')
(162, '')
(163, '')
(164, '')
(165, '')
(166, '')
(167, '')
(168, '')
(169, '')
(170, '')
(171, '')
(172, '')
(173, '')
(174, '')
(175, '')
(176, '')
(177, '')
(178, '')
(179, '')
(180, '')
(181, '')
(182, '')
(183, '')
(184, '')
(185, '')
(186, '')
(187, '')
(188, '')
(189, '')
(190, '')
(191, '')
(192, '')
(193, '')
(194, '')
(195, '')
(196, '')
(197, '')
(198, '')
(199, '')
(200, '')
(201, '')
(202, '')
(203, '')
(204, '')
(205, '')
(206, '')
(207, '')
(208, '')
(209, '')
(210, '')
(211, '')
(212, '')
(213, '')
(214, '')
(215, '')
(216, '')
(217, '')
(218, '')
(219, '')
(220, '')
(221, '')
(222, '')
(223, '')
(224, '')
(225, '')
(226, '')
(227, '')
(228, '')
(229, '')
(230, '')
(231, '')
(232, '')
(233, '')
(234, '')
(235, '')
(236, '')
(237, '')
(238, '')
(239, '')
(240, '')
(241, '')
(242, '')
(243, '')
(244, '')
(245, '')
(246, '')
(247, '')
(248, '')
(249, '')
(250, '')
(251, '')
(252, '')
(253, '')
(254, '')
(255, '')
(256, '')
(257, '')
(258, '')
(259, '')
(260, '')
(261, '')
(262, '')
(263, '')
(264, '')
(265, '')
(266, '')
(267, '')
(268, '')
(269, '')
(270, '')
(271, '')
(272, '')
(273, '')
(274, '')
(275, '')
(276, '')
(277, '')
(278, '')
(279, '')
(280, '')
(281, '')
(282, '')
(283, '')
(284, '')
(285, '')
(286, '')
(287, '')
(288, '')
(289, '')
(290, '')
(291, '')
(292, '')
(293, '')
(294, '')
(295, '')
(296, '')
(297, '')
(298, '')
(299, '')
(300, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `user` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `palabra` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `user`, `password`, `palabra`) VALUES
(1, 'admin', 'admin', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `palabras`
--
ALTER TABLE `palabras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `palabras`
--
ALTER TABLE `palabras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;