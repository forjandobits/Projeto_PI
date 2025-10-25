-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 25-Out-2025 às 01:42
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
-- Banco de dados: `bd_humanamente_teste`
--
CREATE DATABASE IF NOT EXISTS `bd_humanamente_teste` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bd_humanamente_teste`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_arquivo`
--

CREATE TABLE `tb_arquivo` (
  `id_arquivo` int(11) NOT NULL,
  `id_documento` int(11) NOT NULL,
  `tipo_documento` text NOT NULL,
  `url_arquivo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_arquivo`
--

INSERT INTO `tb_arquivo` (`id_arquivo`, `id_documento`, `tipo_documento`, `url_arquivo`) VALUES
(1, 1, 'RG', 'https://empresa.com/docs/marcos_rg.pdf'),
(2, 1, 'CPF', 'https://empresa.com/docs/marcos_cpf.pdf'),
(3, 2, 'CTPS', 'https://empresa.com/docs/fernanda_ctps.pdf'),
(4, 3, 'CNH', 'https://empresa.com/docs/carlos_cnh.pdf'),
(5, 4, 'TITULO_ELEITOR', 'https://empresa.com/docs/juliana_titulo.pdf');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_banco`
--

CREATE TABLE `tb_banco` (
  `id_banco` int(11) NOT NULL,
  `id_funcionario` int(11) NOT NULL,
  `agencia` text NOT NULL,
  `numero_conta` text NOT NULL,
  `tipo_conta` text NOT NULL,
  `chave_pix` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_banco`
--

INSERT INTO `tb_banco` (`id_banco`, `id_funcionario`, `agencia`, `numero_conta`, `tipo_conta`, `chave_pix`) VALUES
(1, 1, '341-2', '12890-1', 'Corrente', '358.442.180-10'),
(2, 2, '104-1', '88774-2', 'Poupança', '472.995.870-45'),
(3, 3, '001-9', '44781-3', 'Corrente', '415.887.120-00'),
(4, 4, '033-3', '55621-5', 'Corrente', '359.554.900-88'),
(5, 5, '237-8', '99012-6', 'Poupança', '278.119.300-01');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_cargo`
--

CREATE TABLE `tb_cargo` (
  `id_cargo` int(11) NOT NULL,
  `nome_cargo` text NOT NULL,
  `salario` double NOT NULL,
  `carga_horaria` text NOT NULL,
  `regime_trabalhista` text NOT NULL,
  `escala` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_cargo`
--

INSERT INTO `tb_cargo` (`id_cargo`, `nome_cargo`, `salario`, `carga_horaria`, `regime_trabalhista`, `escala`) VALUES
(1, 'Gerente Administrativo', 8500, '44h semanais', 'CLT', 'Segunda a Sexta'),
(2, 'Assistente Financeiro', 4200, '40h semanais', 'CLT', 'Segunda a Sexta'),
(3, 'Analista de RH', 5000, '44h semanais', 'CLT', 'Segunda a Sexta'),
(4, 'Técnico de Informática', 3800, '44h semanais', 'CLT', 'Segunda a Sábado'),
(5, 'Auxiliar de Limpeza', 2200, '44h semanais', 'CLT', 'Segunda a Sábado');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_documento`
--

CREATE TABLE `tb_documento` (
  `id_documento` int(11) NOT NULL,
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
  `laudo_pcd` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_documento`
--

INSERT INTO `tb_documento` (`id_documento`, `id_funcionario`, `rg`, `cpf`, `ctps`, `pis_pasep`, `nis`, `nit`, `registro_profissional`, `comprovante_escolaridade`, `cnh`, `cam`, `titulo_eleitor`, `certidao_casamento_nascimento`, `laudo_pcd`) VALUES
(1, 1, '25.331.221-0', '358.442.180-10', '00112233-55', '123.45678.90-1', '12345678900', '2233445566', 'CRA-12345', 'Superior Completo', '5566778899', NULL, '1234 5678 9012', 'Certidão Casamento nº 123456', NULL),
(2, 2, '42.552.331-8', '472.995.870-45', '00998877-22', '223.45678.10-2', '09876543211', '3344556677', 'CRC-88766', 'Superior Incompleto', NULL, NULL, '9876 5432 1098', 'Certidão Nascimento nº 789456', NULL),
(3, 3, '30.998.221-5', '415.887.120-00', '00445566-11', '111.33344.55-6', '55667788990', '4455667788', 'CRH-77889', 'Pós-Graduação', '8877665544', NULL, '4455 6677 8899', 'Certidão Casamento nº 558877', NULL),
(4, 4, '19.873.122-9', '359.554.900-88', '00774455-99', '144.22233.66-7', '66778899000', '5566778899', 'Técnico-Info-5566', 'Técnico Completo', '3344221100', NULL, '2244 5577 8899', 'Certidão Nascimento nº 778899', NULL),
(5, 5, '15.442.888-2', '278.119.300-01', '00331155-88', '133.55566.77-8', '77889900112', '6677889900', 'SIND-LIMP-9900', 'Ensino Médio', NULL, NULL, '9988 7766 5544', 'Certidão Casamento nº 445566', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_endereco`
--

CREATE TABLE `tb_endereco` (
  `id_endereco` int(11) NOT NULL,
  `id_funcionario` int(11) NOT NULL,
  `cidade` text NOT NULL,
  `bairro` text NOT NULL,
  `rua` text NOT NULL,
  `numero_casa` int(11) NOT NULL,
  `cep` text NOT NULL,
  `complemento` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_endereco`
--

INSERT INTO `tb_endereco` (`id_endereco`, `id_funcionario`, `cidade`, `bairro`, `rua`, `numero_casa`, `cep`, `complemento`) VALUES
(1, 1, 'São Paulo', 'Centro', 'Rua das Palmeiras', 123, '01010-000', 'Apto 301'),
(2, 2, 'São Paulo', 'Vila Mariana', 'Rua Domingos de Moraes', 876, '04105-000', 'Bloco B'),
(3, 3, 'Guarulhos', 'Jardim Maia', 'Rua Ipê Branco', 212, '07115-200', ''),
(4, 4, 'São Bernardo do Campo', 'Assunção', 'Av. João Firmino', 1520, '09810-030', 'Casa 2'),
(5, 5, 'Santo André', 'Centro', 'Rua das Laranjeiras', 56, '09015-000', '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_filho`
--

CREATE TABLE `tb_filho` (
  `id_filho` int(11) NOT NULL,
  `id_funcionario` int(11) NOT NULL,
  `certidao_filho` text NOT NULL,
  `idade_filho` int(11) NOT NULL,
  `escolaridade_filho` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_filho`
--

INSERT INTO `tb_filho` (`id_filho`, `id_funcionario`, `certidao_filho`, `idade_filho`, `escolaridade_filho`) VALUES
(1, 1, 'Certidão Filho 12345', 10, 'Ensino Fundamental'),
(2, 1, 'Certidão Filho 12346', 7, 'Ensino Fundamental'),
(3, 3, 'Certidão Filho 78901', 3, 'Educação Infantil'),
(4, 5, 'Certidão Filho 22222', 15, 'Ensino Médio'),
(5, 5, 'Certidão Filho 22223', 12, 'Ensino Fundamental');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_folhaponto`
--

CREATE TABLE `tb_folhaponto` (
  `id_ponto` int(11) NOT NULL,
  `id_funcionario` int(11) NOT NULL,
  `data` text NOT NULL,
  `total_horas_dia` int(11) NOT NULL,
  `horas_extras` int(11) DEFAULT NULL,
  `faltas` int(11) DEFAULT NULL,
  `atrasos` int(11) DEFAULT NULL,
  `observacoes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_folhaponto`
--

INSERT INTO `tb_folhaponto` (`id_ponto`, `id_funcionario`, `data`, `total_horas_dia`, `horas_extras`, `faltas`, `atrasos`, `observacoes`) VALUES
(1, 1, '2025-10-13', 8, 0, 0, 0, ''),
(2, 2, '2025-10-13', 8, 0, 0, 0, ''),
(3, 3, '2025-10-13', 8, 1, 0, 0, 'Trabalhou até 18h'),
(4, 4, '2025-10-13', 8, 0, 0, 0, ''),
(5, 5, '2025-10-13', 8, 0, 0, 0, ''),
(6, 1, '2025-10-14', 8, 1, 0, 0, 'Trabalhou até 18h'),
(7, 2, '2025-10-14', 8, 0, 0, 0, ''),
(8, 3, '2025-10-14', 8, 0, 0, 0, ''),
(9, 4, '2025-10-14', 7, 0, 0, 1, 'Saiu 1h mais cedo'),
(10, 5, '2025-10-14', 8, 0, 0, 0, ''),
(11, 1, '2025-10-15', 8, 0, 0, 0, ''),
(12, 2, '2025-10-15', 8, 0, 0, 0, ''),
(13, 3, '2025-10-15', 8, 0, 0, 0, ''),
(14, 4, '2025-10-15', 8, 0, 0, 0, ''),
(15, 5, '2025-10-15', 8, 0, 0, 0, ''),
(16, 1, '2025-10-16', 8, 0, 0, 0, ''),
(17, 2, '2025-10-16', 8, 0, 0, 0, ''),
(18, 3, '2025-10-16', 8, 1, 0, 0, 'Ficou até mais tarde para finalizar relatório'),
(19, 4, '2025-10-16', 8, 0, 0, 0, ''),
(20, 5, '2025-10-16', 8, 0, 0, 0, ''),
(21, 1, '2025-10-17', 7, 0, 0, 1, 'Saiu 1h mais cedo'),
(22, 2, '2025-10-17', 8, 0, 0, 0, ''),
(23, 3, '2025-10-17', 8, 0, 0, 0, ''),
(24, 4, '2025-10-17', 8, 0, 0, 0, ''),
(25, 5, '2025-10-17', 8, 0, 0, 0, ''),
(26, 4, '2025-10-18', 5, 0, 0, 0, 'Saída às 13h'),
(27, 5, '2025-10-18', 5, 0, 0, 0, 'Saída às 13h');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_funcionario`
--

CREATE TABLE `tb_funcionario` (
  `id_funcionario` int(11) NOT NULL,
  `id_cargo` int(11) NOT NULL,
  `nome_completo` text NOT NULL,
  `data_nascimento` text NOT NULL,
  `sexo` text NOT NULL,
  `estado_civil` text NOT NULL DEFAULT '0',
  `email` text NOT NULL,
  `data_demissao` text NOT NULL,
  `data_admissao` text NOT NULL,
  `situacao` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_funcionario`
--

INSERT INTO `tb_funcionario` (`id_funcionario`, `id_cargo`, `nome_completo`, `data_nascimento`, `sexo`, `estado_civil`, `email`, `data_demissao`, `data_admissao`, `situacao`) VALUES
(1, 1, 'Marcos Antônio Ribeiro', '1985-03-12', 'Masculino', 'Casado', 'marcos.ribeiro@empresa.com', '', '2015-04-10', 'Ativo'),
(2, 2, 'Fernanda Costa Almeida', '1990-11-05', 'Feminino', 'Solteira', 'fernanda.almeida@empresa.com', '', '2018-07-02', 'Ativo'),
(3, 3, 'Carlos Henrique Duarte', '1988-02-20', 'Masculino', 'Casado', 'carlos.duarte@empresa.com', '', '2019-01-15', 'Ativo'),
(4, 4, 'Juliana Silva Tavares', '1995-06-09', 'Feminino', 'Solteira', 'juliana.tavares@empresa.com', '', '2021-03-01', 'Ativo'),
(5, 5, 'Rogério Martins Pires', '1979-09-18', 'Masculino', 'Casado', 'rogerio.pires@empresa.com', '', '2014-11-20', 'Ativo');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_jornada`
--

CREATE TABLE `tb_jornada` (
  `id_jornada` int(11) NOT NULL,
  `id_funcionario` int(11) NOT NULL,
  `id_ponto` int(11) NOT NULL,
  `hora_entrada` text NOT NULL,
  `hora_saida` text DEFAULT NULL,
  `intervalo_inicio` text DEFAULT NULL,
  `intervalo_fim` text DEFAULT NULL,
  `dia_semana` text NOT NULL,
  `data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_jornada`
--

INSERT INTO `tb_jornada` (`id_jornada`, `id_funcionario`, `id_ponto`, `hora_entrada`, `hora_saida`, `intervalo_inicio`, `intervalo_fim`, `dia_semana`, `data`) VALUES
(1, 1, 7, '08:00', '17:00', '12:00', '13:00', 'Segunda', '2025-10-13'),
(2, 2, 8, '08:00', '17:00', '12:00', '13:00', 'Segunda', '2025-10-13'),
(3, 3, 9, '08:00', '18:00', '12:00', '13:00', 'Segunda', '2025-10-13'),
(4, 4, 10, '08:00', '17:00', '12:00', '13:00', 'Segunda', '2025-10-13'),
(5, 5, 11, '07:30', '16:30', '11:30', '12:30', 'Segunda', '2025-10-13'),
(6, 1, 12, '08:00', '18:00', '12:00', '13:00', 'Terça', '2025-10-14'),
(7, 2, 13, '08:00', '17:00', '12:00', '13:00', 'Terça', '2025-10-14'),
(8, 3, 14, '08:00', '17:00', '12:00', '13:00', 'Terça', '2025-10-14'),
(9, 4, 15, '08:00', '16:00', '12:00', '13:00', 'Terça', '2025-10-14'),
(10, 5, 16, '07:30', '16:30', '11:30', '12:30', 'Terça', '2025-10-14'),
(11, 1, 17, '08:00', '17:00', '12:00', '13:00', 'Quarta', '2025-10-15'),
(12, 2, 18, '08:00', '17:00', '12:00', '13:00', 'Quarta', '2025-10-15'),
(13, 3, 19, '08:00', '17:00', '12:00', '13:00', 'Quarta', '2025-10-15'),
(14, 4, 20, '08:00', '17:00', '12:00', '13:00', 'Quarta', '2025-10-15'),
(15, 5, 21, '07:30', '16:30', '11:30', '12:30', 'Quarta', '2025-10-15'),
(16, 1, 22, '08:00', '17:00', '12:00', '13:00', 'Quinta', '2025-10-16'),
(17, 2, 23, '08:00', '17:00', '12:00', '13:00', 'Quinta', '2025-10-16'),
(18, 3, 24, '08:00', '18:00', '12:00', '13:00', 'Quinta', '2025-10-16'),
(19, 4, 25, '08:00', '17:00', '12:00', '13:00', 'Quinta', '2025-10-16'),
(20, 5, 26, '07:30', '16:30', '11:30', '12:30', 'Quinta', '2025-10-16');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_login`
--

CREATE TABLE `tb_login` (
  `id_login` int(11) NOT NULL,
  `id_funcionario` int(11) NOT NULL,
  `nome_usuario` text NOT NULL,
  `senha` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_login`
--

INSERT INTO `tb_login` (`id_login`, `id_funcionario`, `nome_usuario`, `senha`) VALUES
(1, 1, 'marcos.r', 'Senha@123'),
(2, 2, 'fernanda.a', 'Senha@123'),
(3, 3, 'carlos.d', 'Senha@123'),
(4, 4, 'juliana.t', 'Senha@123'),
(5, 5, 'rogerio.p', 'Senha@123');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_previsto_beneficios`
--

CREATE TABLE `tb_previsto_beneficios` (
  `id_beneficio` int(11) NOT NULL,
  `id_funcionario` int(11) NOT NULL,
  `insalubridade` int(11) NOT NULL DEFAULT 0,
  `periculosidade` int(11) NOT NULL DEFAULT 0,
  `ferias` int(11) NOT NULL DEFAULT 0,
  `salario_13` int(11) NOT NULL DEFAULT 0,
  `vale_transporte` int(11) NOT NULL DEFAULT 0,
  `vale_alimentacao` int(11) NOT NULL DEFAULT 0,
  `plano_saude` int(11) NOT NULL DEFAULT 0,
  `inss` int(11) NOT NULL DEFAULT 0,
  `fgts` int(11) NOT NULL DEFAULT 0,
  `irrf` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_previsto_beneficios`
--

INSERT INTO `tb_previsto_beneficios` (`id_beneficio`, `id_funcionario`, `insalubridade`, `periculosidade`, `ferias`, `salario_13`, `vale_transporte`, `vale_alimentacao`, `plano_saude`, `inss`, `fgts`, `irrf`) VALUES
(1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1),
(2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0),
(3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1),
(4, 4, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0),
(5, 5, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_telefone`
--

CREATE TABLE `tb_telefone` (
  `id_telefone` int(11) NOT NULL,
  `id_funcionario` int(11) NOT NULL,
  `telefone` text NOT NULL,
  `tipo_telefone` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_telefone`
--

INSERT INTO `tb_telefone` (`id_telefone`, `id_funcionario`, `telefone`, `tipo_telefone`) VALUES
(1, 1, '(11) 98855-1200', 'Celular'),
(2, 1, '(11) 3251-4400', 'Residencial'),
(3, 2, '(11) 99645-2300', 'Celular'),
(4, 3, '(11) 97780-5600', 'Celular'),
(5, 4, '(11) 94022-8810', 'Celular'),
(6, 5, '(11) 95877-1100', 'Celular');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tb_arquivo`
--
ALTER TABLE `tb_arquivo`
  ADD PRIMARY KEY (`id_arquivo`),
  ADD KEY `id_documento` (`id_documento`);

--
-- Índices para tabela `tb_banco`
--
ALTER TABLE `tb_banco`
  ADD PRIMARY KEY (`id_banco`),
  ADD KEY `id_funcionario` (`id_funcionario`);

--
-- Índices para tabela `tb_cargo`
--
ALTER TABLE `tb_cargo`
  ADD PRIMARY KEY (`id_cargo`);

--
-- Índices para tabela `tb_documento`
--
ALTER TABLE `tb_documento`
  ADD PRIMARY KEY (`id_documento`),
  ADD KEY `id_funcionario` (`id_funcionario`);

--
-- Índices para tabela `tb_endereco`
--
ALTER TABLE `tb_endereco`
  ADD PRIMARY KEY (`id_endereco`),
  ADD KEY `id_funcionario` (`id_funcionario`);

--
-- Índices para tabela `tb_filho`
--
ALTER TABLE `tb_filho`
  ADD PRIMARY KEY (`id_filho`),
  ADD KEY `id_funcionario` (`id_funcionario`);

--
-- Índices para tabela `tb_folhaponto`
--
ALTER TABLE `tb_folhaponto`
  ADD PRIMARY KEY (`id_ponto`),
  ADD KEY `id_funcionario` (`id_funcionario`);

--
-- Índices para tabela `tb_funcionario`
--
ALTER TABLE `tb_funcionario`
  ADD PRIMARY KEY (`id_funcionario`),
  ADD KEY `id_cargo` (`id_cargo`);

--
-- Índices para tabela `tb_jornada`
--
ALTER TABLE `tb_jornada`
  ADD PRIMARY KEY (`id_jornada`),
  ADD KEY `id_funcionario` (`id_funcionario`),
  ADD KEY `id_ponto` (`id_ponto`);

--
-- Índices para tabela `tb_login`
--
ALTER TABLE `tb_login`
  ADD PRIMARY KEY (`id_login`),
  ADD KEY `id_funcionario` (`id_funcionario`);

--
-- Índices para tabela `tb_previsto_beneficios`
--
ALTER TABLE `tb_previsto_beneficios`
  ADD PRIMARY KEY (`id_beneficio`),
  ADD KEY `id_funcionario` (`id_funcionario`);

--
-- Índices para tabela `tb_telefone`
--
ALTER TABLE `tb_telefone`
  ADD PRIMARY KEY (`id_telefone`),
  ADD KEY `id_funcionario` (`id_funcionario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_arquivo`
--
ALTER TABLE `tb_arquivo`
  MODIFY `id_arquivo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `tb_banco`
--
ALTER TABLE `tb_banco`
  MODIFY `id_banco` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `tb_cargo`
--
ALTER TABLE `tb_cargo`
  MODIFY `id_cargo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `tb_documento`
--
ALTER TABLE `tb_documento`
  MODIFY `id_documento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `tb_endereco`
--
ALTER TABLE `tb_endereco`
  MODIFY `id_endereco` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `tb_filho`
--
ALTER TABLE `tb_filho`
  MODIFY `id_filho` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `tb_folhaponto`
--
ALTER TABLE `tb_folhaponto`
  MODIFY `id_ponto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de tabela `tb_funcionario`
--
ALTER TABLE `tb_funcionario`
  MODIFY `id_funcionario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `tb_jornada`
--
ALTER TABLE `tb_jornada`
  MODIFY `id_jornada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de tabela `tb_login`
--
ALTER TABLE `tb_login`
  MODIFY `id_login` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `tb_previsto_beneficios`
--
ALTER TABLE `tb_previsto_beneficios`
  MODIFY `id_beneficio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `tb_telefone`
--
ALTER TABLE `tb_telefone`
  MODIFY `id_telefone` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `tb_arquivo`
--
ALTER TABLE `tb_arquivo`
  ADD CONSTRAINT `tb_arquivo_ibfk_1` FOREIGN KEY (`id_documento`) REFERENCES `tb_documento` (`id_documento`);

--
-- Limitadores para a tabela `tb_folhaponto`
--
ALTER TABLE `tb_folhaponto`
  ADD CONSTRAINT `tb_folhaponto_ibfk_1` FOREIGN KEY (`id_funcionario`) REFERENCES `tb_funcionario` (`id_funcionario`);

--
-- Limitadores para a tabela `tb_funcionario`
--
ALTER TABLE `tb_funcionario`
  ADD CONSTRAINT `tb_funcionario_ibfk_1` FOREIGN KEY (`id_cargo`) REFERENCES `tb_cargo` (`id_cargo`);
COMMIT;

CREATE OR REPLACE VIEW `view_folha_ponto` AS SELECT f.id_funcionario, f.nome_completo, c.nome_cargo, c.carga_horaria AS carga_semanal_prevista, SUM(p.total_horas_dia) AS horas_trabalhadas_semana, (SUM(p.total_horas_dia) - CAST(REPLACE(REPLACE(c.carga_horaria, 'h', ''), ' semanais', '') AS SIGNED)) AS diferenca_horas, CASE WHEN SUM(p.total_horas_dia) < CAST(REPLACE(REPLACE(c.carga_horaria, 'h', ''), ' semanais', '') AS SIGNED) THEN 'Faltando horas' WHEN SUM(p.total_horas_dia) = CAST(REPLACE(REPLACE(c.carga_horaria, 'h', ''), ' semanais', '') AS SIGNED) THEN 'Cumpriu certinho' ELSE 'Excedeu horas' END AS situacao FROM tb_funcionario f JOIN tb_cargo c ON f.id_cargo = c.id_cargo JOIN tb_folhaPonto p ON f.id_funcionario = p.id_funcionario WHERE p.data BETWEEN '2025-10-14' AND '2025-10-20' GROUP BY f.id_funcionario, f.nome_completo, c.nome_cargo, c.carga_horaria ORDER BY diferenca_horas DESC;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
