import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../styles/Portfolio.css';

export default function Portfolio() {
    const [clients, setClients] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/clients`)
            .then((res) => res.data)
            .then((data) => {
                setClients(data);
            });
    },[]);
    useEffect(() => {
        axios.get(`http://localhost:5000/projects`)
            .then((res) => res.data)
            .then((data) => {
                setProjects(data);
            });
    },[]);
    return (
        <div className='container'>
            <section>
                <h2>Projets : </h2>
                <div>
                    {projects.map(project =>{
                        return (
                        <div key={project.idProjet}>
                            <h3><a href={project.urlApp}>{project.nomProjet}</a>- {project.nomSociete}</h3>
                            <p>{project.descriptifProjet}</p>
                        </div>);
                    })}
                </div>
            </section>
            <section>
                <h2>Clients :</h2>
                <div>
                    {clients.map(client =>{
                        return (<div key={client.idClient}>
                            <h3><a href={client.urlSociete}>{client.nomSociete}</a></h3>
                            <div>
                                <span>{client.nomContact}</span><br/>
                                <span>{client.mailContact}</span>
                            </div>
                        </div>);
                    })}
                </div>
            </section>
            <svg className="pulse" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle id="Oval" cx="512" cy="512" r="512"></circle>
                    <circle id="Oval" cx="512" cy="512" r="512"></circle>
                    <circle id="Oval" cx="512" cy="512" r="512"></circle>
            </svg>
        </div>
    );
}