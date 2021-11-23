import Home from '../../views/Home.js';
import Usuario from '../data/usuarios.js';
import Leis from '../data/leis.js';
import DetalhesLei from '../../views/Details.js';
import DetalhesLeiOld from '../../views/DetailsOld.js';
import Page2 from '../../views/Page2.js';
import Page3 from '../../views/Page3.js';

let userLogado = localStorage.getItem('userAuth');

let userObjeto = JSON.parse(userLogado)

let existUser = userObjeto === null  ? false : true

if (existUser) {
  document.getElementById('register-alert').classList.remove('d-flex')
  document.getElementById('register-alert').classList.add('d-none')
  document.getElementById('alert').classList.remove('justify-content-between')
  document.getElementById('alert').classList.add('justify-content-end')
  //remove o botão do header
  document.getElementById('acount-btn').classList.remove('d-flex')
  document.getElementById('acount-btn').classList.add('d-none')
  document.getElementById('acount-container').innerHTML = `<button onclick="loggof()" class="btn btn-primary border-white"> <i class="fa-solid fa-circle-user h3 text-white hoverBtn"></i>${userObjeto.nome.substr(0, 6)}</button>`
}
window.oldViewDetail = id => {
  const lei = Leis.find(item => item.id === id)
  document.getElementById('main').innerHTML = DetalhesLeiOld(lei)

}
window.gerarPdf = () => {
  var mywindow = window.open('', 'PRINT', 'height=400,width=600');

  mywindow.document.write('<html><head><title>' + document.title + '</title>');
  mywindow.document.write('</head><body >');
  mywindow.document.write(document.getElementById('content-text').innerHTML);
  mywindow.document.write('</body></html>');

  mywindow.document.close(); // necessary for IE >= 10
  mywindow.focus(); // necessary for IE >= 10*/

  mywindow.print();
  mywindow.close();

}
window.loggof = ()=>{
  localStorage.removeItem('userAuth')
  document.location.reload()
}
window.openWord = () => {
  let filename = null
  var preHtml = `<html xmlns:office="urn:schemas-microsoft-com:office:office" xmlns:word="urn:schemas-microsoft-com:office:word"
  xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>`;
  var postHtml = `</body></html>`;

  var content = document.getElementById('content-text').innerHTML;

  var html = preHtml + content + postHtml;

  var blob = new Blob(['\ufeff', html], {
    type: 'application/msword'
  });

  // Specify link url
  var url = URL.createObjectURL(blob);

  // Specify file name
  filename = filename ? filename + '.docx' : 'document.docx';

  // Create download link element
  var downloadLink = document.createElement("a");

  downloadLink.href = url;
  downloadLink.download = 'Document';
  document.body.appendChild(downloadLink);
  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
}



window.detailView = id => {
  const lei = Leis.find(item => item.id === id)
  document.getElementById('main').innerHTML = DetalhesLei(lei)
}
document.getElementById('main').innerHTML = Home(Leis)


//Funçoes de navegações 


window.toHome = () => {
  document.getElementById('main').innerHTML = Home(Leis)
}

window.toPage2 = () => {
  document.getElementById('main').innerHTML = Page2()
}

window.toPage3 = () => {
  document.getElementById('main').innerHTML = Page3()
}


window.filtrar = (e) => {
  //Anula o efeito de reload da pagina para não perder o estado 
  e.preventDefault();
  let filtroSelecionado = ""

  //Input digitado DATA ou CHAVE 
  let valueFilter = document.getElementById('filter-input').value

  for (let i = 0; i < document.getElementsByName('radio').length; i++) {
    let item = document.getElementsByName('radio')[i];
    if (item.checked === true) {
      filtroSelecionado = item.value
    }
  }

  let filtro = filtroSelecionado !== "chave" ? Leis?.filter(item => item[filtroSelecionado] === valueFilter) :

    Leis?.filter(texto => {
      if (texto.descricao.toLocaleLowerCase().includes(valueFilter.toLowerCase())) {
        return texto
      } else if (texto.titulo.toLocaleLowerCase().includes(valueFilter.toLocaleLowerCase())) {
        return texto
      }
    })

  document.getElementById('main').innerHTML = filtro.length > 0 ? Home(filtro) : `<h1>Nenhum resultado encontrado!`

}