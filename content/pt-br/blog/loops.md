---
language: pt-br
title: Os Loops
description: O que são os Loops e pra que servem?
---
Agora que eu já falei o que fazem as condições, vamos entender um pouco sobre o que são esses tais “Loops”.

Os loops não nada mais do que comandos repetitivos resumidos. Primeiro vamos ver os loops existentes e depois farei alguns exemplos. Não se preocupem, eles são bem simples.

O loop FOR

Sintaxe: for (declarações de variáveis; condição; ocorrência até a condição) { comandos; }
NOTA: Todos os parâmetros são opcionais.
Exemplo: for (int i = 0; i < 10; i++) { comandos; }

Isso fará com que execute o comando de i igual a 0 até 9.

O loop WHILE

Enquanto a condição for verdadeira o bloco de códigos dele é executado.

Sintaxe: while (condição) { comandos; }
Exemplo: int i = 0; while (i < 10) { comandos; i++; }

Nesse caso você precisará declarar a variável antes e não pode esquecer de incrementar a variável dentro do while.

```
Mas por que usar while se o for não tem perigo de esquecer o incremento da variável? É que o while é mais usado quando você quer usar condições dentro do loop, mas nada te impede de usar qualquer uma das duas funções.
```

O loop DO WHILE

Sintaxe: do { comandos; } while (condição);
Exemplo: int i = 0; do { comandos; i++; } while (i < 10);

```
E qual a diferença dos dois? Você deve ter notado que em um caso o while fica no começo e no outro ele aparece no final. A diferença é que no DO WHILE o loop será executado pelo menos uma vez enquanto que no WHILE ele primeiro verifica a condição antes de executar o bloco de códigos.
```

Agora vejamos alguns exemplos:

Se você quisesse escrever uma função que escreve na tela os números de 1 a 100. Imagina digitar 100 comandos printf()? Seria um código e um trabalho imensos né? Com um loop FOR isso se torna bem simples. Vejamos:

```
#include <cstdio>

int main()
{
    printf("Usando for\n");
    for (int i = 1; i <= 100; i++)
    {
        printf("%d\n", i);
    }
    // for sem paramametros
    printf("Usando for sem parametros");
    int t = 1;
    for (;;)
    {
        if (t > 100)
        {
            break;
        }
        printf("%d\n", t);
        t++;
    }
    // o mesmo com while
    int y = 1;
    printf("Usando while\n");
    while(y <= 100)
    {
        printf("%d\n", y);
        y++;
    }
    // usando do while
    printf("Usando do ... while\n");
    int x = 1;
    do
    {
        printf("%d\n", x);
        x++;
    } while(x <= 100);
}
```

Dentro dos loops podem ir dois comandos: continue e o break.

O break faz com que o loop seja finalizado instantaneamente.
O continue faz com que o loop passe para sua próxima iteração avaliando a condição caso ela exista.

Um exemplo do continue pode ser usado para escrever os números pares de 1 a 100.

```
#include <cstdio>

int main()
{
	for (int i = 1; i <= 100; i++)
	{
		if (i % 2)
			continue;
		printf("%d\n", i);
	}
}
```

Os loops tem várias útilidades, basta você ver quando será preciso usar cada um deles.

Até a próxima pessoal! 😀