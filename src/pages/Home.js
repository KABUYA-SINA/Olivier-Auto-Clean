import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import datas from '../data/simpleImages';
import { ErrorBoundary } from 'react-error-boundary';
import { ColorRing } from 'react-loader-spinner';
import Banner from '../components/Banner';
import bannerImage from '../assets/home.webp';
import { Fade } from 'react-awesome-reveal';
import '../sass/base/_base.scss';
import '../sass/layout/_container.scss';
import '../sass/pages/_home.scss';

const Home = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [ban, setBan] = useState('')

    useEffect(() => {
        setIsLoading(true);
        setData(datas)
        setBan(bannerImage)
        setIsLoading(false)
    }, [])

    return (
        <motion.div
            className='container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: .3 } }}
            exit={{ opacity: 0 }}
        >
            <Header />
            <main className='main-home'>
                <Banner image={ban} />
                <Fade cascade damping={0.3}>
                    <div className="heading-txt">
                        <Fade direction='up' damping={.2}>
                            <div className="welcom">
                                <h3>Welcome to our website</h3>
                                <p>Bienvenue chez Oliv' Auto Clean - Votre destination de confiance pour un lavage de voiture exceptionnel. Depuis Août 2020, nous nous sommes engagés à fournir à nos clients des services de lavage de voitures de qualité supérieure avec un service exceptionnel.
                                    Nous sommes fiers d'être la première choix de la communauté pour le soin de leurs véhicules.
                                </p>
                            </div>
                            <div className="mission">
                                <h3>Notre Mission</h3>
                                <p>Notre mission est de rendre chaque voiture propre et étincelante tout en fournissant une expérience client exceptionnelle.
                                    Nous croyons que chaque véhicule mérite le meilleur traitement, c'est pourquoi nous utilisons uniquement des produits de lavage de haute qualité et une équipe de professionnels formés pour donner à votre véhicule l'amour et l'attention qu'il mérite
                                </p>
                            </div>
                            <div className="environ">
                                <h3>Engagez-vous pour l'environnement</h3>
                                <p>
                                    Chez Oliv' Auto Clean, nous nous soucions de l'environnement. C'est pourquoi nous utilisons des produits de nettoyage respectueux de l'environnement et adoptons des pratiques de lavage éco-responsables.
                                    Notre installation est conçue pour minimiser la consommation d'eau et réduire notre empreinte carbone.
                                </p>
                            </div>
                            <div className="service">
                                <h2>Nos Services</h2>
                                <div className="service-boxes">
                                    <div className="service-first">
                                        <h3>Nettoyage de Voiture</h3>
                                        <ul className='service-c'>
                                            <li>Lavage extérieur</li>
                                            <li>Lavage extérieur et intérieur</li>
                                            <li>Lavage à la main</li>
                                            <li>Rénovation phare</li>
                                        </ul>
                                    </div>
                                    <div className="service-second">
                                        <h3>Services Additionnels</h3>
                                        <ul className='service-c'>
                                            <li>Lustrage et cirage</li>
                                            <li>Shampooing de tapis et sièges</li>
                                            <li>Traitement de la carrosserie</li>
                                            <li>Désodorisation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <button type='button' className='btn'>
                        <h1 className='head'> Nos réalisations</h1>
                    </button>
                    <section className='section-home'>
                        <ErrorBoundary FallbackComponent={Error} onReset={() => { }}>
                            {
                                isLoading ?
                                    <div className="loader">
                                        <ColorRing
                                            visible={true}
                                            height="80"
                                            width="80"
                                            ariaLabel="blocks-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="blocks-wrapper"
                                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                        />
                                    </div>
                                    :
                                    <>
                                        {data.map(({ id, image, title, index }) => (
                                            <Fade cascade damping={0.3} key={`${id}-${index}`}>
                                                <article>
                                                    <Cards key={`${id}-${index}`} id={id} image={image} alt={'picture of ' + title} title={title} />
                                                </article>
                                            </Fade>
                                        ))}
                                    </>
                            }
                        </ErrorBoundary>
                    </section>
                    <Link
                        to='https://www.facebook.com/people/OlivAuto-Clean/100022508387801/?sk=photos'
                        className='btn-home'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <motion.button
                            type='button'
                            className='btn'
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: .2 },
                            }}
                        >
                            Voir plus des réalisations
                        </motion.button>
                    </Link>
                </Fade>
            </main>
            <Footer />
        </motion.div>
    )
}

export default Home
