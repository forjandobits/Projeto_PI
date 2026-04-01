-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 31-Mar-2026 às 01:44
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bd_humanamente_dados`
--
CREATE DATABASE IF NOT EXISTS `bd_humanamente_dados` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bd_humanamente_dados`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_arquivo`
--

CREATE TABLE IF NOT EXISTS `tb_arquivo` (
  `id_arquivo` int(11) NOT NULL AUTO_INCREMENT,
  `id_documento` int(11) NOT NULL,
  `tipo_documento` varchar(100) NOT NULL,
  `url_arquivo` text NOT NULL,
  PRIMARY KEY (`id_arquivo`),
  KEY `fk10` (`id_documento`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_arquivo`
--

INSERT INTO `tb_arquivo` (`id_arquivo`, `id_documento`, `tipo_documento`, `url_arquivo`) VALUES
(1, 1, 'CPF', '/uploads/documentos/cpf_carlos_souza.pdf'),
(2, 1, 'RG', '/uploads/documentos/rg_carlos_souza.pdf'),
(3, 2, 'CPF', '/uploads/documentos/cpf_mariana_oliveira.pdf'),
(4, 2, 'Diploma', '/uploads/documentos/diploma_mariana.pdf'),
(5, 3, 'CPF', '/uploads/documentos/cpf_joao_santos.pdf'),
(6, 3, 'RG', '/uploads/documentos/rg_joao_santos.pdf'),
(7, 4, 'CPF', '/uploads/documentos/cpf_fernanda_costa.pdf'),
(8, 5, 'CPF', '/uploads/documentos/cpf_lucas_ferreira.pdf'),
(9, 5, 'Certidão Casamento', '/uploads/documentos/certidao_lucas.pdf'),
(10, 6, 'CPF', '/uploads/documentos/cpf_ana_gomes.pdf'),
(11, 7, 'CPF', '/uploads/documentos/cpf_rafael_almeida.pdf'),
(12, 8, 'CPF', '/uploads/documentos/cpf_patricia_martins.pdf'),
(13, 8, 'Diploma', '/uploads/documentos/diploma_patricia.pdf');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_banco`
--

CREATE TABLE IF NOT EXISTS `tb_banco` (
  `id_banco` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `nome_banco` varchar(50) NOT NULL,
  `agencia` varchar(20) NOT NULL,
  `numero_conta` varchar(20) NOT NULL,
  `tipo_conta` varchar(40) NOT NULL,
  `chave_pix` text NOT NULL,
  PRIMARY KEY (`id_banco`),
  KEY `fk4` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_banco`
--

INSERT INTO `tb_banco` (`id_banco`, `id_funcionario`, `nome_banco`, `agencia`, `numero_conta`, `tipo_conta`, `chave_pix`) VALUES
(1, 1, 'Banco do Brasil', '1234', '987654-1', 'Conta Corrente', 'carlos.souza@pix.com'),
(2, 2, 'Caixa Econômica', '4321', '123456-2', 'Conta Corrente', '32999887766'),
(3, 3, 'Itaú', '5678', '789456-3', 'Conta Corrente', '34567890112'),
(4, 4, 'Bradesco', '8765', '456123-4', 'Conta Corrente', 'fernanda.costa@email.com'),
(5, 5, 'Santander', '3456', '654987-5', 'Conta Corrente', '56789012314'),
(6, 6, 'Banco do Brasil', '9988', '321654-6', 'Conta Poupança', 'ana.gomes@pix.com'),
(7, 7, 'Itaú', '1122', '741852-7', 'Conta Corrente', 'rafael.almeida@email.com'),
(8, 8, 'Caixa Econômica', '3344', '852963-8', 'Conta Corrente', 'patricia.martins@email.com');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_cargo`
--

CREATE TABLE IF NOT EXISTS `tb_cargo` (
  `id_cargo` int(11) NOT NULL AUTO_INCREMENT,
  `nome_cargo` varchar(100) NOT NULL,
  `salario` decimal(10,2) NOT NULL,
  `carga_horaria` int(11) NOT NULL,
  `regime_trabalhista` text NOT NULL,
  `cbo` varchar(10) NOT NULL,
  PRIMARY KEY (`id_cargo`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_cargo`
--

