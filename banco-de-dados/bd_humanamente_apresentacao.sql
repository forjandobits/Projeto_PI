-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09-Abr-2026 às 02:25
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
-- Banco de dados: `bd_humanamente_apresentacao`
--
CREATE DATABASE IF NOT EXISTS `bd_humanamente_apresentacao` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bd_humanamente_apresentacao`;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_banco`
--

INSERT INTO `tb_banco` (`id_banco`, `id_funcionario`, `nome_banco`, `agencia`, `numero_conta`, `tipo_conta`, `chave_pix`) VALUES
(1, 2, 'Banco do Brasil', '1111', '111111-1', '', '+55 32 91111-1111'),
(2, 3, 'Caixa Econômica', '2222', '222222-2', '', 'mariana@teste.com'),
(3, 4, 'Bradesco', '3333', '333333-3', '', '333.333.333-33');

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_cargo`
--

INSERT INTO `tb_cargo` (`id_cargo`, `nome_cargo`, `salario`, `carga_horaria`, `regime_trabalhista`, `cbo`) VALUES
(1, 'Administrador do sistema', '10000.00', 40, 'CLT', '3172-10'),
(2, 'Padeiro', '2300.00', 40, 'CLT', '848305'),
(3, 'Confeiteiro', '2400.00', 40, 'CLT', '848310'),
(4, 'Atendente', '1621.00', 40, 'CLT', '521110');

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_documento`
--

