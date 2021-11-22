const DetalhesLeiOld = ({id, descricao, titulo,conteudoOld }) => {

    return `<div class="detail-container">
    <div class="detail-btn">
    <button class="btn btn-primary" onclick="gerarPdf()">PDF</button>
    <button class="btn btn-primary" onclick="openWord()">WORD</button>
    <button class="btn btn-primary" onclick="detailView(${id});">Versão Nova</button>
    </div><div id="content-text"><h3>${titulo}</h3><br><h5>${descricao}</h5>${conteudoOld?conteudoOld:''}</div></div>`
}


export default  DetalhesLeiOld