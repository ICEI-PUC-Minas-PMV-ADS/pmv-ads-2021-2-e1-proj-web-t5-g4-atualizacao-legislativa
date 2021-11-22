const DetalhesLei = ({id, descricao, titulo,conteudo },btnOldNew) => {

    return `<div class="detail-container">
    <div class="detail-btn">
    <button class="btn btn-primary" onclick="gerarPdf()">PDF</button>
    <button class="btn btn-primary" onclick="openWord()">WORD</button>
    <button class="btn btn-primary"  onclick="oldViewDetail(${id});">Versão Antiga</button>
    </div><div id="content-text"><h3>${titulo}</h3><br><h5>${descricao}</h5>${conteudo?conteudo:''}</div></div>`
}


export default  DetalhesLei