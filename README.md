# Novo Projeto de Portfólio :computer:
![Captura de tela 2021-07-23 122830](https://user-images.githubusercontent.com/84794798/126805115-0d1d68e8-234d-40cb-843b-ee2e6ebb4229.jpg)
 Desenvolvido 100% por conta própria. Responsivo e projetado para Mobile.
  
## Teste por este link: :exclamation: :exclamation:
  https://diogolcarvalho.github.io/projeto-portfolio/
  
## Passo a Passo :keyboard:
  ### Organização das pastas :file_folder:
  ![folders](https://user-images.githubusercontent.com/84794798/126793442-1cd8091c-cbda-4035-8593-6387382f18af.jpg)<br/> 
  Três principais pastas: CSS, img e JS. A pasta CSS com todos os arquivos CSS, que optei por organizar em várias pastas separadas de acordo com o conteúdo apresentado, para melhor manutenção: <br/> 
  ![Captura de tela 2021-07-23 111119](https://user-images.githubusercontent.com/84794798/126794541-7c684a35-10c6-498c-819f-5c124abe3efe.jpg)<br/> 
Utilizei no projeto um reset.css e um arquivo com todas as variáveis css do projeto. A pasta _img_ tem apenas as imagens utilizadas e a pasta _JS_ tem todos os comandos JavaScript.  

 ### Principais destaques Index.html 
 Na tag head estão os links referentes aos arquivos __CSS__ do projeto, links das fontes e as meta tags padrões como charset e viewport.
 ![Captura de tela 2021-07-23 112314](https://user-images.githubusercontent.com/84794798/126796196-f2e472d3-8d38-4762-a2fd-72c5926251db.jpg)<br/> 
<br/>  O resto do arquivo _HTML_ é estruturado em tags semânticas e utilizei a formatação BEM para as class e id. Ao final temos duas tags scripts. Uma referente aos icons e a outra ao arquivo JS do projeto. 
 ![Captura de tela 2021-07-24 103437](https://user-images.githubusercontent.com/84794798/126870077-291e8ba6-34b2-4a05-8955-eec96b077fde.jpg)
 
 ### Principais destaques arquivos CSS
  __*Keyframes*__ na tag __header__, criando o efeito de degradê na página inicial e também mudando a posição do background. Os outros comandos estão modificando a escala e o eixo Y.<br/> 
  ![Captura de tela 2021-07-24 104117](https://user-images.githubusercontent.com/84794798/126870268-61f41a88-4078-4706-9980-d9b1be1a5ce5.jpg) <br/>  
  
 __*Pseudo-classes*__ na tag __contact__, modificando os filhos da tag li. <br/>  
  ![Captura de tela 2021-07-24 104917](https://user-images.githubusercontent.com/84794798/126870473-86a88b4e-09c8-41f3-8676-b777dd946ece.jpg)
  
 <br/>  __*Display: Flex-Box e Grid Layout*__ em várias partes do projeto.  <br/>  
![griddd](https://user-images.githubusercontent.com/84794798/126870650-1fa243ba-852b-4918-a5a3-1da2d2dc052b.jpg)
![flex](https://user-images.githubusercontent.com/84794798/126870621-eae6aaa4-1e0b-4beb-8462-fd60d4388115.jpg)

<br/>__*Variáveis e media-queries*__<br/>  
![media](https://user-images.githubusercontent.com/84794798/126870719-fbda7f7d-4a7f-422b-91b5-e65c8c26fb0b.jpg)
![Captura de tela 2021-07-24 105725](https://user-images.githubusercontent.com/84794798/126870721-752515b0-eebc-44c7-ba1f-257943ad03e5.jpg)

 ### Principais destaques do arquivo JavaScript
 Na tag __header__ usei um *addEventListener* para quando o *scroll* for maior que 500 no eixo Y, mude a color na tag nav. Também criei todos os comandos para um MOBILE. Basicamente no arquivo header.css há um media query que cria uma barra Mobile, e quando o usuário clicar, a barra muda de imagem e cria uma classe *nav__ativo* chamando um menu MOBILE. Ao final desenvolvi uma função para resetar todo o menu e trocar a imagem e selecionei todos os elementos da li, e já que ele cria um NODELIST, que basicamente é uma array, selecionei cada item para acionar a função ao clicar.<br/>  
 ![Captura de tela 2021-07-24 110048](https://user-images.githubusercontent.com/84794798/126870858-81ed4ae6-648e-4800-a3c0-e0705c13ca66.jpg)
 
<br/>   No *contact* queria fazer um efeito usando onmouseover e onmouseout, então selecionei todos os elementos da li de contato,  e criei duas funções, uma que leva dois parâmetros, a cor do efeito e a posição. E a segunda função é basicamente para resetar o efeito. <br/>  
![Captura de tela 2021-07-24 112540](https://user-images.githubusercontent.com/84794798/126871507-4aba9638-4257-492d-9227-4af704140703.png)<br/>  

Por último, queria apenas modificar o texto da seção footer para que sempre apresente o ano corretamente.<br/>  
![footer](https://user-images.githubusercontent.com/84794798/126871650-f4b32e60-a723-41e9-b695-7fe0e0bb9632.png)

## Obrigado pela atenção :exclamation:
