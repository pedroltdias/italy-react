# Guia Turístico - Itália
Este projeto tem como principal objetivo a construção de um site de turismo/informativo sobre cidades italianas e a Itália, como um todo.

## Tecnologias Utilizadas

- React
- TypeScript
- SCSS
- Node

## Pacotes e Dependências

**Chakra Ui**: Uma biblioteca de componentes simples, modular e acessivel.
Emotion

**Emotion**: Biblioteca para escrever css com javascript

**Classnames**: Biblioteca de utilidade para usar condicionais em nomes de classes css

**Normalize**: Reseta o css, padronizando os navegadores

**React Icons**: Biblioteca de icones do react

**React Router Dom**: Biblioteca para roteamento declarado e encadeado

**Express**: Framework para Node que oferece recursos mínimos para construção de servidores web.

**Mongoose**: Biblioteca de poo em javascript utilizada para fazer a conexão entre o MongoDB e a api.

**DEV**:

**Eslint**: Ferramenta de análise de código estático para identificar padrões problemáticos.

**Nodemon**: Ferramenta que auxilia o desenvolvimento reiniciando o servidor automaticamente.

## O Projeto
O Projeto possui:
- Servidor
	- Padrão MVC
- Banco de dados não relacional
- 5 páginas + 1 página de erro
- 4 Componentes
- Imagens de cada cidade e/ou região
- JSON com os dados utilizados na aplicação
Os arquivos do projeto foram divididos em pastas a fim de melhorar a organização e facilitar a manutenção do código.
Todas as páginas foram construídas com HTML **semântico**, recursos de **acessibilidade** e com foco na **usabilidade**.

## Back-End

### Config 
Repositório com o script de conexão entre servidor e banco, o ideal seria que os dados estivessem em uma pasta, ou arquivo, config, os quais seriam utilizadas variaveis ao invés dos dados, mas com o intuito de facilitar o desenvolvimento e por se tratar de um projeto com fins educativos, utilizamos os dados verdadeiros.

### Controllers
Repositório responsável pelos controllers de cada objeto criado no banco. Os controllers são responsáveis pelas ações/funções de cada objeto.

### Models
Repositório responsável pelas models de cada objeto. As models são responsáveis pela estrutura de cada objeto.

### Routes
Repositório responsável pelo endereçamento de cada ação nos objetos.

## Front-End

### Inicio
Está página possui uma recomendação de 3 roteiros aleatórios. 
Possui a parte **"Nossa Casa"** a qual mostra uma imagem demonstrativa da itália e o "endereço" da empresa.
O componente `nav`, `footer` e `padrao`.

### Menu
Está página demonstra o roteiro completo. É a principal página do projeto, a qual concentra a maior parte de componentes e esforço.

Nesta página encontram-se todos os roteiros disponíveis, além de ser possível **buscar** um roteiro especifíco, **filtrar** por região e **ordenar** por quantidade de dias ou menor preço.

Além disso, é possível selecionar um roteiro o qual o abre em uma página maior exibindo a descrição, região, duração e valor da viagem.

### Sobre
Página demonstrativa que fala um pouco "sobre" a empresa.

### Formulário
Formulário para cadastro de clientes interessados nos roteiros.

![Formulário](./public/assets/formulario.png)

## Acessibilidade

Acessibilidade do site utilizando o site do governo: [Gov Accessibility](https://www.acessibilidade.gov.pt/).

O resultado:

![Accessibility](./public/assets/acessibiliade.png)

## Dados

Utilizamos objetos não relacionais para popular o site. Estão disponíveis no diretório `src\data` no arquivo `roteiros.json`.
Cada roteiro possui um titulo, uma descrição, uma foto, um id/identificador, um preço, uma duração e uma categoria.
Aqui está um exemplo:
```
{
	"title": "Roteiro Ligúria",
	"description": "Viagem pela Ligúria",
	"photo": "/assets/roteiros/liguria/liguria.jpg",
	"id": 1,
	"price": 100.0,
	"duration": 7,
	"category": {
		"id": 1,
		"label": "Liguria"
	}
}
```