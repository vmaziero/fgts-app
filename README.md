# 💸 Simulador Web de Saque-Aniversário do FGTS

Este é um projeto web desenvolvido em **React com Vite**, usando **TypeScript** e **Styled Components**, que permite simular o valor disponível para **saque-aniversário do FGTS** com base no saldo informado pelo trabalhador.

Além da simulação, o sistema realiza uma **validação de telefone** por meio da API externa [Phone Number Validation and Verification API](https://rapidapi.com/). O objetivo é garantir que o número informado é válido antes de prosseguir com a simulação.

---

## 📌 Funcionalidades

- Simulação do valor disponível para saque do FGTS conforme as faixas oficiais.
- Validação do número de telefone via API externa.
- Formulário com campos obrigatórios e máscaras para telefone e moeda em BRL (R$ ).
- Página de resultado com os dados da simulação.
- Testes automatizados em jest para validação da renderização dos campos do formulário e para validação das máscaras aplicadas.

---

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [React Router](https://reactrouter.com/)
- API de verificação de telefone ([Phone Number Validation and Verification API](https://www.abstractapi.com/api/phone-validation-api))

---

## 🚀 Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/vmaziero/fgts-app.git
```

### 2. Instale as dependências do projeto 
```bash
cd fgts-app
npm install
```

### 3. Rode o projeto localmente
```bash
npm run start
```

### 4. Abra o localhost
O terminal irá retornar a porta onde o projeto foi aberto. Pressione "Ctrl" e clique no link.
Deverá ser algo como 'http://localhost:4173/'


## 🧪 Como rodar os testes

### 1. Execute os testes automatizados
```bash
npm run test
```