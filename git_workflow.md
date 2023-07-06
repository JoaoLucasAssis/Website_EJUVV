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