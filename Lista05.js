// Lista 05

// percorre a variavel e altera pelo valor atribuido
// const frutas = ["maçã", "banana", "laranja"];
// frutas.unshift("abacaxi");
// frutas.push("manga");
// frutas.splice(0,1)
// frutas.pop()
// console.log(frutas)

//R: ["maçã", "banana", "laranja"];

// let numeros = [10, 20, 30, 40, 50]
// numeros.splice(2,0,25)
// console.log(numeros.indexOf(40))
// console.log(numeros)
// numeros.splice(4,1)
// console.log(numeros)
// R: [10, 20, 25, 30, 50]

// let cores = ['vermelho', 'azul', 'verde', 'amarelo','azul'];
// console.log(cores.indexOf("azul"))
// console.log(cores.lastIndexOf("azul"))
// console.log(cores.includes("roxo"))

//R: 1 | 4 | False

// let alunos = ['João', 'Ana', 'Carlos', 'Bia'];
// alunos.splice(2,1)
// alunos.push("Maria")
// console.log(alunos)
// alunos.unshift("Pedro")
// console.log(alunos)

//R:["Pedro","João","Ana","Bia","Maria"]

// let animais = ['gato', 'cachorro', 'pássaro', 'peixe', 'gato'];
// animais.shift();
// animais.push("hamster");
// console.log(animais);
// animais.splice(1,1);
// console.log(animais.includes("gato"))

//R: ['cachorro', 'pássaro', 'peixe', 'gato', 'hamster']

// let livros = ['O Senhor dos Anéis', '1984', 'O Pequeno Príncipe', 'Harry Potter'];
// console.log(livros.indexOf("1984"));
// livros.splice(2,1);
// console.log(livros)

// R: 1 | ['O Senhor dos Anéis', '1984', 'Harry Potter']

// let cidades = ['São Paulo', 'Rio de Janeiro', 'Salvador', 'Brasília'];
// console.log(cidades.includes("Salvador"));
// cidades.unshift("Curitiba")
// console.log(cidades)

// R: true | ['Curitiba', 'São Paulo', 'Rio de Janeiro', 'Salvador', 'Brasília']

// let jogos = ['FIFA', 'Minecraft', 'Fortnite', 'Among Us'];
// jogos.splice(1,1,"The Sims");
// console.log(jogos)
// jogos.shift()
// console.log(jogos)

// R: ['The Sims', 'Fortnite', 'Among Us']

// let esportes = ['futebol', 'basquete', 'vôlei', 'tênis'];
// esportes.shift()
// console.log(esportes.includes("vôlei"));
// esportes.splice(1,1);
// console.log(esportes);

// R: ['basquete', 'tênis']

// let tecnologias = ['HTML', 'CSS', 'JavaScript', 'React'];
// tecnologias.pop();
// tecnologias.unshift("Node.js");
// console.log(tecnologias.indexOf("JavaScript"))
// console.log(tecnologias)

// R: ['Node.js', 'HTML', 'CSS', 'JavaScript']

// let filmes = ['Matrix', 'Inception', 'Avatar'];
// filmes.unshift("Interstellar");
// filmes.pop()
// filmes.push("The Godfather");
// console.log(filmes);

// R: ['Interstellar', 'Matrix', 'Inception', 'The Godfather']

// let cores = ['vermelho', 'azul', 'verde', 'amarelo'];
// cores.splice(2,1,"roxo");
// console.log(cores)

//R: ['vermelho', 'azul', 'roxo', 'amarelo']

// let times = ['Flamengo', 'Corinthians', 'Palmeiras'];
// console.log(times.includes("São Paulo"));
// times.push("São Paulo")
// console.log(times)

//R: False  | ['Flamengo', 'Corinthians', 'Palmeiras', 'São Paulo']

// let comidas = ['pizza', 'hamburguer', 'sushi', 'lasanha'];
// console.log(comidas.indexOf("sushi"));
// comidas.splice(2,1);
// console.log(comidas)

//R: 2  | ['pizza', 'hamburguer', 'lasanha']

// let numeros = [5, 10, 15, 20];
// numeros.push(25);
// numeros.splice(1,1);
// numeros.unshift(7);
// console.log(numeros);

//R: [7, 5, 15, 20, 25]

// let planetas = ['Terra', 'Marte', 'Júpiter', 'Saturno'];
// planetas.shift();
// planetas.unshift("Vênus");
// console.log(planetas);

// R: ['Vênus', 'Marte', 'Júpiter', 'Saturno']

// let cursos = ['Matemática', 'Física', 'Química', 'Biologia'];
// console.log(cursos.includes("Física"));
// cursos.splice(1,1);
// console.log(cursos);

// R: true  |  ['Matemática', 'Química', 'Biologia']

// let idiomas = ['Inglês', 'Espanhol', 'Francês', 'Alemão'];
// idiomas.shift();
// idiomas.push("Italiano");
// console.log(idiomas.indexOf("Francês"));
// console.log(idiomas);

// R: 1  | ['Espanhol', 'Francês', 'Alemão', 'Italiano']

// let frutas = ['maçã', 'banana', 'laranja', 'uva'];
// frutas.unshift("morango");
// console.log(frutas.includes("laranja"));
// console.log(frutas)

// R: true  |  ['morango', 'maçã', 'banana', 'laranja', 'uva']