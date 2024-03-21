# Desafio Desenvolvedor Front-end Pleno - Onyma

Desafio - interface de cadastro de funcionários para empresas de RH.

## Contexto

A área de RH de empresas clientes utilizam de nossa interface para cadastrar funcionários que poderão ou não realizar exames ocupacionais.

A interface deve permitir que o usuário escolha em qual das empresas o novo funcionário será inserido, sendo que um funcionário não pode estar ativo em duas empresas ao mesmo tempo.

Você desenvolverá uma página única que mostre a lista de usuários de cada empresa separadamente, permitindo que os dados sejam alterados ou excluídos, além de um modal de form que permita o cadastro de novos funcionários.

## Requisitos

Você deve criar um serviço com os seguintes requisitos:

1. Requisitos gerais
   - A aplicação deve ser desenvolvida utilizando NextJS OK
   - O projeto deve ter um README.md com todas as instruções sobre como executar e testar o projeto
   - O projeto deve utilizar Git como ferramenta de controle de versão OK
   - *Possuir testes automatizados é um diferencial*
   - *Estratégias de SEO são um diferencial* OK
1. Requisitos da página
    1. Cadastro de funcionários
        - Deve ser possível cadastrar novos funcionários para a empresa. OK
        - Cada funcionário deve ter nome, CPF, RG, data de nascimento, email, telefone, endereço, setor e cargo. OK
        - Todos os campos são obrigatórios, exceto email e telefone. OK
        - É obrigatório ter um email OU um tele fone. OK
        - Não pode haver dois funcionários com o mesmo CPF (inclusive em empresas diferentes) OK
        - O funcionário não pode estar **ativo** em duas empresas OK
        - O endereço do funcionário deve ser capturado automaticamente *(ex: latitude/longitude do browser + Geocoding API)*
        - *Cadastro em lote/batch [adicional]*
    2. Lista dos funcionários
        - A página deve conter a lista dos funcionários cadastrados. OK
        - Deve ser possível inativar um funcionário em determinada empresa (o registro continua, mas com status inativo). OK
        - Deve ser possível alterar um funcionário ao clicar no card listado. OK
        - *Alterar a ordem dos cards (drag and drop) [adicional]*


2. Uma breve explicação das decisões tomadas deverá ser enviada para nós, da forma que for acordado entre você e quem lhe enviou o desafio.
3. A avaliação ocorrerá com base na arquitetura, design e qualidade do código, entendimento das regras de negócio, tolerância a falhas e o quão preparado esse serviço estaria para ser rodado em produção.
4. Existem algumas funcionalidades adicionais. Apesar de não serem obrigatórias, terão peso considerável na avaliação.
4. Achamos que entre **5 a 7 dias** é tempo suficiente para a finalização, mas caso sua disponibilidade exija mais tempo, avise a gente com, pelo menos, 1 dia de antecedência do prazo final.

## Passo-a-passo de desenvolvimento:

* Configuração Typescript, eslint, atualização de pacotes OK
* Criação dos componentes com mock de dados OK
* Adição React-Query para lidar com API OK
* Adição json-server para simular uma API OK
* Listagem dos dados através da API OK
* Adição de CRUD na API utillizando json-server OK
    * https://github.com/typicode/json-server
    * ' ' → == | lt → < | lte → <= | gt → > | gte → >= | ne → !=
* Função de listagem múltipla, filtragem, ordenação
* Testes unitários - TDD se possível
* Estratégias de SEO utilizando NextJS OK
    * https://nextjs.org/learn/dashboard-app/adding-metadata

## Instalação

Para instalação das depedências, execute:

```
npm i
```

Para a instalação da ferramenta 'json-server', execute:

```
npm i json-server -g 
```

## Execução:

Para executar o projeto, utilize:

```
npm run dev
```

Ele será executado na porta '3000' por padrão, se esta porta estiver ocupado, refira ao log para identificar a porta do projeto.

Esse projeto usa uma API local com json-server, para roda-la, execute:

```
json-server db.json -p 3003
```

Abra http://localhost:3000 para visualizar o projeto.
Abra http://localhost:3003 para visualizar a API.