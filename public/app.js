document.addEventListener('DOMContentLoaded', () => {
    const formClientes = document.getElementById('form-clientes');
    const formContatos = document.getElementById('form-contatos');
    const clienteAssociado = document.getElementById('cliente-associado');
    const btnRelatorio = document.getElementById('btn-gerar-relatorio');
    const relatorioContainer = document.getElementById('relatorio-container');

    // Cadastrar Cliente
    formClientes.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome-cliente').value;
        const email = document.getElementById('email-cliente').value;
        const telefone = document.getElementById('telefone-cliente').value;

        await fetch('/api/clientes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, telefone })
        });

        atualizarClientes();
    });

    // Cadastrar Contato
    formContatos.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome-contato').value;
        const email = document.getElementById('email-contato').value;
        const telefone = document.getElementById('telefone-contato').value;
        const clienteId = clienteAssociado.value;

        await fetch('/api/contatos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, telefone, clienteId: parseInt(clienteId) })
        });
    });

    // Atualizar lista de clientes
    async function atualizarClientes() {
        const response = await fetch('/api/clientes');
        const data = await response.json();

        clienteAssociado.innerHTML = '<option value="" disabled selected>Selecione um cliente</option>';
        data.forEach(cliente => {
            const option = document.createElement('option');
            option.value = cliente.id;
            option.textContent = cliente.nome;
            clienteAssociado.appendChild(option);
        });
    }

    // Gerar relatório
    btnRelatorio.addEventListener('click', async () => {
        const response = await fetch('/api/relatorio');
        const data = await response.json();

        relatorioContainer.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
    });

    atualizarClientes();
});
