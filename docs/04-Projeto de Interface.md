
# Projeto de Interface

A elaboração da interface do sistema prioriza a simplicidade foca em agilidade, acessibilidade e usabilidade. Assim, o projeto possui uma identidade visual padronizada em suas telas, que são projetadas para funcionamento em desktops e dispositivos móveis.

## Fluxo do usuário

O diagrama apresentado na figura abaixo demonstra o fluxo de interação do usuário com as telas do sistema. Cada uma dessas telas será detalhada na seção de Wireframes a seguir.

<img src="https://user-images.githubusercontent.com/88891675/144282613-0171e664-12da-4e61-8254-1227705d28fe.png" width="400">

## Wireframes

 Os detalhes das telas apresentadas no item anterior estão explicitados nas figuras que se seguem. As telas do sistema possuem uma estrutura padronizada, constituída de três grandes blocos, quais sejam:
1.	Cabeçalho: local em que estão dispostos os elementos fixos da identidade (nome do site, logomarca e ícone de usuário);<br>
2.	Conteúdo: local onde são apresentadas as atualizações legislativas, os resultados de pesquisa, leitura de lei, login e cadastro de usuário e perfil;<br>
3.	Barra lateral: local onde fica o filtro de pesquisa.<br>

### Tela - Home-Page

A tela de home-page, exemplificada na figura abaixo é a estrutura padrão do site.

Apresenta no cabeçalho o nome do site com a logomarca e um ícone para eventual login ou cadastro de usuário.

O bloco de conteúdo se inicia com um link para que o usuário efetue seu cadastro no site, levando-o para a tela "Cadastro de Usuário". Após, exibe as últimas atualizações legislativas, ordenadas por data de publicação, da mais recente para a mais antiga. As leis ficam dispostas em blocos e, dentro destes, há um pequeno resumo sobre o tema tratado. Abaixo, há o número da lei e data de sua última atualização.

<img src="https://user-images.githubusercontent.com/88891675/144283588-6c3dc704-2ac0-4b17-b4b2-b4c65df03a54.png" width="400">


### Tela - Login

A tela de login será exibida no bloco de conteúdo, ao pressionar o ícone que representa uma pessoa, localizado no canto superior direito do cabeçalho. Nesta tela, o usuário deverá inserir o nome e a senha registrados por ele no site, e clicar no botão de "entrar". Também conterá um link "cadastre-se" que levará o usuário para a tela "Cadastro de Usuários", caso não tenha se registrado ainda.

<img src="https://user-images.githubusercontent.com/88891675/144283697-9b3020cd-ce22-428b-bed2-13a91aad37bb.png" width="400">

### Tela - Cadastro de usuários

A tela de cadastro, também acessada por meio do ícone que representa uma pessoa, é exibida no bloco de conteúdo, e apresenta campos para o usuário preencher com nome completo, e-mail e senha. Ao preencher basta pressionar o botão “Registrar” e o cadastro estará finalizado. 

Por meio deste cadastro, o usuário poderá receber notificações, salvar legislações como favoritas e acessar o seu histórico de pesquisa.

<img src="https://user-images.githubusercontent.com/88891675/144285118-6ae760c6-71d3-4bd4-ab71-193bf0b46341.png" width="400">

### Tela - Perfil

A tela de perfil será exibida após o usuário efetuar o login ou o seu registro. Esta tela conterá um menu vertical com informações sobre conta, notificações, histórico e favoritos. Estas informações serão exibidas no campo de conteúdo. Ao pressionar o botão de: 

* Conta: o usuário terá a opção de trocar sua senha de acesso e salvar uma nova senha;
*	Notificações: o usuário terá a opção de receber atualizações de leis, marcando o botão "sim";
*	Histórico: serão exibidos os últimos conteúdos acessados pelo usuário por ordem de data de acesso;
*	Favoritos: serão exibidas as legislações salvas pelo usuário como suas favoritas;
*	Sair da conta: botão para que o usuário possa efetuar o logout do site.

O detalhamento do perfil e de sua navegação estão nas figuras abaixo:

| <img src="https://user-images.githubusercontent.com/88891675/144285498-ae8779d0-e669-49c6-9eb2-c5fa7e2f1f47.png" width="250"> | <img src="https://user-images.githubusercontent.com/88891675/144285867-f5daff4a-fd70-485e-ba19-011d8584e1de.png" width="250"> | 
|-----------------------------------------------------------------------------|--------------------------------------------------------------------------|
| <img src="https://user-images.githubusercontent.com/88891675/144285881-2449dbeb-be8d-40d0-93e6-5db26a8d47e2.png" width="250"> | <img src="https://user-images.githubusercontent.com/88891675/144285924-5eabb1ec-0964-400e-aec4-5cb64421de59.png" width="250"> |

### Tela - Filtro de pesquisa

Após o usuário criar o seu registro no site, a tela voltará para a home-page padrão e será apresentado um ícone de filtro no topo da página, que o possibilita fazer pesquisas.

A tela para fazer pesquisa é exibida na forma de uma janela modal, quando o usuário pressiona o ícone de filtro referido anteriormente. Ao informar as preferências de pesquisa e, em seguida, pressionar "buscar", o conteúdo da página é substituído com o resultado da busca solicitada.

O filtro tem como base de pesquisa: nome/número da legislação; data; e utilização de palavras-chave, não sendo necessário preencher todos os campos.

<img src="https://user-images.githubusercontent.com/88891675/144286887-589923ac-3f1a-4639-97dc-6642ca173533.png" width="150">

### Tela - Resultado de pesquisa

Tendo o usuário informado suas preferências de pesquisa pelo filtro exibido na home-page de usuário cadastrado, ele é direcionado para uma tela que exibe o conteúdo associado aos campos informados. O resultado será apresentado no bloco de conteúdo, em uma lista ordenada, iniciada pela lei com a atualização mais recente. A tela manterá a estrutura padrão do site.

<img src="https://user-images.githubusercontent.com/88891675/144287124-cbeecba9-ffa1-4e33-b02c-3aead042fb40.png" width="400">

### Tela - Leitura de lei

Ao clicar em uma lei exibida na home-page, ou na tela "Resultado de Pesquisa", ou ainda, por meio dos botões "Favoritos" ou "Histórico", a tela de Leitura de Lei apresentará o conteúdo da legislação acessada pelo usuário. No canto superior esquerdo, serão apresentadas três opções ao usuário, em forma de ícones clicáveis: 

* Baixar a lei no formato .pdf;
*	Abrir a lei em um editor de texto word (arquivo .docx);
*	Salvar como favorito (caso ainda não esteja salvo dessa forma).

Como esta página segue o padrão da home-page, o filtro para pesquisa continua sendo exibido no canto superior direito, caso o usuário deseje fazer outra busca.

<img src="https://user-images.githubusercontent.com/88891675/144287613-29904442-fad6-4ca1-a1b3-50a6edf734ce.png" width="400">
