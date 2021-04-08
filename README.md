![Badge](https://img.shields.io/badge/npm-6.14.5-%237159c1?style=for-the-badge&logo=ghost)


# KG - LAB005 
[Acesse aqui a aplicação](https://luciana-pereira.github.io/SAP005-cipher/)


![home](https://user-images.githubusercontent.com/37550557/98432802-b183e780-20a0-11eb-82ed-0cb77b6249a4.JPG)

## Índice

* [1. Introdução](#1-introdução)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos do projeto](#3-objetivos-do-projeto)
* [4. Utilização](#4-utilização)
* [5. Deploy](#5-Deploy)

***

## 1. Introdução

Se torna cada vez mais difícil transmitir mensagens de forma segura e prática, sem temer que a mensagem encaminhada possa ser transmitida a outra pessoa que não seja o destinatário encaminhado, por este motivo foi desenvolvido um site [acesse aqui](https://luciana-pereira.github.io/SAP005-cipher/) para codificar e descodificar mensagens.

## 2. Resumo do projeto

Este projeto foi baseado na Cifra de César. A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um tipo de cifra por substituição, em que cada letra do texto original é substituída por outra que se encontra há um número fixo de posições (deslocamento) mais a frente do mesmo alfabeto.

## 3. Objetivos do projeto

O objetivo do projeto e realizar a _criptografia_ e a _descriptografia_ de mensagens  de forma segura e objetiva ao destinatário, onde somente quem envia e o destinatário compartilharam de uma chave para ter acesso à mensagem. Garantindo assim que a mensagem não seja lida por terceiros ou pessoas não autorizadas.

![chave](https://user-images.githubusercontent.com/37550557/98432827-e8f29400-20a0-11eb-8dd2-5e3762d7383a.JPG)


## 4. Utilização

A utilização da aplicação e fácil e prática, temos 3 campos onde:



1º E onde iremos criaremos ou inseriremos uma chave para a  _criptografia_ e a _descriptografia_ que será compartilhada entre você e o destinatario, garantindo assim a segurança no envio da mensagem.

2º E o campo onde a mensagem a ser  _criptografada_ ou _descriptografada_ será inserida.

3º E onde teremos o resultado que desejamos sejá a mensagem  _criptografada_ ou _descriptografada_.

## 5. Deploy

**Pré-requisitos**
Para iniciar, será necessario ter instalado na máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e um editor de texto como o [VSCode](https://code.visualstudio.com/)

**Clone o repositório:**
$ git clone <https://github.com/  luciana-pereira/SAP005-cipher>

**Acesse a pasta do projeto no terminal:**
$ cd SAP005-cipher

**Instale as dependências do projeto:**
$ npm install

**Execute a aplicação:**
$ npm start

O servidor inciará na **porta:5000**
acesse <http://localhost:5000>

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
