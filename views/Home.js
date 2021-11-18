const listaLeis = (params) => {

    const dadosLimitados = params.slice(0, 9);
    let stringHTML = ``
    dadosLimitados.forEach((item,i) => {
      
        stringHTML += `<div class="card-content___container d-flex flex-column  align-items-center border border-secondary rounded p-2">
<div class="card-content__header border w-100 p-2 ">
  <p class="card-text">${item.descricao}</p>
</div>
<div class="card-content__b ody d-flex align-items-center justify-content-center text-center p-4 ">
  <a  onclick="window.detailView(${item.id})" class="">
    <h5 class="card-title">${item.titulo}</h5>
  </a>
</div>
</div> 
`
    });
    return stringHTML
}


//Funcção principal do Home 

const Home = (params) => {

    return `
<section class="container p-4 d-flex flex-wrap gap-4 gap justify-content-center text ">
  ${listaLeis(params)}
</section>`

}

export default Home