INSERT INTO `tb_cargo` (`id_cargo`, `nome_cargo`, `salario`, `carga_horaria`, `regime_trabalhista`, `cbo`) VALUES
(1, 'Padeiro', '2300.00', 40, 'CLT', '848305'),
(2, 'Confeiteiro', '2400.00', 40, 'CLT', '848310'),
(3, 'Atendente', '1621.00', 40, 'CLT', '521110'),
(4, 'Caixa', '1700.00', 40, 'CLT', '413205'),
(5, 'Auxiliar de Limpeza', '1600.00', 40, 'CLT', '514320'),
(6, 'Gerente', '3500.00', 40, 'CLT', '141415');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_documento`
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
  `cnh` tinyint(1) NOT NULL DEFAULT 0,
  `cam` tinyint(1) NOT NULL DEFAULT 0,
  `titulo_eleitor` text DEFAULT NULL,
  `certidao_casamento_nascimento` tinyint(1) NOT NULL DEFAULT 0,
  `laudo_pcd` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_documento`),
  KEY `fk9` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_documento`
--

INSERT INTO `tb_documento` (`id_documento`, `id_funcionario`, `rg`, `cpf`, `ctps`, `pis_pasep`, `nis`, `nit`, `registro_profissional`, `comprovante_escolaridade`, `cnh`, `cam`, `titulo_eleitor`, `certidao_casamento_nascimento`, `laudo_pcd`) VALUES
(1, 1, 'MG-12.345.678', '123.456.789-10', '1234567', '12345678901', '12345678901', '12345678901', 'REG123', 'Ensino Médio', 1, 0, '123456789012', 1, 0),
(2, 2, 'MG-23.456.789', '234.567.890-11', '2345678', '23456789012', '23456789012', '23456789012', 'REG234', 'Ensino Superior', 1, 0, '234567890123', 0, 0),
(3, 3, 'MG-34.567.890', '345.678.901-12', '3456789', '34567890123', '34567890123', '34567890123', 'REG345', 'Ensino Médio', 0, 0, '345678901234', 0, 0),
(4, 4, 'MG-45.678.901', '456.789.012-13', '4567890', '45678901234', '45678901234', '45678901234', 'REG456', 'Ensino Médio', 1, 0, '456789012345', 0, 0),
(5, 5, 'MG-56.789.012', '567.890.123-14', '5678901', '56789012345', '56789012345', '56789012345', 'REG567', 'Ensino Médio', 1, 0, '567890123456', 1, 0),
(6, 6, 'MG-67.890.123', '678.901.234-15', '6789012', '67890123456', '67890123456', '67890123456', 'REG678', 'Ensino Fundamental', 0, 0, '678901234567', 1, 0),
(7, 7, 'MG-78.901.234', '789.012.345-16', '7890123', '78901234567', '78901234567', '78901234567', 'REG789', 'Ensino Médio', 1, 0, '789012345678', 1, 0),
(8, 8, 'MG-89.012.345', '890.123.456-17', '8901234', '89012345678', '89012345678', '89012345678', 'REG890', 'Ensino Superior', 1, 0, '890123456789', 1, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_endereco`
--