INSERT INTO `tb_documento` (`id_documento`, `id_funcionario`, `rg`, `cpf`, `ctps`, `pis_pasep`, `nis`, `nit`, `registro_profissional`, `comprovante_escolaridade`, `cnh`, `cam`, `titulo_eleitor`, `certidao_casamento_nascimento`, `laudo_pcd`) VALUES
(1, 2, 'MG-11.111.111', '111.111.111-11', '1111111', '11111111111', '11111111111', '11111111111', '', '', 1, 1, NULL, 0, 0),
(2, 3, 'MG-22.222.222', '222.222.222-22', '2222222', '22222222222', '22222222222', '22222222222', '', '', 0, 0, NULL, 0, 0),
(3, 4, 'MG-33.333.333', '333.333.333-33', '3333333', '33333333333', '33333333333', '33333333333', '', '', 0, 0, NULL, 1, 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_endereco`
--

INSERT INTO `tb_endereco` (`id_endereco`, `id_funcionario`, `estado`, `cidade`, `bairro`, `rua`, `numero_casa`, `cep`, `complemento`) VALUES
(1, 2, 'MG', 'Juiz de Fora', 'Centro', 'Rua Halfeld', 120, '36010-000', ''),
(2, 3, 'MG', 'Juiz de Fora', 'São Mateus', 'Rua Padre Café', 88, '36016-450', ''),
(3, 4, 'MG', 'Juiz de Fora', 'Granbery', 'Rua Batista de Oliveira', 455, '36010-120', '');

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_filho`
--

INSERT INTO `tb_filho` (`id_filho`, `id_funcionario`, `tem_filho`, `numero_filho`) VALUES
(1, 4, 1, 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_folhapagamento`
--

INSERT INTO `tb_folhapagamento` (`id`, `id_funcionario`, `informacoes`, `data_lancamento`, `mes_referencia`) VALUES
(1, 3, '[{\"infoBenDes\":[{\"idBenDes\":\"1\",\"valor\":2400}]},{\"infoBenDes\":[{\"idBenDes\":\"2\",\"valor\":192}]},{\"infoBenDes\":[{\"idBenDes\":\"3\",\"valor\":216}]},{\"infoBenDes\":[{\"idBenDes\":\"4\",\"valor\":0}]},{\"infoBenDes\":[{\"idBenDes\":\"5\",\"valor\":144}]}]', '2026-04-08', '2026-04'),
(2, 2, '[{\"infoBenDes\":[{\"idBenDes\":\"1\",\"valor\":2300}]},{\"infoBenDes\":[{\"idBenDes\":\"2\",\"valor\":184}]},{\"infoBenDes\":[{\"idBenDes\":\"3\",\"valor\":207}]},{\"infoBenDes\":[{\"idBenDes\":\"4\",\"valor\":0}]},{\"infoBenDes\":[{\"idBenDes\":\"5\",\"valor\":138}]}]', '2026-04-08', '2026-04'),
(4, 4, '[{\"infoBenDes\":[{\"idBenDes\":\"1\",\"valor\":1621}]},{\"infoBenDes\":[{\"idBenDes\":\"2\",\"valor\":129.68}]},{\"infoBenDes\":[{\"idBenDes\":\"3\",\"valor\":121.57499999999999}]},{\"infoBenDes\":[{\"idBenDes\":\"4\",\"valor\":0}]},{\"infoBenDes\":[{\"idBenDes\":\"5\",\"valor\":97.25999999999999}]}]', '2026-04-08', '2026-04');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_folhaponto`
--

CREATE TABLE IF NOT EXISTS `tb_folhaponto` (
  `id_ponto` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` int(11) NOT NULL,
  `data` date NOT NULL,
  `total_horas_dia` time DEFAULT '00:00:00',
  `total_intervalo` time DEFAULT '00:00:00',
  `horas_extras` time DEFAULT '00:00:00',
  `faltas` int(11) DEFAULT NULL,
  `ferias_falta_abonada` int(11) DEFAULT NULL,
  `atrasos` int(11) DEFAULT NULL,
  `observacoes` text DEFAULT NULL,
  `fechado` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_ponto`),
  KEY `fk12` (`id_funcionario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_funcionario`
--

INSERT INTO `tb_funcionario` (`id_funcionario`, `id_cargo`, `nome_completo`, `data_nascimento`, `sexo`, `estado_civil`, `email`, `data_admissao`, `data_demissao`, `situacao`) VALUES
(1, 1, 'Administrador', '2026-10-07', 'Outro', '', 'admin@dev.com', '2026-04-08', NULL, 1),
(2, 2, 'Carlos Henrique Souza', '1988-05-12', 'Masculino', 'Solteiro', 'carlos@teste.com', '0000-00-00', NULL, 1),
(3, 3, 'Mariana Oliveira', '1992-03-21', 'Feminino', 'Divorciado', 'mariana@teste.com', '0000-00-00', NULL, 1),
(4, 4, 'Fernanda Costa', '1998-07-18', 'Feminino', 'Casado', 'fernanda@teste.com', '0000-00-00', NULL, 1);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Acionadores `tb_jornada`
--
CREATE TRIGGER `trg_calcular_horas` AFTER UPDATE ON `tb_jornada` FOR EACH ROW BEGIN
DECLARE v_total_horas_dia TIME;
DECLARE v_total_intervalo TIME;
DECLARE v_horas_extras TIME;
DECLARE v_carga_horaria INT;
DECLARE v_carga_dia TIME;

IF (NEW.confirmado = 1 || OLD.confirmado = 1) THEN
	SELECT c.carga_horaria INTO v_carga_horaria FROM tb_funcionario AS f JOIN tb_cargo AS c ON c.id_cargo = f.id_cargo WHERE f.id_funcionario = NEW.id_funcionario LIMIT 1;
    
    SET v_carga_dia = SEC_TO_TIME((v_carga_horaria / 5) * 3600);
    
    SET v_total_horas_dia = sec_to_time(timestampdiff(SECOND, NEW.`hora_entrada`, NEW.`hora_saida`) - timestampdiff(SECOND, NEW.`intervalo_inicio`, NEW.`intervalo_fim`));
    SET v_total_intervalo = sec_to_time(timestampdiff(SECOND, NEW.`intervalo_inicio`, NEW.`intervalo_fim`));
    SET v_horas_extras = TIMEDIFF(v_total_horas_dia, v_carga_dia);
                       
	IF v_horas_extras < '00:00:00' THEN
    	SET v_horas_extras = '00:00:00';
	END IF;
    
    UPDATE tb_folhaponto SET total_horas_dia = v_total_horas_dia, total_intervalo = v_total_intervalo, horas_extras = v_horas_extras WHERE id_ponto = NEW.id_ponto;

END IF;
END;

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_login`
--

INSERT INTO `tb_login` (`id_login`, `id_funcionario`, `nome_usuario`, `senha`) VALUES
(1, 1, 'admin.dev', 'forjandobits'),
(2, 2, 'carlos.souza', '123456'),
(3, 4, 'fernanda.costa', '123456'),
(4, 3, 'mariana.oliveira', '123456');

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
(1, 2, '2026-04-08', 'Folga', 'Cansaço excessivo acumulado.', NULL, 'Pendente'),
(2, 4, '2026-04-09', 'Atestado', 'Atestado pois tive que levar meu filho ao médico.', NULL, 'Pendente'),
(3, 3, '2026-04-09', 'Férias', 'Estou a mais de um ano sem tirar férias.', 'Solicitação duplicada.', 'Negado'),
(4, 3, '2026-04-09', 'Férias', 'Estou a mais de um ano sem tirar férias.', '', 'Aprovado');

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_telefone`
--

INSERT INTO `tb_telefone` (`id_telefone`, `id_funcionario`, `telefone`, `tipo_telefone`) VALUES
(1, 2, '+55 32 91111-1111', ''),
(2, 3, '+55 32 92222-2222', ''),
(3, 4, '+55 32 93333-3333', '');

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
,`faltas` int(11)
,`ferias_falta_abonada` int(11)
,`total_intervalo` time
,`total_horas_dia` time
,`horas_extras` time
,`nome_completo` varchar(100)
,`confirmado` tinyint(1)
,`fechado` tinyint(1)
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
,`horas_trabalhadas_semana` decimal(29,0)
,`diferenca_horas` decimal(30,0)
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
,`saldo_mes` decimal(52,0)
);

-- --------------------------------------------------------

--
-- Estrutura para vista `view_espelho_ponto`
--
DROP TABLE IF EXISTS `view_espelho_ponto`;

CREATE OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_espelho_ponto`  AS SELECT `tb_folhaponto`.`data` AS `data`, `tb_jornada`.`dia_semana` AS `dia_semana`, `tb_jornada`.`hora_entrada` AS `hora_entrada`, `tb_jornada`.`hora_saida` AS `hora_saida`, `tb_jornada`.`intervalo_inicio` AS `intervalo_inicio`, `tb_jornada`.`intervalo_fim` AS `intervalo_fim`, `tb_folhaponto`.`faltas` AS `faltas`, `tb_folhaponto`.`ferias_falta_abonada` AS `ferias_falta_abonada`, `tb_folhaponto`.`total_intervalo` AS `total_intervalo`, `tb_folhaponto`.`total_horas_dia` AS `total_horas_dia`, `tb_folhaponto`.`horas_extras` AS `horas_extras`, `tb_funcionario`.`nome_completo` AS `nome_completo`, `tb_jornada`.`confirmado` AS `confirmado`, `tb_folhaponto`.`fechado` AS `fechado`, `tb_funcionario`.`id_funcionario` AS `id_funcionario`, `tb_jornada`.`id_jornada` AS `id_jornada`, `tb_jornada`.`id_ponto` AS `id_ponto` FROM (((`tb_funcionario` join `tb_cargo` on(`tb_funcionario`.`id_cargo` = `tb_cargo`.`id_cargo`)) join `tb_folhaponto` on(`tb_funcionario`.`id_funcionario` = `tb_folhaponto`.`id_funcionario`)) join `tb_jornada` on(`tb_funcionario`.`id_funcionario` = `tb_jornada`.`id_funcionario` and `tb_folhaponto`.`id_ponto` = `tb_jornada`.`id_ponto`))  ;

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
