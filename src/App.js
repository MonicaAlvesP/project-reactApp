import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Caio Vinícius",
      idade: 25,
    }
  }

  render(){
    // Desestruturação de objetos colocamos o nome da variável entre chaves.
    const { name } = this.state;

    return(
      <div>
        <h1>Olá, tudo certo?</h1>
        <p>Hoje, 06/07... Meu filho {name} esta iniciando o curso de Python do Curso em Vídeo.</p>
      </div>
    )
  }
}

export default App