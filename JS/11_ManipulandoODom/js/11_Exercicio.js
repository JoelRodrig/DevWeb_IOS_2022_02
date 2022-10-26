window.alert('Bem vindo');

document.title = 'Dominando o JS';

let section = document.createElement('section');
document.body.appendChild(section);
let tituloSection = document.createElement('H1');
let paragrafoSection = document.createElement('p');

tituloSection.innerHTML = 'Manipulando o título da seção';
paragrafoSection.innerHTML = 'Manipulando o paragrafo da seção';
section.appendChild(tituloSection);
section.appendChild(paragrafoSection);

section.style.textAlign = 'center';
section.style.color = '#725436';
section.style.filter = 'drop-shadow(5px 5px 5px aqua)';
section.style.marginTop = '5em';
section.style.marginBottom = '9em';
section.style.background = 'yellow';
section.style.padding = '20px';
section.style.marginLeft = '10px';
section.style.marginRight = '10px';


/* Article */
let article = document.createElement('article');
document.body.appendChild(article);
let tituloArticle = document.createElement('H1')
let paragrafoArticle = document.createElement('p')

tituloArticle.innerHTML = 'Manipulando o título do Article';
paragrafoArticle.innerHTML = 'Manipulando o paragrafo do Article';

article.appendChild(tituloArticle);
article.appendChild(paragrafoArticle);

article.style.textAlign = 'center';
article.style.color = 'aqua';
article.style.filter = 'drop-shadow(5px 5px 5px red)'
article.style.background = 'darkblue';
article.style.padding = '20px';
article.style.marginLeft = '10px';
article.style.marginRight = '10px';


document.body.style.background = '#725436';