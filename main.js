
document.querySelector('video').playbackRate = 2;


const functionClose = () => {
    const Loader = document.querySelector('.loader-wrapper')
    Loader.classList.add('loader-notvisible')
}


window.addEventListener('load', () => {
    setInterval(() => {
        functionClose()
    }, 7000)
})


document.addEventListener('click', () => {

    functionClose()
  





// TweenMax.staggerFrom('.globo-minilogo-area', 5, {
//     x: -500,
//     ease:Elastic.easeOut
// }, 0.2);

// TweenMax.staggerFrom('.text-area', 4, {
//     y: 1000,
//     ease:Power2.easeOut
// }, 0.2);

// TweenMax.staggerFrom('#the-logo', 5, {
//      opacity: 0,
//      x: 500,
//     ease:Power4.easeOut
// }, 0.1);

// TweenMax.staggerFrom('.simbolo-area', 6, {
//     y: -200,
//     ease:Elastic.easeOut
// }, 0.9);

// TweenMax.staggerFrom('.input-area', 2, {
//     y: 100,
//     ease:Power1.easeOut
// }, 0.1);

// TweenMax.staggerFrom('.buttons-area', 3, {
//     y: 100,
//     ease:Power1.easeOut
// }, 0.1);




})




/////////////////////////////////////////////////////////////////

const menuBurgerTag = document.querySelector('.menu-burger-area')
const menuTag = document.querySelector('.menu-area')
const closeMenuTag = document.querySelector('.close-menu-area')


menuBurgerTag.addEventListener('mouseover', () => {
    menuTag.classList.add('menu-area-visible')
})

closeMenuTag.addEventListener('mouseover', () => {
    menuTag.classList.remove('menu-area-visible')
})



const buttonTop = document.querySelector('.button-top')
const buttonLeft = document.querySelector('.button-left')
const buttonDown = document.querySelector('.button-down')
const buttonRight = document.querySelector('.button-right')


const arrowUpFunc = () => {
    menuTag.classList.toggle('menu-area-visible')
    TweenMax.fromTo([buttonTop], 0.4, {y:-20, opacity: 0}, {y:0, opacity: 1});
}

const arrowDownFunc = () => {
    menuTag.classList.toggle('menu-area-visible')
    TweenMax.fromTo([buttonDown], 0.4, {y:20, opacity: 0}, {y:0, opacity: 1});
}

const arrowLeftFunc = () => {
    const inputAll = document.querySelectorAll('.input-area input')
    inputAll.forEach(input => {
        input.stepDown(0.5)
    })
    TweenMax.fromTo([buttonLeft], 0.4, {x:-20, opacity: 0}, {x:0, opacity: 1});
}


const arrowRightFunc = () => {
    const inputAll = document.querySelectorAll('.input-area input')
    inputAll.forEach(input => {
        input.stepUp(0.5)
    })
    TweenMax.fromTo([buttonRight], 0.4, {x:20, opacity: 0}, {x:0, opacity: 1});
}



buttonTop.addEventListener('click', () => {
    arrowUpFunc()
})


buttonDown.addEventListener('click', () => {
    arrowDownFunc()
})


buttonLeft.addEventListener('click', () => {
    arrowLeftFunc()
})


buttonRight.addEventListener('click', () => {
    arrowRightFunc()
})




document.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp') {
        arrowUpFunc()
    }
    if (e.key === 'ArrowDown') {
        arrowDownFunc()
    }
    if (e.key === 'ArrowLeft') {
        arrowLeftFunc()
    }
    if (e.key === 'ArrowRight') {
        arrowRightFunc()
    }
       
})








//////////////////////////////////////////////////////////////////////////


const dataSubTag = document.querySelectorAll('[data-sub]')
const simboloArea = document.querySelector('.simbolo-area p')
const textArea = document.querySelector('.text-area-container p')



