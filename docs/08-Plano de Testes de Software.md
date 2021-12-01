# Plano de Testes de Software

Os requisitos para a realização dos testes de software são:<br>
* Site publicado na internet;<br>
*	Navegador da Internet – Chrome, Firefox ou Edge;<br>
*	Conectividade de internet.<br>
<br>

Os testes funcionais a serem realizados no aplicativo são descritos a seguir:
<br>

| Caso de teste | CT-01 Publicação de alterações legislativas |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos associados |	RF-001: O site deve publicar as alterações da lei com informações relativas à data de publicação numeração. | 
| Objetivo do teste | Verificar se o site apresentará a lei com sua numeração e data originais e a lei alteradora, também com sua numeração e data. |
| Passos |	1) Acessar o navegador; 2) Informar o endereço do site; 3) Visualizar página principal. |
| Critérios de Êxito | •	Deve ser carregada a página principal do site; <br> •	As leis devem ser exibidas corretamente, apresentando 9 (nove) leis que possuíram alterações, organizadas em caixas;<br> •	Cada caixa deve conter um resumo da lei;<br> •	Abaixo do referido resumo, deve conter o número e data da lei original seguido do número e data da lei alteradora. Esta parte será um link clicável.<br> •	As caixas são organizadas por ordem de data (da mais recente para a mais antiga). |

<br>

| Caso de teste | CT-02 Download de leis em .pdf ou arquivo de texto editável |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos associados |	RF-02: o site deve contemplar ícones que permitam ao usuário realizar download em .pdf ou arquivo de texto editável. |
| Objetivo do teste | Verificar se os ícones efetuam o download do arquivo no formato escolhido pelo usuário. |
| Passos	| 1) Acessar o navegador; <br> 2) Informar o endereço do site; <br> 3) Visualizar página principal; <br> 4) Encontrar o box com a lei escolhida para fazer o download; <br> 5) Clicar no link dentro do box; <br> 6) Será aberta a página com a lei; <br> 7) Clicar no botão “PDF” ou “WORD”: <br> 7.1) No caso de clicar em “PDF”, será aberta uma caixa de diálogo. Na opção “Destino”, selecionar a opção “Salvar como PDF”, e em seguida no botão “Salvar”; <br> 7.2) No caso de clicar em “WORD”, será aberta uma caixa de diálogo em que basta selecionar a opção “Salvar arquivo” e em seguida clicar no botão “OK”. |
| Critérios de Êxito |	•	No caso do download em formato .pdf: após clicar no botão “Salvar”, o arquivo deve ser armazenado na máquina do usuário.<br> •	No caso do download em formato .docx: após selecionar a opção “Salvar arquivo” e em seguida clicar no botão “OK”, o arquivo deve ser armazenado na máquina do usuário.<br> |

<br>

| Caso de teste |	CT-03 Consultar lei por seu número |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos associados |	RF-003: o site deve permitir ao usuário a consulta por número da lei. |
| Objetivo do teste	| Verificar se a lei é apresentada corretamente na página de leitura, de acordo com o número informado pelo usuário. |
| Passos |	1) Acessar o navegador; 2) Informar o endereço do site; 3) Visualizar página principal; 4) Digitar o número da lei no campo de busca; 5) Marcar a opção “Palavra-Chave/Nº”; 6) Clicar no botão “search”. |
| Critérios de Êxito |	A página deve apresentar uma caixa contendo o resumo da lei buscada, a data e o número. |

<br>

| Caso de teste	| CT-04 Consultar lei por data |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos associados	| RF-004: o site deve permitir ao usuário a consulta de lei por meio de data informada. |
| Objetivo do teste	| Verificar se a lei é apresentada corretamente na página de leitura, de acordo com a data selecionada pelo usuário. |
| Passos |	1) Acessar o navegador; 2) Informar o endereço do site; 3) Visualizar página principal; 4) Marcar a opção “Data”, abaixo da barra de busca, à esquerda; 5) Na barra de busca, digitar a data desejada; 6) Clicar no botão “Search”. |
| Critérios de Êxito |	A página deve apresentar uma caixa contendo o resumo da lei buscada, a data e o número. |

<br>

