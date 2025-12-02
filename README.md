# Cypress - Automação de Login Netflix

Este projeto contém um teste automatizado utilizando Cypress para realizar o login no site da Netflix.

## 🚀 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript

## 📁 Estrutura do Projeto

```
netflix-login-cypress/
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js
│   ├── fixtures/
│   ├── support/
├── cypress.config.js
├── .env
└── README.md
```

## ⚙️ Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM ou Yarn
- Conta ativa na Netflix para testes

## 🔧 Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd netflix-login-cypress
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

## 🔐 Configuração das Variáveis de Ambiente

**IMPORTANTE**: Por questões de segurança, as credenciais de login não devem ser commitadas no código.

1. Crie um arquivo `.env` na raiz do projeto baseado no arquivo `.env`:

2. Adicione suas credenciais da Netflix no arquivo `.env`:
   ```
   login_netflix="seu_email@exemplo.com"
   senha_netflix="sua_senha"
   ```

   **Nota**: Substitua `seu_email@exemplo.com` e `sua_senha` pelos dados reais da sua conta Netflix.

## 🧪 Executando os Testes

### Modo Interativo (Cypress Test Runner)
```bash
npx cypress open
# ou
yarn cypress open
```

### Modo Headless (Terminal)
```bash
npx cypress run
# ou
yarn cypress run
```

## 📝 Teste Implementado

O projeto contém um teste que:

1. Acessa o site da Netflix
2. Fecha o modal inicial (se presente)
3. Clica no link "Sign In"
4. Preenche os campos de email e senha
5. Clica no botão de login
6. Valida se o login foi bem-sucedido verificando a presença do elemento "Gerenciar perfis"

## 🔍 Observações

- O teste pode falhar se a Netflix alterar a estrutura da página ou dos seletores
- É necessário ter uma conta Netflix ativa para executar os testes
- Recomenda-se usar uma conta de teste, não a conta principal
- Em alguns países, a Netflix pode exigir verificação adicional (como código SMS)

## ⚠️ Aviso Legal

Este projeto é apenas para fins educacionais e de aprendizado em automação de testes. 

**Não utilize este projeto para:**
- Violar os termos de serviço da Netflix
- Realizar ataques de força bruta
- Qualquer atividade maliciosa

O autor não se responsabiliza pelo uso indevido deste código.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
```

Você também precisará criar um arquivo `.env.example` na raiz do projeto:

```env
# .env.example
login_netflix="seu_email@exemplo.com"
senha_netflix="sua_senha"
```

E um arquivo `.gitignore` para evitar que o arquivo `.env` seja commitado:

```gitignore
# .gitignore
.env
node_modules/
```

Este README fornece todas as informações necessárias para configurar e executar o projeto, além de importantes avisos de segurança e uso ético.