dataSubTag.forEach(datasub => {

    datasub.addEventListener('click', () => {
        
        menuTag.classList.remove('menu-area-visible')

        const hiddenName = datasub.querySelector('.hidden-name').innerHTML
        const visibleName = datasub.querySelector('.visible-name').innerHTML

        if (visibleName === "Aplicações") {
            simboloArea.innerHTML = hiddenName 
        } else {
            simboloArea.innerHTML = hiddenName + " / "  + visibleName
        }




        document.querySelectorAll('.logo-input-area').forEach(logoarea => {
            logoarea.classList.remove('logo-input-area-visible')
          })


          const dataSub = datasub.getAttribute('data-sub')

          const textArea = document.querySelector('.text-area-container p')


          const dataFunction = (x, y) => {
            if (dataSub === x) {
                textArea.innerHTML = y  
            }
          }


          dataFunction(".doisd-simbolo", "Nosso símbolo é a base de tudo o que não muda." )
          dataFunction(".tresd-simbolo", "Esta é a nossa versão com acabamento 3D.")
          dataFunction(".outline-simbolo", "Por último, temos um símbolo outline, com as 8 cores da paleta brilho. <p class='sub-p'> O seu uso é secundário, reservado para casos onde o logo não precisa estar em tamanho reduzido. </p>")
          dataFunction(".doisd-type", "O nosso type com a fonte globobrand.")
          dataFunction(".tresd-type",  "O nosso type versão 3D com a fonte globobrand.")
          dataFunction(".vertical",  "Versão vertical")
          dataFunction(".horizontal",  "Versão horizontal")
          dataFunction(".ling-branco",  "Branco principal <p class='sub-p'> O nosso branco principal é composto de 15% de preto e 2% de azul. </p>")
          dataFunction(".ling-cores", "Paleta Brilho <p class='sub-p'> Esta é a nossa paleta principal. As cores que sempre estiveram dentro do nosso arco-íris. </p> <p class='sub-p'> Nossas cores são as mesmas, mas estão mais vivas. </p>")
          dataFunction(".ling-formas", "<p class='sub-p'> A partir das formas do nosso símbolo, criamos todo um universo visual.</p>")
          dataFunction(".ling-tipografia", "A globotipo é a nossa tipografia principal.")
          dataFunction(".ling-iconografia", "<p class='sub-p'> Para complementar nossa linguagem, criamos nossa família iconográfica. </p> <p class='sub-p'> Desenhadas a partir do movimento do círculo, ganharam acabamentos arredondados e carac- terísticas proprietárias. </p>")
          dataFunction(".aplicacoes", "Estes são exemplos de aplicação do guia")

          const subQuery = document.querySelector(dataSub)

          subQuery.classList.toggle('logo-input-area-visible')
    
    })

})




///////////////////////////////////////////////////////////////////////////


const disableArrowFunction = inputTag => {
    inputTag.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        return false;
    }
 })
}


///////////////////////////////////////////////////////////////////////////////


const doisDSimbolo = document.querySelector('.doisd-simbolo')
const inputRangeTag_2DSimbolo = doisDSimbolo.querySelector('.input-area input')


disableArrowFunction(inputRangeTag_2DSimbolo)



inputRangeTag_2DSimbolo.addEventListener('input', e => {

    


    let inputValue = e.target.value


    const logosTag_2DSimbolo = doisDSimbolo.querySelectorAll('.logao')
    const text_2DSimbolo = "Nosso símbolo é a base de tudo o que não muda."
    const newText_2DSimbolo = "Essas são nossas versões principais com cores da paleta brilho."


    logosTag_2DSimbolo.forEach(logo => {
        logo.classList.remove('logao-visible')
    })

        if (inputValue >= 0 && inputValue < 10) {

           logosTag_2DSimbolo[0].classList.add('logao-visible')
           textArea.innerHTML = text_2DSimbolo
           textArea.classList.remove('new_text-area')

        }  else if (inputValue >= 10 && inputValue < 20) {

            logosTag_2DSimbolo[1].classList.add('logao-visible')
            textArea.innerHTML = newText_2DSimbolo
            textArea.classList.add('new_text-area')


         }  else if (inputValue >= 20 && inputValue < 30) {

            logosTag_2DSimbolo[2].classList.add('logao-visible')

         }  else if (inputValue >= 30 && inputValue < 40) {

            logosTag_2DSimbolo[3].classList.add('logao-visible')

         } else if (inputValue >= 40 && inputValue < 50) {

            logosTag_2DSimbolo[4].classList.add('logao-visible')

         }  else if (inputValue >= 50) {

            logosTag_2DSimbolo[5].classList.add('logao-visible')
         }  

         
 

})



///////////////////////////////////////////////////////////////////


const tresDSimbolo = document.querySelector('.tresd-simbolo')
const inputRangeTag_3DSimbolo = tresDSimbolo.querySelector('.input-area input')



