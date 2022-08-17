// Core
import React from 'react';
import { Component} from "react";

// Components
import Logo from "../components/Logo";
import Name from "../components/Name";
import Email from "../components/Email";
import Skills from "../components/Skills";
import Profession from "../components/Profession";
import Form from "../components/Form";

// Style
import logoUrl from '../image/logo.png'
import '../style.css'

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: []
        }
    }

    addSkill ({id, skillName}) {
        const {skills} = this.state
        this.setState({
            skills: [...skills, {id, skillName}]
        })
    }

    render() {
        const { skills } = this.state
        return (
            <div className="container">
                <Form onAdd={this.addSkill.bind(this)}/>
                <div className='card__container'>
                    <div className="logo__block">
                        <Logo url={logoUrl} text="logo"/>
                    </div>
                    <div className="data__block">
                        <Name name="Anton" surname="Moskalenko"/>
                        <Profession profession="Front-End Developer"/>
                        <Email email="example_email@gmail.com"/>
                        <div className="skills__wrapper">
                            {skills.map(item => <Skills key={item.id} skillName={item.skillName}/>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wrapper
