# TDD com Javascript na prática 
> Repositório de uso didático 

# JEST é uma switch de teste completa para javascript que pode ser utilizado tanto no frontend quanto no backend.

>> INICIANDO COM JEST

>> -> Após instalação e preciso fazer algumas configurações: 
  -> yarn jest --init (após responder perguntas de inicialização, ele ira criar um arquivo chamado *jest.config.js*);
  -> no arquivo jest.config.js, altere o 
    > bail: para true ( garante que o teste pare assim que encontrar uma primeira falha )
    > testMatch: [ "**/__tests__/**/*.test.js?(x)" ] ( para executar todos arquivos que terminam com "test.js" )


>> -> Tipos de testes: 
  -> testes unitarios (na pasta /unit) tem o objetivo de testar as funções "puras" que tem o mesmo retorno -> funções sem efeitos colaterais
  -> testes de integração ( na pasta /integration) tem o objetivo de testar as funções que fazem chamadas a API, cadastro no banco de dados ->  funcoes com efeitos colaterais