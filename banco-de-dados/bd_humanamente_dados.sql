-- phpMyAdmin SQL Dump
-- version 5.2.3-1.fc43
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 15/02/2026 às 01:46
-- Versão do servidor: 10.11.15-MariaDB
-- Versão do PHP: 8.4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bd_humanamente_teste`
--
CREATE DATABASE IF NOT EXISTS `bd_humanamente` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bd_humanamente`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_arquivo`
--

CREATE TABLE IF NOT EXISTS `tb_arquivo` (
  `id_arquivo` int(11) NOT NULL AUTO_INCREMENT,
  `id_documento` int(11) NOT NULL,
  `tipo_documento` varchar(100) NOT NULL,
  `url_arquivo` text NOT NULL,
  PRIMARY KEY (`id_arquivo`),
  KEY `id_documento` (`id_documento`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_arquivo`
--

INSERT INTO `tb_arquivo` (`id_arquivo`, `id_documento`, `tipo_documento`, `url_arquivo`) VALUES
(1, 1, 'PDF', 'http://empresa.com/doc1.pdf'),
(2, 2, 'PDF', 'http://empresa.com/doc2.pdf'),
(3, 3, 'PDF', 'http://empresa.com/doc3.pdf'),
(4, 4, 'PDF', 'http://empresa.com/doc4.pdf'),
(5, 5, 'PDF', 'http://empresa.com/doc5.pdf'),
(6, 6, 'PDF', 'http://empresa.com/doc6.pdf'),
(7, 7, 'PDF', 'http://empresa.com/doc7.pdf'),
(8, 8, 'PDF', 'http://empresa.com/doc8.pdf'),
(9, 9, 'PDF', 'http://empresa.com/doc9.pdf'),
(10, 10, 'PDF', 'http://empresa.com/doc10.pdf'),
(11, 11, 'PDF', 'http://empresa.com/doc11.pdf'),
(12, 12, 'PDF', 'http://empresa.com/doc12.pdf'),
(13, 13, 'PDF', 'http://empresa.com/doc13.pdf'),
(14, 14, 'PDF', 'http://empresa.com/doc14.pdf'),
(15, 15, 'PDF', 'http://empresa.com/doc15.pdf');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_banco`
--

CREATE TABLE IF NOT EXISTS `tb_banco` (
  `id_banco` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `agencia` varchar(20) NOT NULL,
  `numero_conta` varchar(20) NOT NULL,
  `tipo_conta` varchar(40) NOT NULL,
  `chave_pix` text NOT NULL,
  PRIMARY KEY (`id_banco`),
  KEY `id_funcionario` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_banco`
--

INSERT INTO `tb_banco` (`id_banco`, `id_funcionario`, `agencia`, `numero_conta`, `tipo_conta`, `chave_pix`) VALUES
(1, 1, '0001', '123451', 'Corrente', 'pix1@email.com'),
(2, 2, '0001', '123452', 'Corrente', 'pix2@email.com'),
(3, 3, '0001', '123453', 'Corrente', 'pix3@email.com'),
(4, 4, '0001', '123454', 'Corrente', 'pix4@email.com'),
(5, 5, '0001', '123455', 'Corrente', 'pix5@email.com'),
(6, 6, '0001', '123456', 'Corrente', 'pix6@email.com'),
(7, 7, '0001', '123457', 'Corrente', 'pix7@email.com'),
(8, 8, '0001', '123458', 'Corrente', 'pix8@email.com'),
(9, 9, '0001', '123459', 'Corrente', 'pix9@email.com'),
(10, 10, '0001', '1234510', 'Corrente', 'pix10@email.com'),
(11, 11, '0001', '1234511', 'Corrente', 'pix11@email.com'),
(12, 12, '0001', '1234512', 'Corrente', 'pix12@email.com'),
(13, 13, '0001', '1234513', 'Corrente', 'pix13@email.com'),
(14, 14, '0001', '1234514', 'Corrente', 'pix14@email.com'),
(15, 15, '0001', '1234515', 'Corrente', 'pix15@email.com');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_cargo`
--

CREATE TABLE IF NOT EXISTS `tb_cargo` (
  `id_cargo` int(11) NOT NULL AUTO_INCREMENT,
  `nome_cargo` varchar(100) NOT NULL,
  `salario` decimal(10,2) NOT NULL,
  `carga_horaria` int(11) NOT NULL,
  `regime_trabalhista` text NOT NULL,
  `escala` int(11) NOT NULL,
  `cbo` varchar(10) NOT NULL,
  PRIMARY KEY (`id_cargo`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_cargo`
--

