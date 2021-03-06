# 2021-1-PUMA-ApiGateway

## Objetivo

Esse serviço é responsável por fazer o tratamento das requisições entre os microsserviços [ProjectService](https://github.com/fga-eps-mds/2021-1-PUMA-ProjectService) e [UserService](https://github.com/fga-eps-mds/2021-1-PUMA-UserService).

### Como rodar

O nosso projeto utiliza o Docker, Docker Compose e Make como ferramentas de desenvolvimento. Para instalar o Docker e Docker Compose, siga o tutorial no site oficial do [Docker](https://www.docker.com/). Para a instalação do Make execute o comando: 

``` $ sudo apt install build-essential ```

Este microsserviço também é responsável por orquestrar os demais no ambiente local de desenvolvimento, sendo necessário os arquivos de ambiente.

Para buildar e executar o projeto em desenvolvimento, execute o comando:

``` $ make up-build ```

Para apenas executar o projeto, execute:

```$ make up```

Para encerrar os containers de desenvolvimento execute:

``` $ make down ```

Para rodar os testes, execute:

``` $ sudo make test```

``` $ sudo make test-debug```
