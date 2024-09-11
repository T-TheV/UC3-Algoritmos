// Atividade 1: Calculadora de Descontos
// Contexto: João tem uma loja de roupas e deseja aplicar descontos diferentes com base no
// valor da compra.
// Questão: Se o valor da compra for maior que 100, aplique um desconto de 20%. Se for maior
// que 50, aplique um desconto de 10%. Caso contrário, não aplique desconto.*/

// let compra = 51
// if (compra>100){
//     console.log(compra/0.2)
//     console.log("Você tem um desconto de 20%")
// }
// else if (compra>50){
//     console.log(compra/0.1)
//     console.log("Você teve um desconto de 10%")
// }
// else{
//     console.log("Você não tem desconto!")
// }
// /*Atividade 2: Classificação de Idades
// Contexto: Maria quer classificar seus alunos em grupos etários.
// Questão: Se a idade for menor que 12, classifique como "Criança". Se for entre 12 e 18,
// classifique como "Adolescente". Se for maior que 18, classifique como "Adulto".
// */
// let idade = 13
// if (idade<12){
//     console.log("É uma criança")
// }

// else if(idade>12 && idade <18){
//     console.log("É um adolescente")
// }

// else{
//     console.log("É um adulto")
// }

// /*Atividade 3: Verificação de Tempo
// Contexto: Ana precisa verificar o estado do tempo com base na temperatura.
// Questão: Se a temperatura for menor que 15°C, imprimir "Frio". Se for entre 15°C e 30°C,
// imprimir "Agradável". Se for maior que 30°C, imprimir "Quente".*/

// temperatura = 13
// if (temperatura <15){
//     console.log("Frio")
// }

// else if (temperatura>15 && temperatura<30){
//     console.log("Agradável")
// }

// else{
//     console.log("Quente")
// }

// /*Atividade 4: Classificação de Notas
// Contexto: Pedro quer classificar as notas de seus alunos.
// Questão: Se a nota for maior que 90, classifique como "A". Se for entre 70 e 90, classifique
// como "B". Se for menor que 70, classifique como "C".*/

// nota = 91
// if (nota>90){
//     console.log("A")
// }

// else if (nota>70 && nota<90){
//     console.log("B")
// }

// else{
//     console.log("C")
// }

// /*Atividade 5: Controle de Velocidade
// Contexto: Carla precisa verificar a velocidade dos carros em uma rodovia.
// Questão: Se a velocidade for maior que 120 km/h, imprimir "Muito rápido". Se for entre 80 e
// 120 km/h, imprimir "Velocidade adequada". Se for menor que 80 km/h, imprimir "Muito lento"*/

// velocidade = 120

// if (velocidade>120){
//     console.log("Muito rápido")
// }

// else if(velocidade>80 && velocidade<120){
//     console.log("Velocidade adequada")
// }

// else{
//     console.log("Muito Lento")
// }

// /*Atividade 6: Verificação de Estoque
// Contexto: Lucas precisa verificar o estoque de sua loja.
// Questão: Se a quantidade em estoque for menor que 10, imprimir "Estoque baixo". Se for entre
// 10 e 50, imprimir "Estoque médio". Se for maior que 50, imprimir "Estoque alto".*/

// estoque = 10 // não terminado
// if (estoque>50){
//     console.log("Estoque Alto")
// }

// else if(estoque>10 && estoque<50){
//     console.log("Estoque Médio")
// }

// else{
//     console.log("Estoque Baixo")
// }

// /*Atividade 7: Verificação de Peso
// Contexto: Paula quer classificar o peso dos produtos em sua fábrica.
// Questão: Se o peso for menor que 1 kg, classifique como "Leve". Se for entre 1 kg e 5 kg,
// classifique como "Médio". Se for maior que 5 kg, classifique como "Pesado".*/

// peso = 10

// if (peso<1){
//     console.log("Leve")
// }

// //else if(peso<1)



// //Atividade 01 não concluida

// /*Atividade 1: Sistema de Avaliação de Desempenho
// Contexto: João é gerente de uma empresa e precisa avaliar o desempenho dos funcionários
// baseado nas vendas mensais e na pontualidade.
// Questão: Se as vendas mensais forem maiores que 100.000 e a pontualidade for maior que
// 95%, o desempenho é "Excelente". Se as vendas forem entre 50.000 e 100.000 e a
// pontualidade entre 85% e 95%, o desempenho é "Bom". Se as vendas forem menores que
// 50.000 ou a pontualidade menor que 85%, o desempenho é "Regular".
// */
// console.log("Inicio atividade 2 abaixo: ")
// function avaliarDesempenho(vendasMensais,pontualidade){

