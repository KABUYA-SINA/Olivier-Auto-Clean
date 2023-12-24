import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Banner from '../components/Banner';
import bannerImage from '../assets/about.webp';
import Footer from '../components/Footer';
import { Fade } from 'react-awesome-reveal';
import '../sass/base/_base.scss';
import '../sass/pages/_about.scss';

const About = () => {
    const [ban, setBan] = useState([])
    useEffect(() => {
        setBan(bannerImage)
    }, [])
    return (
        <motion.div
            className='about'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: .3 } }}
            exit={{ opacity: 0 }}
        >
            <Header />
            <main className='main-about'>
                <Banner image={ban} />
                <div className='about-us'>
                    <Fade direction="down" damping={.2}>
                        <div className="about-me">
                            <h1 className='head'>À Propos de Moi</h1>
                            <p>Bienvenue sur Oliv' Auto Clean, votre destination pour un lavage automobile de qualité supérieure.
                                Je suis Olivier, le fondateur et propriétaire de cette entreprise, et je suis ravi de partager mon histoire avec vous.
                            </p>
                        </div>
                        <div className="passion">
                            <h2>Ma Passion pour les Voitures</h2>
                            <p>Depuis que je suis enfant, j'ai toujours été passionné par les voitures.
                                Qu'il s'agisse de leur design, de leur mécanique ou simplement de leur apparence, j'ai toujours été fasciné par cet univers.
                                Mon rêve a toujours été de créer un espace où les amateurs de voitures peuvent prendre soin de leurs précieux véhicules.
                            </p>
                        </div>
                        <div className="aventure">
                            <h2>L'Aventure Oliv' Auto Clean</h2>
                            <p>L'aventure Oliv' Auto Clean a commencé il y a quelques années lorsque j'ai décidé de concrétiser ce rêve.
                                J'ai réuni une équipe dévouée de professionnels qui partagent ma passion pour les voitures et qui comprennent l'importance d'un lavage automobile de qualité.
                                Notre mission est de fournir des services de lavage automobile exceptionnels et de garantir la satisfaction totale de nos clients.
                            </p>
                        </div>
                        <div className="qualité">
                            <h2>Notre Engagement envers la Qualité</h2>
                            <p>Chez Oliv' Auto Clean, nous croyons fermement que chaque voiture mérite un traitement de qualité.
                                C'est pourquoi nous utilisons uniquement les meilleurs produits et équipements de lavage.
                                Nous sommes également déterminés à être respectueux de l'environnement en adoptant des pratiques éco-responsables.
                            </p>
                        </div>
                        <div className="satisfaction">
                            <h2>Votre Satisfaction est Notre Priorité</h2>
                            <p>Chez Oliv' Auto Clean, votre satisfaction est notre priorité numéro un. Nous nous efforçons de dépasser vos attentes à chaque visite.
                                Si vous avez des commentaires, des questions ou des suggestions, n'hésitez pas à nous contacter. Nous sommes là pour vous.
                            </p>
                        </div>
                        <div className="remerciement">
                            <p>Merci de nous faire confiance pour prendre soin de votre voiture. Nous attendons avec impatience de vous accueillir chez Oliv' Auto Clean.</p>
                        </div>
                        <div className="president">
                            <h3>Olivier TAQUET</h3>
                            <p>Fondateur de Oliv' Auto Clean</p>
                        </div>
                    </Fade>
                </div>
            </main>
            <Footer />
        </motion.div>
    )
}

export default About;