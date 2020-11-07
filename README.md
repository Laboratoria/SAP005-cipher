# Cifra de César

#  1. Introdução 

A proposta era desenvolver uma aplicação que utilizasse a cifra de César para 
cifrar e decifrar determinada mensagem.

##### O tema escolhido foi um campo de login para as Bases Aérea da Força Aérea Brasileira. 

## 1.1 A criptografia como ferramenta para acesso aos dados

A criptografia transforma o conteúdo dos dados de uma maneira 
que apenas as partes autorizadas possam compreender. 
Vamos ver um exemplo de uma técnica bem simples, aplicada sobre a senha password:
![](https://github.com/SaraOhara/SAP005-cipher/blob/master/src/img/codigo.png)

Você consegue identificar como foi feita a transformação? Nesse caso, 
simplesmente trocamos cada uma das letras pela letra seguinte. Então a 
letra ‘p’ vira ‘q’, a letra ‘a’ vira ‘b’ e assim vai até o final da palavra.
Esse método é conhecido como Cifra de César, e foi utilizada pelo imperador
romano Júlio César para esconder informações sigilosas. Nele, apenas quem 
sabe qual foi a transformação utilizada consegue resgatar a informação 
imediatamente. Quem não souber vai ter que tentar várias técnicas diferentes 
até conseguir chegar no texto original. Porém, como o acesso é único apenas
com aquela chave fornecida naquele instante seria inviável haver um rastreio
de carácter malicioso.

## 1.2 Como utilizamos a criptografia para autenticação?

Qual é o processo que o programa executa quando checa a autenticidade do usuário, ou seja, se 
certificar que ele é quem ele realmente diz ser?
Normalmente, temos vários pares de logins e senhas guardados. Quando o usuário diz que ele é o 
login joao com a senha senhaseguradojoao, nós buscamos no nosso banco de dados o par com login 
joao e verificamos se a senha guardada bate com a senha fornecida pelo usuário.
Se elas forem iguais, ótimo, temos uma garantia de que aquele usuário realmente é o joao pois 
apenas ele deveria saber sua senha. Se elas não foram iguais, negamos o acesso desse usuário à 
conta do joao.
Com essa nova informação gerada o próprio programa na área de acesso checa se a senha que o 
usuário forneceu é a mesma que tem guardado no banco de dados automaticamente descriptografando 
a mesma.
Precisaríamos primeiro criptografar-lha, e depois comparar as duas senhas em texto limpo.

Então teríamos o seguinte fluxo:
   * Receber o login e a senha do usuário;
   * Buscar a senha criptografada do login fornecido;
   * Descriptografar esse login e senha com uma chave e comparar com a senha fornecida 
    (essa função será dada no campo a direita juntamente com o banco de dados).
    
Essa técnica que podemos utilizar para atrapalhar mais ainda o atacante do nosso banco de dados. 
Agora, mesmo se ele conseguir decodificar uma senha comum, ele não terá acesso às outras contas 
que utilizam essa mesma senha. Como os usuários tem o péssimo hábito de usar senhas comuns
e repetidas, isso é um grande avanço no nosso sistema.

# 2. Interface

A interface fornece uma página com visualização clara e objetiva de como preencher cada campo 
requerido codificar ou decodificar o acesso do usuário e senha e até mesmo limpar os dados caso 
tenha digitado algo incorreto. 
Para ter acesso à página web, [clique no link](https://saraohara.github.io/SAP005-cipher/)  

# 3. Público alvo

O projeto focado para os funcionários autorizados é um campo de login onde por sua vez libera o 
acesso para os programas internos das Bases Área da (FAB).
A criptografia transforma o conteúdo dos dados de uma maneira que apenas as partes autorizadas 
possa ler.
Basicamente o programa altera seu login de acesso utilizando criptografia e promovendo melhor 
segurança. A interface é auto explicativa, no campo a esquerda basta executar um novo código 
numérico aleatório, com esse número gerado o usuário entrará com esse novo código fornecido juntamente
com seu usuário e posteriormente a senha, executado o comando de criptografar permitindo seu novo login
de acesso único somente naquele momento. 

# 4. Processo: Organização, fluxograma e paleta de cores

Foi realizado um fluxograma através do aplicativo Notion para ajudar no entendimento do código e criado
uma paleta de cores para ter um trabalho visual melhor.

## 4.1 Para ter acesso ao fluxograma: 

#### [Notion](https://www.notion.so/7cf150e68dad4cc8bff5710aa6da7953?v=dc466134fde84a8ba854c21fbeb3cc7c)


## 4.2 Paleta de cores

![pantone](https://github.com/SaraOhara/SAP005-cipher/blob/master/src/img/pantone.png)

# 5. Instalação e execução

    • Use o Fork para criar um repositório em seu GitHub;
    • Clone o repositório em sua máquina, no terminal digite 
    "git clone + link copiado" e dê enter;
    • Verifique se tem o nodejs instalado, se não tiver faça 
    a instalação;  
    • Pelo terminal acesse a pasta do seu projeto, e está pronto 
    para ser utilizado ou alterado.
      
## 5.1 Comandos npm

Os comandos necessários para executar o programa em sua máquina são:

    • npm install: este irá auxiliar na instalação do projeto, 
    no gerenciamento da versões e no 
    gerenciamento de dependências necessárias para executa-lo.
    • npm run test: procura pelo script test dentro do package.json, 
    executar o que estiver dentro dele 
    irá testar seu código e verificar se está cumprindo com o desejado; 
    • npm run start: executa os scripts que estiverem localizados no 
    arquivo package.json, no caso o 
    "start"
    fornecerá um link de acesso e o projeto poderá ser aberto no browser;
    • npm run deploy: publica uma versão do seu projeto no GitHub Pages.
      
##### Importante: Sempre que possível realizar o comando: git commit -m “” 
##### Certifique-se através do comando git log se o commit foi realizado com sucesso.

# 6. Considerações gerais

A aplicação apresenta as seguintes características obrigatórias:

    • REAME.md: explição de como fazer deploy, instalar e executar a aplicação, 
    assim como uma introdução a aplicação, suas funcionalidades e as decisões 
    que foram tomadas. 
    • src/index.html: ponto de entrada da aplicação. Este arquivo contém a 
    marcação HTML e chama o CSS e JavaScript necessários. 
    • src/cipher.js: objeto cipher implementado, o qual já está Este objeto 
    (cipher) contém dois métodos: 
        ◦ cipher.encode(offset, message): offset é o número de posições que 
          queremos mover para a direita no alfabeto e message é a mensagem 
          (texto) que queremos cifrar. 
        ◦ cipher.decode(offset, message): offset é o número de posições que 
          queremos mover para a esquerda 
          no alfabeto e message é a mensagem (texto) que queremos decifrar. 
    • src/index.js: eventos de DOM sendo executados, chamar cipher.encode() e cipher.decode(). 
    
# 7. Desenvolvimento

Para esse projeto foram usados:
  *  CSS 
  *  HTML 
  *  Vanilla JavaScript
  *  Visual Studio Code com extenção Node-js
    
Desenvolvido por [Sara Viana](https://github.com/SaraOhara) através do Projeto da [@Laboratoria](https://github.com/Laboratoria) :yellow_heart: