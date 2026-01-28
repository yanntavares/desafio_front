# Desafio Front-End (NestJS)

## Sobre
Desafio da trilha de Front-End do Onboarding da **Seed a Bit Tecnologia**, com objetivo de reforçar o entendimento sobre App Router, Server Components, paginação via searchParams e navegação com next/link no Next.js.. O foco é **arquitetura e decisão técnica**, não estética.

## Pergunta
> A página principal (tarefas/page.tsx) deve ser um `Server Component` ou `Client Component`? Por quê?

  A página inicial deve ser Server Component, pois, ao delegar a função ao servidor, a página é renderizada mais rapidamente, independente da máquina do cliente, aumentando a eficiência e desempenho da página. Além do mais, buscas de dados, leitura de arquivos e o acesso ao banco de dados são realizadas diretamente pelo servidor, diminuindo o tamanho do pacote JavaScript que acaba pesando no browser, melhorando o tempo de resposta. 
  
  Ademais, ao mesclar com Client Components nos props em uma page, combina o melhor de cada Component, visto que telas principais geralmente não exigem interatividade imediata
