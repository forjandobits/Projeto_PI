<article>

    <table>
        <caption>Folha de Pagamento - Mês/Ano(?) - Nome Funcionário(?)</caption>
        <thead>
        <tr>
            <th>Código de Referência</th>
            <th>Evento</th>
            <th>Referência</th>
            <th>Vencimentos</th>
            <th>Descontos</th>
        </tr>
        </thead>

        <tbody id="tabela-saida-folha-pagamento">
        <tr>
            <td>00</td>
            <td>Salário Base</td>
            <td><input type="text" name="" id="" value="2000,00"></td>
            <td>2.000,00</td>
            <td></td>
        </tr>
        <tr>
            <td>01</td>
            <td>Comissão</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>02</td>
            <td>INSS</td>
            <td><input type="text" name="" id="" value="10,88"></td>
            <td></td>
            <td>0,81</td>
        </tr>
        <tr>
            <td>03</td>
            <td>Descanso Remunerado</td>
            <td><input type="text" name="" id="" value="00,00"></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>04</td>
            <td>FGTS</td>
            <td>27,50</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="2"></td>   <!-- pula Cod. e Evento -->
            <td>Totais</td>
            <td>2.000,00</td>
            <td>0,81</td>
        </tr>
        
        </tbody>
    </table>

    <section class="resumo-final">
            <p>Total Líquido (R$): 2000,00</p>
            <button>Editar</button>
            <button>Concluir</button>
    </section>
</article>