//     if (vendasMensais >= 100000 && pontualidade >=95){
//         return "Desempenho excelente"
//     }
//     else if (vendasMensais >=50000 && vendasMensais <= 100000 && pontualidade >= 85 && pontualidade <=95){
//         return "Desempenho bom"
//     }
//     else if (vendasMensais <=50000 || pontualidade <=85){
//         return "Desempenho Regular"
//     }
// }
// console.log(avaliarDesempenho(120000, 96));
// /*Atividade 2: Sistema de Aprovação de Bolsa de Estudos
// Contexto: Maria trabalha em uma universidade e precisa aprovar bolsas de estudo baseadas
// no desempenho acadêmico e na renda familiar.
// Questão: Se a média acadêmica for maior que 8.5 e a renda familiar menor que 3000, aprovar
// bolsa "Integral". Se a média for entre 7 e 8.5 e a renda entre 3000 e 6000, aprovar bolsa
// "Parcial". Se a média for menor que 7 ou a renda maior que 6000, não aprovar bolsa.
// */

// function avaliarBolsa(desempenhoAcademico,rendaFamiliar){

//     if (desempenhoAcademico > 8.5 && rendaFamiliar <3000){
//         return "Bolsa Integral"
//     }
//     else if (desempenhoAcademico >7 && desempenhoAcademico < 8.5 && rendaFamiliar > 3000 && rendaFamiliar <6000){
//         return "Bolsa Parcial"
//     }
//     else if (desempenhoAcademico <7 || rendaFamiliar <6000){
//         return "Bolsa não aprovada"
//     }
// }
// console.log(avaliarBolsa(6, 5000)); //Bolsa não aprovada

// /*Atividade 3: Sistema de Avaliação de Risco de Saúde
// Contexto: Pedro é um médico que precisa avaliar o risco de saúde dos pacientes baseado no
// IMC e na idade.
// Questão: Se o IMC for maior que 30 e a idade maior que 60, o risco é "Alto". Se o IMC for
// entre 25 e 30 e a idade entre 45 e 60, o risco é "Médio". Se o IMC for menor que 25 ou a idade
// menor que 45, o risco é "Baixo".
// */
// function avaliarRisco(imc,idade){

//     if (imc > 30 && idade >60){
//         return "Risco Alto"
//     }
//     else if (imc >25 && imc < 30 && idade > 45 && idade <60){
//         return "Risco Médio"
//     }
//     else if (imc <25 || idade <45){
//         return "Risco Baixo"
//     }
// }
// console.log(avaliarRisco(20, 24)); //Risco baixo

// /*Atividade 4: Sistema de Classificação de Crédito
// Contexto: Ana trabalha em uma instituição financeira e precisa classificar clientes para
// concessão de crédito baseado na renda anual e no histórico de pagamentos.
// Questão: Se a renda anual for maior que 100.000 e o histórico de pagamentos for "Excelente",
// o crédito é "Prime". Se a renda for entre 50.000 e 100.000 e o histórico for "Bom", o crédito é
// "Padrão". Se a renda for menor que 50.000 ou o histórico for "Ruim", o crédito é "Restrito"*/


// function avaliarCredito(rendaAnual,historicoPagamentos){

//     if (rendaAnual > 100000 && historicoPagamentos == "Excelente"){
//         return "Crédito Prime"
//     }
//     else if (rendaAnual >50000 && rendaAnual < 10000 && historicoPagamentos == "Bom"){
//         return "Crédito Padrão"
//     }
//     else if (rendaAnual <50000 || historicoPagamentos =="Ruim"){
//         return "Crédito Restrito"
//     }
// }
// console.log(avaliarCredito(40000, "Ruim"));

// /*Atividade 5: Sistema de Classificação de Produtos
// Contexto: Lucas trabalha em um supermercado e precisa classificar os produtos baseados no
// preço e na demanda.
// Questão: Se o preço for maior que 100 e a demanda maior que 500 unidades por mês,
// classificar como "Produto Premium". Se o preço for entre 50 e 100 e a demanda entre 200 e
// 500 unidades, classificar como "Produto Padrão". Se o preço for menor que 50 ou a demanda
// menor que 200 unidades, classificar como "Produto Econômico".*/

// function avaliarProdutos(preco,demanda){

//     if (preco > 100 && demanda >500){
//         return "Produto Premium"
//     }
//     else if (preco >50 && preco < 100 && demanda > 200 && demanda <500){
//         return "Produto Padrão"
//     }
//     else if (preco <50 || demanda <200){
//         return "Produto Econômico"
//     }
// }
// console.log(avaliarProdutos(50, 100)); // Economico

// /*Atividade 6: Sistema de Seleção de Candidatos
// Contexto: Eduardo trabalha em uma empresa de recrutamento e precisa selecionar candidatos
// baseados na experiência e na formação acadêmica.
// Questão: Se a experiência for maior que 10 anos e a formação acadêmica for "Doutorado",
// selecionar para "Posição Sênior". Se a experiência for entre 5 e 10 anos e a formação for
// "Mestrado", selecionar para "Posição Plena". Se a experiência for menor que 5 anos ou a
// formação for "Graduação", selecionar para "Posição Júnior".*/

// function avaliarCandidatos(exp,formacao){

//     if (exp >= 10 && formacao == "Doutorado"){
//         return "Posição Senior"
//     }
//     else if (exp >5 && exp < 10 && formacao == "Mestrado"){
//         return "Posição Plena"
//     }
//     else if (exp <=5 || formacao == "Graduação"){
//         return "Posição Junior"
//     }
// }
// console.log(avaliarCandidatos(10, "Doutorado")); // Senior

