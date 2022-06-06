- **npx: comando encarregado de baixar uma dependência, que iremos usar de forma temporária (depois essa dependência é excluída, não houvendo a necessidade de instalar essa dependência de forma global);** 
- **create-react-app: comando utilizado para criar o projeto;**



- **ReactDOM: utilizado para renderizar/exibir algo na tela;**
- **`.render(parâmetro_1, parâmetro_2)`: método utilizado para renderizar;**
-  **O render recebe dois parâmetros: o primeiro é o que queremos que seja exibido na tela (o conteúdo) e o segundo é o elemento no qual queremos inserir aquele conteúdo;**
- **No arquivo index.html, da pasta public, temos:**
  - **O elemento <noscript>...</noscript>: que exibe uma mensagem, caso o usuário tenha desabilitado a execução do JavaScript do navegador;**
  - **Uma <div id="root"></div>: "local" onde a nossa aplicação será injetada;**



- **Para utilizar o JSX, devemos importar o `React from 'react'`;**



- **Nomes de componentes se iniciam com letra maiúscula;**

- **Sempre devemos fechar um componente:**

  ```react
  <Componente></Componente>
  
  // OU
  
  <Componente />
  ```

- **Passando parâmetros para uma função:**

  ```react
  <ComParametro titulo="Segundo componente" subtitulo="Muito legal!" />
  
  // Função
  export default function ComParametro(props)   {
      return (
          <div>
              <h2>{props.titulo}</h2>
              <h3>{props.subtitulo}</h3>
          </div>
      );
  }
  
  // Propriedades/Parâmetros (props) passadas são somente para leitura (elas não podem ser modificadas, mas podemos, a partir da atribuição, trabalhar com elas);
  ```



- **As componentes  adjacentes ("irmãs") necessitam de uma "tag pai" (do contrário, será retornando um erro):**

  ```react
  <tagPai>
          <Componente_1 />
          <Componente_2 />
      	.
      	.
      	.
      	<Componente_n />
  </tagPai>
  ```

- **Se não quisermos que as componentes, sejam envolvidas por uma "tag pai", podemos fazer:**

  ```react
  <React.Fragment>
          <Componente_1 />
          <Componente_2 />
      	.
      	.
      	.
      	<Componente_n />
  </React.Fragment>
  
  // OU
  
  <
          <Componente_1 />
          <Componente_2 />
      	.
      	.
      	.
      	<Componente_n />
  < />
      
  // Pela última forma, não poderemos adicionar atributos
  ```



- **Destruction em relação a props:**

  ```react
  export default function Nome()	{
      const {identificador_1, identificador_2, ...} = props
      .
      .
      .
  }
  ```



- **Para definir uma classe, não usamos mais a palavra `class` e agora passamos a suar a palavra `className`:**

  ```react
  export default function Nome()	{
      return (
          <div className="classe">
              <div>...</div>
          </div>
      );
  }
  ```



- **Para passar um componente, para dentro do outro (um componente pai, com componente filhos), usamos `props.children`:**

  ```react
  <Componente_1>
      <Componente_2 />
  </Componente_1>
  
  // Componente_1
  export default function Conponente_1(props) {
      return (
          <div
              <div>
                  {props.children}
              </div>
          </div>
      );
  }
  ```



- **As propriedades do componente pai, não são passadas automaticamente para os componentes filhos (para isso usamos o props);**
- **Operador spreading: {...props};**



- **Passando propriedades, para os filhos (mais de um) de um componente:**

  ```react
  <ComponentePai propriedadePai="valor">
     <ComponenteFilho propriedadeFilho="valor" />
     <ComponenteFilho propriedadeFilho="valor" />
     <ComponenteFilho propriedadeFilho="valor" /> 
  </ComponentePai>
  
  // ComponentePai
  import React, {cloneElement} from 'react';
  
  export default function ComponentePai(props)  {
      return (
          <div>
              {
                  // cloneElement(props.children, props)
                  props.children.map((filho, i) => {
                      return cloneElement(filho, {...props, key: i});
                  })
              }
          </div>
      );
  }
  
  /*
  	O cloneElement clona e retorna um novo elemento. Essa função acaba sendo usada quando desejamos, que um componente pai, adicione/modifique as props, dos seus filhos (quando queremos passar props, mas só temos props.children);
  */
  ```



- **Para trabalhar com repetição, temos uma lista de elementos que queremos que apareça na tela, usamos a função `map`;**
- **O atributo `key` (chave), é importante pois a partir dela, o React será capaz de detectar as eventuais mudanças que podem vir a acontecer, de maneira mais rápida e eficiente (chaves devem ser únicas);**



- **Renderização condicional: quando queremos que algum conteúdo apareça na tela, mediante o atendimento de uma condição. Para isso usamos o operador ternário, semelhante a um `if` e `else`:**

  ```react
  {expressão ? "Se verdadeiro faça isso" : "Se não, faça aquilo"}
  ```

  

- **Comunicação direta: quando passamos os dados de um componente pai, para um componente filho (daí passamos esses dados por meio das props):**

  ```react
  // Pai
  import React from "react";
  import Filho from './Filho'; // Pegamos a referência do filho
  
  export default function Pai(props)  {
      return (
          <div>
              <Filho props1="..." props2={...} />
          </div>
      );
  }
  
  // Filho
  export default function Filho(props)  {
      return (
          <div>
              <span>{props.props1} - </span>
              <span>{props.props2} - </span>
          </div>
      );
  }
  ```



- **Comunicação indireta: quando queremos que o filho, passa informações para o pai (não da para ser feito através de props - iremos fazer isso a partir de estado):**

  ```react
  // Pai
  import React, { useState } from "react";
  import Filho from './Filho'; // Pegamos a referência do filho
  
  export default function IndiretaPai(props)  {
      const [variavel, setVariavel] = useState("");
  
      // Criamos uma função e a passamos para o filho, via props
      // Quando o filho chama essa função, os dados poderão ser passados para o pai
      function fornecerInformacoes(dado) {
          setVariavel(dado);
      }
      
      return (
          <div>
             <div>
                 <div>Dado: {variavel}</div>
             </div>
  
              <IndiretaFilho clicar={fornecerInformacoes}></IndiretaFilho>
          </div>
      );
  }
  
  // Filho
  export default function Filho(props)  {
      return (
          <div>
              <button onClick={() => {props.clicar(dado)}}>
                  Fornecer Informações
              </button>
          </div>
      );
  }
  ```

  **O estado se faz necessário, para refletir os dados passados pelo filho, no pai:**

  ```react
  const [variavel, setVariavel] = useState("");
  
  /*
   *	O useState(), retorna um array de duas posições. A primeira é uma variável
   * e a segunda é uma função, que será usada para alterar o valor da variável 
   * (dentro do useState temos um valor inicial da variável).
   * 
   * - A função começa pela palavra set, seguida do nome da variáveç.
  */
  ```



- **Componentes controlados**
  - **Não conseguimos mudar o estado do componente a partir da interface, precisamos primeiramente, mudar o estado, para daí, com o estado mudado, possamos refletir a mudança na interface;**
- **Componente não controlado: componente que não está associado a nenhum estado;**
- **Evento`onChange()`: possibilita ouvir a mudança de valor de uma entrada;**
- **Acessadno _evento.target.value_, acessamos o valor da entrada;**
- **A função passada como parâmetro, para o evento `onChange`, ela registra o valor atual da entrada, e com esse valor, alteramos o estado do componente;**





