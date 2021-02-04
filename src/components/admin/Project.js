import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../../styles/Admin.css';

export default function Project(props) {

    const [project, setProject] = useState(props.project);

    useEffect(() => {
        axios.get(`http://localhost:5000/projects/${project.idProjet}`)
            .then((res) => res.data)
            .then((data) => {
                setProject(data);
            });
    },[]);

    const updateProject = async (value, id) => {
        await axios.put(`http://localhost:5000/projects/${id}`, value)
            .then(res => {
                setProject(res.data);
            });
    }

    const updateClientProject = async (value, id) => {
        await axios.put(`http://localhost:5000/projects/client/${id}`, value)
            .then(res => {
                setProject(res.data);
            });
    }

    return (
    <>
        <div>
            <label>Projet : </label>
            <input type="text" value={project.nomProjet} onChange={(e) => {
                updateProject({"nomProjet": e.target.value}, project.idProjet);
            }} required /> 
        </div>
        <div>
            <label>URL : </label>
            <input type="text" value={project.urlApp} onChange={(e) => {
                updateProject({"urlApp": e.target.value}, project.idProjet);
            }} required /> 
        </div>
        <div>
            <label>Descriptif : </label>
            <textarea rows="4" cols="40" type="text" value={project.descriptifProjet} onChange={(e) => {
                updateProject({"descriptifProjet": e.target.value}, project.idProjet);
            }} required></textarea>
        </div>
        <div>
            <label>Société : </label>
            <select defaultValue={project.nomSociete} onChange={(e) => updateClientProject({"nomSociete": e.target.value}, project.idProjet)}>
                <option value={null}></option>
                {props.clients.map(client => {
                    return (<option key={client.idClient} value={client.nomSociete}>{client.nomSociete}</option>)
                })}
            </select>
        </div>                           
        
    </>
    );
}