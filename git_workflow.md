# Git Workflow

O Git Workflow é uma recomendação de como usar o Git para realizar o trabalho de maneira consistente e produtiva.

Há vários Git Workflows, nosso projeto utilizará o Git Flow.

![fluxo de ramificações do git flow](https://www.lumis.com.br/data/files/FC/F4/E3/0A/098EA7108FA5E7A7C808A8A8/Gitflow_-_blog_-_interna.png)

# Git Flow

O Git Flow é um fluxo de trabalho no Git que ajuda a organizar o desenvolvimento de software.

O projeto utilizará duas branches principais, `main` e a `develop`, que são permanentes e sempre estarão presentes, e três branches de suporte temporárias: `feature`, `release` e `hotfix`.

|           Principais         |             Suporte            |
|:----------------------------:|:------------------------------:|
|[main](#branches-principais)   |[feature](#branches-de-recurso)   |
|[develop](#branches-principais)|[release](#branches-de-lançamento)|
|                              |[hotfix](#branches-de-manutenção)  |
|                              |[bugfix](#branches-de-correção)    |

Após concluir as tarefas em cada uma dessas branches temporárias, é realizado o merge das alterações na branch principal correspondente, de acordo com a documentação de cada uma.

## Branches Principais
### Main

A branch `main` é a principal do projeto. 

Ela armazena o código base para a versão estável e oficial do projeto.

### Develop

A branch `develop` é a branch de desenvolvimento. 

É a partir desta que novas branches são criadas para adicionar recursos ou funcionalidades ao projeto.

Posteriormente, esses novos recursos ou funcionalidades serão associados a branch `main`.

## Branches de Recurso
Cada novo recurso deve residir em uma branch ramificada a partir da branch `develop` mais recente.

Para criar uma nova `feature`, utilize o prefixo **feature/** seguido de um **nome descritivo** da funcionalidade:

```git
git checkout develop
git checkout -b feature/<nome_descritivo>
```

## Branches de Lançamento
Uma vez que a branch `develop` adquiriu recursos suficientes para um lançamento, é criado uma branch `release`, a partir da `develop`, para ser lançada para a branch `main`.

Cada branch `release` deve ser mesclada a branch `main` com um número de versão.

Caso haja alguma alteração, a `release` também deve ser mesclada com a `develop`.

Para criar uma `release`, utilize o prefixo **release/** seguido pelo **número da versão** correspondente:

```git
git checkout develop
git checkout -b release/<versao>
```

## Branches de Correção
A branch `bugfix` é criada a partir da branch `release` para correções encontradas no momento da validação.

Para criar uma `bugfix`, utilize o prefixo **bugfix/** seguido de um **nome descritivo** da correção:

```git
git checkout release
git checkout -b bugfix/<nome_descritivo>
```

## Branches de Manutenção
As branches de `hotfix` são usadas para fazer correções com rapidez no código base.

Esta é a única branch que deve ser criada direto da ramificação `main`.

Assim que a correção é concluída, deve-se mesclar a `hotfix` tanto com a branch `main` quanto com a `develop`.

> obs: Caso exista uma release atual, o merge deve ser feito nela, e então, posteriormente, será feito o merge com a develop

Para criar uma `hotfix`, utilize o prefixo **hotfix/** seguido pelo **número da versão** correspondente:

```git
git checkout main
git checkout -b hotfix/<versao>
```

## Pull Request e Mesclagem

Depois de concluir as alterações em uma branch, ela deve ser enviada para o **repositório remoto**.

```git
git push origin <nome_da_branch>
```

> obs: Lembre-se de estar na branch desejada para executar esse comando

No repositório remoto, deverá ser criado um **pull request** entre essa branch e a branch `develop`.

* Abra o GitHub neste repositório.

* Clique no botão pull request para criar uma nova requisição.

* Escolha como branch base a branch `develop` e para a branch de comparação escolha a branch que deseja mesclar.

* Preencha corretamente as informações de acordo com a documentação de pull request.

* Clique em "Create pull request" para iniciar o processo de revisão.

Após as revisões e testes, haverá a **mesclagem** entre as branches e, por fim, a **exclusão** da branch de comparação.