disableArrowFunction(inputRangeTag_3DSimbolo)



inputRangeTag_3DSimbolo.addEventListener('input', e => {


    let inputValue = e.target.value


    const logosTag_3DSimbolo = tresDSimbolo.querySelectorAll('.logao')
    const text_3DSimbolo = "Esta é a nossa versão com acabamento 3D."
    const newText_3DSimbolo = "Ideal para usos digitais."

    

    logosTag_3DSimbolo.forEach(logo => {
        logo.classList.remove('logao-visible')
    })

        if (inputValue >= 0 && inputValue < 10) {
           logosTag_3DSimbolo[0].classList.add('logao-visible')
           textArea.innerHTML = text_3DSimbolo
           textArea.classList.remove('new_text-area')
        }  else if (inputValue >= 10 && inputValue < 20) {
            logosTag_3DSimbolo[1].classList.add('logao-visible')
            textArea.innerHTML = newText_3DSimbolo
            textArea.classList.add('new_text-area')
         }  else if (inputValue >= 20 && inputValue < 30) {
            logosTag_3DSimbolo[2].classList.add('logao-visible')
         }  else if (inputValue >= 30 && inputValue < 40) {
            logosTag_3DSimbolo[3].classList.add('logao-visible')
         } else if (inputValue >= 40) {
            logosTag_3DSimbolo[4].classList.add('logao-visible')
         } 

})

/////////////////////////////////////////////////////////////////////////


const doisDType = document.querySelector('.doisd-type')
const inputRangeTag_doisDType = doisDType.querySelector('.input-area input')




disableArrowFunction(inputRangeTag_doisDType)


inputRangeTag_doisDType.addEventListener('input', e => {


    let inputValue = e.target.value


    const logosTag_doisDType = doisDType.querySelectorAll('.logao')
    const text_doisDType = "O nosso type com a fonte globobrand."

    

    logosTag_doisDType.forEach(logo => {
        logo.classList.remove('logao-visible')
    })

        if (inputValue >= 0 && inputValue < 10) {
           logosTag_doisDType[0].classList.add('logao-visible')
        }  else if (inputValue >= 10 && inputValue < 20) {
            logosTag_doisDType[1].classList.add('logao-visible')
         }  else if (inputValue >= 20 && inputValue < 30) {
            logosTag_doisDType[2].classList.add('logao-visible')
         }  else if (inputValue >= 30 && inputValue < 40) {
            logosTag_doisDType[3].classList.add('logao-visible')
         } else if (inputValue >= 40) {
            logosTag_doisDType[4].classList.add('logao-visible')
         } 

})





//////////////////////////////////////////////////////////////////////



const verticalLogo = document.querySelector('.vertical')
const inputRangeTag_verticalLogo = verticalLogo.querySelector('.input-area input')




disableArrowFunction(inputRangeTag_verticalLogo)



inputRangeTag_verticalLogo.addEventListener('input', e => {


    let inputValue = e.target.value


    const logosTag_verticalLogo = verticalLogo.querySelectorAll('.logao')
    const text_verticalLogo = "Versão vertical."
    const newText_verticalLogo = "Versões verticais principais com cores da paleta brilho."

    

    logosTag_verticalLogo.forEach(logo => {
        logo.classList.remove('logao-visible')
    })

        if (inputValue >= 0 && inputValue < 10) {
           logosTag_verticalLogo[0].classList.add('logao-visible')
           textArea.innerHTML = text_verticalLogo
           textArea.classList.remove('new_text-area')
        }  else if (inputValue >= 10 && inputValue < 20) {
            logosTag_verticalLogo[1].classList.add('logao-visible')
            textArea.innerHTML = newText_verticalLogo
            textArea.classList.add('new_text-area')
         }  else if (inputValue >= 20 && inputValue < 30) {
            logosTag_verticalLogo[2].classList.add('logao-visible')
            textArea.innerHTML = newText_verticalLogo
         }  else if (inputValue >= 30 && inputValue < 40) {
            logosTag_verticalLogo[3].classList.add('logao-visible')
         } else if (inputValue >= 40 && inputValue < 50) {
            logosTag_verticalLogo[4].classList.add('logao-visible')
         } else if (inputValue >= 50) {
            logosTag_verticalLogo[5].classList.add('logao-visible')
         } 

})


