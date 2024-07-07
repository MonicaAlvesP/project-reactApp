import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // podemos instanciar a classe sem o construtor, mas é uma boa prática utilizá-lo
  //chama-se public class fields
  // e com isso não precisamos usar o bind
  // constructor(props) {
  //   super(props);
  //   // Vinculando 'this' ao método handlePClick para torná-lo acessível
  //   this.handlePClick = this.handlePClick.bind(this);
  // }
  //   this.state = {
  //     name: "Caio Vinícius",
  //     years: 10,
  //     city: 'São Paulo',
  //     // Alterando o valor da chave 'fruit' para 'Morango' quando o botão for clicado
  //     fruit: 'Banana',
  //     counter: 0
  //   };

    state = {
      name: "Caio Vinícius",
      years: 10,
      city: 'São Paulo',
      // Alterando o valor da chave 'fruit' para 'Morango' quando o botão for clicado
      fruit: 'Banana',
      counter: 0
    };

  // Método de classe que será chamado quando o parágrafo for clicado
  handlePClick = () => {
    // Quando o parágrafo for clicado, o valor da chave 'city' no objeto de estado será registrado no console
    // Para acessar 'this', precisamos vinculá-lo no construtor
    const { city } = this.state;
    console.log(city);
    console.log('Clicado no P');
    // Alterando o valor da chave 'fruit' no objeto de estado
    this.setState({ fruit: 'Morango' });
  }

  handleAClick = (event) => {
    // Prevenindo o comportamento padrão do evento, que é recarregar a página
    event.preventDefault();
    // Chamando o método setState para alterar o valor do estado 'counter'
    const { counter } = this.state;
    // Como setState é assíncrono, para acessar o valor atualizado do estado, precisamos passar uma função de retorno de chamada
    this.setState({ counter: counter + 1 });
  }

  render() {
    // Desestruturando o objeto de estado para acessar os valores de suas chaves
    const { name, years, fruit, counter } = this.state;

    return (
      <div>
        <h1>Olá, tudo certo?</h1>
        <p onClick={this.handlePClick}>Hoje, 06/07... Meu filho {name} está iniciando o curso de Python do Curso em Vídeo.</p>
        <p onClick={this.handleAClick}>{counter}</p>
        <p>sua fruta favorita é {fruit}</p> {/* Exibindo o valor da chave 'fruit' no objeto de estado */}
        <a onClick={this.handleAClick} href='https://www.google.com/'>Aqui é um link</a>
        <button onClick={() => alert(`Ele tem somente ${years} anos!`)}>Clique aqui e descubra a idade dele</button>
      </div>
    );
  }
}

export default App;
