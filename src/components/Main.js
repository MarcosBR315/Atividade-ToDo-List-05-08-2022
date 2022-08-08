import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  text-align: center;
margin: 0;
padding: 0;
box-sizing: border-box;
background-color: cyan;
}
`;

const Dov = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px;
  width: fit-content;
  background-color: white;

  button {
    border-radius: 10px;
    background-color: lightblue;
  }
`;

const Funsec = styled.section`
  display: flex;
  padding: 10px;
  justify-content: center;
`;

export default class Main extends React.Component {
  state = {
    tarefa: "",
    lista: []
  };

  handleChange = (e) => {
    this.setState({
      tarefa: e.target.value
    });
  };

  add = (e) => {
    if (this.state.tarefa.length > 0) {
      this.setState({
        lista: this.state.lista.concat({
          tarefa: this.state.tarefa,
          id: Date.now()
        }),
        tarefa: ""
      });
    }
  };

  remover = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => {
        console.log("Removido: ", item.tarefa, " ID: ", item.id);
        return item.id !== id;
      })
    });
  };

  addEnter = (e) => {
    if (this.state.tarefa.length > 0 && e.key === "Enter") {
      this.setState({
        lista: this.state.lista.concat({
          tarefa: this.state.tarefa,
          id: Date.now()
        }),
        tarefa: ""
      });
    }
  };

  render() {
    return (
      <main>
        <GlobalStyle />
        <section className="Funcionalidade_Principal">
        <input
          placeholder="O que farei mais tarde?"
          value={this.state.tarefa}
          onChange={this.handleChange}
          type="Text"
          onKeyPress={this.addEnter}
        />
        <button onClick={this.add}>Adicionar</button>
        </section>
        <Funsec>
        {this.state.lista.map((item) => (
          <Dov key={item.id}>
            <p>{item.tarefa}</p>
            <button onClick={() => this.remover(item.id)}>Remover</button>
          </Dov>
        ))}
        </Funsec>
      </main>
    );
  };
};