CREATE TABLE IF NOT EXISTS `tb_endereco` (
  `id_endereco` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `estado` varchar(2) NOT NULL,
  `cidade` varchar(60) NOT NULL,
  `bairro` varchar(50) NOT NULL,
  `rua` text NOT NULL,
  `numero_casa` int(11) NOT NULL,
  `cep` varchar(15) NOT NULL,
  `complemento` text DEFAULT NULL,
  PRIMARY KEY (`id_endereco`),
  KEY `fk2` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_endereco`
--

INSERT INTO `tb_endereco` (`id_endereco`, `id_funcionario`, `estado`, `cidade`, `bairro`, `rua`, `numero_casa`, `cep`, `complemento`) VALUES
(1, 1, 'MG', 'Juiz de Fora', 'Centro', 'Rua Halfeld', 120, '36010-000', NULL),
(2, 2, 'MG', 'Juiz de Fora', 'São Mateus', 'Rua Padre Café', 88, '36016-450', NULL),
(3, 3, 'MG', 'Juiz de Fora', 'Benfica', 'Rua Martins Barbosa', 215, '36090-300', NULL),
(4, 4, 'MG', 'Juiz de Fora', 'Granbery', 'Rua Batista de Oliveira', 455, '36010-120', NULL),
(5, 5, 'MG', 'Juiz de Fora', 'Cascatinha', 'Av. Deusdedith Salgado', 900, '36033-000', NULL),
(6, 6, 'MG', 'Juiz de Fora', 'Santa Luzia', 'Rua Ibitiguaia', 70, '36030-040', NULL),
(7, 7, 'MG', 'Juiz de Fora', 'Bairu', 'Rua Américo Lobo', 140, '36050-240', NULL),
(8, 8, 'MG', 'Juiz de Fora', 'Centro', 'Rua Santo Antônio', 510, '36015-001', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_filho`
--

CREATE TABLE IF NOT EXISTS `tb_filho` (
  `id_filho` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `tem_filho` tinyint(1) NOT NULL DEFAULT 0,
  `numero_filho` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_filho`),
  KEY `fk3` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_filho`
--

INSERT INTO `tb_filho` (`id_filho`, `id_funcionario`, `tem_filho`, `numero_filho`) VALUES
(1, 1, 1, 2),
(2, 2, 0, NULL),
(3, 3, 0, NULL),
(4, 4, 1, 1),
(5, 5, 1, 2),
(6, 6, 1, 3),
(7, 7, 0, NULL),
(8, 8, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_folhapagamento`
--

CREATE TABLE IF NOT EXISTS `tb_folhapagamento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `informacoes` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`informacoes`)),
  `data_lancamento` date DEFAULT curdate(),
  `mes_referencia` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk11` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_folhapagamento`
--

INSERT INTO `tb_folhapagamento` (`id`, `id_funcionario`, `informacoes`, `data_lancamento`, `mes_referencia`) VALUES
(1, 1, '{\r\n\"salario_base\":1621,\r\n\"vale_transporte\":150,\r\n\"vale_alimentacao\":450,\r\n\"horas_extras\":50,\r\n\"inss\":130,\r\n\"fgts\":97,\r\n\"descontos\":130,\r\n\"salario_liquido\":2141\r\n}', '2026-03-30', '03/2026'),
(2, 2, '{\r\n\"salario_base\":1621,\r\n\"vale_transporte\":150,\r\n\"vale_alimentacao\":450,\r\n\"comissao\":180,\r\n\"inss\":130,\r\n\"fgts\":97,\r\n\"salario_liquido\":2271\r\n}', '2026-03-30', '03/2026'),
(3, 3, '{\r\n\"salario_base\":1621,\r\n\"vale_transporte\":150,\r\n\"vale_alimentacao\":450,\r\n\"desconto_falta\":50,\r\n\"inss\":120,\r\n\"fgts\":97,\r\n\"salario_liquido\":2051\r\n}', '2026-03-30', '03/2026'),
(4, 4, '{\r\n\"salario_base\":1621,\r\n\"vale_transporte\":150,\r\n\"vale_alimentacao\":450,\r\n\"horas_extras\":50,\r\n\"inss\":130,\r\n\"fgts\":97,\r\n\"salario_liquido\":2141\r\n}', '2026-03-30', '03/2026'),
(5, 5, '{\r\n\"salario_base\":1621,\r\n\"vale_transporte\":150,\r\n\"vale_alimentacao\":450,\r\n\"inss\":130,\r\n\"fgts\":97,\r\n\"salario_liquido\":2091\r\n}', '2026-03-30', '03/2026'),
(6, 6, '{\r\n\"salario_base\":1621,\r\n\"vale_transporte\":150,\r\n\"vale_alimentacao\":450,\r\n\"inss\":130,\r\n\"fgts\":97,\r\n\"salario_liquido\":2091\r\n}', '2026-03-30', '03/2026'),
(7, 7, '{\r\n\"salario_base\":1621,\r\n\"vale_transporte\":150,\r\n\"vale_alimentacao\":450,\r\n\"horas_extras\":50,\r\n\"comissao\":180,\r\n\"inss\":140,\r\n\"fgts\":97,\r\n\"salario_liquido\":2311\r\n}', '2026-03-30', '03/2026'),
(8, 8, '{\r\n\"salario_base\":1621,\r\n\"vale_transporte\":150,\r\n\"vale_alimentacao\":450,\r\n\"bonus_desempenho\":500,\r\n\"inss\":150,\r\n\"fgts\":97,\r\n\"salario_liquido\":2571\r\n}', '2026-03-30', '03/2026');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_folhaponto`
--

CREATE TABLE IF NOT EXISTS `tb_folhaponto` (
  `id_ponto` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `data` date NOT NULL,
  `total_horas_dia` int(11) NOT NULL,
  `horas_extras` int(11) DEFAULT NULL,
  `faltas` int(11) DEFAULT NULL,
  `ferias_falta_abonada` int(11) DEFAULT NULL,
  `atrasos` int(11) DEFAULT NULL,
  `observacoes` text DEFAULT NULL,
  `fechado` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_ponto`),
  KEY `fk12` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_folhaponto`
--

INSERT INTO `tb_folhaponto` (`id_ponto`, `id_funcionario`, `data`, `total_horas_dia`, `horas_extras`, `faltas`, `ferias_falta_abonada`, `atrasos`, `observacoes`) VALUES
(1, 1, '2026-04-06', 8, 0, 0, 0, 0, NULL),
(2, 1, '2026-04-07', 9, 1, 0, 0, 0, 'Hora extra produção pão francês'),
(3, 1, '2026-04-08', 8, 0, 0, 0, 0, NULL),
(4, 1, '2026-04-09', 8, 0, 0, 0, 1, 'Chegou atrasado'),
(5, 1, '2026-04-10', 8, 0, 0, 0, 0, NULL),
(6, 2, '2026-04-06', 8, 0, 0, 0, 0, NULL),
(7, 2, '2026-04-07', 8, 0, 0, 0, 0, NULL),
(8, 2, '2026-04-08', 8, 0, 0, 0, 0, NULL),
(9, 2, '2026-04-09', 9, 1, 0, 0, 0, 'Hora extra atendimento'),
(10, 2, '2026-04-10', 8, 0, 0, 0, 0, NULL),
(11, 3, '2026-04-06', 8, 0, 0, 0, 0, NULL),
(12, 3, '2026-04-07', 8, 0, 0, 0, 0, NULL),
(13, 3, '2026-04-08', 0, 0, 1, 0, 0, 'Falta'),
(14, 3, '2026-04-09', 8, 0, 0, 0, 0, NULL),
(15, 3, '2026-04-10', 8, 0, 0, 0, 0, NULL),
(16, 4, '2026-04-06', 8, 0, 0, 0, 0, NULL),
(17, 4, '2026-04-07', 8, 0, 0, 0, 0, NULL),
(18, 4, '2026-04-08', 8, 0, 0, 0, 0, NULL),
(19, 4, '2026-04-09', 8, 0, 0, 0, 0, NULL),
(20, 4, '2026-04-10', 9, 1, 0, 0, 0, 'Hora extra limpeza'),
(21, 5, '2026-04-06', 8, 0, 0, 0, 0, NULL),
(22, 5, '2026-04-07', 8, 0, 0, 0, 0, NULL),
(23, 5, '2026-04-08', 8, 0, 0, 0, 0, NULL),
(24, 5, '2026-04-09', 8, 0, 0, 0, 0, NULL),
(25, 5, '2026-04-10', 8, 0, 0, 0, 0, NULL),
(26, 6, '2026-04-06', 8, 0, 0, 0, 0, NULL),
(27, 6, '2026-04-07', 8, 0, 0, 0, 0, NULL),
(28, 6, '2026-04-08', 8, 0, 0, 0, 0, NULL),
(29, 6, '2026-04-09', 8, 0, 0, 0, 0, NULL),
(30, 6, '2026-04-10', 8, 0, 0, 0, 0, NULL),
(31, 7, '2026-04-06', 9, 1, 0, 0, 0, 'Produção alta'),
(32, 7, '2026-04-07', 8, 0, 0, 0, 0, NULL),
(33, 7, '2026-04-08', 8, 0, 0, 0, 0, NULL),
(34, 7, '2026-04-09', 8, 0, 0, 0, 0, NULL),
(35, 7, '2026-04-10', 8, 0, 0, 0, 0, NULL),
(36, 8, '2026-04-06', 8, 0, 0, 0, 0, NULL),
(37, 8, '2026-04-07', 8, 0, 0, 0, 0, NULL),
(38, 8, '2026-04-08', 8, 0, 0, 0, 0, NULL),
(39, 8, '2026-04-09', 8, 0, 0, 0, 0, NULL),
(40, 8, '2026-04-10', 8, 0, 0, 0, 0, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_funcionario`
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
  `situacao` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id_funcionario`),
  KEY `fk1` (`id_cargo`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_funcionario`
