import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
        <>
            <section>
                <h2>Projets : </h2>
                <ul>
                    {projects.map(project =>{
                        return (<li key={project.idProjet}>{project.nomProjet}</li>);
                    })}
                </ul>
            </section>
            <section>
                <h2>Clients :</h2>
                <ul>
                    {clients.map(client =>{
                        return (<li key={client.idClient}><a href={client.urlSociete}>{client.nomSociete}</a></li>);
                    })}
                </ul>
            </section>
        </>
    );
}