INSERT INTO `tb_cargo` (`id_cargo`, `nome_cargo`, `salario`, `carga_horaria`, `regime_trabalhista`, `escala`, `cbo`) VALUES
(1, 'Cargo 1', 3000.00, 40, 'CLT', 5, '100001'),
(2, 'Cargo 2', 3200.00, 40, 'CLT', 5, '100002'),
(3, 'Cargo 3', 3400.00, 40, 'CLT', 5, '100003'),
(4, 'Cargo 4', 3600.00, 40, 'CLT', 5, '100004'),
(5, 'Cargo 5', 3800.00, 40, 'CLT', 5, '100005'),
(6, 'Cargo 6', 4000.00, 40, 'CLT', 5, '100006'),
(7, 'Cargo 7', 4200.00, 40, 'CLT', 5, '100007'),
(8, 'Cargo 8', 4400.00, 40, 'CLT', 5, '100008'),
(9, 'Cargo 9', 4600.00, 40, 'CLT', 5, '100009'),
(10, 'Cargo 10', 4800.00, 40, 'CLT', 5, '100010'),
(11, 'Cargo 11', 5000.00, 40, 'CLT', 5, '100011'),
(12, 'Cargo 12', 5200.00, 40, 'CLT', 5, '100012'),
(13, 'Cargo 13', 5400.00, 40, 'CLT', 5, '100013'),
(14, 'Cargo 14', 5600.00, 40, 'CLT', 5, '100014'),
(15, 'Cargo 15', 5800.00, 40, 'CLT', 5, '100015');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_documento`
--

CREATE TABLE IF NOT EXISTS `tb_documento` (
  `id_documento` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `rg` text NOT NULL,
  `cpf` text NOT NULL,
  `ctps` text NOT NULL,
  `pis_pasep` text NOT NULL,
  `nis` text NOT NULL,
  `nit` text NOT NULL,
  `registro_profissional` text NOT NULL,
  `comprovante_escolaridade` text NOT NULL,
  `cnh` text DEFAULT NULL,
  `cam` text DEFAULT NULL,
  `titulo_eleitor` text DEFAULT NULL,
  `certidao_casamento_nascimento` text DEFAULT NULL,
  `laudo_pcd` text DEFAULT NULL,
  PRIMARY KEY (`id_documento`),
  KEY `id_funcionario` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_documento`
--

