const express = require('express');
const fs = require('fs');
const readline = require('readline');
const app = express();
const port = 3000;
const filePath = './items.json';

app.use(express.json());

// Função para ler dados do arquivo JSON
const readData = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

// Função para escrever dados no arquivo JSON
const writeData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Função para adicionar um item
const addItem = (name) => {
    const items = readData();
    const newItem = { name };
    items.push(newItem);
    writeData(items);
    console.log('Item adicionado:', newItem);
};

// Função para atualizar um item
const updateItem = (id, name) => {
    let items = readData();
    if (id < 0 || id >= items.length) {
        console.log('ID inválido');
        return;
    }
    items[id].name = name;
    writeData(items);
    console.log('Item atualizado:', items[id]);
};

// Função para deletar um item
const deleteItem = (id) => {
    let items = readData();
    if (id < 0 || id >= items.length) {
        console.log('ID inválido');
        return;
    }
    const deletedItem = items.splice(id, 1);
    writeData(items);
    console.log('Item deletado:', deletedItem[0]);
};

// Configurar a interface de leitura do CLI
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const [command, ...args] = input.split(' ');
    switch (command) {
        case 'add':
            addItem(args.join(' '));
            break;
        case 'update':
            const idToUpdate = parseInt(args[0]);
            const newName = args.slice(1).join(' ');
            updateItem(idToUpdate, newName);
            break;
        case 'delete':
            const idToDelete = parseInt(args[0]);
            deleteItem(idToDelete);
            break;
        default:
            console.log('Comando não reconhecido');
    }
});

// Iniciar o servidor Express
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});