# DiceRoller

O Projeto "DiceRoller" surgiu da necessidade de jogadores de RPG de mesa que usam sistemas complexos e que exigem constantes cálculos que atrasam o desenvolver da campanha. Este é também meu primeiro projeto a ser finalizado e publicado na web.
  
## Licença

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Arhck/DiceRoller/blob/main/LICENSE)

# Funcionalidades

A página do "DiceRoller" permite que você role dados de diversos tipos (desde 4 lados até o de 100 lados) e ainda adicione modificadores às suas rolagens, permitindo que você foque na aventura em vez da matemática da sua campanha. Além disso, ele permite que você salve as rolagens usadas frequentemente e as use de forma rápida e fácil.  
A função de salvar, porém, está limitada a curto prazo, visto que o "DiceRoller" não faz uso de nenhum banco de dados para guardar efetivamente essas informações. Por se tratar de um projeto simples, ele terá novas versões em breve que contarão com mais funcionalidades, incluindo um perfil de usuário para armazenar as rolagens de forma definitiva.

# Como Usar

Para usar o DiceRoller, basta seguir o passo a passo a seguir:  
  
1. Clique no link a seguir para acessar a página: https://arhckdiceroller.000webhostapp.com/

![Captura da tela inicial](https://user-images.githubusercontent.com/98413991/225634237-07835156-7555-4825-a96a-f8b4bdfea4eb.png)

2. Na página principal, você encontra três campos de inserção de dados, sendo eles: Número de Dados, Lados do Dado e Modificador.  
2.1. O campo "Número de Dados" é onde você define quantos dados precisará rolar. O programa não aceita valor nulo, negativo ou zero. Exemplo: 2 dados.  
2.2. O campo "Lados do Dado" é onde você define o tipo de dado a ser rolado. As opções estão preestabelecidas e incluem os principais tipos de dados usados em RPGs. Exemplo: Dado de 10 lados (d10).  
2.3. O campo "Modificador" é onde você define um valor que irá ser somado ou subtraído do resultado final. Por conta disso, aceita valores positivos, negativos e nulos. Exemplo: Modificador +4 (um bônus de ataque).  
  
![Inserimos aqui os valores dos exemplos acima](https://user-images.githubusercontent.com/98413991/225635107-1fc03f4f-c155-4ada-a9d0-0888c3cee5c6.png)
  
3. Ao inserir os dados da sua rolagem, clique em "Rolar" para ver o resultado. Ele será exibido em três linhas de conteúdo: Resultado dos Dados, Soma dos Dados, Resultado Final.  
3.1. Resultado dos Dados vai exibir o resultado individual de cada dado.  
3.2. Soma dos Dados vai exibir a soma dos resultados individuais exibidos no campo "Resultado dos Dados".  
3.3. Resultado Final vai exibir a soma do valor de "Soma dos Dados" com o valor do Modificador.

![Vemos aqui como o resultado é exibido.](https://user-images.githubusercontent.com/98413991/225636048-77830177-49da-4572-8736-4e959434a810.png)
  
4. Você poderá clicar no ícone "x" no canto superior direito da aba de resultados para fechá-la, clicar novamente em "Rolar" para obter uma nova rolagem de dados, ou salvar as especificações da rolagem de dados usada clicando em "Salvar". Caso essa última opção seja a escolhida, uma nova aba será exibida pedindo que você insira um nome para a rolagem dados que deseja salvar. Note que o programa não aceitará que você salve uma rolagem de dados sem nomeá-la.
  
  ![Clicando em "Salvar", esta nova aba se abre. Para salvar a rolagem, basta clicar no novo botão "Salvar"](https://user-images.githubusercontent.com/98413991/225637512-f01c7cba-bdfe-4b6b-a85d-89dad4a4d971.png)
  
5. Agora temos uma rolagem de dados salva. Você pode clicar em "Rolar" para gerar um novo resultado usando as especificações desta rolagem ou pode deletá-la.
  
  ![Ao clicar em "Rolar", uma nova aba de resultados será exibida com os resultados da nova rolagem.](https://user-images.githubusercontent.com/98413991/225638181-58e7038f-d72d-4cc9-a913-4bb47f767424.png)
  
6. Agora que aprendeu a rolar os dados, salvar as rolagens e apagar as que não usará mais, você está pronto para usar o "DiceRoller" para impulsionar suas partidas de RPG.

# Tecnologias
### Front-end
HTML, CSS, JavaScript

### Implementação
000webhost da Hostinger

# Sobre o Autor

João Victor Machado Motta

[![Linkedin](https://user-images.githubusercontent.com/98413991/225648618-b8d8c70d-28d4-43d3-b30d-8e27abaa1a97.png)](https://www.linkedin.com/in/jo%C3%A3o-victor-machado-motta-1aa292229/)
