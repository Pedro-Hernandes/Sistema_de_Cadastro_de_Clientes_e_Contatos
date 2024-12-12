const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Mock database
const clientes = [];
const contatos = [];

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Servir a página inicial
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Endpoints de Clientes
app.get('/api/clientes', (req, res) => {
    res.json(clientes);
});

app.post('/api/clientes', (req, res) => {
    const { nome, email, telefone } = req.body;
    const novoCliente = { id: clientes.length + 1, nome, email, telefone, dataRegistro: new Date() };
    clientes.push(novoCliente);
    res.status(201).json(novoCliente);
});

// Endpoints de Contatos
app.get('/api/contatos', (req, res) => {
    res.json(contatos);
});

app.post('/api/contatos', (req, res) => {
    const { nome, email, telefone, clienteId } = req.body;
    const novoContato = { id: contatos.length + 1, nome, email, telefone, clienteId };
    contatos.push(novoContato);
    res.status(201).json(novoContato);
});

// Relatório
app.get('/api/relatorio', (req, res) => {
    const relatorio = clientes.map(cliente => ({
        ...cliente,
        contatos: contatos.filter(contato => contato.clienteId === cliente.id)
    }));
    res.json(relatorio);
});

// Inicializar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
