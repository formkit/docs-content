---
title: O que é FormKit?
description: FormKit é um framework de criação de formulários para desenvolvedores Vue que torna a construção de formulários prontos para produção de alta qualidade 10 vezes mais rápida.
---

# O que é FormKit?

:PageToc

## Introdução

FormKit vai além de uma biblioteca de interface de usuário. É um abrangente _framework de construção de formulários_ para desenvolvedores Vue que torna a criação de formulários prontos para produção de alta qualidade mais rápida, acessível, com uma melhor experiência de desenvolvimento e usuário, e com menos código. É fácil de aprender e vem com recursos prontos para produção, como inputs, regras de validação e tratamento de envio/erro.

::VideoCard
---
title: "Visão geral do FormKit"
poster: "https://cdn.formk.it/web-assets/formkit-poster.jpg"
watch-time: "1 min"
youtube-id: "89dijjTlveI"
---
::

### O que diabos é um framework de formulários?

Por que eu preciso de um framework completo para formulários? Os formulários não são fáceis? Nesta entrevista franca ao vivo, o autor do FormKit, Justin Schroeder, dá uma visão geral do que o FormKit traz para o seu projeto. Dica: é muito mais do que apenas uma interface de usuário.

::VideoCard
---
title: "Discussão — FormKit: O Framework de Formulários para Vue"
poster: "https://cdn.formk.it/web-assets/formkit-poster.jpg"
watch-time: "60 mins"
youtube-id: "K61oLjg0N4A"
start-at: 659
---
::

Com pouco tempo? Leia o post de introdução que explica os objetivos do FormKit, escrito quando o framework foi lançado pela primeira vez.

::ArticleCard
---
img: "https://cdn.formk.it/web-assets/og-introducing-formkit.jpeg"
label: "Artigo"
title: 'Leia o manifesto completo "Introducing FormKit" do membro da equipe principal Justin Schroeder no DEV.to.'
href: "https://dev.to/justinschroeder/introducing-formkit-a-vue-3-form-building-framework-53ji"
---
::

## Por que usar o FormKit?

Formulários parecem simples. Afinal, um `<form>` e uma tag `<input>` é tudo o que é necessário. No entanto, engenheiros experientes sabem que implementar formulários prontos para produção é tedioso e complicado. Os recursos principais do FormKit foram projetados para resolver esses problemas, tornando a criação de formulários eficiente e agradável para os desenvolvedores:

#### Recursos Principais

