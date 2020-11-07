![Badge](https://img.shields.io/badge/npm-6.14.5-%237159c1?style=for-the-badge&logo=ghost)

# KG - LAB005

<img src="./src/img/home.png" />

![home](src/img/home.png)


## Índice

* [1. Introdução](#1-Introdução)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)

***

## 1. Introdução

Se torna cada vez mais dificil transmitir mensagens de forma segura e pratica, sem temer que a mensagem encaminhada possa ser transmitida a outra pessoa que não seja o destinatario encaminhado, por este motivo foi desenvolvido um site para codificar e descodificar mensagens, seja ela enviada ou recebida.

## 2. Resumo do projeto

Este projeto foi baseado na Cifra de Cesar. A cifra de César é uma das 
técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

## 3. Objetivos do projeto

O objetivo do projeto e realizar a _criptografia_ e a _descriptografia_ de mensagens  de forma segura e objetiva ao destinario, o mesmo que corpatilhara da chave para ter acesso a mensagem. Garantindo assim que a mensagem seja lida por terceiros que não tem acesso a chave.

## 4. Utilização

* ![Chave](./src/img/chave)

A utilização da aplicação e fácil e pratica, temos 3 campos onde:
1º E onde iremos criar ou inserir uma chave para a  _criptografia_ e a _descriptografia_ que sera compartilhada entre você e o destinatario, garantidindo assim a segurança no envio da mensagem.

2º E o campo onde a messagem a ser  _criptografada_ ou _descriptografada_ sera inserida.

3º E onde teremos o resultado que desejamos sejá a mensagem  _criptografada_ ou _descriptografada_.

### Definição do produto

No README.md, escreva como você definiu seu usuário e qual foi o processo para
definir o produto final a nível de expriência e interface.

* Quem são os principais usuário do produto?
* Quais são os objetivos do usuário em relação com o produto?
* Como você acredita que o produto está resolvendo os problemas do usuário?

## 5. Realizar o deploy

Pré-requisitos
Para iniciar, será necessario ter instalado na máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e um editor de texto como o [VSCode](https://code.visualstudio.com/)

Clone o repositório:
$ git clone <https://github.com/Lu-Pereira/SAP005-cipher>

Acesse a pasta do projeto no terminal:
$ cd SAP005-cipher

Instale as dependências do projeto:
$ npm install

Execute a aplicação:
$ npm start

O servidor inciará na porta:5000 - acesse <http://localhost:5000>

Os arquivos principais estão na pasta _src_ que contém:
* `src/index.html`: Onde está a estrutura da aplicação. Este arquivo
  contém a marcação HTML e chama o CSS, `src/cipher.js` e `src/index.js`.
* `src/cipher.js`: Onde foi implementado o objeto `cipher`, no qual temos dois métodos:
  - `cipher.encode(offset, mensagem)`: `offset` é o número de posições que
      queremos mover para a direita no alfabeto e `mensagem` é a mensagem (texto)
      que queremos cifrar.
  - `cipher.decode(offset, mensagem)`: `offset` é o número de posições que
      queremos mover para a esquerda no alfabeto e `mensagem` é a mensagem (texto)
      que queremos decifrar.
* `src/index.js`: E onde colocamos os eventos de DOM, como o `addEventListener` para chamar o
  `cipher.encode()` e `cipher.decode()`.
