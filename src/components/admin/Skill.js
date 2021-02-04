import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../../styles/Admin.css';

export default function Skill(props) {

    console.log(props.props);

    const [skill, setSkill] = useState({});

    const skillsOptions = ['Débutant', 'Novice', 'Intermédiaire', 'Avancé', 'Expert'];

    useEffect(() => {
        axios.get(`http://localhost:5000/skills/${props.props}`)
            .then((res) => res.data)
            .then((data) => {
                console.log(data);
                setSkill(data);
            });
    },[]);

    const updateSkill = async (value, id) => {
        console.log(value, id);
        await axios.put(`http://localhost:5000/skills/${id}`, value)
            .then(res => {
                setSkill(res.data);
            });
    }

    return (
    <>
        <input type="text" value={skill.nomCompetence} name="nomCompetence" onChange={(e) => {
            updateSkill({"nomCompetence": e.target.value}, skill.idCompetence);
        }} required />                            
        <select defaultValue={skill.niveau} onChange={(e) => updateSkill({"niveau": e.target.value}, skill.idCompetence)} name="niveau">
            {skillsOptions.map(option => {
                return (<option key={option} value={option}>{option}</option>)
            })}
        </select>
    </>
    );
}