import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
    return (
        <nav className='header'>
            <ul>
                <Link  to="/">
                    <li>Mon profil</li>
                </Link>
                <Link  to="/portfolio">
                    <li>Mes Projets</li>
                </Link>
                <Link  to="/contact">
                    <li>Me Contacter</li>
                </Link>
                <Link to="/admin/auth">
                    <li>Tableau de bord</li>
                </Link>
            </ul>
        </nav>
    );
}