//////////////////////////////////////////////////////////////////////



const horizontalLogo = document.querySelector('.horizontal')
const inputRangeTag_horizontalLogo = horizontalLogo.querySelector('.input-area input')


disableArrowFunction(inputRangeTag_horizontalLogo)


inputRangeTag_horizontalLogo.addEventListener('input', e => {


    let inputValue = e.target.value


    const logosTag_horizontalLogo = horizontalLogo.querySelectorAll('.logao')
    const text_horizontalLogo = "Versão horizontais."
    const newText_horizontalLogo = "Versões horizontais principais com cores da paleta brilho."

    

    logosTag_horizontalLogo.forEach(logo => {
        logo.classList.remove('logao-visible')
    })

        if (inputValue >= 0 && inputValue < 10) {
           logosTag_horizontalLogo[0].classList.add('logao-visible')
           textArea.innerHTML = text_horizontalLogo
           textArea.classList.remove('new_text-area')
        }  else if (inputValue >= 10 && inputValue < 20) {
            logosTag_horizontalLogo[1].classList.add('logao-visible')
            textArea.innerHTML = newText_horizontalLogo
         }  else if (inputValue >= 20 && inputValue < 30) {
            logosTag_horizontalLogo[2].classList.add('logao-visible')
            textArea.classList.add('new_text-area')
         }  else if (inputValue >= 30 && inputValue < 40) {
            logosTag_horizontalLogo[3].classList.add('logao-visible')
         } else if (inputValue >= 40 && inputValue < 50) {
            logosTag_horizontalLogo[4].classList.add('logao-visible')
         } else if (inputValue >= 50 && inputValue < 60) {
            logosTag_horizontalLogo[5].classList.add('logao-visible')
         } else if (inputValue >= 60) {
            logosTag_horizontalLogo[6].classList.add('logao-visible')
         } 

})


///////////////////////////////////////////////////////////////////////////




const lingBranco = document.querySelector('.ling-branco')
const inputRangeTag_lingBranco = lingBranco.querySelector('.input-area input')




disableArrowFunction(inputRangeTag_lingBranco)

inputRangeTag_lingBranco.addEventListener('input', e => {


    let inputValue = e.target.value


    const logosTag_lingBranco = lingBranco.querySelectorAll('.logao')
    const text_lingBranco =  "Branco principal <p class='sub-p'> O nosso branco principal é composto de 15% de preto e 2% de azul. </p>"
    const newText_lingBranco = "Dentro do universo do branco, temos variações de tons que podemos escolher a partir da necessidade de uso." 

    

    logosTag_lingBranco.forEach(logo => {
        logo.classList.remove('logao-visible')
    })

        if (inputValue >= 0 && inputValue < 33) {
           logosTag_lingBranco[0].classList.add('logao-visible')
           textArea.innerHTML = text_lingBranco
           textArea.classList.remove('new_text-area')
        }  else if (inputValue >= 33 && inputValue < 66) {
            logosTag_lingBranco[1].classList.add('logao-visible')
            textArea.innerHTML = newText_lingBranco
            textArea.classList.add('new_text-area')
         } else if (inputValue >= 66) {
            logosTag_lingBranco[2].classList.add('logao-visible')
        
         } 

})


///////////////////////////////////////////////////////////////////////////


const lingCores = document.querySelector('.ling-cores')
const inputRangeTag_lingCores = lingCores.querySelector('.input-area input')




disableArrowFunction(inputRangeTag_lingCores)


inputRangeTag_lingCores.addEventListener('input', e => {


    let inputValue = e.target.value


    const logosTag_lingCores = lingCores.querySelectorAll('.logao')
    const text_lingCores =   "Paleta Brilho <p class='sub-p'> Esta é a nossa paleta principal. As cores que sempre estiveram dentro do nosso arco-íris. </p> <p class='sub-p'> Nossas cores são as mesmas, mas estão mais vivas. </p>"
    const newText_lingCores = "Paleta Tons <p class='sub-p'> Para esse novo momento, sentimos a necessidade de olhar para fora, para as pessoas e para a natureza. </p> <p class='sub-p'>  Criamos uma paleta secundária que chamamos de paleta tons. </p>" 

    

    logosTag_lingCores.forEach(logo => {
        logo.classList.remove('logao-visible')
    })

        if (inputValue >= 0 && inputValue < 10) {
           logosTag_lingCores[0].classList.add('logao-visible')
           textArea.innerHTML = text_lingCores
           textArea.classList.remove('new_text-area')
        }  else if (inputValue >= 10 && inputValue < 20) {
            logosTag_lingCores[1].classList.add('logao-visible')
         }  else if (inputValue >= 20 && inputValue < 30) {
            logosTag_lingCores[2].classList.add('logao-visible')
         } else if (inputValue >= 30 && inputValue < 40) {
            logosTag_lingCores[3].classList.add('logao-visible')
            textArea.innerHTML = newText_lingCores
         } else if (inputValue >= 40 && inputValue < 50) {
            logosTag_lingCores[4].classList.add('logao-visible')
         } else if (inputValue >= 50) {
            logosTag_lingCores[5].classList.add('logao-visible')
         } 
})


