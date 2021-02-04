import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import API from '../services/API';
import '../styles/Portfolio.css';

export default function Profil() {
    const [skills, setSkills] = useState([]);
    const [developper, setDevelopper] = useState({});
    // useEffect(() => {
    //     API.get('/skills/').then((res) => setSkills(res.data));
        
    // }, []);
    useEffect(() => {
        axios.get(`http://localhost:5000/skills`)
            .then((res) => res.data)
            .then((data) => {
                setSkills(data);
            });
    },[]);
    useEffect(() => {
        axios.get(`http://localhost:5000/developpers`)
            .then((res) => res.data)
            .then((data) => {
                setDevelopper(data);
            });
    },[]);

    return (
        <div className='container'>
            <h1>Mon Profil</h1>
            <h3>Développeur Web Junior</h3>
            <section>
                <img src={developper.image_url} alt={developper.nomAdmin} style={{ width: '120px', height: '120px'}}/>
                <p>{developper.presentation}</p>
            </section>
            <section>
                <h2>Compétences</h2>
                <ul>
                    {skills.map(skill =>{
                        return (<li key={skill.idCompetence}>{skill.nomCompetence} <i>{skill.niveau}</i></li>);
                    })}
                </ul>
            </section>
            <section>
                <h2>Intérêts</h2>
            </section>
            <svg className="pulse" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle id="Oval" cx="512" cy="512" r="512"></circle>
                    <circle id="Oval" cx="512" cy="512" r="512"></circle>
                    <circle id="Oval" cx="512" cy="512" r="512"></circle>
            </svg>
        </div>
    );
}