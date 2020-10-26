

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM, { } from 'react-dom';
import './index.css';

//initialisation des couleurs pour le rand
const colors = ['red', 'grey', 'black', 'white'];

class Cartedeprofil extends React.Component {
    //contructeur de la class avec initialisation du state
    constructor(props) {
        super(props);
        this.state = {
            color: "white"
        };
    }
    // generation couleur rand parmis celles proposées plus haut
    getNextColor() {
        const nextColor = colors.filter(color => color !== this.state.color);
        const randomColorIndex = Math.floor(Math.random() * nextColor.length);
        return nextColor[randomColorIndex];
    }
    //recupération de l'information comme quoi on souhaite changer la couleur
    handleClick() {
        this.setState(({ color }) => ({
            color: this.getNextColor()
        }));
    }
    //affichage du profil avec image/nom/date + bouton changer couleur
    render() {
        return (
            <div class="case" style={{ backgroundColor: this.state.color }}>
                <img class="image" alt="utilisateur" src={process.env.PUBLIC_URL + '/' + this.props.value.photoProfil} />
                <h2>{this.props.value.prenom} {this.props.value.nom}</h2>
                <p>Date de naissance: {this.props.value.naissance}</p>
                <button type="button" onClick={() => this.handleClick()} class="btn btn-secondary">Change style</button>
            </div>


        );
    }
}

class Publi extends React.Component {
    //contructeur de la class avec initialisation du state et dun tab info vide
    constructor(props) {
        super(props);
        this.state = {
            info: [],
        };
    }
    //on crée un tab update pour stocker toutes les données
    up() {
        var update = [];

        for (let i = 0; i < this.props.value.length; i++) {
            update.push(<p>{this.props.value[i].commentaire} </p>)
            update.push(<button type="button" onClick={() => this.handleClick(i)} class="btn btn-secondary">👍 C'est super !</button>)
            update.push(<p>{this.props.value[i].like}</p>)
        }
        this.setState({ //info devient update
            info: update,
        });
    }
    //appellé pour incrementer le nombre de likes si on clic sur le bouton au dessus
    handleClick(i) {
        this.props.value[i].like++;
        this.up();
    }

    render() {

        this.state.info = []; //ce tab est rempli par nos données
        for (let i = 0; i < this.props.value.length; i++) {
            this.state.info.push(<p>{this.props.value[i].commentaire} </p>)
            this.state.info.push(<button type="button" onClick={() => this.handleClick(i)} class="btn btn-secondary">👍 C'est super !</button>)
            this.state.info.push(<p>{this.props.value[i].like}</p>)
        }
        return ( //on affiche tous le tableau final         
            <div class="affich">
                <h2>Publications:</h2>
                {this.state.info}
            </div>



        );
    }
}

class Nav extends React.Component {

    //initialisation des profils
    constructor(props) {
        super(props);
        this.state = {
            profils:
                [
                    {
                        prenom: "bim",
                        nom: "Colas",
                        naissance: "02/02/1998",
                        photoProfil: "bim.jpg",
                        actu: [{ commentaire: "Je suis Bim", like: 0 }, { commentaire: "Je suis imaginaire", like: 0 }]
                    },
                    {
                        prenom: "Bam",
                        nom: "Adebayo",
                        naissance: "18/07/1997",
                        photoProfil: "bam.jpg",
                        actu: [{ commentaire: "Je suis Bam", like: 0 }, { commentaire: "Pas de bague cette année :(", like: 0 }]
                    },
                    {
                        prenom: "Boom",
                        nom: "BOOM",
                        naissance: "30/06/1978",
                        photoProfil: "boom.jpg",
                        actu: [{ commentaire: "Je suis Boom", like: 0 },{ commentaire: "BOOOOOOOOOOOOOOOOOM !!", like: 0 }]
                    }
                ],
            numProfil: 1, //initialise au 2ème profil (milieu)
        };
    }



    showProfile() {
        const info = [];
        for (let i = 0; i < this.state.profils.length; i++) {
            info.push(<button type="button" onClick={() => this.handleClick(i)} class="btn btn-danger col">{this.state.profils[i].prenom}</button>)
        }
        return info;
    }


    handleClick(i) {
        this.setState({
            numProfil: i,
        });
    }
    //affiche la page
    render() {
        return (
            <div class="container">
                <h1 class="titre">Mon navigateur</h1>
                <div class="row">
                    {this.showProfile()}
                </div>

                <Cartedeprofil value={this.state.profils[this.state.numProfil]} />
                <Publi value={this.state.profils[this.state.numProfil].actu} />

            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Nav />,
    document.getElementById('root')
);