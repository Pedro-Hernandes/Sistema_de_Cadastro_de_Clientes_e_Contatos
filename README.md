# Cadastro de Clientes e Contatos

Este projeto é uma aplicação web que permite gerenciar clientes e seus contatos associados. Ele oferece funcionalidades completas de CRUD (Criar, Ler, Atualizar e Excluir) tanto para clientes quanto para contatos, além de um relatório que exibe todos os clientes com seus respectivos contatos.

---

## Funcionalidades Implementadas

1. **Cadastro de Clientes**:
   - Campos: Nome completo, e-mail, telefone e data de registro.
   - Operações CRUD: É possível criar, editar, visualizar e excluir clientes.

2. **Cadastro de Contatos**:
   - Campos: Nome completo, e-mail, telefone.
   - Associação: Contatos são vinculados a um cliente específico.
   - Operações CRUD: É possível criar, editar, visualizar e excluir contatos.

3. **Relatório de Clientes e Contatos**:
   - Exibe todos os clientes com seus contatos associados.
   - Gerado em tela, permitindo uma visualização clara das associações.

---

## Tecnologias Utilizadas

### Backend:
- **Node.js**: Para a criação do servidor.
- **Express.js**: Para gerenciamento de rotas e APIs REST.

### Frontend:
- **HTML**: Estrutura do conteúdo.
- **CSS**: Estilização do design.
- **JavaScript**: Funcionalidades dinâmicas no cliente.

### Outros:
- **Cors**: Para habilitar comunicação entre o frontend e o backend.
- **Body-parser**: Para manipulação de dados enviados via JSON.

---

## Estrutura do Sistema

### Frontend:
- `index.html`: Contém as telas de cadastro de clientes, contatos e geração de relatório.
- `style.css`: Estilos aplicados ao sistema, com um layout responsivo e limpo.
- `app.js`: Lógica de interação com a API e manipulações dinâmicas no DOM.

### Backend:
- `server.js`: Contém toda a lógica do servidor, como:
  - CRUD de clientes e contatos.
  - Relatório que associa clientes aos seus contatos.

### Estrutura de Diretórios:
```
/
|-- /public
|   |-- index.html
|   |-- style.css
|   |-- app.js
|-- /server
|   |-- server.js
|-- package.json
```

---

## Como Funciona

1. **Inicialização do Servidor**:
   - Instale as dependências com `npm install`.
   - Execute o servidor com `node server.js`.
   - O servidor ficará ativo na porta `3000` (http://localhost:3000).

2. **Uso do Sistema**:
   - Acesse a interface web.
   - Cadastre clientes e contatos.
   - Visualize e manipule os dados.
   - Gere relatórios diretamente pela interface.

---

## Destaques do Projeto

- **CRUD Completo**: Funcionalidades para gerenciar clientes e contatos.
- **Relatório Automatizado**: Exibição clara das associações entre clientes e contatos.
- **Arquitetura Separada**: Divisão entre frontend e backend para maior organização.
- **Design Simples e Funcional**: Telas intuitivas para facilitar o uso.

---

## Possíveis Melhorias Futuras

- Criação de um front-end mais sofisticado, voltado para experiencia do usuario.
- Verificação de existencia de mais de um cliente já cadastrado, em caso positivo, bloqueio de criação e aviso via pop-up que o cliente já existe.
- Geração de relatórios em PDF.
- Integração com um banco de dados real.
- Validação mais robusta no backend.
- Implementação de testes automatizados.
- Telas mais sofisticadas com frameworks (Angular).

---

## Licença
Este projeto foi realizado para obtenção de nota na disciplina de "Fundamentos de Desenvolvimento Web I" e tem como fins enriquecimento de portifolio profissional.