| Caso de teste |	CT-05 Consultar lei por palavras-chave |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos associados |	RF-005: O site deve permitir a consulta por palavras-chave. |
| Objetivo do teste |	Verificar se a(s) lei(s) é(são) apresentada(s) corretamente na página de leitura, de acordo com o que foi digitado pelo usuário. |
| Passos |	1) Acessar o navegador; 2) Informar o endereço do site; 3) Visualizar página principal; 4) Marcar a opção “Palavra-Chave/Nº”, abaixo da barra de busca, à esquerda; 5) Na barra de busca, digitar a palavra-chave desejada; 6) Clicar no botão “search”. |
| Critérios de Êxito |	A página deve apresentar uma caixa contendo o resumo da(s) lei(s) que contém a palavra buscada, a data e o número. |

<br>

| Caso de teste | CT-06 Login de usuário |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos associados |	RF-006: o site deve permitir que o usuário faça login, por meio de um usuário e senha. |
| Objetivo do teste |	Verificar se o site efetua o login do usuário que já possui cadastro realizado. |
| Passos |	1) Acessar o navegador; 2) Informar o endereço do site; 3) Visualizar página principal; 3) No ícone de login (localizado no canto superior direito da página); 4) Preencher os campos com  email e senha, caso já possua cadastro; 5) Clicar no botão “Entre”. |
| Critérios de Êxito |	O nome do usuário deve ser exibido ao lado do ícone de login, indicando que ele está logado no site. |

<br>

| Caso de teste	| CT-07 Cadastro de usuário |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos associados |	RF-007: o site deve permitir que o usuário faça seu cadastro, informando nome, email e senha. |
| Objetivo do teste |	Verificar se o site efetua o cadastro do usuário, guardando as informações sobre ele e permitindo o acesso a outras funcionalidades do site. |
| Passos | 1) Acessar o navegador; <br> 2) Informar o endereço do site; <br> 3) Visualizar página principal;  <br> 4) Clicar no link “Cadastre-se” localizado ou na barra ou após clicar no ícone de login (localizado no canto superior direito da página); <br> 5) Preencher os campos com nome, email e senha. As senhas precisam ser idênticas; <br> 6) Clicar no botão “Entre”. |
| Critérios de Êxito |	O usuário deve ficar logado automaticamente após o cadastro. Seu nome deve ser exibido ao lado do ícone de login. |

<br>

| Caso de teste |	CT-08 Visualizar ultimas alterações legislativas na página inicial |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos associados	| RF-009: o site deve exibir na página inicial as últimas alterações legislativas. |
| Objetivo do teste |	Verificar se as leis estão sendo apresentadas corretamente na home page. |
| Passos	| 1) Acessar o navegador; 2) Informar o endereço do site; 3) Visualizar página principal. |
| Critérios de Êxito: |	•	As leis devem ser exibidas corretamente no site, em 9 (nove) blocos de conteúdo;<br> •	Os blocos de conteúdo devem conter um resumo do que trata a lei e abaixo do resumo, um link clicável para levar à página de leitura.<br> |

<br>

| Caso de teste | CT-09 Exibir em uma página de leitura com a versão antiga e a versão atualizada da lei |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos associados |	RF-009: O site deve exibir em uma página de leitura a versão antiga e a versão atualizada da lei. |
| Objetivo do teste |	Verificar se é possível fazer a leitura da lei na página de leitura e se é possível visualizar a versão atual e a versão antiga. |
| Passos |	1) Acessar o navegador; <br> 2) Informar o endereço do site; <br> 3) Visualizar página principal; <br> 4) Clicar no link localizado na parte inferior de qualquer um dos 9 (nove) blocos dispostos na página principal ou naquela que aparecer como resultado após a busca por data, palavra-chave ou número; <br> 5) Visualizar o texto, que se apresenta em sua versão nova; <br> 6) Clicar no botão “Versão Antiga”, para visualizar a versão anterior da legislação. |
| Critérios de Êxito: |	•	A página de leitura deve ser aberta com a versão atualizada da lei buscada; <br> •	Após clicar no botão “Versão Antiga”, o texto da versão anterior deve substituir o texto da primeira versão exibida.<br> |

<br>
