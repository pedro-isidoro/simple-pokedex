/*
?   O que precisamos fazer? 
todo:    - Quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro.

?   - Objetivo - Quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
*        - Passo 1 - Pegar no JS o elemento HTML correspondente ao botão de troca de tema
*        - Passo 2 - Dar um jeito de pegar no JS o elemento HTML corresponde ao body
*        - Passo 3 - Dar um jeito de identificar o clique do usuário no botão de troca de tema
*        - Passo 4 - Adicionar a classe modo-escuro no body
*        - Passo 5 - Trocar a imagem do botão de alterar tema pra lua

?   - Objetivo 2 - Quando clicar no botão de troca de tema, caso body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
*       - Passo 6 - Remover a classe do modo-escuro do body
*       - Passo 7 - Trocar a imagem do botão de alterar tema pra sol
*/
const themeButton = document.getElementById('header-button');
const tagBody = document.querySelector('body')

const moonImage = './src/images/moon.png';
const sunImage = './src/images/sun.png';

const buttonImage = document.getElementsByClassName('image-button')

themeButton.addEventListener('click', () => {
    // console.log(tagBody)
    tagBody.classList.toggle('dark-mode')

    const darkModeActive = tagBody.classList.contains('dark-mode')
    if(darkModeActive){
        // console.log(themeButton)
        // console.log(buttonImage)
        buttonImage[0].src = moonImage
    }else{
        // buttonImage[0].src = sunImage
        buttonImage[0].setAttribute('src', sunImage) //(O que terá o valor alterado, valor novo)
    }
})