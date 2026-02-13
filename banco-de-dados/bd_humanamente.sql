-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28-Nov-2025 às 01:33
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
CREATE DATABASE IF NOT EXISTS `bd_humanamente` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bd_humanamente`;

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
  `escala` text NOT NULL,
  `cbo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_previsto_beneficios`
--

CREATE TABLE `tb_previsto_beneficios` (
  `id_beneficio` int(11) NOT NULL,
  `id_funcionario` int(11) NOT NULL,
  `nome_beneficio` text NOT NULL,
  `valor` double NOT NULL,
  `desconto` int(11) NOT NULL DEFAULT 0,
  `referencia` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `view_folha_ponto`
-- (Veja abaixo para a view atual)
--
CREATE TABLE `view_folha_ponto` (
`id_funcionario` int(11)
,`nome_completo` text
,`nome_cargo` text
,`carga_semanal_prevista` text
,`horas_trabalhadas_semana` decimal(32,0)
,`diferenca_horas` decimal(65,0)
,`situacao` varchar(16)
);

-- --------------------------------------------------------

--
-- Estrutura para vista `view_folha_ponto`
--
DROP TABLE IF EXISTS `view_folha_ponto`;

CREATE OR REPLACE VIEW `view_folha_ponto`  AS SELECT `f`.`id_funcionario` AS `id_funcionario`, `f`.`nome_completo` AS `nome_completo`, `c`.`nome_cargo` AS `nome_cargo`, `c`.`carga_horaria` AS `carga_semanal_prevista`, sum(`p`.`total_horas_dia`) AS `horas_trabalhadas_semana`, sum(`p`.`total_horas_dia`) - cast(replace(replace(`c`.`carga_horaria`,'h',''),' semanais','') as signed) AS `diferenca_horas`, CASE WHEN sum(`p`.`total_horas_dia`) < cast(replace(replace(`c`.`carga_horaria`,'h',''),' semanais','') as signed) THEN 'Faltando horas' WHEN sum(`p`.`total_horas_dia`) = cast(replace(replace(`c`.`carga_horaria`,'h',''),' semanais','') as signed) THEN 'Cumpriu certinho' ELSE 'Excedeu horas' END AS `situacao` FROM ((`tb_funcionario` `f` join `tb_cargo` `c` on(`f`.`id_cargo` = `c`.`id_cargo`)) join `tb_folhaponto` `p` on(`f`.`id_funcionario` = `p`.`id_funcionario`)) WHERE `p`.`data` between '2025-10-14' and '2025-10-20' GROUP BY `f`.`id_funcionario`, `f`.`nome_completo`, `c`.`nome_cargo`, `c`.`carga_horaria` ORDER BY sum(`p`.`total_horas_dia`) - cast(replace(replace(`c`.`carga_horaria`,'h',''),' semanais','') as signed) ASC  ;

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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
