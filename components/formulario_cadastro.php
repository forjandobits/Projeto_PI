<form>
    <fieldset class="cadastro">
        <legend>Informações Pessoais</legend>

        <div class="campo foto-funcionario">
            <label for="foto-funcionario">Foto do Funcionário:</label>
            <img src="./public/img/Avatar.png" class="icone-perfil">
            <input type="file" name="Foto-Funcionario" id="foto-funcionario">
        </div>

        <div class="campo nome-completo">
            <label for="nome-completo">Nome Completo:</label>
            <input type="text" name="Nome-Funcionario" id="nome-completo" required/>
        </div>
        
        <div class="campo telefone">
            <label for="telefone">Telefone:</label>
            <input type="tel" name="Telefone-Funcionario" id="telefone" required />
        </div>

        <div class="campo email">
            <label for="email">E-mail:</label>
            <input type="email" name="Email-Funcionario" id="email" required />
        </div>

        <div class="campo data-nasc">
            <label for="data-nasc">Data de Nascimento:</label>
            <input type="date" name="DataNascimento-Funcionario" id="data-nasc" required />
        </div>
        
        <div class="campo cpf">
            <label for="cpf">CPF:</label>
            <input type="text" name="CPF-Funcionario" id="cpf" required />
        </div>
        
        <div class="campo rg">
            <label for="rg">RG:</label>
            <input type="text" name="RG-Funcionario" id="rg" required />
        </div>
        
        <div class="campo genero">
            <label for="genero">Gênero:</label>
            <select name="Genero-Funcionario" id="genero" required>
                <option value="">-- Selecione --</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
            </select>
        </div>
        
        <div class="campo estado-civil">
            <label for="estado-civil">Estado Civil:</label>
            <select name="EstadoCivil-Funcionario" id="estado-civil" required >
                <option value="">-- Selecione --</option>
                <option value="Solteiro">Solteiro(a)</option>
                <option value="Casado">Casado(a)</option>
                <option value="Viuvo">Viúvo(a)</option>
                <option value="Divorciado">Divorciado(a)</option>
            </select>
        </div>

    </fieldset>
        
    <fieldset class="cadastro">
        <legend>Endereço</legend>

        <div class="campo">
            <label for="rua">Nome da Rua:</label>
            <input type="text" name="NomeRua-Funcionario" id="rua" required />
        </div>

        <div class="campo">
            <label for="numero-casa">Número:</label>
            <input type="text" name="NumeroCasa-Funcionario" id="numero-casa"/>
        </div>

        <div class="campo">
            <label for="complemento-casa">Complemento:</label>
            <input type="text" name="ComplementoCasa-Funcionario" id="complemento-casa"/>
        </div>
        
        <div class="campo">
            <label for="bairro">Bairro:</label>
            <input type="text" name="Bairro-Funcionario" id="bairro" required />
        </div>

        <div class="campo">
            <label for="cidade">Cidade:</label>
            <input  type="text" name="Cidade-Funcionario" id="cidade" required />
        </div>

        <div class="campo">
            <label for="estado">Estado (UF):</label>
            <select name="NomeEstado-Funcionario" id="estado" required>
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

        <div class="campo">
            <label for="cep">CEP:</label>
            <input type="text" name="CEP-Funcionario" id="cep" required />
        </div>
            
    </fieldset>

    <fieldset class="cadastro">
        <legend>Cargo</legend>

        <div class="campo">
            <label for="cargo">Cargo:</label>
            <select name="Cargo-Funcionario" id="cargo" required>
                <option value="">-- Selecione --</option>
                <option value="Padeiro">Padeiro</option>
                <option value="Gerente">Gerente</option>
                <option value="Caixa">Caixa</option>
            </select>
        </div>

        <div class="campo">
            <label for="cbo">CBO:</label>
            <input type="text" name="CBO-Funcionario" id="cbo" required disabled/>
        </div>

        <div class="campo">
            <label for="regime">Regime Trabalhista:</label>
            <input type="text" name="Regime-Funcionar" id="regime" required disabled/>
        </div>

        <div class="campo">
            <label for="remuneracao">Remuneração:</label>
            <input type="number" name="Remuneracao-Funcionario" id="remuneracao" required disabled/>
        </div>
    </fieldset>


    <fieldset class="cadastro">
        <legend>Informações Bancárias</legend>

        <div class="campo">
            <label for="banco">Banco:</label>
            <input type="text" name="Banco-Funcionario" id="banco" required />
        </div>

        <div class="campo">
            <label for="agencia">Número da Agência:</label>
            <input type="text"  name="Agencia-Funcionario" id="agencia" required />
        </div>

        <div class="campo">
            <label for="numero-conta">Número da Conta:</label>
            <input type="text" name="NumeroConta-Funcionario" id="numero-conta" required  />
        </div>

        <div class="campo">
            <label for="chave-pix">Chave Pix:</label>
            <input type="text" name="ChavePix-Funcionario" id="chave-pix" required />
        </div>
    </fieldset>

    <fieldset class="cadastro">
        <legend>Documentos</legend>
        <div class="campo">
            <label for="nis">NIS:</label>
            <input  type="number" name="Nis-Funcionario" id="nis" required/>
        </div>

        <div class="campo">
            <label for="nit">NIT:</label>
            <input  type="number" name="Nit-Funcionario" id="nit" required/>
        </div>

        <div class="campo">
            <label for="ctps">CTPS:</label>
            <input  type="number" name="Ctps-Funcionario" id="ctps" required/>
        </div>

        <div class="campo">
            <label for="pis-pasep">Pis-Pasep:</label>
            <input  type="number" name="PisPasep-Funcionario" id="pis-pasep" required/>
        </div>

        <div class="campo-linha">
            <label for="certidao-casamento">Certidão de Casamento/Nascimento</label>
            <input type="checkbox" name="CertidaoCasamento-Funcionario" id="certidao-casamento"/>
        </div>

        <div class="campo-linha">
            <label for="cnh">CNH</label>
            <input type="checkbox" name="Cnh-Funcionario" id="cnh"/>
        </div>

        <div class="campo-linha">
            <label for="pcd">PCD</label>
            <input type="checkbox" name="PCD-Funcionario" id="pcd"/>
        </div>

        <div class="campo-linha">
            <label for="cam">Certificado de Alistamento Militar</label>
            <input type="checkbox" name="CAM-Funcionario" id="cam"/>
        </div>

        <div class="campo-linha">
            <label for="filhos">Tem Filhos?</label>
            <input type="checkbox"  name="Filhos-Funcionario" id="filhos"/>
        </div>

        <div class="campo-linha">
            <label for="qtd-filhos">Número de Filhos:</label>
            <input type="number" name="Qtd-Filhos-Funcionario" id="qtd-filhos"/>
        </div>

    </fieldset>

    <fieldset class="cadastro">
        <legend>Anexo de Arquivos</legend>

        <div class="campo arquivos">
            <label for="arquivos">Adicionar Arquivos:</label>
            <input type="file" name="Arquivos[]" id="arquivos" multiple>
        </div>

    </fieldset>

        <div class="campo resumo">
            <button type="submit" class='botao-editar'><Strong>Editar</Strong></button>
            <button type="submit"><Strong>Salvar</Strong></button>
        </div>

    </fieldset>
</form>