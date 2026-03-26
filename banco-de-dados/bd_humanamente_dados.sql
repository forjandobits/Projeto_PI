-- phpMyAdmin SQL Dump
-- version 5.2.3-1.fc43
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 25-Mar-2026 às 00:26
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
(1, 1, 'RG', '/home/user/documentos/funcionario1/rg.pdf'),
(2, 2, 'CPF', '/home/user/documentos/funcionario2/cpf.pdf'),
(3, 3, 'CTPS', '/home/user/documentos/funcionario3/ctps.pdf'),
(4, 4, 'Comprovante Escolaridade', '/home/user/documentos/funcionario4/escolaridade.pdf'),
(5, 5, 'CNH', '/home/user/documentos/funcionario5/cnh.jpg'),
(6, 6, 'RG', '/home/user/documentos/funcionario6/rg.jpg'),
(7, 7, 'CPF', '/home/user/documentos/funcionario7/cpf.pdf'),
(8, 8, 'Título de Eleitor', '/home/user/documentos/funcionario8/titulo_eleitor.pdf'),
(9, 9, 'Certidão de Nascimento', '/home/user/documentos/funcionario9/certidao.jpg'),
(10, 10, 'RG', '/home/user/documentos/funcionario10/rg.pdf'),
(11, 11, 'CNH', '/home/user/documentos/funcionario11/cnh.jpg'),
(12, 12, 'Comprovante Escolaridade', '/home/user/documentos/funcionario12/escolaridade.pdf'),
(13, 13, 'CPF', '/home/user/documentos/funcionario13/cpf.pdf'),
(14, 14, 'Registro Profissional', '/home/user/documentos/funcionario14/registro_profissional.pdf'),
(15, 15, 'RG', '/home/user/documentos/funcionario15/rg.jpg');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_banco`
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
  KEY `id_funcionario` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_banco`
--

