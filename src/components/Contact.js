import React, {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Contact() {
    const [developper, setDevelopper] = useState({});
    const [commentaries, setCommentaries] = useState([]);
    const { register, handleSubmit } = useForm();

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

    const setCommentary = async (values) => {
        await axios.post('http://localhost:5000/commentaries/', values)
            .then(res => {
            setCommentaries([...commentaries, res.data]);
          });
    }

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
                <form onSubmit={handleSubmit(setCommentary)}>
                    <label>Votre Nom :</label><input type='text' ref={register} name="auteurCommentaire" />
                    <label>Votre Commentaire :</label><textarea ref={register} name="texteCommentaire" cols="40" rows="4"></textarea>
                    <input type="submit" value="Commenter" />
                </form>
                <div>
                {commentaries.map(comm => {
                    return (<div key={comm.idCommentaire}>
                        <span>{comm.auteurCommentaire}</span><p>{comm.texteCommentaire}</p>
                        </div>
                    );
                })}
                </div>
            </div>
            <svg className="pulse" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle id="Oval" cx="512" cy="512" r="512"></circle>
                    <circle id="Oval" cx="512" cy="512" r="512"></circle>
                    <circle id="Oval" cx="512" cy="512" r="512"></circle>
            </svg>
        </div>
    );
}