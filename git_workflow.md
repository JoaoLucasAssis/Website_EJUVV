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

Para mesclar a `feature` na branch de desenvolvimento:

```git
git checkout develop
git merge feature/<nome_descritivo>
```

Lembre-se de remover a `feature` após mesclar com a branch `develop`:

> obs: Certifique-se de estar em uma branch diferente daquela que deseja remover

```git
git branch -d feature/<nome_descritivo>
```
