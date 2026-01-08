<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>
    
    <main>
      <article class="cabecalhos">
        <h1>Cadastro de Funcionário</h1>
      </article>
        
      <article>

        <div>


          <form>
            

            <div class="">
              
              <div class="campo">
                <label for="fotoFuncionario">Foto do Funcionário:</label>
                <img src="./public/img/Avatar.png" class="icone-perfil">
                <input type="file" name="foto" id="fotoFuncionario">
              </div>

              <div class="campo">
                <label for="nome-completo">Nome Completo:</label>
                <input type="text" id="nome-completo" name="Nome-Funcionario" required/>
              </div>


              <div class="campo">
                <label for="telefone">Telefone:</label>
                <input type="text" id="telefone" name="Telefone-Funcionario" required />
              </div>


                <div class="config-input-form-campo">
                  <div class="config-campo-grande">
                    <label for="rua">Rua:</label>
                    <input type="text" id="rua" name="NomeRua-Funcionario" required />
                  </div>


                  <div class="config-campo-pequeno">
                    <label for="NumeroCasa">Número:</label>
                    <input type="number" id="NumeroCasa-Funcionario" name="Numero-Casa"/>
                  </div>
                </div>
                     
                
                <div class="config-input-form-campo">
                  <div class="config-campo-medio">
                    <label for="bairro">Bairro:</label>
                    <input type="text" id="bairro" name="Bairro-Funcionario" required />
                  </div>


                  <div class="config-campo-medio">
                    <label for="cidade">Cidade:</label>
                    <input  type="text"  id="cidade"  name="Cidade-Funcionario" required />
                  </div>


                  <div class="config-campo-medio">
                    <label for="estado">Estado:</label>
                    <select id="estado" name="NomeEstado-Funcionario" required>
                      <option value="">-- Selecione --</option>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="AM">Amazonas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrido Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PA">Pará</option>
                      <option value="PB">Paraiba</option>
                      <option value="PR">Paraná</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantins</option>
                    </select>
                  </div>

                  <div class="config-campo-medio">
                    <label for="CEP">CEP:</label>
                    <input type="number" id="CEP" name="CEP-Funcionario" required />
                  </div>
                </div>
                </div>
              </div>
            </div>
            

            <div class="config-input-form-campo">
              <div class="form-com-imagem-linhas">
                <div class="config-campo-medio">
                  <label for="dataNasc">Data de Nascimento:</label>
                  <input type="date"  id="dataNasc"  name="DataNascimento-Funcionario"  required />
                </div>
              </div>


              <div class="config-campo-medio">
                <label for="genero">Gênero:</label>
                <select id="genero" name="Genero-Funcionario" required>
                      <option value="">-- Selecione --</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                      <option value="Outro">Outro</option>
                </select>
              </div>


                <div class="config-campo-medio">

                  <label for="estadoCivil">Estado Civil:</label>
                    <select id="estadoCivil"  name="EstadoCivil-Funcionario" required >
                      <option value="">-- Selecione --</option>
                      <option>Solteiro</option>
                      <option>Engajado</option>
                      <option>Casado</option>
                      <option>Viuvo</option>
                    </select>

                </div>


                <div class="config-campo-medio">
                  <label for="CPF">CPF:</label>
                  <input type="text" id="CPF" name="CPF-Funcionario" required />
                </div>


                <div class="config-campo-medio">
                  <label for="RG">RG:</label>
                  <input type="text" id="RG" name="RG-Funcionario" required />
                </div>


              </div>


              <div class="config-input-form-campo">

                <div class="form-com-imagem-linhas">
                  <div class="config-campo-medio">
                    <label for="pisPasep">Pis Pasep:</label>
                    <input  type="number"  id="pisPasep"  name="PisPasep-Funcionario"  required/>
                  </div>
                </div>


                <div class="config-campo-medio">
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="Email-Funcionario" required />
                </div>

 

                <div class="config-campo-medio">
                  <label for="cargo">Cargo:</label>
                  <input type="text" id="cargo" name="Cargo-Funcionario" required />
                </div>


                <div class="config-campo-medio">
                  <label for="cbo">CBO:</label>
                  <input type="number" id="cbo" name="CBO-Funcionario" required />
                </div>


                <div class="config-campo-medio">
                  <label for="regime">Regime:</label>
                  <select id="regime" name="Regime-Funcionario" required>
                      <option value="">-- Selecione --</option>
                      <option value="CLT">CLT</option>
                </select>
                </div>

              </div>

              <div class="config-input-form-campo">

                <div class="form-com-imagem-linhas">
                  <div class="config-campo-medio">
                    <label for="Remuneracao">Remuneração:</label>
                    <input type="number"  id="Remuneracao" name="Remuneracao-Funcionario"  required />
                  </div>
                </div>


                <div class="config-campo-medio">
                  <label for="chavePix">Chave Pix:</label>
                  <input type="text" id="chavePix" name="ChavePix-Funcionario" required />
                </div>


                <div class="config-campo-medio">
                  <label for="banco">Banco:</label>
                  <input type="text" id="banco" name="Banco-Funcionario" required />
                </div>
                

                <div class="config-campo-medio">
                  <label for="agencia">Agencia:</label>
                  <input type="text" id="agencia" name="Agencia-Funcionario" required />
                </div>


                <div class="config-campo-medio">
                  <label for="numeroConta">Número da Conta:</label>
                  <input type="number" id="numeroConta" name="NumeroConta-Funcionario"  required  />
                </div>

            </div>


            <div class="config-checkbox">

              <div class="checkbox">

                <label for="certidaoCasamento">Certidão de Casamento</label>
                <input type="checkbox" id="certidaoCasamento" name="CertidaoCasamento-Funcionario"/>
              
                <label for="pcd">PCD</label>
                <input type="checkbox" id="pcd" name="PCD-Funcionario"/>
 
                <label for="cam">Certificado de Alistamento Militar</label>
                <input type="checkbox" id="cam" name="CAM-Funcionario"/>

              </div>

            </div>


            <div class="config-checkbox">

              <div class="checkbox">

                <label for="comprovanteEscolaridade">Comprovante de Escolaridade</label>
                <input type="checkbox" id="comprovanteEscolaridade" name="ComprovanteEscolaridade-Funcionario"/>

                <label for="filhos">Tem Filhos?</label>
                <input type="checkbox" id="filhos" name="Filhos-Funcionario"/>
  
                <label for="qtdFilhos">Número:</label>
                <input type="number" id="qtdFilhos" name="Qtd-Filhos-Funcionario"/>

              </div>
              
            </div> <!-- So ira se exibi-se caso a checkbox acima(tem-filhos) for marcada -->


            <div class="form-final">

              <div class="checkbox-final">
          
                <label for="possuiPendencias">Possui pendencias? (Marque para Sim)</label>

                <input type="checkbox" id="possuiPendencias" name="Pendencias" required />

              </div>

            </div>

            <div class="botao-Form-Funcionario">
              <button type="submit"><Strong>Salvar</Strong></button>
            </div>


          </form>
      </div>

      
      </article>
    </main>
  </body>
</html>
