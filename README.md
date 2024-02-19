# Website_EJUVV

## Visão Geral

O Website da EJUVV é um projeto que tem como objetivo fornecer uma presença online para a Empresa Júnior Universidade Vila Velha.

O projeto visa converter visitantes em clientes em potencial, fornecendo uma plataforma para apresentação de serviços e informações relevantes, facilitando também a comunicação com os usuários.

Comecei esse projeto durante minha participação como colaborador voluntário na Empresa Júnior Universidade Vila Velha. Hoje em dia, a organização utiliza outra landing page como presença online. Para visualizar a nossa página da Empresa Júnior Universidade Vila Velha, [clique aqui](https://www.ejuvv.com/).

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

> obs: Para mais informações detalahas sobre o Git Workflow: [clicar aqui](https://github.com/JoaoLucasAssis/Website_EJUVV/blob/develop/git_workflow.md).

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

> obs: Para mais informações detalahas sobre o Git Workflow: [clicar aqui](https://github.com/JoaoLucasAssis/Website_EJUVV/blob/develop/git_workflow.md).

## Boas Práticas de Commits

Adotar boas práticas de commits é essencial para manter um histórico de alterações claro e organizado.

Explique de forma breve as alterações realizadas, evitando descrições genéricas ou ambíguas.

Realize commits pequenos e focados em uma única alteração ou tarefa.

No final, escrever boas mensagens de commit demonstra que você é um bom colaborador.

```git
git commit -a -m "<tipo>[escopo opcional]: <descrição>
[corpo opcional]
[rodapé opcional]"
```

> obs: Os commits devem ser realizados com os seguintes tipos e rótulos:
> 
> feat - Adicionar um novo recurso à aplicação.
> 
> fix - Corrigir um bug na aplicação.
> 
> chore - Indicar um trabalho em progresso de uma funcionalidade.
> 
> build - Alterações que afetam o sistema de build ou dependências externas.
>
> static - Alterações no conteúdo de arquivos estáticos, como dados .json, imagens, etc.
> 
> docs - Alterações exclusivamente na documentação.
> 
> refactor - Alterações de código que não corrigem um bug nem modificam a forma como o usuário utiliza a aplicação.
> 
> style - Alterações que não afetam o significado do código, como espaços em branco, formatação, ponto e vírgula, etc.
> 
> test - Adicionar testes ausentes ou corrigir testes existentes.

Aqui estão alguns exemplos de bons commits:

```git
git commit -a -m "docs: Atualiza o README.md com instruções de instalação

Adicionada informações detalhadas sobre como instalar e configurar o projeto"
```

```git
fix[login]: Corrige validação de senha inválida

Aprimorada a lógica de validação de senha para tratar corretamente senhas inválidas

Issue #123
```

```git
refactor: Refatora função de ordenação

Simplificada a implementação da função de ordenação, melhorando o desempenho e a legibilidade do código
```

## Contatos

Para entrar em contato conosco, utilize as seguintes informações:

📧 comercial@ejuvv.com

📞 +55 27 3421-2140

Além disso, você também pode nos encontrar nas redes sociais:

<a href="https://www.instagram.com/ejuvv" target="_blank">
    <img src="https://images.vexels.com/media/users/3/137198/isolated/lists/07f0d7b69ef071571e4ada2f4d6a053a-icone-do-instagram-colorido.png" alt="Instagram" width="30" height="30">
</a>

<a href="https://www.linkedin.com/company/ejuvv/" target="_blank">
    <img src="https://logospng.org/download/linkedin/logo-linkedin-icon-256.png" alt="LinkedIn" width="30" height="30">
</a>

Ficaremos felizes em receber suas dúvidas, sugestões, críticas ou qualquer outra mensagem relacionada ao projeto.

Sinta-se à vontade para nos contatar e responderemos o mais breve possível.