///////////////////////////////////////////////////////////////////////////



const lingFormas = document.querySelector('.ling-formas')
const inputRangeTag_lingFormas = lingFormas.querySelector('.input-area input')


disableArrowFunction(inputRangeTag_lingFormas)


inputRangeTag_lingFormas.addEventListener('input', e => {


    let inputValue = e.target.value


    const logosTag_lingFormas = lingFormas.querySelectorAll('.logao')
    const text_lingFormas =   "<p class='sub-p'> A partir das formas do nosso símbolo, criamos todo um universo visual.</p>"
    const newText_lingFormas = "<p class='sub-p'> Dentro do universo do branco, temos variações de tons que podemos escolher a partir da necessidade de uso. </p>" 

    

    logosTag_lingFormas.forEach(logo => {
        logo.classList.remove('logao-visible')
    })

        if (inputValue >= 0 && inputValue < 10) {
           logosTag_lingFormas[0].classList.add('logao-visible')
           textArea.innerHTML = text_lingFormas
           textArea.classList.remove('new_text-area')
        }  else if (inputValue >= 10 && inputValue < 20) {
            logosTag_lingFormas[1].classList.add('logao-visible')
            textArea.innerHTML = newText_lingFormas
         }  else if (inputValue >= 20 && inputValue < 30) {
            logosTag_lingFormas[2].classList.add('logao-visible')
         } else if (inputValue >= 30 && inputValue < 40) {
            logosTag_lingFormas[3].classList.add('logao-visible')
         } else if (inputValue >= 40 && inputValue < 50) {
            logosTag_lingFormas[4].classList.add('logao-visible')
         } else if (inputValue >= 50) {
            logosTag_lingFormas[5].classList.add('logao-visible')
         } 
})


///////////////////////////////////////////////////////////////////////////




const aplicacoes = document.querySelector('.aplicacoes')
const inputRangeTag_aplicacoes = aplicacoes.querySelector('.input-area input')


disableArrowFunction(inputRangeTag_aplicacoes)


inputRangeTag_aplicacoes.addEventListener('input', e => {


    let inputValue = e.target.value


    const logosTag_aplicacoes = aplicacoes.querySelectorAll('.logao')
    
    

    logosTag_aplicacoes.forEach(logo => {
        logo.classList.remove('logao-visible')
    })

        if (inputValue >= 0 && inputValue < 10) {
           logosTag_aplicacoes[0].classList.add('logao-visible')
        }  else if (inputValue >= 10 && inputValue < 20) {
            logosTag_aplicacoes[1].classList.add('logao-visible')
         }  else if (inputValue >= 20 && inputValue < 30) {
            logosTag_aplicacoes[2].classList.add('logao-visible')
         } else if (inputValue >= 30 && inputValue < 40) {
            logosTag_aplicacoes[3].classList.add('logao-visible')
         } else if (inputValue >= 40 && inputValue < 50) {
            logosTag_aplicacoes[4].classList.add('logao-visible')
         } else if (inputValue >= 50 && inputValue < 60) {
            logosTag_aplicacoes[5].classList.add('logao-visible')
         } else if (inputValue >= 60 && inputValue < 70) {
            logosTag_aplicacoes[6].classList.add('logao-visible')
         } else if (inputValue >= 70 && inputValue < 80) {
            logosTag_aplicacoes[7].classList.add('logao-visible')
         } else if (inputValue >= 80) {
            logosTag_aplicacoes[8].classList.add('logao-visible')
         } 
})


///////////////////////////////////////////////////////////////////////////



