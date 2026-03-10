-- Não excloi minha query
SELECT 
`tb_folhaponto`.`data` AS `data`,
`tb_jornada`.`dia_semana` AS `dia_semana`,
`tb_jornada`.`hora_entrada` AS `hora_entrada`,
`tb_jornada`.`hora_saida` AS `hora_saida`,
`tb_jornada`.`intervalo_inicio` AS `intervalo_inicio`,
`tb_jornada`.`intervalo_fim` AS `intervalo_fim`,
sec_to_time(timestampdiff(SECOND,`tb_jornada`.`intervalo_inicio`,`tb_jornada`.`intervalo_fim`)) AS `total_intervalo`,
`tb_folhaponto`.`faltas` AS `faltas`,
sec_to_time((timestampdiff(SECOND, `tb_jornada`.`hora_entrada`, `tb_jornada`.`hora_saida`)) - (timestampdiff(SECOND,`tb_jornada`.`intervalo_inicio`,`tb_jornada`.`intervalo_fim`))) AS `total_horas_dia`,
`tb_funcionario`.`nome_completo` AS `nome_completo`,
`tb_funcionario`.`id_funcionario` AS `id_funcionario`,
`tb_jornada`.`id_jornada` AS `id_jornada` 
FROM (((`tb_funcionario` join `tb_cargo` on(`tb_funcionario`.`id_cargo` = `tb_cargo`.`id_cargo`)) join `tb_folhaponto` on(`tb_funcionario`.`id_funcionario` = `tb_folhaponto`.`id_funcionario`)) join `tb_jornada` on(`tb_funcionario`.`id_funcionario` = `tb_jornada`.`id_funcionario` and `tb_folhaponto`.`id_ponto` = `tb_jornada`.`id_ponto`))

SELECT 
`tb_folhaponto`.`data` AS `data`,
`tb_jornada`.`dia_semana` AS `dia_semana`,
`tb_jornada`.`hora_entrada` AS `hora_entrada`,
`tb_jornada`.`hora_saida` AS `hora_saida`,
`tb_jornada`.`intervalo_inicio` AS `intervalo_inicio`,
`tb_jornada`.`intervalo_fim` AS `intervalo_fim`,
sec_to_time(timestampdiff(SECOND,`tb_jornada`.`intervalo_inicio`,`tb_jornada`.`intervalo_fim`)) AS `total_intervalo`,
`tb_folhaponto`.`faltas` AS `faltas`,
sec_to_time(((timestampdiff(SECOND, `tb_jornada`.`hora_entrada`, `tb_jornada`.`hora_saida`)) - (timestampdiff(SECOND,`tb_jornada`.`intervalo_inicio`,`tb_jornada`.`intervalo_fim`)))) AS `total_horas_dia`,
`tb_funcionario`.`nome_completo` AS `nome_completo`,
`tb_funcionario`.`id_funcionario` AS `id_funcionario`,
`tb_jornada`.`id_jornada` AS `id_jornada` 
FROM (((`tb_funcionario` join `tb_cargo` on(`tb_funcionario`.`id_cargo` = `tb_cargo`.`id_cargo`)) join `tb_folhaponto` on(`tb_funcionario`.`id_funcionario` = `tb_folhaponto`.`id_funcionario`)) join `tb_jornada` on(`tb_funcionario`.`id_funcionario` = `tb_jornada`.`id_funcionario` and `tb_folhaponto`.`id_ponto` = `tb_jornada`.`id_ponto`))