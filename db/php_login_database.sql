-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-07-2020 a las 18:35:40
-- Versión del servidor: 10.1.30-MariaDB
-- Versión de PHP: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `php_login_database`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `elementos`
--

CREATE TABLE `elementos` (
  `id_ele` int(100) NOT NULL,
  `cantidad` int(100) NOT NULL,
  `detalles` varchar(200) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `elementos`
--

INSERT INTO `elementos` (`id_ele`, `cantidad`, `detalles`) VALUES
(1, 25, 'computadores de mesa'),
(2, 20, 'Microscopios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario`
--

CREATE TABLE `horario` (
  `id_horario` int(100) NOT NULL,
  `id_lab` int(100) NOT NULL,
  `tipo_lab` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `facultad` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `estado` varchar(50) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `horario`
--

INSERT INTO `horario` (`id_horario`, `id_lab`, `tipo_lab`, `fecha`, `hora`, `facultad`, `estado`) VALUES
(4, 340, 'Laboratorio de Quimica', '2019-05-19', '15:00:00', 'Educacion', 'libre'),
(5, 121, 'Laboratorio de Microbiologia', '2019-05-19', '09:00:00', 'Educacion', 'reservado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `laboratorios`
--

CREATE TABLE `laboratorios` (
  `id_lab` int(100) NOT NULL,
  `id_ele` int(100) NOT NULL,
  `tipo_lab` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `cupos` int(100) NOT NULL,
  `estado` varchar(100) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `laboratorios`
--

INSERT INTO `laboratorios` (`id_lab`, `id_ele`, `tipo_lab`, `cupos`, `estado`) VALUES
(121, 2, 'Laboratorio de Microbiologia', 20, 'eficiente'),
(340, 1, 'Laboratorio de Quimica', 25, 'eficiente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id_reservas` int(100) NOT NULL,
  `id_usu` int(100) NOT NULL,
  `id_horario` int(100) NOT NULL,
  `id_lab` int(100) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id_reservas`, `id_usu`, `id_horario`, `id_lab`, `fecha`, `hora`) VALUES
(1, 1, 5, 121, '2019-05-19', '09:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `rol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `rol`) VALUES
(1, 'administrador'),
(2, 'Usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_usu` int(100) NOT NULL,
  `email` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `password` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `rol_id` int(100) NOT NULL,
  `apellido` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_usu`, `email`, `password`, `rol_id`, `apellido`, `nombre`) VALUES
(1, 'miguelangelbarrios1612@gmail.com', '$2y$10$78Dha/3/0tzrcecpmhnkn.BdlTiliYp4kjjc8Cb7Y86g0JlK.j6QW', 1, '', ''),
(3, 'u20161149256@usco.edu.co', '$2y$10$81SggxBCVfOj6.X3tvfeIernihKcBzHgZULiVaFsI0xqH6MkBg.Yq', 1, '', ''),
(4, 'ricardo@gmail.com\r\n', '$2y$10$8EewMwsK1OGwPmrJywiLGuIiD.Rup1vyhju21jhpSUnYYODza4k8q', 2, '', ''),
(13, 'riccardo@gmail.com', '$2y$10$gYM7gb3ZqAEAwYop1QiOpeqiHEmTwZDGgkEzzXOsXgA028yimXrsO', 2, '', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `elementos`
--
ALTER TABLE `elementos`
  ADD PRIMARY KEY (`id_ele`);

--
-- Indices de la tabla `horario`
--
ALTER TABLE `horario`
  ADD PRIMARY KEY (`id_horario`,`id_lab`),
  ADD KEY `id_lab` (`id_lab`);

--
-- Indices de la tabla `laboratorios`
--
ALTER TABLE `laboratorios`
  ADD PRIMARY KEY (`id_lab`,`id_ele`),
  ADD KEY `id_ele` (`id_ele`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id_reservas`,`id_usu`,`id_horario`,`id_lab`),
  ADD KEY `id_usu` (`id_usu`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_usu`),
  ADD KEY `roless` (`rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `elementos`
--
ALTER TABLE `elementos`
  MODIFY `id_ele` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `horario`
--
ALTER TABLE `horario`
  MODIFY `id_horario` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id_reservas` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_usu` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `horario`
--
ALTER TABLE `horario`
  ADD CONSTRAINT `horario_ibfk_2` FOREIGN KEY (`id_lab`) REFERENCES `laboratorios` (`id_lab`);

--
-- Filtros para la tabla `laboratorios`
--
ALTER TABLE `laboratorios`
  ADD CONSTRAINT `laboratorios_ibfk_1` FOREIGN KEY (`id_ele`) REFERENCES `elementos` (`id_ele`);

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`id_usu`) REFERENCES `users` (`id_usu`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `roless` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
