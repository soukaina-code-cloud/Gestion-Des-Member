import React, { Component } from "react";


export default class Quiz extends Component {

  constructor(props) {
    super(props);

    this.quiz = [
      { img: "Images/maroc.webp", reponse: "Maroc", choix1: "Maroc", choix2: "Algérie" },
      { img: "Images/italya.png", reponse: "italya", choix1: "Algérie", choix2: "italya" },
      { img: "Images/ispania.jfif", reponse: "ispania", choix1: "ispania", choix2: "France" },
      { img: "Images/bakistan.jpg", reponse: "bakistan", choix1: "bakistan", choix2: "Palestine" },
      { img: "Images/usa.jpg", reponse: "usa", choix1: "Soudan", choix2: "usa" },
      { img: "Images/india.jpg", reponse: "india", choix1: "Jordanie", choix2: "india" }
    ];

    this.index = 0;

    this.state = {
      questionDisplayed: this.quiz[this.index],
      score: 0,
      choix: "",
      disabled: false
    };
  }

  verifier = (rep) => {

    if (rep === this.state.questionDisplayed.reponse) {
      this.setState({
        score: this.state.score + 1,
        choix: rep,
        disabled: true
      });
    } else {
      this.setState({
        score: this.state.score - 1,
        choix: rep,
        disabled: true
      });
    }
  }

  couleur = (btn) => {

    if (this.state.choix === "")
      return "";

    if (btn === this.state.questionDisplayed.reponse)
      return "green";

    if (btn === this.state.choix)
      return "red";

    return "";
  }

  next = () => {

    this.index++;

    if (this.index < this.quiz.length) {
      this.setState({
        questionDisplayed: this.quiz[this.index],
        choix: "",
        disabled: false
      });
    } else {
      alert("Quiz terminé");
    }

  }

  render() {

    return (
      <div align="center">

        <h2>Quiz des Drapeaux</h2>

        <img
          src={this.state.questionDisplayed.img}
          width="400"
          height="250"
          alt=""
        />

        <br /><br />

        <button
          disabled={this.state.disabled}
          style={{ backgroundColor: this.couleur(this.state.questionDisplayed.choix1) }}
          onClick={() => this.verifier(this.state.questionDisplayed.choix1)}
        >
          {this.state.questionDisplayed.choix1}
        </button>

        &nbsp;&nbsp;

        <button
          disabled={this.state.disabled}
          style={{ backgroundColor: this.couleur(this.state.questionDisplayed.choix2) }}
          onClick={() => this.verifier(this.state.questionDisplayed.choix2)}
        >
          {this.state.questionDisplayed.choix2}
        </button>

        &nbsp;&nbsp;

        <button onClick={this.next}>
          Next
        </button>

        <h2>Your score is : {this.state.score}</h2>

      </div>
    );
  }
}