// /*Atividade 7: Sistema de Avaliação de Fornecedores
// Contexto: Carla trabalha em uma empresa de manufatura e precisa avaliar fornecedores
// baseados na qualidade dos produtos e no prazo de entrega.
// Questão: Se a qualidade for "Excelente" e o prazo de entrega for menor que 5 dias, classificar
// como "Fornecedor A". Se a qualidade for "Boa" e o prazo de entrega entre 5 e 10 dias,
// classificar como "Fornecedor B". Se a qualidade for "Regular" ou o prazo de entrega maior que
// 10 dias, classificar como "Fornecedor C".*/

// function avaliarFornecedores(qualidadeProdutos,prazoEntrega){

//     if (qualidadeProdutos == "Excelente" && prazoEntrega < 5){
//         return "Fornecedor A"
//     }
//     else if (prazoEntrega >5 && prazoEntrega <= 10 && qualidadeProdutos == "Boa"){
//         return "Fornecedor B"
//     }
//     else if (prazoEntrega > 10 || qualidadeProdutos == "Regular"){
//         return "Fornecedor C"
//     }
// }
// console.log(avaliarFornecedores("Boa", 6)); // 

// /*Atividade 8: Sistema de Classificação de Projetos
// Contexto: Felipe trabalha em uma empresa de tecnologia e precisa classificar projetos
// baseados no orçamento e na complexidade.
// Questão: Se o orçamento for maior que 1.000.000 e a complexidade for "Alta", classificar como
// "Projeto Estratégico". Se o orçamento for entre 500.000 e 1.000.000 e a complexidade for
// "Média", classificar como "Projeto Importante". Se o orçamento for menor que 500.000 ou a
// complexidade for "Baixa", classificar como "Projeto Secundário".*/


// function avaliarProjetos(orcamento,complexidade){

//     if (complexidade == "Alta" && orcamento < 1000000){
//         return "Alta"
//     }
//     else if (orcamento >500000 && orcamento <= 1000000 && prazoEntrega == "Média"){
//         return "Fornecedor B"
//     }
//     else if (orcamento > 500000 || complexidade == "Baixa"){
//         return "Fornecedor C"
//     }
// }
// console.log(avaliarProjetos(400000, "Baixa")); // 

// /*Atividade 9: Sistema de Avaliação de Cursos
// Contexto: Beatriz trabalha em uma universidade e precisa avaliar cursos baseados na
// avaliação dos alunos e na taxa de conclusão.
// Questão: Se a avaliação dos alunos for maior que 4.5 e a taxa de conclusão for maior que
// 90%, classificar como "Curso Excelente". Se a avaliação for entre 3.5 e 4.5 e a taxa de
// conclusão entre 75% e 90%, classificar como "Curso Bom". Se a avaliação for menor que 3.5
// ou a taxa de conclusão menor que 75%, classificar como "Curso Regular".*/

// function avaliarCurso(avaliacaoAlunos, taxaConclusao) {
//     if (avaliacaoAlunos > 4.5 && taxaConclusao > 90) {
//         return "Curso Excelente";
//     } else if (avaliacaoAlunos >= 3.5 && avaliacaoAlunos <= 4.5 && taxaConclusao >= 75 && taxaConclusao <= 90) {
//         return "Curso Bom";
//     } else {
//         return "Curso Regular";
//     }
// }

// // Exemplos de uso:
// console.log(avaliarCurso(4.6, 91)); // Curso Excelente
// console.log(avaliarCurso(4.0, 80)); // Curso Bom
// console.log(avaliarCurso(3.0, 70)); // Curso Regular

// console.log(avaliarProjetos(400000, "Baixa")); // 


// /*Atividade 10: Sistema de Classificação de Filmes
// Contexto: Lucas trabalha em uma plataforma de streaming e precisa classificar filmes
// baseados na avaliação dos usuários e no número de visualizações.
// Questão: Se a avaliação dos usuários for maior que 4.5 e o número de visualizações maior
// que 1.000.000, classificar como "Filme Blockbuster". Se a avaliação for entre 3.5 e 4.5 e o
// número de visualizações entre 500.000 e 1.000.000, classificar como "Filme Popular". Se a
// avaliação for menor que 3.5 ou o número de visualizações menor que 500.000, classificar como
// "Filme Nicho"*/


// function classificarFilme(avaliacaoUsuarios, numeroVisualizacoes) {
//     if (avaliacaoUsuarios > 4.5 && numeroVisualizacoes > 1000000) {
//         return "Filme Blockbuster";
//     } else if (avaliacaoUsuarios >= 3.5 && avaliacaoUsuarios <= 4.5 && numeroVisualizacoes >= 500000 && numeroVisualizacoes <= 1000000) {
//         return "Filme Popular";
//     } else {
//         return "Filme Nicho";
//     }
// }

// // Exemplos de uso:
// console.log(classificarFilme(4.7, 1500000)); // Filme Blockbuster
// console.log(classificarFilme(4.0, 750000));  // Filme Popular
// console.log(classificarFilme(3.2, 300000));  // Filme Nicho