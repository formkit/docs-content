---
title: O que é o FormKit?
description: O FormKit é um framework de criação de formulários para desenvolvedores Vue que torna a construção de formulários prontos para produção de alta qualidade 10x mais rápida.
---

# O que é o FormKit?

:PageToc

## Introdução

O FormKit é muito mais do que uma biblioteca de interface do usuário. É um abrangente _framework de construção de formulários_ para desenvolvedores Vue que torna a criação de formulários prontos para produção de alta qualidade mais rápida, acessível, com melhor DX e UX e menos código. É fácil de aprender e vem com recursos prontos para produção, como inputs, regras de validação e tratamento de envio/erro.

::VideoCard
---
title: "Visão geral do FormKit"
poster: "https://cdn.formk.it/web-assets/formkit-poster.jpg"
watch-time: "1 min"
youtube-id: "89dijjTlveI"
---
::

### O que é um framework de formulários?

Por que eu preciso de um framework completo para formulários? Os formulários não são fáceis? Nesta entrevista franca ao vivo, o autor do FormKit, Justin Schroeder, apresenta uma visão geral do que o FormKit traz para o seu projeto. Dica: é muito mais do que apenas UI.

::VideoCard
---
title: "Discussão - FormKit: O Framework de Formulários para Vue"
poster: "https://cdn.formk.it/web-assets/formkit-poster.jpg"
watch-time: "60 mins"
youtube-id: "K61oLjg0N4A"
start-at: 659
---
::

Curto de tempo? Leia o post de introdução que explica os objetivos do FormKit escrito quando o framework foi lançado.

::ArticleCard
---
img: "https://cdn.formk.it/web-assets/og-introducing-formkit.jpeg"
label: "Artigo"
title: 'Leia o manifesto completo "Introducing FormKit" do membro do núcleo Justin Schroeder no DEV.to.'
href: "https://dev.to/justinschroeder/introducing-formkit-a-vue-3-form-building-framework-53ji"
---
::

## Por que o FormKit?

Formulários parecem simples. Afinal, apenas uma tag `<form>` e uma tag `<input>` são necessárias. No entanto, engenheiros experientes sabem que implementar formulários prontos para produção é tedioso e complicado. Os recursos principais do FormKit foram projetados para resolver esses problemas, enquanto tornam a criação de formulários eficiente e agradável para os desenvolvedores:

#### Principais recursos

