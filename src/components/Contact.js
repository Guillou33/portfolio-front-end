import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Contact() {
    const [developper, setDevelopper] = useState({});
    const [commentaries, setCommentaries] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/developpers`)
            .then((res) => res.data)
            .then((data) => {
                setDevelopper(data);
            });
    },[]);
    useEffect(() => {
        axios.get(`http://localhost:5000/commentaries`)
            .then((res) => res.data)
            .then((data) => {
                setCommentaries(data);
            });
    },[]);
    return (
        <div className='container'>
            <div>
                <h2>Contacts</h2>
                <label>Adresse mail : </label><span>{developper.mail}</span>
                <label>Téléphone : </label><span>{developper.tel}</span>
                <label>Compte Github : </label><span><a href={`https://github.com/${developper.compteGithub}`}>{developper.compteGithub}</a></span>
                <label>Compte LinkedIn : </label><span><a href={`https://www.linkedin.com/in/${developper.compteLinkedIn}`}>Gilles Autier</a></span>
            </div>            
            <div>
                <h2>Commentaires</h2>
            </div>
            <svg className="pulse" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle id="Oval" cx="512" cy="512" r="512"></circle>
                    <circle id="Oval" cx="512" cy="512" r="512"></circle>
                    <circle id="Oval" cx="512" cy="512" r="512"></circle>
            </svg>
        </div>
    );
}