- [Componente único](#componente-único): O FormKit foi projetado com um único componente para todos os inputs.
- [Acessibilidade](#acessibilidade): Nós geramos uma marcação acessível por padrão.
- [Validação](#validação): Inúmeras regras de validação incorporadas com feedback instantâneo.
- [Schema](#schema): Formato de esquema poderoso para armazenar e gerar formulários.
- [Estilos](#estilos): Tema com design bonito.
- [Extensibilidade](#extensibilidade): Fácil de estender qualquer recurso.
- [Comunidade](#comunidade): Comunidade amigável que ajudará a resolver suas dúvidas.

### Componente Único

Os desenvolvedores adoram aprender, mas ninguém gosta de estudar APIs de terceiros e opções de configuração. É por isso que o FormKit usa um único componente para todos os seus [inputs](/essentials/inputs). `<FormKit>` é o único componente que você precisa conhecer para começar, e ele funciona exatamente como você esperaria que uma tag `<input>` funcionasse.

### Acessibilidade

Criar formulários acessíveis é um desafio sério. Especialmente quando os padrões de acessibilidade nem sempre são claros e a maioria dos desenvolvedores está sob pressão de tempo. Idealmente, todos os desenvolvedores deveriam conhecer as melhores práticas de acessibilidade, mas infelizmente esse não é o caso. Para resolver isso, o FormKit gera uma estrutura DOM acessível e opinativa. Isso é diferente de muitas bibliotecas populares de formulários "sem renderização" que não fornecem nenhuma marcação e dependem dos desenvolvedores para fornecer os inputs.

### Validação

A validação [front-end](/essentials/validation) que fornece feedback instantâneo é uma parte importante para oferecer uma boa experiência aos usuários. Infelizmente, pode ser incrivelmente tedioso implementar, mesmo se você estiver usando uma ótima biblioteca de validação. O FormKit simplifica a validação no front-end, incorporando as [regras](/essentials/validation#available-rules) diretamente nos inputs.

### Schema

O [schema](/essentials/schema) do FormKit é um formato de dados JSON serializável para armazenar estruturas DOM e implementações de componentes, incluindo formulários do FormKit. Os schemas suportam recursos avançados como [geração de formulários](/essentials/schema#form-generation-example), lógica condicional, operadores booleanos, loops, slots e escopo de dados — todos garantidos para serem serializados em uma string.

### Estilos

Com a capacidade de modificar as classes e até mesmo o HTML do FormKit, ele oferece várias maneiras de estilizar seus formulários. Você pode criar seu próprio CSS, usar um framework de classes utilitárias como o Tailwind CSS ou usar o Genesis — nosso tema pronto que funciona muito bem em diversos contextos de design!

### Extensibilidade

O FormKit vem com ótimos padrões prontos para produção e, para muitos usuários, os padrões são tudo o que eles precisam. Mas o FormKit é mais do que apenas inputs. É um _framework_ de construção de formulários, completo com [hooks](/essentials/architecture#hooks), [eventos](/essentials/architecture#events), [plugins](/essentials/architecture#plugins), bibliotecas e [schemas](/essentials/schema). Desenvolvedores avançados podem criar seus próprios sistemas de formulários usando as ferramentas de baixo nível do FormKit.

### Comunidade

O FormKit possui uma [comunidade ativa no Discord](https://discord.gg/Vhu97pAC76) onde a ajuda está a apenas alguns toques de teclado de distância. Membros da comunidade e membros da equipe principal passam tempo ajudando os usuários a resolver seus problemas.

## Por que não...?

Embora o FormKit faça muitas coisas, ele não é um framework de interface de usuário ou uma ferramenta de _layout_. Quer inputs um ao lado do outro? Legal! Coloque alguns inputs em uma `<div>` e adicione um pouco de `flexbox`. Embora o FormKit venha com um [tema padrão](/essentials/styling#optional-genesis-theme), este pacote assume que você ainda será responsável pela maior parte do estilo e layout do seu formulário. O FormKit funciona bem com qualquer framework de interface de usuário ou com seus próprios estilos personalizados.

Se você precisa de um framework de interface de usuário completo, você pode conferir essas outras ótimas ferramentas:

#### Vuetify

O Vuetify é um framework de interface de usuário completo, enquanto o FormKit é uma ferramenta focada na construção de formulários. Algumas pessoas preferem não usar grandes frameworks de interface de usuário, não os têm em um projeto pré-existente, não querem aprender um novo framework ou simplesmente preferem escrever seus próprios estilos com escopo limitado. Além disso, acreditamos que a composição de formulários no FormKit é insuperável.

#### Buefy

Similar ao Vuetify, o Buefy é um framework de interface de usuário completo. Se você já está usando o Bulma ou está procurando uma solução de interface de usuário abrangente, é uma escolha sólida. O FormKit pode ser usado junto com qualquer framework de interface de usuário e ainda oferece os benefícios de uma composição de formulários elegante, validação, tratamento de erros, entre outros. Ainda assim, há muitas pessoas que não querem ou não precisam de um framework de interface de usuário completo e se beneficiariam da abordagem focada do FormKit.

#### VeeValidate

O VeeValidate é uma ótima opção para validação de formulários Vue, e essa é a sua missão principal — validação. O FormKit facilita a construção de formulários de alta qualidade, incluindo a validação como um sub-recurso da própria composição do campo. Construir formulários com o FormKit é super fácil e extremamente rápido — é claro, se você precisar do poder extra de validação, você ainda terá. Você pode escrever qualquer [lógica de validação personalizada](/essentials/validation#custom-rules) que desejar.

#### Vuelidate

Outra ótima opção para validação de formulários, mas focada exclusivamente na validação. O FormKit fornece scaffolding e recursos adicionais, como acessibilidade, i18n e composição de inputs, permitindo que os desenvolvedores criem formulários complexos com o mínimo de atrito, incluindo validação e tratamento de erros.

#### vue-form-generator

Gerar formulários a partir de JSON é ótimo — é por isso que o schema é um sub-recurso do FormKit. Basta passar o schema do seu formulário para o componente `FormKitSchema` e pronto! Confira a documentação [aqui](/essentials/schema#form-generation-example). Agora você pode usar a mesma ferramenta para composição e geração de formulários!

## Curso em vídeo

Prefere aprender assistindo? A Vue School tem um excelente curso para ajudá-lo a começar a usar o FormKit para construir formulários robustos para o Vue.js. Aprenda o básico, bem como tópicos mais avançados, e depois volte aqui para a documentação quando precisar preencher as lacunas para casos de uso específicos.

::VideoCard
---
title: "Formulários Robustos Vue.js - Curso da Vue School"
poster: "https://cdn.formk.it/web-assets/robust-vue-js-forms-with-formkit-2.jpg"
watch-time: "1 hr, 49 mins"
external-vid: "https://vueschool.io/courses/robust-vue-js-forms-with-formkit?friend=formkit"
---
::

## Servidor Discord do FormKit

Se você precisa de ajuda geral ou deseja fazer conexões dentro da comunidade, considere ingressar no servidor oficial do FormKit no Discord. Mais de 1200 desenvolvedores, juntamente com os membros da equipe principal, têm discussões ativas lá. Se você ainda não é membro (é gratuito e aberto), você precisará usar o seguinte link de convite para entrar no servidor:

<LinkDiscord></LinkDiscord>