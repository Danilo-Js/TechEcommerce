
# 📱 TechEcommerce

Um aplicativo de e-commerce simples desenvolvido com **React Native**, utilizando a biblioteca [react-native-ecommerce-components](https://github.com/Danilo-Js/react-native-ecommerce-components).
Esse aplicativo foi feito com o objetivo de gerar uma comprovação concreta da usabilidade dos componentes da biblioteca citada.

<p>
  <img src="images/demonstration.gif" alt="Demonstração do App" width="250" />
  <img src="images/1 - Home.png" alt="Demonstração do App" width="250" />
  <img src="images/2- Categorias.png" alt="Demonstração do App" width="250" />
</p>

---

## 📌 Visão Geral

O **TechEcommerce** é um projeto de exemplo focado em demonstrar a implementação de um fluxo básico de comércio eletrônico em dispositivos móveis. Ele inclui funcionalidades essenciais como:

- 📂 Navegação por categorias
- 🛍️ Listagem de produtos
- 🔎 Busca de produtos
- 🛒 Carrinho de compras
- 💳 Pagamento
- ✅ Confirmação de pedido
- 🚚 Rastreamento de entrega
- ⭐ Avaliações de produtos

Todo o projeto foi desenvolvido com foco em **componentização**, **Context API** para gerenciamento de estado e reutilização de componentes da biblioteca **react-native-ecommerce-components**.

---

## 🚀 Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/TechEcommerce.git
```

2. **Instale as dependências:**

```bash
cd TechEcommerce
npm install
```

3. **Execute o projeto no Android:**

```bash
npx react-native run-android
```

Ou no iOS:

```bash
npx react-native run-ios
```

> **Observação:** É necessário ter o ambiente de desenvolvimento React Native já configurado.

---

## 🗂️ Estrutura de Pastas

```plaintext
src/
├── context/              # Context API: Carrinho, Produtos, Categorias, Avaliações
├── models/               # Modelos simulados de dados (categorias, produtos, avaliações)
├── navigation/           # Configuração das rotas com react-navigation
├── screens/              # Telas principais: Home, Categorias, Carrinho, etc.
```

---

## 🧱 Tecnologias Utilizadas

- **React Native**
- **TypeScript**
- **React Navigation**
- **Context API (React)**
- **react-native-ecommerce-components**

---

## 📲 Principais Telas e Funcionalidades

| Tela                       | Descrição                              |
|----------------------------|----------------------------------------|
| Home                       | Busca de produtos e acesso às categorias |
| Categorias                 | Exibição das categorias disponíveis    |
| Lista de Produtos          | Listagem dos produtos por categoria    |
| Detalhes do Produto        | Informações detalhadas e botão de compra |
| Carrinho de Compras        | Revisão dos itens antes de pagar       |
| Pagamento                  | Tela de checkout e captura de pagamento |
| Confirmação de Pedido      | Mensagem de agradecimento e resumo do pedido |
| Rastreamento do Pedido     | Acompanhamento do status de entrega    |
| Avaliações do Produto      | Listagem e envio de avaliações dos clientes |

---

## 📡 Mock de Dados

O projeto usa **mock models locais** para categorias, produtos e avaliações (arquivos dentro de `src/models`), facilitando testes sem necessidade de backend.

---

## 📋 Dependências principais do projeto

- `react-native`
- `@react-navigation/native`
- `react-native-ecommerce-components`
- `react-native-vector-icons`
- `typescript`

---

## ✅ Conclusão

Este projeto demonstra como criar um **fluxo de compra funcional** utilizando **boas práticas de componentização, gerenciamento de estado com Context API** e o uso de **componentes prontos de uma biblioteca de e-commerce**.

Ideal para quem deseja aprender os fundamentos de um app de loja virtual com React Native!

---

## 📄 Licença

Projeto desenvolvido apenas para fins educacionais. Licença MIT.
