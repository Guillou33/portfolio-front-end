import React from 'react';

export default function Dashboard() {
    return (
        <>
        <section>
            <h1>Profil</h1>
            <textarea name='presentationProfile' rows='4' cols='40'></textarea>
            <input type='button' value='+' name='set'/> 
            <h1>Compétences</h1>
            <span className='skills'>Javascript</span>
            <input type='button' value='+' name='addSkill'/> 
        </section>
        <section>
            <h1>Projets</h1>
            <span className='skills'>Mambo4</span>
            <p>Projet HTML/CSS : Jeu Simon Harsrbro</p>
            <label>URL : </label><a href='https://guillou33.github.io/Mambo4/'>Mambo4</a>
            <input type='button' value='Ajouter le projet' name='addProject'/> 
        </section>
        <section>
           
        </section>
        </>
    );
}