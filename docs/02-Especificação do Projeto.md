# Especificações do Projeto

Chegou-se à definição do problema, através da elucidação de situações reais enfrentadas por estudantes, profissionais liberais e pessoas que possuem contato direto com as leis que precisam estar sempre atualizadas.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas nas figuras que se seguem:


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Guilherme Alves| fazer o download de uma legislação em formato PDF| fazer grifos e anotações no próprio computador, sem precisar imprimir a lei.|
|Guilherme Alves| editar o texto de uma legislação| adequar tamanho de fonte, espaçamento, margem etc., da forma que eu preferir, para download ou impressão.|
|Guilherme Alves| manter um registro salvo com as minhas preferências de edição de texto| facilitar a manutenção de um padrão para a impressão de documentos.|
|Lúcia Tomazaki| receber notificações de atualizações sobre um texto que já acessei anteriormente no site| não perder tempo pesquisando se a legislação possui alguma nova alteração.|
|Lúcia Tomakazi| poder acessar conteúdo legislativo compatível com leitores de telas| promover a compreensão da legislação de forma acessível.|

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve publicar as alterações da lei com informações relativas à data de publicação e numeração. | ALTA | 
|RF-002| O site deve contemplar ícones que permitam ao usuário realizar download em .pdf ou arquivo de texto editável.| ALTA |
|RF-003| O site deve permitir a consulta por número da lei. | ALTA |
|RF-004| O site deve permitir a consulta por data. | MÉDIA |
|RF-005| O site deve permitir a consulta por palavras-chave. | MÉDIA |
|RF-006| O site deve permitir que o usuário faça login. | ALTA |
|RF-007| O site deve permitir que o usário faça cadastro. | ALTA |
|RF-008| O site deve exibir na página inicial as últimas alterações legislativas. | MÉDIA |
|RF-009| O site deve exibir em uma página de leitura a versão antiga e a versão atualizada da lei. | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser totalmente responsivo.| ALTA | 
|RNF-002| O site deve conter métodos de acessibilidade para pessoas com deficiência. | ALTA | 
|RNF-003| O site deve conter tecnologias e versões adaptadas para ser renderizada nos navegadores mais usados (Google Chrome, Microsoft Edge, Firefox, Microsoft Explore). | ALTA |
|RNF-004| O site deve ser publicado em um ambiente acessível publicamente na internet (GitHub Pages, Heroku, Replit.it, Versel). | ALTA |
|RNF-005| O site deve consumir APIs externas para carregar fontes entre outras funcionalidades Open Source. | ALTA |
|RNF-006| O site deve ter bom nível de contraste entre os elementos da tela em conformidade. | MÉDIA |
|RNF-007| O site deverá baixar o arquivo nos formatos .docx e .pdf. | ALTA |

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para seu desenvolvimento são apresentadas na tabela a seguir:

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O site deve se restringir às tecnologias básicas da Web no Front-end |
|02| Legal (Lei Geral de Proteção de dados). |
|03| O Banco de dados utilizado deve ser da categoria relacional. |