- [Componente único](#single-component): FormKit foi projetado com um único componente para todos os inputs.
- [Acessibilidade](#accessibility): Nós produzimos uma marcação acessível por padrão.
- [Validação](#validation): Inúmeras regras de validação embutidas com feedback instantâneo.
- [Esquema](#schema): Formato de esquema poderoso para armazenar e gerar formulários.
- [Estilos](#styles): Tema cuidadosamente desenvolvido.
- [Extensibilidade](#extensibility): Fácil de estender qualquer recurso.
- [Comunidade](#community): Comunidade amigável que ajudará a resolver suas dúvidas.

### Componente Único

Os desenvolvedores adoram aprender, mas ninguém gosta de estudar APIs de terceiros e opções de configuração. É por isso que o FormKit usa um único componente para todos os seus [inputs](/essentials/inputs). `<FormKit>` é o único componente que você precisa conhecer para começar, e funciona exatamente como você esperaria que uma tag `<input>` funcionasse.

### Acessibilidade

Criar formulários acessíveis é um desafio sério. Especialmente quando os padrões de acessibilidade nem sempre são claros e a maioria dos desenvolvedores está sob pressão de tempo. Idealmente, todos os desenvolvedores deveriam estar bem versados nas melhores práticas de acessibilidade, mas infelizmente esse não é o caso. Para resolver isso, o FormKit gera uma estrutura de DOM acessível baseada em opiniões. Isso é diferente de muitas bibliotecas de formulários "sem renderização" populares que não fornecem nenhuma marcação e dependem que os desenvolvedores forneçam os inputs por conta própria.

### Validação

A validação do front-end que fornece um feedback instantâneo é uma parte importante para proporcionar uma boa experiência aos seus usuários. Infelizmente, pode ser incrivelmente tedioso implementá-la, mesmo se você estiver usando uma ótima biblioteca de validação. O FormKit tira a dor da validação do front-end ao incorporar as [regras](/essentials/validation#available-rules) diretamente nos inputs.

### Esquema

O [esquema](/essentials/schema) do FormKit é um formato de dados serializável em JSON para armazenar estruturas DOM e implementações de componentes, incluindo formulários FormKit. Os esquemas suportam recursos avançados como [geração de formulários](/essentials/schema#form-generation-example), lógica condicional, operadores booleanos, loops, slots e escopo de dados - tudo garantido para ser serializado em uma string.

### Estilos

Com a capacidade de modificar as classes do FormKit e até mesmo o HTML, o FormKit oferece muitas maneiras de estilizar seus formulários. Você pode criar seu próprio CSS, usar um framework de classes utilitárias como o Tailwind CSS ou usar o Genesis - nosso tema pronto que funciona muito bem em uma variedade de contextos de design!

### Extensibilidade

O FormKit vem com excelentes padrões prontos para produção, e para muitos usuários, os padrões são tudo o que eles precisarão. Mas o FormKit é mais do que apenas inputs. É um _framework_ de construção de formulários, completo com [hooks](/essentials/architecture#hooks), [eventos](/essentials/architecture#events), [plugins](/essentials/architecture#plugins), bibliotecas e [esquemas](/essentials/schema). Desenvolvedores avançados podem criar seus próprios sistemas de formulários usando as ferramentas de baixo nível do FormKit.

### Comunidade

FormKit tem uma [comunidade ativa no Discord](https://discord.gg/Vhu97pAC76) onde a ajuda está a apenas alguns cliques de distância. Membros da comunidade e membros do núcleo da equipe gastam tempo lá ajudando os usuários a resolver seus problemas.

## Por que não...?

Embora o FormKit faça muitas coisas, não é um framework de UI ou uma ferramenta de _layout_. Quer inputs lado a lado? Legal! Envolve alguns inputs em uma `<div>` e adiciona um pouco de `flexbox`. Embora o FormKit venha com um [tema padrão](/essentials/styling#optional-genesis-theme), este pacote assume que você ainda será responsável pela maior parte do estilo e layout do seu formulário. O FormKit funciona bem com qualquer framework de UI ou seus próprios estilos personalizados.

Se você precisa de um framework completo de UI, você pode verificar estas outras ótimas ferramentas:

#### Vuetify

Vuetify é um framework completo de UI, enquanto o FormKit é uma ferramenta focada na construção de formulários. Algumas pessoas preferem não usar frameworks de UI grandes, não os têm em um projeto pré-existente, não querem aprender um novo framework ou simplesmente preferem escrever seus próprios estilos com escopo limitado. Além disso, acreditamos que a composição de formulários no FormKit é incomparável.

#### Buefy

Semelhante ao Vuetify, o Buefy é um framework completo de UI. Se você já está usando o Bulma ou está procurando por uma solução de UI abrangente, é uma escolha sólida. O FormKit pode coexistir com qualquer framework de UI e ainda oferece os benefícios de composição de formulários elegante, validação e tratamento de erros, para citar alguns. Mesmo assim, há muitas pessoas que não querem ou não precisam de um framework completo de UI que se beneficiariam da abordagem focada do FormKit.

#### VeeValidate

VeeValidate é uma ótima opção para validação de formulários no Vue, e essa é sua principal missão - validação. FormKit torna a construção de formulários de alta qualidade mais fácil ao incluir validação como uma sub-funcionalidade da composição do campo em si. Construir formulários com FormKit é super fácil e extremamente rápido - é claro que se você precisar do poder extra de validação, ainda terá. Você pode escrever qualquer [lógica de validação personalizada](/essentials/validation#custom-rules) que desejar.

#### Vuelidate

Mais uma ótima opção para validação de formulários, mas focada exclusivamente na validação. FormKit fornece estrutura e recursos adicionais, como acessibilidade, i18n e composição de entrada, permitindo que os desenvolvedores criem formulários complexos com o mínimo de fricção com validação e tratamento de erros incluídos.

#### vue-form-generator

Gerar formulários a partir de JSON é ótimo - é por isso que o esquema é um sub-recurso do FormKit. Basta passar o esquema do formulário para o componente `FormKitSchema` e voilà! Confira a documentação [aqui](/essentials/schema#form-generation-example). Agora você pode usar a mesma ferramenta para composição e geração de formulários!

## Curso em vídeo

Prefere aprender assistindo? A Vue School tem um excelente curso para ajudá-lo a começar a usar o FormKit para construir formulários robustos para Vue.js. Aprenda o básico, bem como tópicos mais avançados, e depois volte aqui para a documentação quando precisar preencher as lacunas para casos de uso específicos.

::VideoCard
---
title: "Formulários Robustos com Vue.js - Curso Vue School"
poster: "https://cdn.formk.it/web-assets/robust-vue-js-forms-with-formkit-2.jpg"
watch-time: "1 hora e 49 minutos"
external-vid: "https://vueschool.io/courses/robust-vue-js-forms-with-formkit?friend=formkit"
---
::

## Servidor Discord do FormKit

Se você precisa de ajuda geral ou quer fazer conexões dentro da comunidade, considere entrar no Discord oficial do FormKit. Mais de 1200 desenvolvedores, juntamente com membros da equipe principal, têm discussões ativas lá. Se você ainda não é membro (é gratuito e aberto), você precisará usar o seguinte link de convite para entrar no servidor:

<LinkDiscord></LinkDiscord>

Este é um componente de sintaxe markdown (MDC) da documentação de um framework JavaScript que auxilia desenvolvedores que trabalham com formulários e inputs HTML. 

Por favor, não modifique a estrutura do markdown e faça uma tradução 1:1 do inglês para o português brasileiro:

===