--

INSERT INTO `tb_funcionario` (`id_funcionario`, `id_cargo`, `nome_completo`, `data_nascimento`, `sexo`, `estado_civil`, `email`, `data_admissao`, `data_demissao`, `situacao`) VALUES
(1, 1, 'Carlos Henrique Souza', '1988-05-12', 'Masculino', 'Casado', 'carlos.souza@padaria.com', '2023-01-10', NULL, 1),
(2, 2, 'Mariana Oliveira', '1992-03-21', 'Feminino', 'Solteira', 'mariana.oliveira@padaria.com', '2022-06-15', NULL, 1),
(3, 3, 'João Pedro Santos', '1995-09-10', 'Masculino', 'Solteiro', 'joao.santos@padaria.com', '2024-02-01', NULL, 1),
(4, 3, 'Fernanda Costa', '1998-07-18', 'Feminino', 'Solteira', 'fernanda.costa@padaria.com', '2024-01-05', NULL, 1),
(5, 4, 'Lucas Ferreira', '1990-11-03', 'Masculino', 'Casado', 'lucas.ferreira@padaria.com', '2023-08-20', NULL, 1),
(6, 5, 'Ana Paula Gomes', '1987-04-27', 'Feminino', 'Casada', 'ana.gomes@padaria.com', '2021-09-10', NULL, 1),
(7, 1, 'Rafael Almeida', '1993-02-14', 'Masculino', 'Casado', 'rafael.almeida@padaria.com', '2022-12-12', NULL, 1),
(8, 6, 'Patricia Martins', '1985-10-30', 'Feminino', 'Casada', 'patricia.martins@padaria.com', '2020-03-01', NULL, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_horario`
--

CREATE TABLE IF NOT EXISTS `tb_horario` (
  `id_horario` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `hora_entrada` time NOT NULL,
  `hora_saida` time NOT NULL,
  `intervalo_inicio` time NOT NULL,
  `intervalo_fim` time NOT NULL,
  PRIMARY KEY (`id_horario`),
  KEY `fk5` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_horario`
--

INSERT INTO `tb_horario` (`id_horario`, `id_funcionario`, `hora_entrada`, `hora_saida`, `intervalo_inicio`, `intervalo_fim`) VALUES
(1, 1, '08:00:00', '17:00:00', '12:00:00', '13:00:00'),
(2, 2, '08:00:00', '17:00:00', '12:00:00', '13:00:00'),
(3, 3, '08:00:00', '17:00:00', '12:00:00', '13:00:00'),
(4, 4, '08:00:00', '17:00:00', '12:00:00', '13:00:00'),
(5, 5, '08:00:00', '17:00:00', '12:00:00', '13:00:00'),
(6, 6, '08:00:00', '17:00:00', '12:00:00', '13:00:00'),
(7, 7, '08:00:00', '17:00:00', '12:00:00', '13:00:00'),
(8, 8, '08:00:00', '17:00:00', '12:00:00', '13:00:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_jornada`
--

CREATE TABLE IF NOT EXISTS `tb_jornada` (
  `id_jornada` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `id_ponto` int(11) NOT NULL,
  `hora_entrada` time NOT NULL,
  `hora_saida` time NOT NULL,
  `intervalo_inicio` time NOT NULL,
  `intervalo_fim` time NOT NULL,
  `dia_semana` varchar(20) NOT NULL,
  `confirmado` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_jornada`),
  KEY `fk13` (`id_funcionario`),
  KEY `fk14` (`id_ponto`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_jornada`
--

INSERT INTO `tb_jornada` (`id_jornada`, `id_funcionario`, `id_ponto`, `hora_entrada`, `hora_saida`, `intervalo_inicio`, `intervalo_fim`, `dia_semana`, `confirmado`) VALUES
(1, 1, 1, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Segunda', 1),
(2, 1, 2, '08:00:00', '18:00:00', '12:00:00', '13:00:00', 'Terça', 1),
(3, 1, 3, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Quarta', 1),
(4, 1, 4, '08:10:00', '17:00:00', '12:00:00', '13:00:00', 'Quinta', 1),
(5, 1, 5, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sexta', 1),
(6, 2, 6, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Segunda', 1),
(7, 2, 7, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Terça', 1),
(8, 2, 8, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Quarta', 1),
(9, 2, 9, '08:00:00', '18:00:00', '12:00:00', '13:00:00', 'Quinta', 1),
(10, 2, 10, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sexta', 1),
(11, 3, 11, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Segunda', 1),
(12, 3, 12, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Terça', 1),
(13, 3, 13, '00:00:00', '00:00:00', '00:00:00', '00:00:00', 'Quarta', 1),
(14, 3, 14, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Quinta', 1),
(15, 3, 15, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sexta', 1),
(16, 4, 16, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Segunda', 1),
(17, 4, 17, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Terça', 1),
(18, 4, 18, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Quarta', 1),
(19, 4, 19, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Quinta', 1),
(20, 4, 20, '08:00:00', '18:00:00', '12:00:00', '13:00:00', 'Sexta', 1),
(21, 5, 21, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Segunda', 1),
(22, 5, 22, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Terça', 1),
(23, 5, 23, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Quarta', 1),
(24, 5, 24, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Quinta', 1),
(25, 5, 25, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sexta', 1),
(26, 6, 26, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Segunda', 1),
(27, 6, 27, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Terça', 1),
(28, 6, 28, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Quarta', 1),
(29, 6, 29, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Quinta', 1),
(30, 6, 30, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sexta', 1),
(31, 7, 31, '08:00:00', '18:00:00', '12:00:00', '13:00:00', 'Segunda', 1),
(32, 7, 32, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Terça', 1),
(33, 7, 33, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Quarta', 1),
(34, 7, 34, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Quinta', 1),
(35, 7, 35, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sexta', 1),
(36, 8, 36, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Segunda', 1),
(37, 8, 37, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Terça', 1),
(38, 8, 38, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Quarta', 1),
(39, 8, 39, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Quinta', 1),
(40, 8, 40, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sexta', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_login`
--

CREATE TABLE IF NOT EXISTS `tb_login` (
  `id_login` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `nome_usuario` varchar(100) NOT NULL,
  `senha` varchar(50) NOT NULL,
  PRIMARY KEY (`id_login`),
  KEY `fk6` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_login`
--

INSERT INTO `tb_login` (`id_login`, `id_funcionario`, `nome_usuario`, `senha`) VALUES
(1, 1, 'carlos.souza', '123456'),
(2, 2, 'mariana.oliveira', '123456'),
(3, 3, 'joao.santos', '123456'),
(4, 4, 'fernanda.costa', '123456'),
(5, 5, 'lucas.ferreira', '123456'),
(6, 6, 'ana.gomes', '123456'),
(7, 7, 'rafael.almeida', '123456'),
(8, 8, 'patricia.martins', '123456');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_proventos`
--

CREATE TABLE IF NOT EXISTS `tb_proventos` (
  `id_beneficio` int(11) NOT NULL AUTO_INCREMENT,
  `nome_beneficio` varchar(150) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `desconto` int(11) NOT NULL DEFAULT 0,
  `referencia` double NOT NULL,
  PRIMARY KEY (`id_beneficio`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_proventos`
--

INSERT INTO `tb_proventos` (`id_beneficio`, `nome_beneficio`, `valor`, `desconto`, `referencia`) VALUES
(1, 'Salário', '1621.00', 2, 2),
(2, 'FGTS', '6.00', 2, 1),
(3, 'INSS', '0.00', 1, 1),
(4, 'IRPF', '0.00', 1, 1),
(5, 'Vale Transporte', '150.00', 1, 1),
(6, '13º Salário', '1621.00', 0, 1),
(7, 'Comissão', '180.00', 0, 1),
(8, 'Vale Alimentação', '450.00', 0, 1),
(9, 'Bônus de Desempenho', '500.00', 0, 1),
(10, 'Adicional Noturno', '210.00', 0, 1),
(11, 'Desconto Falta', '50.00', 1, 1),
(12, 'Horas Extras', '50.00', 0, 1),
(13, 'Gratificação Cargo', '200.00', 0, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_solicitacoes`
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
  KEY `fk8` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_solicitacoes`
--

INSERT INTO `tb_solicitacoes` (`id_solicitacao`, `id_funcionario`, `data_solicitacao`, `tipo_solicitacao`, `observacao`, `motivo`, `status`) VALUES
(1, 3, '2026-03-10', 'Férias', 'Solicitação de férias', 'Período anual', 'Aprovado'),
(2, 4, '2026-03-15', 'Abono', 'Abono de falta', 'Consulta médica', 'Aprovado'),
(3, 5, '2026-03-12', 'Folga', 'Troca de turno', 'Evento familiar', 'Negado'),
(4, 2, '2026-03-18', 'Férias', 'Pedido antecipado', 'Viagem', 'Negado');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_telefone`
--

CREATE TABLE IF NOT EXISTS `tb_telefone` (
  `id_telefone` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `tipo_telefone` varchar(50) NOT NULL,
  PRIMARY KEY (`id_telefone`),
  KEY `fk7` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_telefone`
--

INSERT INTO `tb_telefone` (`id_telefone`, `id_funcionario`, `telefone`, `tipo_telefone`) VALUES
(1, 1, '32999112233', 'Celular'),
(2, 2, '32999887766', 'Celular'),
(3, 3, '32999776655', 'Celular'),
(4, 4, '32999665544', 'Celular'),
(5, 5, '32999554433', 'Celular'),
(6, 6, '32999443322', 'Celular'),
(7, 7, '32999332211', 'Celular'),
(8, 8, '32999221100', 'Celular');

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `view_espelho_ponto`
-- (Veja abaixo para a view atual)
--
CREATE TABLE IF NOT EXISTS `view_espelho_ponto` (
`data` date
,`dia_semana` varchar(20)
,`hora_entrada` time
,`hora_saida` time
,`intervalo_inicio` time
,`intervalo_fim` time
,`total_intervalo` time
,`faltas` int(11)
,`total_horas_dia` time
,`nome_completo` varchar(100)
,`id_funcionario` int(11)
,`id_jornada` int(11)
,`id_ponto` int(11)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `view_folha_ponto`
-- (Veja abaixo para a view atual)
--
CREATE TABLE IF NOT EXISTS `view_folha_ponto` (
`id_funcionario` int(11)
,`nome_completo` varchar(100)
,`nome_cargo` varchar(100)
,`carga_semanal_prevista` int(11)
,`ano` int(4)
,`semana` int(2)
,`horas_trabalhadas_semana` decimal(32,0)
,`diferenca_horas` decimal(33,0)
,`situacao` varchar(16)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `view_saldo_mensal`
-- (Veja abaixo para a view atual)
--
CREATE TABLE IF NOT EXISTS `view_saldo_mensal` (
`id_funcionario` int(11)
,`nome_completo` varchar(100)
,`saldo_mes` decimal(55,0)
);

-- --------------------------------------------------------

--
-- Estrutura para vista `view_espelho_ponto`
--
DROP TABLE IF EXISTS `view_espelho_ponto`;

CREATE OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_espelho_ponto`  AS SELECT `tb_folhaponto`.`data` AS `data`, `tb_jornada`.`dia_semana` AS `dia_semana`, `tb_jornada`.`hora_entrada` AS `hora_entrada`, `tb_jornada`.`hora_saida` AS `hora_saida`, `tb_jornada`.`intervalo_inicio` AS `intervalo_inicio`, `tb_jornada`.`intervalo_fim` AS `intervalo_fim`, sec_to_time(timestampdiff(SECOND,`tb_jornada`.`intervalo_inicio`,`tb_jornada`.`intervalo_fim`)) AS `total_intervalo`, `tb_folhaponto`.`faltas` AS `faltas`, `tb_folhaponto`.`ferias_falta_abonada` AS `ferias_falta_abonada`, sec_to_time(timestampdiff(SECOND,`tb_jornada`.`hora_entrada`,`tb_jornada`.`hora_saida`) - timestampdiff(SECOND,`tb_jornada`.`intervalo_inicio`,`tb_jornada`.`intervalo_fim`)) AS `total_horas_dia`, `tb_funcionario`.`nome_completo` AS `nome_completo`, `tb_funcionario`.`id_funcionario` AS `id_funcionario`, `tb_jornada`.`id_jornada` AS `id_jornada`, `tb_jornada`.`id_ponto` AS `id_ponto` FROM (((`tb_funcionario` join `tb_cargo` on(`tb_funcionario`.`id_cargo` = `tb_cargo`.`id_cargo`)) join `tb_folhaponto` on(`tb_funcionario`.`id_funcionario` = `tb_folhaponto`.`id_funcionario`)) join `tb_jornada` on(`tb_funcionario`.`id_funcionario` = `tb_jornada`.`id_funcionario` and `tb_folhaponto`.`id_ponto` = `tb_jornada`.`id_ponto`))  ;

-- --------------------------------------------------------

--
-- Estrutura para vista `view_folha_ponto`
--
DROP TABLE IF EXISTS `view_folha_ponto`;

CREATE OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_folha_ponto`  AS SELECT `f`.`id_funcionario` AS `id_funcionario`, `f`.`nome_completo` AS `nome_completo`, `c`.`nome_cargo` AS `nome_cargo`, `c`.`carga_horaria` AS `carga_semanal_prevista`, year(`p`.`data`) AS `ano`, week(`p`.`data`,1) AS `semana`, sum(`p`.`total_horas_dia`) AS `horas_trabalhadas_semana`, sum(`p`.`total_horas_dia`) - cast(replace(replace(`c`.`carga_horaria`,'h',''),' semanais','') as signed) AS `diferenca_horas`, CASE WHEN sum(`p`.`total_horas_dia`) < cast(replace(replace(`c`.`carga_horaria`,'h',''),' semanais','') as signed) THEN 'Faltando horas' WHEN sum(`p`.`total_horas_dia`) = cast(replace(replace(`c`.`carga_horaria`,'h',''),' semanais','') as signed) THEN 'Cumpriu certinho' ELSE 'Excedeu horas' END AS `situacao` FROM ((`tb_funcionario` `f` join `tb_cargo` `c` on(`f`.`id_cargo` = `c`.`id_cargo`)) join `tb_folhaponto` `p` on(`f`.`id_funcionario` = `p`.`id_funcionario`)) GROUP BY `f`.`id_funcionario`, `f`.`nome_completo`, `c`.`nome_cargo`, `c`.`carga_horaria`, year(`p`.`data`), week(`p`.`data`,1)  ;

-- --------------------------------------------------------

--
-- Estrutura para vista `view_saldo_mensal`
--
DROP TABLE IF EXISTS `view_saldo_mensal`;

CREATE OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_saldo_mensal`  AS SELECT `view_folha_ponto`.`id_funcionario` AS `id_funcionario`, `view_folha_ponto`.`nome_completo` AS `nome_completo`, sum(`view_folha_ponto`.`diferenca_horas`) AS `saldo_mes` FROM `view_folha_ponto` GROUP BY `view_folha_ponto`.`id_funcionario`, `view_folha_ponto`.`nome_completo`  ;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `tb_arquivo`
--
ALTER TABLE `tb_arquivo`
  ADD CONSTRAINT `fk10` FOREIGN KEY (`id_documento`) REFERENCES `tb_documento` (`id_documento`);

--
-- Limitadores para a tabela `tb_banco`
--
ALTER TABLE `tb_banco`
  ADD CONSTRAINT `fk4` FOREIGN KEY (`id_funcionario`) REFERENCES `tb_funcionario` (`id_funcionario`);

--
-- Limitadores para a tabela `tb_documento`
--
ALTER TABLE `tb_documento`
  ADD CONSTRAINT `fk9` FOREIGN KEY (`id_funcionario`) REFERENCES `tb_funcionario` (`id_funcionario`);

--
-- Limitadores para a tabela `tb_endereco`
--
ALTER TABLE `tb_endereco`
  ADD CONSTRAINT `fk2` FOREIGN KEY (`id_funcionario`) REFERENCES `tb_funcionario` (`id_funcionario`);

--
-- Limitadores para a tabela `tb_filho`
--
ALTER TABLE `tb_filho`
  ADD CONSTRAINT `fk3` FOREIGN KEY (`id_funcionario`) REFERENCES `tb_funcionario` (`id_funcionario`);

--
-- Limitadores para a tabela `tb_folhapagamento`
--
ALTER TABLE `tb_folhapagamento`
  ADD CONSTRAINT `fk11` FOREIGN KEY (`id_funcionario`) REFERENCES `tb_funcionario` (`id_funcionario`);

--
-- Limitadores para a tabela `tb_folhaponto`
--
ALTER TABLE `tb_folhaponto`
  ADD CONSTRAINT `fk12` FOREIGN KEY (`id_funcionario`) REFERENCES `tb_funcionario` (`id_funcionario`);

--
-- Limitadores para a tabela `tb_funcionario`
--
ALTER TABLE `tb_funcionario`
  ADD CONSTRAINT `fk1` FOREIGN KEY (`id_cargo`) REFERENCES `tb_cargo` (`id_cargo`);

--
-- Limitadores para a tabela `tb_horario`
--
ALTER TABLE `tb_horario`
  ADD CONSTRAINT `fk5` FOREIGN KEY (`id_funcionario`) REFERENCES `tb_funcionario` (`id_funcionario`);

--
-- Limitadores para a tabela `tb_jornada`
--
ALTER TABLE `tb_jornada`
  ADD CONSTRAINT `fk13` FOREIGN KEY (`id_funcionario`) REFERENCES `tb_funcionario` (`id_funcionario`),
  ADD CONSTRAINT `fk14` FOREIGN KEY (`id_ponto`) REFERENCES `tb_folhaponto` (`id_ponto`);

--
-- Limitadores para a tabela `tb_login`
--
ALTER TABLE `tb_login`
  ADD CONSTRAINT `fk6` FOREIGN KEY (`id_funcionario`) REFERENCES `tb_funcionario` (`id_funcionario`);

--
-- Limitadores para a tabela `tb_solicitacoes`
--
ALTER TABLE `tb_solicitacoes`
  ADD CONSTRAINT `fk8` FOREIGN KEY (`id_funcionario`) REFERENCES `tb_funcionario` (`id_funcionario`);

--
-- Limitadores para a tabela `tb_telefone`
--
ALTER TABLE `tb_telefone`
  ADD CONSTRAINT `fk7` FOREIGN KEY (`id_funcionario`) REFERENCES `tb_funcionario` (`id_funcionario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
