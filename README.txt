
 \\ ----------------------------------------- \\ INSTRUÇÕES PARA RODAR O PROGRAMA // ----------------------------------------- //

1. Instalação de recursos

Através do prompt de gitBash do VSCode, certifique-se de que está na pasta correta e digite o comando, ambos à seguir.
Além disso, também deverá instalar a seguinte extensão do VSCode.


PASTA CORRETA: 
/c/projeto-final-modelagem/back
COMANDO DE INSTALAÇÃO:
npm install --save sequelize express cors mysql2 dotenv
EXTENSÃO NECESSÁRIA:
Live Server

2. Criação de banco de dados

No arquivo ".env" presente na mesma pasta anterior estão todas as credenciais necessárias para o acesso do servidor,
utilizando o MySQL workbench. Lá, você deverá criar um novo 'schema' com o nome de "compras_db", utilizando o 'utf8 charset'.

3. Rodando o servidor

Depois da instalação de recursos e criação do banco de dados, tudo deverá estar pronto para rodar o servidor. Para isso,
digite o comando à baixo no gitBash, ainda na pasta correta anteriormente dita.

COMANDOS PARA RODAR O SERVIDOR:
node sync.js
node index.js

Ao fim, utilize a extensão instalada para rodar os arquivos html.

 \\ ----------------------------------------------- \\ MANUAL DE USUÁRIO // ----------------------------------------------- //

1. Navegação

Para navegar entre as páginas do site, utlize as opções do canto superior esquerdo da tela, em que estão distribuídas em 'Home',
'Compra', 'Produto' e 'Usuário', levando cada uma a sua respectiva página.

Ao entrar em uma delas, exceto a home, você poderá entrar em uma das a seguir:

 - Cadastrar
 - Listar
 - Apagar
 - Atualizar
 - Consultar (apenas para produto e usuário)
 
Depois para voltar à página anterior, apenas utilize os atalhos de navegação do canto superior esquerdo da tela novamente.

2. Funcionabilidades

Para utilizar das funcções do site com plenitude utilize as páginas da mesma ordem como foi demonstrada anteriormente, porém,
primeiro coneçando com usuário ou produto e, depois, realizando suas desejadas atividades na página de compras. 

Preencha todas as caixas de resposta adequadamente para que o sistema funcione adequadamente.
 