INSERT INTO `tb_documento` (`id_documento`, `id_funcionario`, `rg`, `cpf`, `ctps`, `pis_pasep`, `nis`, `nit`, `registro_profissional`, `comprovante_escolaridade`, `cnh`, `cam`, `titulo_eleitor`, `certidao_casamento_nascimento`, `laudo_pcd`) VALUES
(1, 1, 'RG1', 'CPF1', 'CTPS1', 'PIS1', 'NIS1', 'NIT1', 'REG1', 'Superior', NULL, NULL, NULL, NULL, NULL),
(2, 2, 'RG2', 'CPF2', 'CTPS2', 'PIS2', 'NIS2', 'NIT2', 'REG2', 'Superior', NULL, NULL, NULL, NULL, NULL),
(3, 3, 'RG3', 'CPF3', 'CTPS3', 'PIS3', 'NIS3', 'NIT3', 'REG3', 'Superior', NULL, NULL, NULL, NULL, NULL),
(4, 4, 'RG4', 'CPF4', 'CTPS4', 'PIS4', 'NIS4', 'NIT4', 'REG4', 'Superior', NULL, NULL, NULL, NULL, NULL),
(5, 5, 'RG5', 'CPF5', 'CTPS5', 'PIS5', 'NIS5', 'NIT5', 'REG5', 'Superior', NULL, NULL, NULL, NULL, NULL),
(6, 6, 'RG6', 'CPF6', 'CTPS6', 'PIS6', 'NIS6', 'NIT6', 'REG6', 'Superior', NULL, NULL, NULL, NULL, NULL),
(7, 7, 'RG7', 'CPF7', 'CTPS7', 'PIS7', 'NIS7', 'NIT7', 'REG7', 'Superior', NULL, NULL, NULL, NULL, NULL),
(8, 8, 'RG8', 'CPF8', 'CTPS8', 'PIS8', 'NIS8', 'NIT8', 'REG8', 'Superior', NULL, NULL, NULL, NULL, NULL),
(9, 9, 'RG9', 'CPF9', 'CTPS9', 'PIS9', 'NIS9', 'NIT9', 'REG9', 'Superior', NULL, NULL, NULL, NULL, NULL),
(10, 10, 'RG10', 'CPF10', 'CTPS10', 'PIS10', 'NIS10', 'NIT10', 'REG10', 'Superior', NULL, NULL, NULL, NULL, NULL),
(11, 11, 'RG11', 'CPF11', 'CTPS11', 'PIS11', 'NIS11', 'NIT11', 'REG11', 'Superior', NULL, NULL, NULL, NULL, NULL),
(12, 12, 'RG12', 'CPF12', 'CTPS12', 'PIS12', 'NIS12', 'NIT12', 'REG12', 'Superior', NULL, NULL, NULL, NULL, NULL),
(13, 13, 'RG13', 'CPF13', 'CTPS13', 'PIS13', 'NIS13', 'NIT13', 'REG13', 'Superior', NULL, NULL, NULL, NULL, NULL),
(14, 14, 'RG14', 'CPF14', 'CTPS14', 'PIS14', 'NIS14', 'NIT14', 'REG14', 'Superior', NULL, NULL, NULL, NULL, NULL),
(15, 15, 'RG15', 'CPF15', 'CTPS15', 'PIS15', 'NIS15', 'NIT15', 'REG15', 'Superior', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_endereco`
--

CREATE TABLE IF NOT EXISTS `tb_endereco` (
  `id_endereco` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `cidade` varchar(60) NOT NULL,
  `bairro` varchar(50) NOT NULL,
  `rua` text NOT NULL,
  `numero_casa` int(11) NOT NULL,
  `cep` varchar(15) NOT NULL,
  `complemento` text DEFAULT NULL,
  PRIMARY KEY (`id_endereco`),
  KEY `id_funcionario` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_endereco`
--

INSERT INTO `tb_endereco` (`id_endereco`, `id_funcionario`, `cidade`, `bairro`, `rua`, `numero_casa`, `cep`, `complemento`) VALUES
(1, 1, 'Cidade X', 'Centro', 'Rua 1', 101, '00000-000', NULL),
(2, 2, 'Cidade X', 'Centro', 'Rua 2', 102, '00000-000', NULL),
(3, 3, 'Cidade X', 'Centro', 'Rua 3', 103, '00000-000', NULL),
(4, 4, 'Cidade X', 'Centro', 'Rua 4', 104, '00000-000', NULL),
(5, 5, 'Cidade X', 'Centro', 'Rua 5', 105, '00000-000', NULL),
(6, 6, 'Cidade X', 'Centro', 'Rua 6', 106, '00000-000', NULL),
(7, 7, 'Cidade X', 'Centro', 'Rua 7', 107, '00000-000', NULL),
(8, 8, 'Cidade X', 'Centro', 'Rua 8', 108, '00000-000', NULL),
(9, 9, 'Cidade X', 'Centro', 'Rua 9', 109, '00000-000', NULL),
(10, 10, 'Cidade X', 'Centro', 'Rua 10', 110, '00000-000', NULL),
(11, 11, 'Cidade X', 'Centro', 'Rua 11', 111, '00000-000', NULL),
(12, 12, 'Cidade X', 'Centro', 'Rua 12', 112, '00000-000', NULL),
(13, 13, 'Cidade X', 'Centro', 'Rua 13', 113, '00000-000', NULL),
(14, 14, 'Cidade X', 'Centro', 'Rua 14', 114, '00000-000', NULL),
(15, 15, 'Cidade X', 'Centro', 'Rua 15', 115, '00000-000', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_filho`
--

CREATE TABLE IF NOT EXISTS `tb_filho` (
  `id_filho` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `certidao_filho` text NOT NULL,
  `idade_filho` int(11) NOT NULL,
  `escolaridade_filho` text NOT NULL,
  PRIMARY KEY (`id_filho`),
  KEY `id_funcionario` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_filho`
--

INSERT INTO `tb_filho` (`id_filho`, `id_funcionario`, `certidao_filho`, `idade_filho`, `escolaridade_filho`) VALUES
(1, 1, 'CERT1', 5, 'Ensino Fundamental'),
(2, 2, 'CERT2', 5, 'Ensino Fundamental'),
(3, 3, 'CERT3', 5, 'Ensino Fundamental'),
(4, 4, 'CERT4', 5, 'Ensino Fundamental'),
(5, 5, 'CERT5', 5, 'Ensino Fundamental'),
(6, 6, 'CERT6', 5, 'Ensino Fundamental'),
(7, 7, 'CERT7', 5, 'Ensino Fundamental'),
(8, 8, 'CERT8', 5, 'Ensino Fundamental'),
(9, 9, 'CERT9', 5, 'Ensino Fundamental'),
(10, 10, 'CERT10', 5, 'Ensino Fundamental'),
(11, 11, 'CERT11', 5, 'Ensino Fundamental'),
(12, 12, 'CERT12', 5, 'Ensino Fundamental'),
(13, 13, 'CERT13', 5, 'Ensino Fundamental'),
(14, 14, 'CERT14', 5, 'Ensino Fundamental'),
(15, 15, 'CERT15', 5, 'Ensino Fundamental');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_folhaponto`
--

CREATE TABLE IF NOT EXISTS `tb_folhaponto` (
  `id_ponto` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `data` date NOT NULL,
  `total_horas_dia` int(11) NOT NULL,
  `horas_extras` int(11) DEFAULT NULL,
  `faltas` int(11) DEFAULT NULL,
  `atrasos` int(11) DEFAULT NULL,
  `observacoes` text DEFAULT NULL,
  PRIMARY KEY (`id_ponto`),
  KEY `id_funcionario` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_folhaponto`
--

INSERT INTO `tb_folhaponto` (`id_ponto`, `id_funcionario`, `data`, `total_horas_dia`, `horas_extras`, `faltas`, `atrasos`, `observacoes`) VALUES
(1, 1, '2025-10-14', 8, 0, 0, 0, NULL),
(2, 1, '2025-10-15', 8, 0, 0, 0, NULL),
(3, 1, '2025-10-16', 8, 0, 0, 0, NULL),
(4, 1, '2025-10-17', 8, 2, 0, 0, NULL),
(5, 1, '2025-10-18', 8, 0, 0, 0, NULL),
(6, 1, '2025-10-19', 0, 0, 1, 0, NULL),
(7, 1, '2025-10-20', 8, 0, 0, 0, NULL),
(8, 2, '2025-10-14', 8, 0, 0, 0, NULL),
(9, 2, '2025-10-15', 8, 0, 0, 0, NULL),
(10, 2, '2025-10-16', 8, 0, 0, 0, NULL),
(11, 2, '2025-10-17', 8, 2, 0, 0, NULL),
(12, 2, '2025-10-18', 8, 0, 0, 0, NULL),
(13, 2, '2025-10-19', 0, 0, 1, 0, NULL),
(14, 2, '2025-10-20', 8, 0, 0, 0, NULL),
(15, 3, '2025-10-14', 8, 0, 0, 0, NULL),
(16, 3, '2025-10-15', 8, 0, 0, 0, NULL),
(17, 3, '2025-10-16', 8, 0, 0, 0, NULL),
(18, 3, '2025-10-17', 8, 2, 0, 0, NULL),
(19, 3, '2025-10-18', 8, 0, 0, 0, NULL),
(20, 3, '2025-10-19', 0, 0, 1, 0, NULL),
(21, 3, '2025-10-20', 8, 0, 0, 0, NULL),
(22, 4, '2025-10-14', 8, 0, 0, 0, NULL),
(23, 4, '2025-10-15', 8, 0, 0, 0, NULL),
(24, 4, '2025-10-16', 8, 0, 0, 0, NULL),
(25, 4, '2025-10-17', 8, 2, 0, 0, NULL),
(26, 4, '2025-10-18', 8, 0, 0, 0, NULL),
(27, 4, '2025-10-19', 0, 0, 1, 0, NULL),
(28, 4, '2025-10-20', 8, 0, 0, 0, NULL),
(29, 5, '2025-10-14', 8, 0, 0, 0, NULL),
(30, 5, '2025-10-15', 8, 0, 0, 0, NULL),
(31, 5, '2025-10-16', 8, 0, 0, 0, NULL),
(32, 5, '2025-10-17', 8, 2, 0, 0, NULL),
(33, 5, '2025-10-18', 8, 0, 0, 0, NULL),
(34, 5, '2025-10-19', 0, 0, 1, 0, NULL),
(35, 5, '2025-10-20', 8, 0, 0, 0, NULL),
(36, 6, '2025-10-14', 8, 0, 0, 0, NULL),
(37, 6, '2025-10-15', 8, 0, 0, 0, NULL),
(38, 6, '2025-10-16', 8, 0, 0, 0, NULL),
(39, 6, '2025-10-17', 8, 2, 0, 0, NULL),
(40, 6, '2025-10-18', 8, 0, 0, 0, NULL),
(41, 6, '2025-10-19', 0, 0, 1, 0, NULL),
(42, 6, '2025-10-20', 8, 0, 0, 0, NULL),
(43, 7, '2025-10-14', 8, 0, 0, 0, NULL),
(44, 7, '2025-10-15', 8, 0, 0, 0, NULL),
(45, 7, '2025-10-16', 8, 0, 0, 0, NULL),
(46, 7, '2025-10-17', 8, 2, 0, 0, NULL),
(47, 7, '2025-10-18', 8, 0, 0, 0, NULL),
(48, 7, '2025-10-19', 0, 0, 1, 0, NULL),
(49, 7, '2025-10-20', 8, 0, 0, 0, NULL),
(50, 8, '2025-10-14', 8, 0, 0, 0, NULL),
(51, 8, '2025-10-15', 8, 0, 0, 0, NULL),
(52, 8, '2025-10-16', 8, 0, 0, 0, NULL),
(53, 8, '2025-10-17', 8, 2, 0, 0, NULL),
(54, 8, '2025-10-18', 8, 0, 0, 0, NULL),
(55, 8, '2025-10-19', 0, 0, 1, 0, NULL),
(56, 8, '2025-10-20', 8, 0, 0, 0, NULL),
(57, 9, '2025-10-14', 8, 0, 0, 0, NULL),
(58, 9, '2025-10-15', 8, 0, 0, 0, NULL),
(59, 9, '2025-10-16', 8, 0, 0, 0, NULL),
(60, 9, '2025-10-17', 8, 2, 0, 0, NULL),
(61, 9, '2025-10-18', 8, 0, 0, 0, NULL),
(62, 9, '2025-10-19', 0, 0, 1, 0, NULL),
(63, 9, '2025-10-20', 8, 0, 0, 0, NULL),
(64, 10, '2025-10-14', 8, 0, 0, 0, NULL),
(65, 10, '2025-10-15', 8, 0, 0, 0, NULL),
(66, 10, '2025-10-16', 8, 0, 0, 0, NULL),
(67, 10, '2025-10-17', 8, 2, 0, 0, NULL),
(68, 10, '2025-10-18', 8, 0, 0, 0, NULL),
(69, 10, '2025-10-19', 0, 0, 1, 0, NULL),
(70, 10, '2025-10-20', 8, 0, 0, 0, NULL),
(71, 11, '2025-10-14', 8, 0, 0, 0, NULL),
(72, 11, '2025-10-15', 8, 0, 0, 0, NULL),
(73, 11, '2025-10-16', 8, 0, 0, 0, NULL),
(74, 11, '2025-10-17', 8, 2, 0, 0, NULL),
(75, 11, '2025-10-18', 8, 0, 0, 0, NULL),
(76, 11, '2025-10-19', 0, 0, 1, 0, NULL),
(77, 11, '2025-10-20', 8, 0, 0, 0, NULL),
(78, 12, '2025-10-14', 8, 0, 0, 0, NULL),
(79, 12, '2025-10-15', 8, 0, 0, 0, NULL),
(80, 12, '2025-10-16', 8, 0, 0, 0, NULL),
(81, 12, '2025-10-17', 8, 2, 0, 0, NULL),
(82, 12, '2025-10-18', 8, 0, 0, 0, NULL),
(83, 12, '2025-10-19', 0, 0, 1, 0, NULL),
(84, 12, '2025-10-20', 8, 0, 0, 0, NULL),
(85, 13, '2025-10-14', 8, 0, 0, 0, NULL),
(86, 13, '2025-10-15', 8, 0, 0, 0, NULL),
(87, 13, '2025-10-16', 8, 0, 0, 0, NULL),
(88, 13, '2025-10-17', 8, 2, 0, 0, NULL),
(89, 13, '2025-10-18', 8, 0, 0, 0, NULL),
(90, 13, '2025-10-19', 0, 0, 1, 0, NULL),
(91, 13, '2025-10-20', 8, 0, 0, 0, NULL),
(92, 14, '2025-10-14', 8, 0, 0, 0, NULL),
(93, 14, '2025-10-15', 8, 0, 0, 0, NULL),
(94, 14, '2025-10-16', 8, 0, 0, 0, NULL),
(95, 14, '2025-10-17', 8, 2, 0, 0, NULL),
(96, 14, '2025-10-18', 8, 0, 0, 0, NULL),
(97, 14, '2025-10-19', 0, 0, 1, 0, NULL),
(98, 14, '2025-10-20', 8, 0, 0, 0, NULL),
(99, 15, '2025-10-14', 8, 0, 0, 0, NULL),
(100, 15, '2025-10-15', 8, 0, 0, 0, NULL),
(101, 15, '2025-10-16', 8, 0, 0, 0, NULL),
(102, 15, '2025-10-17', 8, 2, 0, 0, NULL),
(103, 15, '2025-10-18', 8, 0, 0, 0, NULL),
(104, 15, '2025-10-19', 0, 0, 1, 0, NULL),
(105, 15, '2025-10-20', 8, 0, 0, 0, NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_funcionario`
--

CREATE TABLE IF NOT EXISTS `tb_funcionario` (
  `id_funcionario` int(11) NOT NULL AUTO_INCREMENT,
  `id_cargo` int(11) NOT NULL,
  `nome_completo` varchar(100) NOT NULL,
  `data_nascimento` date NOT NULL,
  `sexo` varchar(30) NOT NULL,
  `estado_civil` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `data_admissao` date NOT NULL,
  `data_demissao` date DEFAULT NULL,
  `situacao` int(11) NOT NULL,
  PRIMARY KEY (`id_funcionario`),
  KEY `id_cargo` (`id_cargo`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_funcionario`
--

INSERT INTO `tb_funcionario` (`id_funcionario`, `id_cargo`, `nome_completo`, `data_nascimento`, `sexo`, `estado_civil`, `email`, `data_admissao`, `data_demissao`, `situacao`) VALUES
(1, 1, 'Funcionario 1', '1990-01-01', 'Masculino', 'Solteiro', 'f1@email.com', '2023-01-01', NULL, 1),
(2, 2, 'Funcionario 2', '1990-02-01', 'Feminino', 'Solteiro', 'f2@email.com', '2023-01-01', NULL, 1),
(3, 3, 'Funcionario 3', '1990-03-01', 'Masculino', 'Casado', 'f3@email.com', '2023-01-01', NULL, 1),
(4, 4, 'Funcionario 4', '1990-04-01', 'Feminino', 'Casado', 'f4@email.com', '2023-01-01', NULL, 1),
(5, 5, 'Funcionario 5', '1990-05-01', 'Masculino', 'Solteiro', 'f5@email.com', '2023-01-01', NULL, 1),
(6, 6, 'Funcionario 6', '1990-06-01', 'Feminino', 'Solteiro', 'f6@email.com', '2023-01-01', NULL, 1),
(7, 7, 'Funcionario 7', '1990-07-01', 'Masculino', 'Casado', 'f7@email.com', '2023-01-01', NULL, 1),
(8, 8, 'Funcionario 8', '1990-08-01', 'Feminino', 'Casado', 'f8@email.com', '2023-01-01', NULL, 1),
(9, 9, 'Funcionario 9', '1990-09-01', 'Masculino', 'Solteiro', 'f9@email.com', '2023-01-01', NULL, 1),
(10, 10, 'Funcionario 10', '1990-10-01', 'Feminino', 'Solteiro', 'f10@email.com', '2023-01-01', NULL, 1),
(11, 11, 'Funcionario 11', '1990-11-01', 'Masculino', 'Casado', 'f11@email.com', '2023-01-01', NULL, 1),
(12, 12, 'Funcionario 12', '1990-12-01', 'Feminino', 'Solteiro', 'f12@email.com', '2023-01-01', NULL, 1),
(13, 13, 'Funcionario 13', '1991-01-01', 'Masculino', 'Casado', 'f13@email.com', '2023-01-01', NULL, 1),
(14, 14, 'Funcionario 14', '1991-02-01', 'Feminino', 'Solteiro', 'f14@email.com', '2023-01-01', NULL, 1),
(15, 15, 'Funcionario 15', '1991-03-01', 'Masculino', 'Casado', 'f15@email.com', '2023-01-01', NULL, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_jornada`
--

CREATE TABLE IF NOT EXISTS `tb_jornada` (
  `id_jornada` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `id_ponto` int(11) NOT NULL,
  `hora_entrada` time NOT NULL,
  `hora_saida` time DEFAULT NULL,
  `intervalo_inicio` time DEFAULT NULL,
  `intervalo_fim` time DEFAULT NULL,
  `dia_semana` text NOT NULL,
  PRIMARY KEY (`id_jornada`),
  KEY `id_funcionario` (`id_funcionario`),
  KEY `id_ponto` (`id_ponto`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_jornada`
--

INSERT INTO `tb_jornada` (`id_jornada`, `id_funcionario`, `id_ponto`, `hora_entrada`, `hora_saida`, `intervalo_inicio`, `intervalo_fim`, `dia_semana`) VALUES
(1, 1, 1, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Tuesday'),
(2, 1, 2, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Wednesday'),
(3, 1, 3, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Thursday'),
(4, 1, 4, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Friday'),
(5, 1, 5, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Saturday'),
(6, 1, 6, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sunday'),
(7, 1, 7, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Monday'),
(8, 2, 8, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Tuesday'),
(9, 2, 9, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Wednesday'),
(10, 2, 10, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Thursday'),
(11, 2, 11, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Friday'),
(12, 2, 12, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Saturday'),
(13, 2, 13, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sunday'),
(14, 2, 14, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Monday'),
(15, 3, 15, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Tuesday'),
(16, 3, 16, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Wednesday'),
(17, 3, 17, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Thursday'),
(18, 3, 18, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Friday'),
(19, 3, 19, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Saturday'),
(20, 3, 20, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sunday'),
(21, 3, 21, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Monday'),
(22, 4, 22, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Tuesday'),
(23, 4, 23, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Wednesday'),
(24, 4, 24, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Thursday'),
(25, 4, 25, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Friday'),
(26, 4, 26, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Saturday'),
(27, 4, 27, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sunday'),
(28, 4, 28, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Monday'),
(29, 5, 29, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Tuesday'),
(30, 5, 30, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Wednesday'),
(31, 5, 31, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Thursday'),
(32, 5, 32, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Friday'),
(33, 5, 33, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Saturday'),
(34, 5, 34, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sunday'),
(35, 5, 35, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Monday'),
(36, 6, 36, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Tuesday'),
(37, 6, 37, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Wednesday'),
(38, 6, 38, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Thursday'),
(39, 6, 39, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Friday'),
(40, 6, 40, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Saturday'),
(41, 6, 41, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sunday'),
(42, 6, 42, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Monday'),
(43, 7, 43, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Tuesday'),
(44, 7, 44, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Wednesday'),
(45, 7, 45, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Thursday'),
(46, 7, 46, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Friday'),
(47, 7, 47, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Saturday'),
(48, 7, 48, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sunday'),
(49, 7, 49, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Monday'),
(50, 8, 50, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Tuesday'),
(51, 8, 51, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Wednesday'),
(52, 8, 52, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Thursday'),
(53, 8, 53, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Friday'),
(54, 8, 54, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Saturday'),
(55, 8, 55, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sunday'),
(56, 8, 56, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Monday'),
(57, 9, 57, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Tuesday'),
(58, 9, 58, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Wednesday'),
(59, 9, 59, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Thursday'),
(60, 9, 60, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Friday'),
(61, 9, 61, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Saturday'),
(62, 9, 62, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sunday'),
(63, 9, 63, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Monday'),
(64, 10, 64, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Tuesday'),
(65, 10, 65, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Wednesday'),
(66, 10, 66, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Thursday'),
(67, 10, 67, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Friday'),
(68, 10, 68, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Saturday'),
(69, 10, 69, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sunday'),
(70, 10, 70, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Monday'),
(71, 11, 71, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Tuesday'),
(72, 11, 72, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Wednesday'),
(73, 11, 73, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Thursday'),
(74, 11, 74, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Friday'),
(75, 11, 75, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Saturday'),
(76, 11, 76, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sunday'),
(77, 11, 77, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Monday'),
(78, 12, 78, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Tuesday'),
(79, 12, 79, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Wednesday'),
(80, 12, 80, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Thursday'),
(81, 12, 81, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Friday'),
(82, 12, 82, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Saturday'),
(83, 12, 83, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sunday'),
(84, 12, 84, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Monday'),
(85, 13, 85, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Tuesday'),
(86, 13, 86, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Wednesday'),
(87, 13, 87, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Thursday'),
(88, 13, 88, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Friday'),
(89, 13, 89, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Saturday'),
(90, 13, 90, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sunday'),
(91, 13, 91, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Monday'),
(92, 14, 92, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Tuesday'),
(93, 14, 93, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Wednesday'),
(94, 14, 94, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Thursday'),
(95, 14, 95, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Friday'),
(96, 14, 96, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Saturday'),
(97, 14, 97, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sunday'),
(98, 14, 98, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Monday'),
(99, 15, 99, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Tuesday'),
(100, 15, 100, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Wednesday'),
(101, 15, 101, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Thursday'),
(102, 15, 102, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Friday'),
(103, 15, 103, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Saturday'),
(104, 15, 104, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sunday'),
(105, 15, 105, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Monday');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_login`
--

CREATE TABLE IF NOT EXISTS `tb_login` (
  `id_login` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `nome_usuario` varchar(100) NOT NULL,
  `senha` varchar(50) NOT NULL,
  PRIMARY KEY (`id_login`),
  KEY `id_funcionario` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_login`
--

INSERT INTO `tb_login` (`id_login`, `id_funcionario`, `nome_usuario`, `senha`) VALUES
(1, 1, 'user1', '123456'),
(2, 2, 'user2', '123456'),
(3, 3, 'user3', '123456'),
(4, 4, 'user4', '123456'),
(5, 5, 'user5', '123456'),
(6, 6, 'user6', '123456'),
(7, 7, 'user7', '123456'),
(8, 8, 'user8', '123456'),
(9, 9, 'user9', '123456'),
(10, 10, 'user10', '123456'),
(11, 11, 'user11', '123456'),
(12, 12, 'user12', '123456'),
(13, 13, 'user13', '123456'),
(14, 14, 'user14', '123456'),
(15, 15, 'user15', '123456');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_proventos`
--

CREATE TABLE IF NOT EXISTS `tb_proventos` (
  `id_beneficio` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `nome_beneficio` varchar(150) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `desconto` int(11) NOT NULL DEFAULT 0,
  `referencia` double NOT NULL,
  PRIMARY KEY (`id_beneficio`),
  KEY `id_funcionario` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_proventos`
--

INSERT INTO `tb_proventos` (`id_beneficio`, `id_funcionario`, `nome_beneficio`, `valor`, `desconto`, `referencia`) VALUES
(1, 1, 'Vale Alimentação', 500.00, 0, 1),
(2, 2, 'Vale Alimentação', 500.00, 0, 1),
(3, 3, 'Vale Alimentação', 500.00, 0, 1),
(4, 4, 'Vale Alimentação', 500.00, 0, 1),
(5, 5, 'Vale Alimentação', 500.00, 0, 1),
(6, 6, 'Vale Alimentação', 500.00, 0, 1),
(7, 7, 'Vale Alimentação', 500.00, 0, 1),
(8, 8, 'Vale Alimentação', 500.00, 0, 1),
(9, 9, 'Vale Alimentação', 500.00, 0, 1),
(10, 10, 'Vale Alimentação', 500.00, 0, 1),
(11, 11, 'Vale Alimentação', 500.00, 0, 1),
(12, 12, 'Vale Alimentação', 500.00, 0, 1),
(13, 13, 'Vale Alimentação', 500.00, 0, 1),
(14, 14, 'Vale Alimentação', 500.00, 0, 1),
(15, 15, 'Vale Alimentação', 500.00, 0, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_solicitacoes`
--

CREATE TABLE IF NOT EXISTS `tb_solicitacoes` (
  `id_solicitacao` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `data_solicitacao` date NOT NULL,
  `tipo_solicitacao` text NOT NULL,
  `observacao` text NOT NULL,
  `motivo` text DEFAULT NULL,
  `status` text NOT NULL,
  PRIMARY KEY (`id_solicitacao`),
  KEY `id_funcionario` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_solicitacoes`
--

INSERT INTO `tb_solicitacoes` (`id_solicitacao`, `id_funcionario`, `data_solicitacao`, `tipo_solicitacao`, `observacao`, `motivo`, `status`) VALUES
(1, 1, '2025-10-15', 'Férias', 'Solicitação anual', NULL, 'Aprovado'),
(2, 2, '2025-10-15', 'Férias', 'Solicitação anual', NULL, 'Aprovado'),
(3, 3, '2025-10-15', 'Férias', 'Solicitação anual', NULL, 'Aprovado'),
(4, 4, '2025-10-15', 'Férias', 'Solicitação anual', NULL, 'Aprovado'),
(5, 5, '2025-10-15', 'Férias', 'Solicitação anual', NULL, 'Aprovado'),
(6, 6, '2025-10-15', 'Férias', 'Solicitação anual', NULL, 'Aprovado'),
(7, 7, '2025-10-15', 'Férias', 'Solicitação anual', NULL, 'Aprovado'),
(8, 8, '2025-10-15', 'Férias', 'Solicitação anual', NULL, 'Aprovado'),
(9, 9, '2025-10-15', 'Férias', 'Solicitação anual', NULL, 'Aprovado'),
(10, 10, '2025-10-15', 'Férias', 'Solicitação anual', NULL, 'Aprovado'),
(11, 11, '2025-10-15', 'Férias', 'Solicitação anual', NULL, 'Aprovado'),
(12, 12, '2025-10-15', 'Férias', 'Solicitação anual', NULL, 'Aprovado'),
(13, 13, '2025-10-15', 'Férias', 'Solicitação anual', NULL, 'Aprovado'),
(14, 14, '2025-10-15', 'Férias', 'Solicitação anual', NULL, 'Aprovado'),
(15, 15, '2025-10-15', 'Férias', 'Solicitação anual', NULL, 'Aprovado');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_telefone`
--

CREATE TABLE IF NOT EXISTS `tb_telefone` (
  `id_telefone` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `tipo_telefone` varchar(50) NOT NULL,
  PRIMARY KEY (`id_telefone`),
  KEY `id_funcionario` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_telefone`
--

INSERT INTO `tb_telefone` (`id_telefone`, `id_funcionario`, `telefone`, `tipo_telefone`) VALUES
(1, 1, '11999990001', 'Celular'),
(2, 2, '11999990002', 'Celular'),
(3, 3, '11999990003', 'Celular'),
(4, 4, '11999990004', 'Celular'),
(5, 5, '11999990005', 'Celular'),
(6, 6, '11999990006', 'Celular'),
(7, 7, '11999990007', 'Celular'),
(8, 8, '11999990008', 'Celular'),
(9, 9, '11999990009', 'Celular'),
(10, 10, '11999990010', 'Celular'),
(11, 11, '11999990011', 'Celular'),
(12, 12, '11999990012', 'Celular'),
(13, 13, '11999990013', 'Celular'),
(14, 14, '11999990014', 'Celular'),
(15, 15, '11999990015', 'Celular');

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `view_folha_ponto`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE IF NOT EXISTS `view_folha_ponto` (
`id_funcionario` int(11)
,`nome_completo` varchar(100)
,`nome_cargo` varchar(100)
,`carga_semanal_prevista` int(11)
,`horas_trabalhadas_semana` decimal(32,0)
,`diferenca_horas` decimal(33,0)
,`situacao` varchar(16)
);

-- --------------------------------------------------------

--
-- Estrutura para view `view_folha_ponto`
--
DROP TABLE IF EXISTS `view_folha_ponto`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_folha_ponto`  AS SELECT `f`.`id_funcionario` AS `id_funcionario`, `f`.`nome_completo` AS `nome_completo`, `c`.`nome_cargo` AS `nome_cargo`, `c`.`carga_horaria` AS `carga_semanal_prevista`, sum(`p`.`total_horas_dia`) AS `horas_trabalhadas_semana`, sum(`p`.`total_horas_dia`) - cast(replace(replace(`c`.`carga_horaria`,'h',''),' semanais','') as signed) AS `diferenca_horas`, CASE WHEN sum(`p`.`total_horas_dia`) < cast(replace(replace(`c`.`carga_horaria`,'h',''),' semanais','') as signed) THEN 'Faltando horas' WHEN sum(`p`.`total_horas_dia`) = cast(replace(replace(`c`.`carga_horaria`,'h',''),' semanais','') as signed) THEN 'Cumpriu certinho' ELSE 'Excedeu horas' END AS `situacao` FROM ((`tb_funcionario` `f` join `tb_cargo` `c` on(`f`.`id_cargo` = `c`.`id_cargo`)) join `tb_folhaponto` `p` on(`f`.`id_funcionario` = `p`.`id_funcionario`)) WHERE `p`.`data` between '2025-10-14' and '2025-10-20' GROUP BY `f`.`id_funcionario`, `f`.`nome_completo`, `c`.`nome_cargo`, `c`.`carga_horaria` ORDER BY sum(`p`.`total_horas_dia`) - cast(replace(replace(`c`.`carga_horaria`,'h',''),' semanais','') as signed) ASC ;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `tb_arquivo`
--
ALTER TABLE `tb_arquivo`
  ADD CONSTRAINT `tb_arquivo_ibfk_1` FOREIGN KEY (`id_documento`) REFERENCES `tb_documento` (`id_documento`);

--
-- Restrições para tabelas `tb_folhaponto`
--
ALTER TABLE `tb_folhaponto`
  ADD CONSTRAINT `tb_folhaponto_ibfk_1` FOREIGN KEY (`id_funcionario`) REFERENCES `tb_funcionario` (`id_funcionario`);

--
-- Restrições para tabelas `tb_funcionario`
--
ALTER TABLE `tb_funcionario`
  ADD CONSTRAINT `tb_funcionario_ibfk_1` FOREIGN KEY (`id_cargo`) REFERENCES `tb_cargo` (`id_cargo`);

--
-- Restrições para tabelas `tb_solicitacoes`
--
ALTER TABLE `tb_solicitacoes`
  ADD CONSTRAINT `tb_solicitacoes_ibfk_1` FOREIGN KEY (`id_funcionario`) REFERENCES `tb_funcionario` (`id_funcionario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
