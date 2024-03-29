// O método Array.from() cria um novo elemento(instancia) quando for passado um iterable object como argumento.
// crie 100 elementos dentro do array data
// para cada item do array de 100 elementos crie um div class com o item espeficico
// Se ta importando o objeto de outro arquivo
import cardProject from "./skillsContent.js";


const data = Array.from({ length: 11 }).map((_, i) => {
    const arrayDados = [cardProject.cardContent[i].nome, cardProject.cardContent[i].img, cardProject.cardContent[i].text, cardProject.cardContent[i].link, cardProject.cardContent[i].alt, cardProject.cardContent[i].icons]
    return arrayDados
});


let perPage = 4;
const estadoDaAplicaco = {
    page: 1,// Número da página atual

    perPage,// Número de elementos por página, no caso quero 5 elementos por página

    totalPage: Math.ceil(data.length / perPage),// Aredondar para cima;

    maxVisibleButtons: 5
}

const html = {
    get(element) {
        return document.querySelector(element);
    }
}

// Um objeto com funções dentro;
const controles = {
    next() {
        estadoDaAplicaco.page++
        const lastPage = estadoDaAplicaco.page > estadoDaAplicaco.totalPage; //Va dar um falso quando o page for maior q totalPage.  Então vc tem q tem 20 elementos. O page tem q ir ate 20, pq é 100/5. E pq o 20 é o numero q vc vai clicar; 

        if (lastPage) {
            estadoDaAplicaco.page--
        }
    },
    prev() {
        estadoDaAplicaco.page--

        if (estadoDaAplicaco.page < 1) {
            estadoDaAplicaco.page++
        }
    },
    goTo(page) {
        if (page < 1) {
            page = 1
        }

        // Para transformar em um number apenas coloque um + antes
        estadoDaAplicaco.page = +page

        if (page > estadoDaAplicaco.totalPage) {
            estadoDaAplicaco.page = estadoDaAplicaco.totalPage
        }
    },
    createListeners() {
        html.get('.first').addEventListener('click', () => {
            controles.goTo(1);
            update()
        })

        html.get('.last').addEventListener('click', () => {
            controles.goTo(estadoDaAplicaco.totalPage);
            update()
        })
        html.get('.prev').addEventListener('click', () => {
            controles.prev();
            update()
        })

        html.get('.next').addEventListener('click', () => {
            controles.next();
            update()
        })

    }
}

const list = {
    create(item) {
        // console.log(item);
        // Esta função é executada a cada cinco vezes. PQ o itensPaginados tem cinco elementos. 
        // Paga cada elemento criado, vc cria uma div, coloca uma classe nela, e jogo dentro dele o item q vem do data la em cima, e depois colocar no html

        const div = document.createElement('div');
        div.classList.add('projects__card');



        div.innerHTML = `
                <div class="card__container">

                    <h2>${item[0]}</h2>

                    <div class="card__icons">

                    </div>

                    <div class="card__img">
                        <a href="${item[3]}" target="_blank"><img src="${item[1]}" alt="${item[4]}"></a>
                    </div>
                    
                    <div class="card__text">
                        <p>${item[2]}</p>

                        <a class="card__btn" href="${item[3]}"
                            target="_blank">Veja o projeto</a>
                    </div>
                </div>
        `

        html.get('#projects__cardSkills').appendChild(div);


    },
    update() {
        // Sempre q mudar de página, zere a lista atual. Se não ele coloca mais de 5 elementos.
        html.get('#projects__cardSkills').innerHTML = '';


        // já q vc vai trabalhar com o array e o estadoDaAplicação. Vc tem q tirar um do page, pq ele começa com 1 e o array começa o 0
        let page = estadoDaAplicaco.page - 1; //inicio = 1-1 = 0, segundo = 2 - 1 = 1
        let startPage = page * perPage; // inicio = 0 * 5 = 0, segundo = 1*5 = 5
        let endPage = startPage + perPage;//inicio = 0 + 5 = 5, segundo = 5+5 = 10

        // corta o array. Selecionando apenas o q é indicado. slice(inicia,termina);
        const itensPaginados = data.slice(startPage, endPage);

        // para cada item do itensPaginados, execute a função create
        itensPaginados.forEach(list.create);
    }
}

const buttons = {
    create(number) {
        const button = document.createElement('div');

        button.innerHTML = number;

        html.get('.pagination__numbers').appendChild(button);

        if (estadoDaAplicaco.page === number) {
            button.classList.add('active');
        }

        button.addEventListener('click', (event) => {
            const page = event.target.innerText;

            controles.goTo(page);
            update();
        })


    },
    update() {
        html.get('.pagination__numbers').innerHTML = ''
        const { maxLeft, maxRight } = buttons.calculteMaxVisible();

        for (let page = maxLeft; page <= maxRight; page++) {
            buttons.create(page);
        }
        putIcons();
    },
    calculteMaxVisible() {
        const { maxVisibleButtons } = estadoDaAplicaco;
        //botões do lado esquerdo = pagina 1 = 1 - 2 = -1(cai no if) pagina 2 = 2 - 2 = 0(cai no if) pagina 3 = 3 - 2 = 1(n entra no if) pagina 4 = 4 - 2 = 2(n entra no if)
        let maxLeft = (estadoDaAplicaco.page - Math.floor(maxVisibleButtons / 2));
        // botões do lado direito = pagina 1 = 1 + 2 = 3
        let maxRight = (estadoDaAplicaco.page + Math.floor(maxVisibleButtons / 2));

        if (maxLeft < 1) { //quando vc esta na página 1, não vai ter nada a esqueda 
            maxLeft = 1;
            // Tem q ter isso, pq assim vai aparecer 5 botões. Se n tivesse ia ter 1 , 2 , 3
            maxRight = maxVisibleButtons;
        }

        if (maxRight > estadoDaAplicaco.totalPage) {
            // se ta no 20 = apresesente 4 botoes
            maxLeft = estadoDaAplicaco.totalPage - (maxVisibleButtons - 1);
            maxRight = estadoDaAplicaco.totalPage

            if (maxLeft < 1) {
                maxLeft = 1
            }
        }
        return { maxRight, maxLeft }
    }
}


function update() {
    list.update();
    buttons.update();
}

function iniciar() {
    update();
    controles.createListeners();
}



function createElement(start, limit) {
    let contador = 1;


    for (let i = start; i < limit; i++) {

        let cardSelected = document.querySelector(`.projects__card:nth-of-type(${contador}) .card__icons`)
        // console.log(cardProject.cardContent[i].icons);

        let icons_lenght = cardProject.cardContent[i].icons.length

        for (let x = 0; x < icons_lenght; x++) {
            let icon = document.createElement("i");
            icon.className = `${cardProject.cardContent[i].icons[x]}`
            cardSelected.appendChild(icon)
        }

        contador++
    }
}

// Você precisa colocar saber a quantidade de elementos que vão ter na tela
function putIcons() {
    const cards = document.querySelectorAll('.projects__card')
    const page = document.querySelector('.active').innerHTML


    switch (page) {
        case "1":
            createElement(0,cards.length);

            break;
        case "2":
            createElement(4,8);
            
            break;
        case "3":
            createElement(8,11);
            
            break;

        default:
            break;
    }
}


iniciar();