INSERT INTO `tb_banco` (`id_banco`, `id_funcionario`, `nome_banco`, `agencia`, `numero_conta`, `tipo_conta`, `chave_pix`) VALUES
(1, 1, '', '1234', '45879-1', 'Corrente', 'carlos.silva@email.com'),
(2, 2, '', '1234', '45879-2', 'Corrente', 'joao.santos@email.com'),
(3, 3, '', '1234', '45879-3', 'Poupança', 'fernanda.costa@email.com'),
(4, 4, '', '1234', '45879-4', 'Corrente', 'mariana.lima@email.com'),
(5, 5, '', '1234', '45879-5', 'Corrente', 'paulo.mendes@email.com'),
(6, 6, '', '1234', '45879-6', 'Poupança', 'juliana.gomes@email.com'),
(7, 7, '', '1234', '45879-7', 'Corrente', 'ricardo.rocha@email.com'),
(8, 8, '', '1234', '45879-8', 'Corrente', 'patricia.ribeiro@email.com'),
(9, 9, '', '1234', '45879-9', 'Poupança', 'lucas.teixeira@email.com'),
(10, 10, '', '1234', '45879-10', 'Corrente', 'sandra.barros@email.com'),
(11, 11, '', '1234', '45879-11', 'Corrente', 'gabriel.nogueira@email.com'),
(12, 12, '', '1234', '45879-12', 'Poupança', 'roberto.pinto@email.com'),
(13, 13, '', '1234', '45879-13', 'Corrente', 'camila.lopes@email.com'),
(14, 14, '', '1234', '45879-14', 'Corrente', 'eduardo.matos@email.com'),
(15, 15, '', '1234', '45879-15', 'Poupança', 'ana.faria@email.com');

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
  `cbo` varchar(10) NOT NULL,
  PRIMARY KEY (`id_cargo`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_cargo`
--

INSERT INTO `tb_cargo` (`id_cargo`, `nome_cargo`, `salario`, `carga_horaria`, `regime_trabalhista`, `cbo`) VALUES
(1, 'Padeiro', '2800.00', 44, 'CLT', '848105'),
(2, 'Auxiliar de Padeiro', '1800.00', 44, 'CLT', '848110'),
(3, 'Confeiteiro', '3000.00', 44, 'CLT', '848205'),
(4, 'Auxiliar de Confeitaria', '1700.00', 44, 'CLT', '848210'),
(5, 'Atendente', '1600.00', 44, 'CLT', '521140'),
(6, 'Caixa', '1700.00', 44, 'CLT', '421125'),
(7, 'Gerente', '4500.00', 44, 'CLT', '141420'),
(8, 'Subgerente', '3500.00', 44, 'CLT', '141415'),
(9, 'Estoquista', '1900.00', 44, 'CLT', '414125'),
(10, 'Auxiliar de Limpeza', '1500.00', 44, 'CLT', '514320'),
(11, 'Entregador', '2000.00', 44, 'CLT', '782310'),
(12, 'Cozinheiro', '2600.00', 44, 'CLT', '513205'),
(13, 'Auxiliar de Cozinha', '1700.00', 44, 'CLT', '513505'),
(14, 'Supervisor de Turno', '3200.00', 44, 'CLT', '141420'),
(15, 'Nutricionista', '4000.00', 40, 'CLT', '223710');

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
  `cnh` tinyint(1) NOT NULL DEFAULT 0,
  `cam` tinyint(1) NOT NULL DEFAULT 0,
  `titulo_eleitor` text DEFAULT NULL,
  `certidao_casamento_nascimento` tinyint(1) NOT NULL DEFAULT 0,
  `laudo_pcd` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_documento`),
  KEY `id_funcionario` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_documento`
--

INSERT INTO `tb_documento` (`id_documento`, `id_funcionario`, `rg`, `cpf`, `ctps`, `pis_pasep`, `nis`, `nit`, `registro_profissional`, `cnh`, `cam`, `titulo_eleitor`, `certidao_casamento_nascimento`, `laudo_pcd`) VALUES
(1, 1, 'MG-12.345.678', '123.456.789-01', '12345678901', '12345678901', '12345678901', '12345678901', 'REG-001', 0, 0, '123456789012', 0, 0),
(2, 2, 'MG-23.456.789', '234.567.890-12', '23456789012', '23456789012', '23456789012', '23456789012', 'REG-002', 0, 0, '234567890123', 0, 0),
(3, 3, 'MG-34.567.890', '345.678.901-23', '34567890123', '34567890123', '34567890123', '34567890123', 'REG-003', 0, 0, '345678901234', 0, 0),
(4, 4, 'MG-45.678.901', '456.789.012-34', '45678901234', '45678901234', '45678901234', '45678901234', 'REG-004', 0, 0, '456789012345', 0, 0),
(5, 5, 'MG-56.789.012', '567.890.123-45', '56789012345', '56789012345', '56789012345', '56789012345', 'REG-005', 0, 0, '567890123456', 0, 0),
(6, 6, 'MG-67.890.123', '678.901.234-56', '67890123456', '67890123456', '67890123456', '67890123456', 'REG-006', 0, 0, '678901234567', 0, 0),
(7, 7, 'MG-78.901.234', '789.012.345-67', '78901234567', '78901234567', '78901234567', '78901234567', 'REG-007', 0, 0, '789012345678', 0, 0),
(8, 8, 'MG-89.012.345', '890.123.456-78', '89012345678', '89012345678', '89012345678', '89012345678', 'REG-008', 0, 0, '890123456789', 0, 0),
(9, 9, 'MG-90.123.456', '901.234.567-89', '90123456789', '90123456789', '90123456789', '90123456789', 'REG-009', 0, 0, '901234567890', 0, 0),
(10, 10, 'MG-10.234.567', '012.345.678-90', '01234567890', '01234567890', '01234567890', '01234567890', 'REG-010', 0, 0, '012345678901', 0, 0),
(11, 11, 'MG-11.345.678', '111.222.333-44', '11122233344', '11122233344', '11122233344', '11122233344', 'REG-011', 0, 0, '111222333444', 0, 0),
(12, 12, 'MG-22.456.789', '222.333.444-55', '22233344455', '22233344455', '22233344455', '22233344455', 'REG-012', 0, 0, '222333444555', 0, 0),
(13, 13, 'MG-33.567.890', '333.444.555-66', '33344455566', '33344455566', '33344455566', '33344455566', 'REG-013', 0, 0, '333444555666', 0, 0),
(14, 14, 'MG-44.678.901', '444.555.666-77', '44455566677', '44455566677', '44455566677', '44455566677', 'REG-014', 0, 0, '444555666777', 0, 0),
(15, 15, 'MG-55.789.012', '555.666.777-88', '55566677788', '55566677788', '55566677788', '55566677788', 'REG-015', 0, 0, '555666777888', 0, 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_endereco`
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
  KEY `id_funcionario` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_endereco`
--

INSERT INTO `tb_endereco` (`id_endereco`, `id_funcionario`, `estado`, `cidade`, `bairro`, `rua`, `numero_casa`, `cep`, `complemento`) VALUES
(1, 1, '', 'Governador Valadares', 'Centro', 'Rua Afonso Pena', 120, '35010-000', NULL),
(2, 2, '', 'Governador Valadares', 'Grã-Duquesa', 'Rua Bahia', 55, '35020-000', NULL),
(3, 3, '', 'Governador Valadares', 'Lourdes', 'Rua Minas Gerais', 88, '35030-000', 'Apto 101'),
(4, 4, '', 'Governador Valadares', 'São Pedro', 'Rua das Flores', 230, '35040-000', NULL),
(5, 5, '', 'Governador Valadares', 'Centro', 'Rua Sete de Setembro', 12, '35010-100', NULL),
(6, 6, '', 'Governador Valadares', 'Vila Isa', 'Rua Goiás', 90, '35020-200', 'Casa B'),
(7, 7, '', 'Governador Valadares', 'Centro', 'Av Brasil', 500, '35010-200', 'Apto 402'),
(8, 8, '', 'Governador Valadares', 'Morada do Vale', 'Rua do Sol', 145, '35020-300', NULL),
(9, 9, '', 'Governador Valadares', 'Santos Dumont', 'Rua do Comércio', 74, '35030-400', NULL),
(10, 10, '', 'Governador Valadares', 'Centro', 'Rua Paraná', 65, '35010-300', NULL),
(11, 11, '', 'Governador Valadares', 'Grã-Duquesa', 'Rua Sergipe', 31, '35020-500', NULL),
(12, 12, '', 'Governador Valadares', 'Vila Bretas', 'Rua Amazonas', 210, '35040-200', NULL),
(13, 13, '', 'Governador Valadares', 'Altinópolis', 'Rua das Palmeiras', 95, '35030-600', NULL),
(14, 14, '', 'Governador Valadares', 'Centro', 'Rua Marechal Floriano', 300, '35010-400', 'Apto 201'),
(15, 15, '', 'Governador Valadares', 'Morada do Vale', 'Rua das Acácias', 41, '35020-700', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_filho`
--

