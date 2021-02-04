import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import API from '../services/API';

export default function Profil() {
    const [skills, setSkills] = useState([]);
    // useEffect(() => {
    //     API.get('/skills/').then((res) => setSkills(res.data));
        
    // }, []);
    useEffect(() => {
        axios.get(`http://localhost:5000/skills`)
            .then((res) => res.data)
            .then((data) => {
                setSkills(data);
            });
    },[])

    return (
        <>
            <h1>Mon Profil</h1>
            <section>
                <h2>Développeur Web Junior</h2>
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
        </>
    );
}