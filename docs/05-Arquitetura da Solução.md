# Arquitetura da Solução

A arquitetura da solução é a descrição de como a solução será estruturada pela equipe. Contém os detalhes técnicos da aplicação e trata dos componentes que fazem parte da solução e do ambiente em que está ficará hospedada.

## Diagrama de componentes

Os componentes que fazem parem da solução proposta pela equipe estão explicitados na figura abaixo:

<img src="https://user-images.githubusercontent.com/88891675/144288152-7987d4e8-035a-430e-97ad-0ccfff0826be.png" width="500">

O navegador é a interface básica do sistema. É composto pelas páginas da web e pelo local storage. As páginas da web contêm um conjunto de arquivos HTML, JavaScript, CSS e imagens que implementam as funcionalidades do sistema. O local storage é uma forma de armazenamento mantida pelo navegador, que será utilizado para autenticação do usuário.

Será utilizado também o proxycrawl, que é uma API que coletará as atualizações das legislações no site do planalto.

Por fim, a hospedagem consiste no local da internet, onde as páginas são mantidas e acessadas pelo navegador.


## Hospedagem

O site utiliza a plataforma do Heroku como ambiente de hospedagem do site do projeto. O site será mantido no seguinte ambiente da URL: https://webinfolegislativo.herokuapp.com.

A publicação do site no Heroku será feita por meio de uma submissão do projeto (push) via git para o repositório remoto no seguinte endereço: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g4-web-info-legislativo.
