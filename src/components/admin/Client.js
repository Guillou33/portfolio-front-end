import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../../styles/Admin.css';

export default function Client(props) {

    const [client, setClient] = useState(props.client);

    useEffect(() => {
        axios.get(`http://localhost:5000/clients/${client.idClient}`)
            .then((res) => res.data)
            .then((data) => {
                setClient(data);
            });
    },[]);

    const updateClient = async (value, id) => {
        await axios.put(`http://localhost:5000/clients/${id}`, value)
            .then(res => {
                setClient(res.data);
            });
    }

    return (
    <>
        <div>
            <label>Société : </label><input type="text" value={client.nomSociete} onChange={(e) => {
                updateClient({"nomSociete": e.target.value}, client.idClient);
            }} required /> 
        </div>
        <div>
            <label>Lien : </label><input type="text" value={client.urlSociete} onChange={(e) => {
                updateClient({"urlSociete": e.target.value}, client.idClient);
            }} required /> 
        </div>
        <div>
            <label>Contact : </label><input type="text" value={client.nomContact} onChange={(e) => {
                updateClient({"nomContact": e.target.value}, client.idClient);
            }} required /> 
        </div>
        <div>
            <label>Mail : </label><input type="text" value={client.mailContact} onChange={(e) => {
                updateClient({"mailContact": e.target.value}, client.idClient);
            }} required /> 
        </div>                                
    </>
    );
}