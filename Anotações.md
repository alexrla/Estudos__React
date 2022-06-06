# React JS



### O que é React?

- **React é uma biblioteca, criada pelo Facebook, para criar interfaces de usuário;**
- **O React é baseado em componentes;**



### Qual problema ele resolve?

- **Faz mais que o JS puro, consegue fazer sozinho;**
- **Manipula o DOM;**
- **Utilizada para construção de projetos _SPA's (com essa tecnologia, temos apenas uma página principal e todas as outras serão escritas e modificadas pelo JavaScript... De acordo com essa abordagem, o Back-end, ao invés de retornar o próprio HTML formatado, retorna os dados no formato JSON - que são as famosas API's e, dessa forma, o Back-end fica totalmente separado do Front-end);**



### Componentes e Props

- **Props funcionam com atributos/propriedades, que podemos compartilhar entre componentes;**
- **StateLess Component (componente sem estado):**
  - **Componente sem ciclo de vida, sem estado;**
  - **Ele só exibe algo;**



### Class Component (componente de classe)

- **Nele podemos ter: ciclo de vida, estado e funções;**

  ```react
  import React, { Component } from 'react';
  
  class NomeDoComponente extends Component	{
      render()	{
          return (
              // Código ...
              <h1>{this.props.algumaPropriedade}</h1>
          );
      }
  } 
  
  export default function AlgumaFuncao()   {
      return (
  		<div>
             <NomeDoComponente algumaPropriedade=valor/>
          </div>
      );
  }
  ```

  // OU

  ```react
  import React, { Component } from 'react';
  
  class NomeDoComponente extends Component	{
      render()	{
          return (
              // Código ...
              <h1>{this.props.algumaPropriedade}</h1>
          );
      }
  } 
  
  export default NomeDoComponente;
  ```

- **Método que vai renderizar na tela: _render()_;**
- **O nosso componente tem "acesso automático", as props;**
- **Componentes com estados possuem atributos que podem ter os seus valores alterados e, cada alteração causará um impacto diretamente na renderização do componente;**



### Estados (states)

- **Enquanto as "props são estáticas"0 (passamos um valor e esse valor não pode ser alterado de forma dinâmica), nós podemos altera valores, através dos estados (isso, de forma dinâmica);**

  ```react
  import React, { Component } from 'react';
  
  class NomeDoComponente extends Component	{
      // Recebe as props por parâmetro
      constructor(props)	{
          super(props); // Acessar todas as informações
          
          // Colocamos todas as states relacionada ao componente
          this.state = {
              propriedade: valor
          };
          
          this.minhaFunction = this.minhaFunction.bind(this);
      }
      
      minhaFunction()	{
          let state = this.state; // Passando todos os states para uma variável
          state.propriedade = ação;
          // Alterando o estado
          this.setState(state);
      }
      
      render()	{
          return (
              // Código ...
              {this.state.propriedade}
              <button onClick={this.minhaFunction}>Acionar</button>
          );
      }
  } 
  
  export default NomeDoComponente;
  ```

- **Para conseguir acessar a função e usá-la, é necessário "darmos um bind na função";**



### Ciclo de vida dos componentes

- **Quando chamamos um componente de classe, em algum lugar, a primeira coisa a ser carregada é o construtor (um ciclo de vida do componente);**
- **Outro ciclo de vida: quando o componente é montado e algo é exibido na tela;**
- **_componentDidMount()_: rodado uma única vez, apenas quando o componente é montado;**
- **_componentDidUpdate()_: toda vez que um componente for atualizado, podemos fazer algo (método chamado após a atualização);**
- **_shouldComponentUpdate()_: retorna `true` ou `false`, se o componente deve, ou não, atualizar;**
- **_componentWillUpdate()_: executado somente quando o shouldComponentUpdate() devolve `true`;**
- **_componentWillMount(): executado quando o componente está prestes a ser montado pelo DOM da página (após esse método ser executado, o componente cria um nó no navegador... todas as coisas que desejamos antes do componente ser montado, devem ser definias nesse método);**
- **Principais ciclos de vida (utilizados): componentDidMount() e componentDidUpdate();**
- **Nos ciclos de vida de um componente, temos:**
  - **Inicialização: o componente se prepara para sua inicialização (configura os estados iniciais e props padrões, se houverem);**
  - **Montagem: após se preparar, necessidades básicas, estado e props, o componente está pronto para ser montado no DOM do navegador;**
  - **Atualização: essa fase se inicia quando o componente já nasceu no navegador e cresce, recebendo atualizações (o componente pode ser atualizados de duas formas: através do envio de novas props, ou atraǘes da atualização do seu estado);**
  - **Desmontagem: o componente não é mais necessário e acaba sendo desmontado pelo DOM (nesta fase, é chamado o método _componentWillUnmount()_);**



### Formulário

- **_onChange_: utilizado para capturar as entradas nos inputs;**
- **`event.target.value`: **
  - **target: nosso alvo, o input em que estamos mirando;**
  - **value: o valor da entrada;**

- 



### OBS.:

- **Componente deve iniciar sempre com letra maiúscula;**
- **No return, devemos ter um único "elemento pai" (uma única tag pai);**