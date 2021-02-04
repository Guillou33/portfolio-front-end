import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../../styles/Admin.css';

export default function Login() {
    const { register, handleSubmit } = useForm();
    let history = useHistory();

    const onSubmit = async (data) => {
        console.log('sending credentials', data);
          await axios.post('http://localhost:5000/developpers/auth', data)
          .then((res) => {
            if(res.data === 'OK'){
                history.push('/admin');
            }
          })
          .catch((err) => {
            console.error(err);
            });
      };

    return (
        <form className='formLogin' onSubmit={handleSubmit(onSubmit)}>
            <input ref={register} className='inputText' type='text' name='loginAdmin' placeholder='Id Admin...' />
            <input ref={register} className='inputText' type='password' name='passwordAdmin' placeholder='Mot de passe Admin...' />
            <input className='inputBtn' type='submit' value='Se connecter' />
            {/* <Link to='/admin'>
                <input className='inputBtn' type='button' value='Se connecter' />
            </Link> */}
        </form>
    );
}