CREATE TABLE IF NOT EXISTS `tb_filho` (
  `id_filho` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `tem_filho` tinyint(1) NOT NULL DEFAULT 0,
  `numero_filho` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_filho`),
  KEY `id_funcionario` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `tb_filho`
--

INSERT INTO `tb_filho` (`id_filho`, `id_funcionario`, `tem_filho`, `numero_filho`) VALUES
(1, 1, 1, 2),
(2, 2, 1, 1),
(3, 3, 0, NULL),
(4, 4, 0, NULL),
(5, 5, 1, 3),
(6, 6, 1, 2),
(7, 7, 0, NULL),
(8, 8, 1, 1),
(9, 9, 0, NULL),
(10, 10, 0, NULL),
(11, 11, 1, 2),
(12, 12, 1, 2),
(13, 13, 0, NULL),
(14, 14, 1, 1),
(15, 15, 0, NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_folhapagamento`
--

CREATE TABLE IF NOT EXISTS `tb_folhapagamento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `informacoes` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`informacoes`)),
  `data_lancamento` date DEFAULT curdate(),
  `mes_referencia` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_funcionario` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_folhapagamento`
--

INSERT INTO `tb_folhapagamento` (`id`, `id_funcionario`, `informacoes`, `data_lancamento`, `mes_referencia`) VALUES
(1, 1, '{\"salario_base\":2800,\"horas_extras\":350,\"descontos\":220,\"salario_liquido\":2930}', '2026-03-05', '2025-03'),
(2, 2, '{\"salario_base\":1800,\"horas_extras\":0,\"descontos\":220,\"salario_liquido\":1580}', '2026-03-05', '2025-03'),
(3, 3, '{\"salario_base\":1900,\"comissao\":180.50,\"descontos\":200,\"salario_liquido\":1880.50}', '2026-03-05', '2025-03'),
(4, 4, '{\"salario_base\":2000,\"beneficios\":300,\"descontos\":210,\"salario_liquido\":2090}', '2026-03-05', '2025-03'),
(5, 5, '{\"salario_base\":1700,\"horas_extras\":120,\"descontos\":180,\"salario_liquido\":1640}', '2026-03-05', '2025-03'),
(6, 6, '{\"salario_base\":2600,\"adicional_noturno\":210,\"descontos\":250,\"salario_liquido\":2560}', '2026-03-05', '2025-03'),
(7, 7, '{\"salario_base\":1800,\"beneficios\":220,\"descontos\":220,\"salario_liquido\":1800}', '2026-03-05', '2025-03'),
(8, 8, '{\"salario_base\":4500,\"bonus\":500,\"descontos\":400,\"salario_liquido\":4600}', '2026-03-05', '2025-03'),
(9, 9, '{\"salario_base\":1700,\"horas_extras\":90,\"descontos\":170,\"salario_liquido\":1620}', '2026-03-05', '2025-03'),
(10, 10, '{\"salario_base\":1600,\"desconto_falta\":150,\"descontos\":200,\"salario_liquido\":1250}', '2026-03-05', '2025-03'),
(11, 11, '{\"salario_base\":2100,\"comissao\":260,\"descontos\":220,\"salario_liquido\":2140}', '2026-03-05', '2025-03'),
(12, 12, '{\"salario_base\":1900,\"beneficios\":300,\"descontos\":200,\"salario_liquido\":2000}', '2026-03-05', '2025-03'),
(13, 13, '{\"salario_base\":1750,\"horas_extras\":75,\"descontos\":180,\"salario_liquido\":1645}', '2026-03-05', '2025-03'),
(14, 14, '{\"salario_base\":5200,\"gratificacao\":800,\"descontos\":600,\"salario_liquido\":5400}', '2026-03-05', '2025-03'),
(15, 15, '{\"salario_base\":1800,\"beneficios\":220,\"descontos\":200,\"salario_liquido\":1820}', '2026-03-05', '2025-03');

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
  `ferias_falta_abonada` int(11) DEFAULT NULL,
  `atrasos` int(11) DEFAULT NULL,
  `observacoes` text DEFAULT NULL,
  `fechado` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_ponto`),
  KEY `id_funcionario` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_folhaponto`
--

INSERT INTO `tb_folhaponto` (`id_ponto`, `id_funcionario`, `data`, `total_horas_dia`, `horas_extras`, `faltas`, `ferias_falta_abonada`, `atrasos`, `observacoes`, `fechado`) VALUES
(1, 1, '2025-03-03', 8, 2, NULL, NULL, NULL, 'Produção maior de pães', 0),
(2, 2, '2025-03-03', 8, NULL, NULL, NULL, 1, 'Atraso por transporte', 0),
(3, 3, '2025-03-04', 8, NULL, NULL, NULL, NULL, NULL, 0),
(4, 4, '2025-03-04', 8, NULL, NULL, NULL, NULL, NULL, 0),
(5, 5, '2025-03-05', 8, NULL, NULL, NULL, 1, 'Atraso leve', 0),
(6, 6, '2025-03-05', 8, 1, NULL, NULL, NULL, 'Movimento alto na padaria', 0),
(7, 7, '2025-03-06', 8, NULL, NULL, NULL, NULL, NULL, 0),
(8, 8, '2025-03-06', 8, NULL, NULL, NULL, NULL, NULL, 0),
(9, 9, '2025-03-07', 8, NULL, NULL, NULL, NULL, NULL, 0),
(10, 10, '2025-03-07', 0, NULL, 1, NULL, NULL, 'Falta justificada', 0),
(11, 11, '2025-03-08', 8, 2, NULL, NULL, NULL, 'Muitas entregas', 0),
(12, 12, '2025-03-08', 8, NULL, NULL, NULL, NULL, NULL, 0),
(13, 13, '2025-03-09', 6, NULL, NULL, NULL, NULL, 'Saiu mais cedo', 0),
(14, 14, '2025-03-09', 8, 1, NULL, NULL, NULL, 'Supervisão de turno', 0),
(15, 15, '2025-03-09', 8, NULL, NULL, NULL, NULL, NULL, 0);

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
  `situacao` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id_funcionario`),
  KEY `id_cargo` (`id_cargo`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_funcionario`
--

INSERT INTO `tb_funcionario` (`id_funcionario`, `id_cargo`, `nome_completo`, `data_nascimento`, `sexo`, `estado_civil`, `email`, `data_admissao`, `data_demissao`, `situacao`) VALUES
(1, 1, 'Carlos Henrique Silva', '1985-04-12', 'Masculino', 'Casado', 'carlos.silva@email.com', '2018-02-10', NULL, 1),
(2, 2, 'João Pedro Santos', '1998-07-20', 'Masculino', 'Solteiro', 'joao.santos@email.com', '2022-03-01', NULL, 1),
(3, 3, 'Fernanda Alves Costa', '1990-01-15', 'Feminino', 'Casada', 'fernanda.costa@email.com', '2019-05-22', NULL, 1),
(4, 4, 'Mariana Souza Lima', '2000-10-08', 'Feminino', 'Solteira', 'mariana.lima@email.com', '2023-01-10', NULL, 1),
(5, 5, 'Paulo Roberto Mendes', '1995-12-02', 'Masculino', 'Solteiro', 'paulo.mendes@email.com', '2021-06-11', NULL, 1),
(6, 6, 'Juliana Ferreira Gomes', '1992-03-18', 'Feminino', 'Casada', 'juliana.gomes@email.com', '2020-07-05', NULL, 1),
(7, 7, 'Ricardo Batista Rocha', '1980-09-09', 'Masculino', 'Casado', 'ricardo.rocha@email.com', '2015-02-15', NULL, 1),
(8, 8, 'Patricia Martins Ribeiro', '1987-06-30', 'Feminino', 'Casada', 'patricia.ribeiro@email.com', '2017-11-20', NULL, 1),
(9, 9, 'Lucas Oliveira Teixeira', '1999-04-25', 'Masculino', 'Solteiro', 'lucas.teixeira@email.com', '2023-05-17', NULL, 1),
(10, 10, 'Sandra Regina Barros', '1978-02-14', 'Feminino', 'Divorciada', 'sandra.barros@email.com', '2016-08-09', NULL, 1),
(11, 11, 'Gabriel Duarte Nogueira', '1996-11-11', 'Masculino', 'Solteiro', 'gabriel.nogueira@email.com', '2022-09-01', NULL, 1),
(12, 12, 'Roberto Carvalho Pinto', '1984-05-19', 'Masculino', 'Casado', 'roberto.pinto@email.com', '2018-10-01', NULL, 1),
(13, 13, 'Camila Rodrigues Lopes', '2001-01-30', 'Feminino', 'Solteira', 'camila.lopes@email.com', '2024-01-10', NULL, 1),
(14, 14, 'Eduardo Freitas Matos', '1988-12-09', 'Masculino', 'Casado', 'eduardo.matos@email.com', '2019-04-15', NULL, 1),
(15, 15, 'Ana Carolina Faria', '1993-08-22', 'Feminino', 'Casada', 'ana.faria@email.com', '2021-02-18', NULL, 1);

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
  KEY `id_funcionario` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

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
(8, 8, '08:00:00', '17:00:00', '12:00:00', '13:00:00'),
(9, 9, '08:00:00', '17:00:00', '12:00:00', '13:00:00'),
(10, 10, '08:00:00', '17:00:00', '12:00:00', '13:00:00'),
(11, 11, '08:00:00', '17:00:00', '12:00:00', '13:00:00'),
(12, 12, '08:00:00', '17:00:00', '12:00:00', '13:00:00'),
(13, 13, '08:00:00', '17:00:00', '12:00:00', '13:00:00'),
(14, 14, '08:00:00', '17:00:00', '12:00:00', '13:00:00'),
(15, 15, '08:00:00', '17:00:00', '12:00:00', '13:00:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_jornada`
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
  KEY `id_funcionario` (`id_funcionario`),
  KEY `id_ponto` (`id_ponto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_jornada`
--

INSERT INTO `tb_jornada` (`id_jornada`, `id_funcionario`, `id_ponto`, `hora_entrada`, `hora_saida`, `intervalo_inicio`, `intervalo_fim`, `dia_semana`, `confirmado`) VALUES
(1, 1, 1, '05:00:00', '14:00:00', '09:00:00', '10:00:00', 'Segunda', 0),
(2, 2, 2, '08:10:00', '17:00:00', '12:00:00', '13:00:00', 'Segunda', 0),
(3, 3, 3, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Terça', 0),
(4, 4, 4, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Terça', 0),
(5, 5, 5, '08:15:00', '17:00:00', '12:00:00', '13:00:00', 'Quarta', 0),
(6, 6, 6, '08:00:00', '18:00:00', '12:00:00', '13:00:00', 'Quarta', 0),
(7, 7, 7, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Quinta', 0),
(8, 8, 8, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Quinta', 0),
(9, 9, 9, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sexta', 0),
(10, 10, 10, '00:00:00', '00:00:00', '00:00:00', '00:00:00', 'Sexta', 0),
(11, 11, 11, '07:00:00', '18:00:00', '12:00:00', '13:00:00', 'Sábado', 0),
(12, 12, 12, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Sábado', 0),
(13, 13, 13, '08:00:00', '15:00:00', '12:00:00', '13:00:00', 'Domingo', 0),
(14, 14, 14, '08:00:00', '18:00:00', '12:00:00', '13:00:00', 'Domingo', 0),
(15, 15, 15, '08:00:00', '17:00:00', '12:00:00', '13:00:00', 'Domingo', 0);

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
(1, 1, 'carlos.silva', '123456'),
(2, 2, 'joao.santos', '123456'),
(3, 3, 'fernanda.costa', '123456'),
(4, 4, 'mariana.lima', '123456'),
(5, 5, 'paulo.mendes', '123456'),
(6, 6, 'juliana.gomes', '123456'),
(7, 7, 'ricardo.rocha', '123456'),
(8, 8, 'patricia.ribeiro', '123456'),
(9, 9, 'lucas.teixeira', '123456'),
(10, 10, 'sandra.barros', '123456'),
(11, 11, 'gabriel.nogueira', '123456'),
(12, 12, 'roberto.pinto', '123456'),
(13, 13, 'camila.lopes', '123456'),
(14, 14, 'eduardo.matos', '123456'),
(15, 15, 'ana.faria', '123456');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_proventos`
--

CREATE TABLE IF NOT EXISTS `tb_proventos` (
  `id_beneficio` int(11) NOT NULL AUTO_INCREMENT,
  `nome_beneficio` varchar(150) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `desconto` int(11) NOT NULL DEFAULT 0,
  `referencia` double NOT NULL,
  PRIMARY KEY (`id_beneficio`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `tb_proventos`
--

INSERT INTO `tb_proventos` (`id_beneficio`, `nome_beneficio`, `valor`, `desconto`, `referencia`) VALUES
(1, 'Salário', '1621.00', 0, 1),
(2, '13º Salário', '1621.00', 0, 1),
(3, 'Vale Transporte', '150.00', 1, 1),
(4, 'Comissão', '180.00', 0, 1),
(5, 'Vale Alimentação', '450.00', 0, 1),
(6, 'IRPF', '0.00', 1, 1),
(7, 'INSS', '0.00', 1, 1),
(8, 'Bônus de Desempenho', '500.00', 0, 1),
(9, 'Adicional Noturno', '210.00', 0, 1),
(10, 'Desconto Falta', '50.00', 1, 1),
(11, 'Horas Extras', '50.00', 0, 1),
(12, 'Gratificação Cargo', '200.00', 0, 1);

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
(1, 1, '2025-01-10', 'Férias', 'Solicitação de férias de 30 dias', 'Período aquisitivo completo', 'Aprovado'),
(2, 2, '2025-02-05', 'Troca de turno', 'Deseja trocar turno da manhã para tarde', 'Curso técnico no período da manhã', 'Pendente'),
(3, 3, '2025-02-12', 'Atestado médico', 'Entrega de atestado médico de 2 dias', 'Consulta e recuperação de gripe', 'Aprovado'),
(4, 4, '2025-02-18', 'Folga', 'Solicitação de folga em dia específico', 'Compromisso familiar', 'Aprovado'),
(5, 5, '2025-02-20', 'Troca de escala', 'Solicita alteração da escala semanal', 'Dificuldade de transporte aos domingos', 'Pendente'),
(6, 6, '2025-02-25', 'Licença', 'Solicitação de licença de 5 dias', 'Problemas de saúde na família', 'Aprovado'),
(7, 7, '2025-03-01', 'Férias', 'Solicitação de férias de 20 dias', 'Descanso anual', 'Pendente'),
(8, 8, '2025-03-03', 'Alteração de dados', 'Atualização de endereço no cadastro', 'Mudança de residência', 'Aprovado'),
(9, 9, '2025-03-04', 'Folga', 'Solicitação de folga em feriado', 'Viagem curta', 'Rejeitado'),
(10, 10, '2025-03-05', 'Atestado médico', 'Entrega de atestado de 1 dia', 'Consulta odontológica', 'Aprovado'),
(11, 11, '2025-03-06', 'Troca de turno', 'Trocar turno com colega', 'Facilitar estudo noturno', 'Pendente'),
(12, 12, '2025-03-07', 'Férias', 'Solicitação de férias de 30 dias', 'Período anual de descanso', 'Pendente'),
(13, 13, '2025-03-08', 'Folga', 'Solicitação de folga', 'Participação em evento familiar', 'Aprovado'),
(14, 14, '2025-03-09', 'Licença', 'Licença de 3 dias', 'Tratamento médico', 'Aprovado'),
(15, 15, '2025-03-10', 'Alteração de dados', 'Atualização de telefone', 'Troca de número pessoal', 'Aprovado');

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
(1, 1, '(33)98811-1200', 'Celular'),
(2, 2, '(33)98811-1300', 'Celular'),
(3, 3, '(33)98811-1400', 'Celular'),
(4, 4, '(33)98811-1500', 'Celular'),
(5, 5, '(33)98811-1600', 'Celular'),
(6, 6, '(33)98811-1700', 'Celular'),
(7, 7, '(33)98811-1800', 'Celular'),
(8, 8, '(33)98811-1900', 'Celular'),
(9, 9, '(33)98811-2000', 'Celular'),
(10, 10, '(33)98811-2100', 'Celular'),
(11, 11, '(33)98811-2200', 'Celular'),
(12, 12, '(33)98811-2300', 'Celular'),
(13, 13, '(33)98811-2400', 'Celular'),
(14, 14, '(33)98811-2500', 'Celular'),
(15, 15, '(33)98811-2600', 'Celular');

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
,`horas_trabalhadas_semana` decimal(32,0)
,`diferenca_horas` decimal(33,0)
,`situacao` varchar(16)
);

-- --------------------------------------------------------

--
-- Estrutura para vista `view_folha_ponto`
--
DROP TABLE IF EXISTS `view_folha_ponto`;

CREATE OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_folha_ponto`  AS SELECT `f`.`id_funcionario` AS `id_funcionario`, `f`.`nome_completo` AS `nome_completo`, `c`.`nome_cargo` AS `nome_cargo`, `c`.`carga_horaria` AS `carga_semanal_prevista`, sum(`p`.`total_horas_dia`) AS `horas_trabalhadas_semana`, sum(`p`.`total_horas_dia`) - cast(replace(replace(`c`.`carga_horaria`,'h',''),' semanais','') as signed) AS `diferenca_horas`, CASE WHEN sum(`p`.`total_horas_dia`) < cast(replace(replace(`c`.`carga_horaria`,'h',''),' semanais','') as signed) THEN 'Faltando horas' WHEN sum(`p`.`total_horas_dia`) = cast(replace(replace(`c`.`carga_horaria`,'h',''),' semanais','') as signed) THEN 'Cumpriu certinho' ELSE 'Excedeu horas' END AS `situacao` FROM ((`tb_funcionario` `f` join `tb_cargo` `c` on(`f`.`id_cargo` = `c`.`id_cargo`)) join `tb_folhaponto` `p` on(`f`.`id_funcionario` = `p`.`id_funcionario`)) GROUP BY `f`.`id_funcionario`, `f`.`nome_completo`, `c`.`nome_cargo`, `c`.`carga_horaria` ORDER BY sum(`p`.`total_horas_dia`) - cast(replace(replace(`c`.`carga_horaria`,'h',''),' semanais','') as signed) ASC  ;

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
-- Estrutura para vista `view_espelho_ponto`
--
DROP TABLE IF EXISTS `view_espelho_ponto`;

CREATE OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_espelho_ponto`  AS SELECT `tb_folhaponto`.`data` AS `data`, `tb_jornada`.`dia_semana` AS `dia_semana`, `tb_jornada`.`hora_entrada` AS `hora_entrada`, `tb_jornada`.`hora_saida` AS `hora_saida`, `tb_jornada`.`intervalo_inicio` AS `intervalo_inicio`, `tb_jornada`.`intervalo_fim` AS `intervalo_fim`, sec_to_time(timestampdiff(SECOND,`tb_jornada`.`intervalo_inicio`,`tb_jornada`.`intervalo_fim`)) AS `total_intervalo`, `tb_folhaponto`.`faltas` AS `faltas`, sec_to_time(timestampdiff(SECOND,`tb_jornada`.`hora_entrada`,`tb_jornada`.`hora_saida`) - timestampdiff(SECOND,`tb_jornada`.`intervalo_inicio`,`tb_jornada`.`intervalo_fim`)) AS `total_horas_dia`, `tb_funcionario`.`nome_completo` AS `nome_completo`, `tb_funcionario`.`id_funcionario` AS `id_funcionario`, `tb_jornada`.`id_jornada` AS `id_jornada`, `tb_jornada`.`id_ponto` AS `id_ponto` FROM (((`tb_funcionario` join `tb_cargo` on(`tb_funcionario`.`id_cargo` = `tb_cargo`.`id_cargo`)) join `tb_folhaponto` on(`tb_funcionario`.`id_funcionario` = `tb_folhaponto`.`id_funcionario`)) join `tb_jornada` on(`tb_funcionario`.`id_funcionario` = `tb_jornada`.`id_funcionario` and `tb_folhaponto`.`id_ponto` = `tb_jornada`.`id_ponto`))  ;


--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `tb_arquivo`
--
ALTER TABLE `tb_arquivo`
  ADD CONSTRAINT `tb_arquivo_ibfk_1` FOREIGN KEY (`id_documento`) REFERENCES `tb_documento` (`id_documento`);

--
-- Restrições para tabelas `tb_folhapagamento`
--
ALTER TABLE `tb_folhapagamento`
  ADD CONSTRAINT `tb_folhapagamento_ibfk_1` FOREIGN KEY (`id_funcionario`) REFERENCES `tb_funcionario` (`id_funcionario`);

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
-- Limitadores para a tabela `tb_horario`
--
ALTER TABLE `tb_horario`
  ADD CONSTRAINT `tb_horario_ibfk_1` FOREIGN KEY (`id_funcionario`) REFERENCES `tb_funcionario` (`id_funcionario`);

--
-- Limitadores para a tabela `tb_solicitacoes`
--
ALTER TABLE `tb_solicitacoes`
  ADD CONSTRAINT `tb_solicitacoes_ibfk_1` FOREIGN KEY (`id_funcionario`) REFERENCES `tb_funcionario` (`id_funcionario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;