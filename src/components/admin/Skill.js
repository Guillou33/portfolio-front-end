import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../../styles/Admin.css';

export default function Skill(props) {

    const [skill, setSkill] = useState(props.skill);

    const skillsOptions = ['Débutant', 'Novice', 'Intermédiaire', 'Avancé', 'Expert'];

    useEffect(() => {
        axios.get(`http://localhost:5000/skills/${skill.idCompetence}`)
            .then((res) => res.data)
            .then((data) => {
                setSkill(data);
            });
    },[]);

    const updateSkill = async (value, id) => {
        await axios.put(`http://localhost:5000/skills/${id}`, value)
            .then(res => {
                setSkill(res.data);
            });
    }

    return (
    <>
        <input type="text" value={skill.nomCompetence} onChange={(e) => {
            updateSkill({"nomCompetence": e.target.value}, skill.idCompetence);
        }} required />                            
        <select defaultValue={skill.niveau} onChange={(e) => updateSkill({"niveau": e.target.value}, skill.idCompetence)}>
            {skillsOptions.map(option => {
                return (<option key={option} value={option}>{option}</option>)
            })}
        </select>
    </>
    );
}