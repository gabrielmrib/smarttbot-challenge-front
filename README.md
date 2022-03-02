# Desafio Frontend Smarttbot

Aplicação criada em TypeScript + React consumindo a API da Smarttbot por meio da biblioteca `Axios`

## Site

[http://smarttbot-challenge-front.vercel.app](http://smarttbot-challenge-front.vercel.app)

## Funcionamento

A aplicação pega as informações necessárias através do endpoint `/robots` e `/strategies` e a partir delas, faz a
atribuição dos estados necessários para a criação dos componentes.

## Instalação & Execução

Para rodar o projeto em sua maquina basta executar os comandos abaixo

```sh
npm install
npm run dev
```

## Decisões de Design

- Apesar de existir um endpoint que retornava um Resumo de Operações (`GET /robot/overview`), decidi não utiliza-lo e
  fazer a conta através dos dados de listagem de robo, em que somo as movimentações (`movimentations`) para o "Resumo de
  movimentação" (por isso o valor alto); faço uma contagem de transações por papéis negociados em todos os robôs e somo
  as transações para o "Total de transações realizadas" e. Decidi fazer dessa forma, pois existem poucos dados
  retornando da API e por isso não faria sentido (e não ficaria visualmente agradável) às duas colunas para mostrar os
  papeis negociados. Além de ser uma forma de demonstrar conhecimento.
- Todo o componente de adicionar robo é clicavel, pois não é mais acessível para pessoas com alguma deficiência motora.
- Os robôs são apresentados do mais recente criado para o mais antigo, para facilitar a visualização quando algum robô
  for criado.
- O modal não apresenta todos os campos necessários para a criação do robo, por isso, para que o robô possa ser criado
  corretamente, foi adicionado dados padrão na requisição.
- Existem vários robôs sem alguns dados, por isso, quando isso acontece, valores zerados são atribuidos. Defini assim,
  pois o layout no figma não especifica o que fazer neste _corner case_ e algo diferente disso não seria fiel ao layout
  proposto.
- Não foi colocado um limite de robôs na requisição, pois, apesar do layout apresentar apenas 8 itens, espera-se que
  isto seja apenas a título de exemplo. Ademais, sei que seria possível utilizar a paginação e criar, por exemplo, um _
  scroll infinito_. Mas ainda não sei faze-lo e não tive tempo para estudar sobre e fazer.