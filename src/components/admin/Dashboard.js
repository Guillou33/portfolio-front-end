import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Skill from './Skill';
import Client from './Client';
import Project from './Project';
import '../../styles/Admin.css';

// import API from '../services/API';

export default function Dashboard() {

    const { handleSubmit, register } = useForm({
        mode: 'onChange',
      });

    const [skills, setSkills] = useState([]);
    const [clients, setClients] = useState([]);
    const [projects, setProjects] = useState([]);
    const [btnAddSkill, setBtnAddSkill] = useState(true);
    const [btnAddSkillToProject, setBtnAddSkillToProject] = useState(true);
    const [btnAddClient, setBtnAddClient] = useState(true);
    const [btnAddProject, setBtnAddProject] = useState(true);

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

    const submitSkill = async (values) => {
        await axios.post('http://localhost:5000/skills/', values)
            .then(res => {
            setSkills([...skills, res.data]);
          });
        await setBtnAddSkill(true);
    }

    const submitClient = async (values) => {
        await axios.post('http://localhost:5000/clients/', values)
            .then(res => {
            setClients([...clients, res.data]);
          });
        await setBtnAddClient(true);
    }
    const submitProject = async (values) => {
        values.idClient = parseInt(values.idClient);
        await axios.post('http://localhost:5000/projects/', values)
            .then(res => {
            setProjects([...projects, res.data]);
          });
        await setBtnAddProject(true);
    }

    const deleteSkill = async (id) => {
        // console.log(id);
        axios.delete(`http://localhost:5000/skills/${id}`)
            .then((res)=> setSkills(skills.filter(skill => skill.idCompetence !== id)));
    }

    const deleteProject = async (id) => {
        // console.log(id);
        axios.delete(`http://localhost:5000/projects/${id}`)
            .then((res)=> setProjects(projects.filter(project => project.idProjet !== id)));
    }

    const deleteClient = async (id) => {
        // console.log(id);
        axios.delete(`http://localhost:5000/clients/${id}`)
            .then((res)=> setClients(clients.filter(client => client.idClient !== id)));
    }

    return (
        <>
        <section className='sectionAdmin'>
            <div>
            <h1>Compétences</h1>
                {skills.map(skill => {
                    return (
                    <div key={skill.idCompetence}>
                        <Skill skill={skill} /><input type='button' value='X' onClick={() => deleteSkill(skill.idCompetence)} />
                    </div>);
                    }
                )}
                {btnAddSkill ? (<input className='inputBtn' type='button' value='Nouvelle Compétence' onClick={() => setBtnAddSkill(false)}/>) :
                (<form onSubmit={handleSubmit(submitSkill)}>
                    <input placeholder="Compétence" type="text" name="nomCompetence" ref={register} required/>
                    <select ref={register} name="niveau">
                        <option value='Débutant'>Débutant</option>
                        <option value='Novice'>Novice</option>
                        <option value='Intermédiaire'>Intermédiaire</option>
                        <option value='Avancé'>Avancé</option>
                        <option value='Expert'>Expert</option>
                    </select>
                     <input type='submit' value='Enregistrer' />
                     <input type='button' value='X'  onClick={() => setBtnAddSkill(true)}/>
                </form>)}
            </div>
        </section>
        <section className='sectionAdmin'>
        <div>
            <h1>Clients</h1>
                <div>
                    {clients.map(client =>{
                        return (
                        <div key={client.idClient}>
                            <h3>{client.nomSociete}</h3>
                            <Client client={client} /><input type='button' value='X' onClick={() => deleteClient(client.idClient)} />
                        </div>);
                    })}
                </div>
                {btnAddClient ? (<input className='inputBtn' type='button' value='Nouveau Client' onClick={() => setBtnAddClient(false)}/>) :
                (<form onSubmit={handleSubmit(submitClient)}>
                    <input placeholder="Nom de la société" type="text" name="nomSociete" ref={register} required/>
                    <input placeholder="Site de la Société" type="text" name="urlSociete" ref={register} />
                    <input placeholder="Nom Contact" type="text" name="nomContact" ref={register} required/>
                    <input placeholder="Mail Contact" type="text" name="mailContact" ref={register} />
        
                     <input type='submit' value='Enregistrer' />
                     <input type='button' value='X'  onClick={() => setBtnAddClient(true)}/>
                </form>)}
            </div>
            <div>
                <h1>Projets</h1>
                <div>
                    {projects.map(project =>{
                        return (
                        <div key={project.idProjet}>
                            <h3>{project.nomProjet}</h3>
                            <Project project={project} clients={clients} /><input type='button' value='X' onClick={() => deleteProject(project.idProject)} />
                        </div>);
                    })}
                </div>
                {btnAddProject ? (<input className='inputBtn' type='button' value='Nouveau Projet' onClick={() => setBtnAddProject(false)}/>) :
                (<form onSubmit={handleSubmit(submitProject)}>
                    <input placeholder="Nom de l'application" type="text" name="nomProjet" ref={register} required/>
                    <input placeholder="URL de l'application" type="text" name="urlApp" ref={register} />
                    <textarea rows="4" cols="40" placeholder="Descriptif" type="text" name="descriptifProjet" ref={register} required></textarea>
                    <select ref={register} name="idClient">
                        <option value={null}></option>
                        {clients.map(client =>{
                            return (<option key={client.idClient} value={client.idClient}>{client.nomSociete} </option>);
                        })}
                    </select>
        
                     <input type='submit' value='Enregistrer' />
                     <input type='button' value='X'  onClick={() => setBtnAddProject(true)}/>
                </form>)}
            </div>
        </section>
        </>
    );
}