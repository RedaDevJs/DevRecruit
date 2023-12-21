import React from "react";
import logo from "../../assets/all-images/logo.ico";
import {Link} from "react-router-dom";
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="bg-gray-800 text-gray-400 flex flex-col flex-grow">
    <div className="grid grid-cols-3 md:flex md:justify-center gap-4 m-4">
        <div className="md:flex-1 m-4">
            <div className="">
                <Link to="/home" className=" flex lg:flex-1 items-center text-sky-500 font-sans">
                    <img src={logo} alt=""/>
                    <img src="/dev.ico" alt=""/>
                    <span className="pt-3 capitalize text-xl"
                          style={{color: '#11F6FD', fontFamily: 'Dancing Script, cursive'}}>
                        recruit
                    </span>
                </Link>
            </div>

            <p className="text-justify">
                Bienvenue chez DevRecruit, votre partenaire de confiance pour répondre à tous vos
                besoins en matière de recrutement de développeurs exceptionnels. Forts de notre engagement
                envers l'excellence, nous nous efforçons de mettre en relation les entreprises innovantes
                avec des talents informatiques hautement qualifiés. Notre équipe dévouée de professionnels
                du recrutement comprend l'importance cruciale d'avoir des développeurs qui non seulement
                maîtrisent les dernières technologies, mais qui s'intègrent également parfaitement à la
                culture de votre entreprise. Chez DevRecruit, nous croyons que le succès d'une
                entreprise repose sur la qualité de son équipe. Faites confiance à notre expertise pour vous
                aider à bâtir l'avenir de votre entreprise avec les meilleurs talents du secteur.
            </p>
        </div>
        <div className="md:flex-2 m-4 pt-16">
            <h5 className="text-white mb-1">Siège Social</h5>
            <p className="mb-4">Av. Hassan 2, Résidence Saada Appt 6 Rabat - Maroc</p>

            <h5 className="text-white mb-1">Téléphone:</h5>
            <p className="mb-4">+212 5 37 78 15 11</p>

            <p className="text-white mb-1">Email:</p>
            <p className="mb-4">DevRecruit@gmail.com</p>

            <h5 className="text-white mb-1">Horaire de Travail:</h5>
            <p className="mb-4">
                - du lundi au vendredi : 9h à 18h30 <br />
                - Samedi matin : 9h à 13h <br />
            </p>
        </div>
        <div className="md:flex-2 m-4 pt-16">
            <h5 className="text-white mb-1">Abonnez-vous à Nos Emails </h5>
            <div className="">
                <input type="email" placeholder="Email" />
                <span>
                </span>
            </div>
        </div>
    </div>
    <div className="col-span-3 md:col-span-2 md:mx-auto text-center m-4">
        <p className="text-white">
            droits d'auteur {year}, Developpé par SRMC-Group. tous droits réservés .
        </p>
    </div>
</footer>

)};

export default Footer;