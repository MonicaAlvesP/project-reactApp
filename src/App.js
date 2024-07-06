import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // o blind do this é necessário para que o this seja acessível no método handlePClick
    this.handlePClick = this.handlePClick.bind(this);

    this.state = {
      name: "Caio Vinícius",
      years: 10,
      city: 'São Paulo',
    };
  }

  // metodo de classe, que será chamado ao clicar no parágrafo
  handlePClick() {
    // ao clicar no parágrafo, o valor da chave city do objeto state será exibido no console
    // para que o this seja acessivel, é necessário fazer o bind do this no construtor
    const { city } = this.state;
    console.log(city);
    console.log('Clicked on P');
  }

  render() {
    // desestruturação de objeto, para acessar o valor das chaves do objeto state
    const { name, years } = this.state;

    return (
      <div>
        <h1>Olá, tudo certo?</h1>
        <p onClick={this.handlePClick}>Hoje, 06/07... Meu filho {name} está iniciando o curso de Python do Curso em Vídeo.</p>
        <button onClick={() => alert(`Ele tem somente ${years} anos!`)}>Clique aqui e descubra a idade dele</button>
      </div>
    );
  }
}

export default App;
