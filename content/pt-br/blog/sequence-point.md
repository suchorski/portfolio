---
language: pt-br
title: Ponto de sequência
description: Ponto de sequência, cuidado!
---
O Thiago abriu uma questão em nossas mentes (minha e dele) e um ponto de interrogação ficou até então. Eu disse até então.

Falarei um pouco sobre ponto de sequência, mas não abordando o assunto a fundo e sim o problema apresentado pelo Thiago, usando os recursos presente nessa postagem.

Seguindo o código abaixo, qual o resultado esperado a ser impresso?

```
#include <stdlib.h>
#include <stdio.h>

int main()
{
    int x = 1;
    printf("%d, %d", ++x, x++);
    system("pause");
    return 0;
}
```

Pra quem disse "2, 2". A resposta está **EXATA**mente errada.
Isso mesmo, está errada. O resultado é "3, 1".

E porque diabos isso ocorreu? As operações feita em x são indefinidas (como visto aqui) mesmo no nosso ponto de vista sendo lógicas, sendo assim a perca do controle sobre a operação e seu valor final.

Assumindo o valor de x como 1, e o modo de como é feito o empilhamento temos então a seguinte lógica:

x++ o valor de x é retornado e depois incrementado — o valor inicial de x é empilhado (valor 1) e depois incrementado a 2. Por isso o MOV DWORD PTR SS[ESP+8], 1

++x o valor de x é incrementado antes de ser retornado — Como até aqui x tem o valor de 2, ele é incrementado antes de ser empilhado tendo assim o valor de 3. Por isso o MOV DWORD PTR SS:[ESP+4],3

Por isso o valor de "3, 1"