import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <form>
            <input type='text' name='login' placeholder='Id Admin...' />
            <input type='password' name='password' placeholder='Mot de passe Admin...' />
            {/* <input type='submit' value='Se connecter' /> */}
            <Link to='/admin'>
                <input type='button' value='Se connecter' />
            </Link>
        </form>
    );
}