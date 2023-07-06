# Website_EJUVV

## Visão Geral

O Website da EJUVV é um projeto que tem como objetivo fornecer uma presença online para a Empresa Júnior Universidade Vila Velha.

O projeto visa converter visitantes em clientes em potencial, fornecendo uma plataforma para apresentação de serviços e informações relevantes, facilitando também a comunicação com os usuários.

## Instalação

Para começar, clone o repositório do projeto em seu ambiente local. Siga a etapa abaixo:

* Abra o terminal na pasta onde deseja clonar o repositório.

* Clone o repositório para o seu ambiente local usando o seguinte comando:

```git
git clone https://github.com/JoaoLucasAssis/Website_EJUVV.git
```

> obs: Certifique-se de ter o git instalado antes de executar o comando no terminal

* Execute o comando a seguir para buscar todas as branches do repositório remoto:

```git
git fetch --all
```

> obs: Para listar todas as branches, execute o comando:
>
> git branch -a

* Crie uma branch local baseada na branch remota `develop` com o seguinte comando:

```git
git checkout develop
```

Agora você está pronto para começar a trabalhar em sua nova branch!

## Git Workflow

O Git Workflow é uma recomendação de como usar o Git para realizar o trabalho de maneira consistente e produtiva.

Há vários Git Workflows, nosso projeto utilizará o Git Flow.

> obs: Para mais informações detalahas sobre o Git Workflow: [clicar aqui](https://github.com/JoaoLucasAssis/Website_EJUVV/blob/main/git_workflow.md).

### Branches Principais

`main`

A branch principal que armazena o código estável e oficial do projeto.

`develop`

A branch de desenvolvimento, onde novas branches são criadas e novos recursos e funcionalidades são adicionados.

### Branches de Suporte

`feature`

Criadas para o desenvolvimento de funcionalidades específicas.

Elas devem ter o nome iniciado por **"feature/"** seguido por uma **descrição**.

Essas branches são criadas a partir da branch `develop` e, após finalizadas, são removidas após serem mescladas com a branch `develop`.

`release`

Criadas para fazer o lançamento de novas funcionalidades da branch `develop` para a branch `main`.

Elas devem ter o nome iniciado por **"release/"** seguido por uma **versão**.

Essas branches são criadas a partir da branch `develop` e, após finalizadas, são removidas após serem mescladas com a branch `main`.

`bugfix`

Criadas para fazer para correções encontradas no momento da validação na branch `release`.

Elas devem ter o nome iniciado por **"bugfix/"** seguido por uma **descrição**.

Essas branches são criadas a partir da branch `release` e, após finalizadas, são removidas após serem mescladas com a branch `release`.

`hotfix`

Criadas para fazer correções com rapidez no código base na branch `main`.

Elas devem ter o nome iniciado por **"hotfix/"** seguido por uma **versão**.

Essas branches são criadas a partir da branch `main` e, após finalizadas, são removidas após serem mescladas com a branch `main` e `develop`.

> obs: Para mais informações detalahas sobre o Git Workflow: [clicar aqui](https://github.com/JoaoLucasAssis/Website_EJUVV/blob/main/git_workflow.md).