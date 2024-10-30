# Projeto CRUD com Node.js e JSON

Este projeto é um exemplo de aplicação CRUD (Create, Read, Update, Delete) usando Node.js e um arquivo JSON para armazenar os dados. Ele também permite executar comandos CLI para adicionar, atualizar e deletar itens.

## Pré-requisitos

- Node.js instalado
- NPM (Node Package Manager) instalado

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

2. Instale as dependências:
   ```bash
   npm install

## Uso
Para iniciar o servidor, execute:
    ```bash
    node [index.js](http://_vscodecontentref_/0)

## Comandos CLI
Você pode usar os seguintes comandos no CLI para interagir com o arquivo JSON:
- Adicionar um item:
    ```bash
    add "Nome do Item"

- Atualizar um item
    ```bash
    update <id> "Novo Nome"

- Deletar um item
    ```bash
    update 0

## Estrutura do Projeto
- index.js: Arquivo principal que contém a lógica do servidor e os comandos CLI.
- items.json: Arquivo JSON onde os dados são armazenados.

Exemplo de items.json:
    ```bash
    [
        {
            "name": "Comprar leite"
        },
        {
            "name": "Comprar pão"
        }
    ]