import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personne: {
        fullName: 'Anita sk',
        bio: 'Développeuse passionné par React et les technologies web modernes.',
        imgSrc: 'https://www.shutterstock.com/shutterstock/photos/264052973/display_1500/stock-vector-anita-girls-name-decorative-lettering-type-design-264052973.jpg',
        profession: 'Développeur Web',
      },
      montre: false,
      timer: 0
    };
    this.handleShowPersonne = this.handleShowPersonne.bind(this);
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  handleShowPersonne() {
    this.setState((prevState) => ({
      montre: !prevState.montre
    }));
  }

  render() {
    const { personne, montre, timer } = this.state;
    return (
      <div className="App">
        <button onClick={this.handleShowPersonne}>
          {montre ? 'Masquer' : 'Afficher'} le profil
        </button>

        {montre && (
          <div className="profile">
            <h1>{personne.fullName}</h1>
            <p>{personne.bio}</p>
            <img src={personne.imgSrc} style={{width:"400px",heigth:"500px"}}alt="Person" />
            <h3>{personne.profession}</h3>
          </div>
        )}

        <p>Temps écoulé depuis le montage du composant : {timer} secondes</p>
      </div>
    );
  }
}

export default App;

