---
language: pt-br
title: IDE para C++
description: Instalando sua IDE para C++
---
Para começar a programar em C++ você precisa ter um conhecimento sobre lógica e algorítimos, mas esse não vai ser o conteúdo desse post. Ensinarei aqui como instalar a IDE Code::Blocks, o compilador TDM-GCC que é uma versão pra Windows e alguns pacotes úteis.

Você vai precisar baixar alguns programas:

* Code::Blocks (sem o minGW)
* MinGW (A instalação é a mesma, só mudou a versão para uma mais nova. Versão 4.6.2)
* PDCurses (Para Linux é usado o ncurses)
* wxWidgets (Libs multi-plataforma, faz dialogs para Windows, Linux e MacOS)
* Boost (Pacote com extenções úteis. Recomendo a versão estável)
* graphics.h (Usado para fazer desenhos)

Baixados esses programas vamos começar a instalação.

Primeiro instalaremos o Code::Blocks. Eu recomendo fazer essas instalações em diretórios sem espaços para evitar possíveis problemas. A instalação do Code::Blocks é simples, consiste basicamente em ir clicando “Next” e “I Agree”. Eu gosto de customizar a instalação removendo o que eu não vou utilizar, se você sabe o que remover fique a vontade, caso contrário pode instalar o pacote completo “Full” sem problemas. A única coisa que eu recomendo é modificar o diretório de instalação, que por padrão vem “C:\Program Files\CodeBlocks”, para “C:\CodeBlocks”. Terminando a instalação você não precisa rodá-lo ainda pois vamos instalar agora o compilador.

A instalação do compilador é básica também e você vai precisar apenar clicar em “Create” antes de ir dando “Next”. Se você é um usuário de sistemas em 64bits você testar o compilador para 64bits, mas como é uma versão experimental ainda eu recomendo a instalação da versão para 32bits. Estamos denovo em outro caminho para instalação, só que agora para o compilador. Tudo que eu vou instalar para o Code::Blocks eu gosto de instalar dentro da pasta dele. Então o diretório padrão de “C:\MinGW” eu modifiquei para “C:\CodeBlocks\MinGW”. A seleção de espelho você pode deixar a padrão do SourceForge mesmo e o tipo de instalação você pode deixar a recomendada. (Ele fará o download de alguns pacotes atualizados e a instalação será iniciada logo após.

Efetuada a instalação do compilador você já pode executar o Code::Blocks para configurar a sua IDE. Essa parte é de fácil instalação. Basta ir em “Settings > Compiler and debugger…” e na aba “Toolchain executables” é só configurar os executáveis que são pedidos.

Para testar e ver se está tudo funcionando você pode usar o código abaixo:

```
#include <cstdio>

int main()
{
	printf("Hello\n");
	return 0;
}
```

Agora que já está tudo certo, vamos instalar o PDCurses (Não é mais utilizado mas para questão de aprendizado eu instalei no meu computador).

A instalação dele é muito simples, basta extrair em alguma pasta a sua escolha. Como eu disse eu gosto de instalar dentro da pasta do Code::Blocks, ficando assim meu diretório de instalação “C:\CodeBlocks\PDCurses”.

Feito a instalação você precisa compilar as libs do PDCurses. Basta usar os códigos abaixo no prompt de comando do Windows:

```
set PDCURSES_SRCDIR=C:\CodeBlocks\PDCurses
path=C:\CodeBlocks\MinGW\bin
cd C:\CodeBlocks\PDCurses\win32
mingw32-make.exe -f mingwin32.mak
```

A primeira linha define a pasta do PDCurses numa variavel usada pelo compilador e deve ser definida a pasta onde está instalado o PDCurses;
A segunda linha define o caminho onde serão executados os próximos comandos e precisa ser a pasta onde encontram-se os binários do compilador;
A terceira linha muda o diretório para onde estão os códigos fontes do PDCurses;
E a quarta linha faz a compilação das libs.

`Não faremos o teste aqui pois terá outro post sobre o uso básico dessa lib.`

Agora iremos instalar a wxWidgets.

O processo de instalação inicial é o mesmo do PDCurses. Basta extrair o wxWidgets em alguma pasta a sua escolha. Eu usei o diretório “C:\CodeBlocks\wxWidgets”.

Agora vamos a compilação das libs do wxWidgets, basta usar os seguintes comandos:

```
path=C:\CodeBlocks\MinGW\bin
cd C:\CodeBlocks\wxWidgets\build\msw
mingw32-make.exe -f makefile.gcc clean
mingw32-make.exe -f makefile.gcc USE_XRC=1 SHARED=1 MONOLITHIC=1 BUILD=release UNICODE=0
mingw32-make.exe -f makefile.gcc USE_XRC=1 SHARED=1 MONOLITHIC=1 BUILD=debug UNICODE=0
```

A primeira e segunda linhas vocês já sabem o que fazem né?;
A terceira linha limpa os diretórios para a criação das libs que serão usadas nos projetos;
A quarta e quinta linhas criam respectivamente as libs para a versão final e debug dos aplicativos. (Esse processo leva um tempo considerável dependendo do seu processador)

`Não vou explicar o que esses parâmetros fazem. Se alguém tiver dúvida, é só comentar pedindo a explicação que eu edito o post. :D`

Por fim vamos instalar o Boost.

O processo inicial continua o mesmo e meu diretório de instalação foi “C:\CodeBlocks\Boost”. Novamente a instalação permanece a mesma, extração e compilação.

```
cd C:\CodeBlocks\Boost\
bootstrap.bat
b2 toolset=gcc
```

A segunda linha executa a pre-configuração do pacote;
E a terceira linha faz a compilação para o GCC, que é o nosso compilador.

Para instalar o graphics.h basta extrair o arquivo baixado acima para a pasta do MinGW.

```
Para usar essa lib você precisa adicionar esses comandos ao linker:
-lbgi
-lgdi32
-lcomdlg32
-luuid
-loleaut32
-lole32
```

E para finalizar iremos configurar as variáveis para ficar mais fácil a inclusão das libs ao compilador sem ter que ficar procurando por elas dentro dos diretórios:

Abra o Code::Blocks e vá em “Settings > Global variables…”. Na tela que se abrirá, você clicará no “New” de baixo, ao lado de “Current variable” e adicionará os seguintes itens “curses, wx, boost e graphics” (esses itens pode ser a escolha de vocês, só precisa lembrar na hora de incluir eles nas opções do compilador).

Feito a adição você irá incluir esses diretórios a cada item:

```
curses
Base: C:\CodeBlocks\PDCurses
Lib: C:\CodeBlocks\PDCurses\win32

wx
Base: C:\CodeBlocks\wxWidgets

boost
Base: C:\CodeBlocks\boost
Lib: C:\CodeBlocks\boost\stage\lib

graphics
Base: C:\CodeBlocks\MinGW\include
Lib: C:\CodeBlocks\MinGW\lib
```

Então quando for usar uma dessas libs no seu projeto, basta ir nas opções dos projetos (Project > Build options…)

Em linker setting você adiciona $(#curses), $(#wx), $(#boost) ou $(#graphics) seguido do nome da lib ($(#curses)\pdcurses.a). E em “Search directories” é só adicionar $(#curses.lib). Com essas variáveis você não precisa ficar toda hora buscando pela pasta das libs.