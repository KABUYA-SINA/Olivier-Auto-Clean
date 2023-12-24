import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import datas from '../data/simpleImages';
import icones from '../data/icons';
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
    const [icons, setIcons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [ban, setBan] = useState('');

    useEffect(() => {
        setIsLoading(true);
        setData(datas)
        setIcons(icones)
        setBan(bannerImage)
        setIsLoading(false)
    }, [icons])

    const a = Object.values(icons)
    const firstIconsArray = a.slice(0, 2);
    const secondIconsArray = a.slice(2, 4)
    const thirdIconsArray = a.slice(4, 6)
    const fourthIconsArray = a.slice(6, 8)

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
                        <Fade direction='up' damping={.09} >
                            <div className="welcom">
                                <h1>Welcome to our website</h1>
                                <p>Bienvenue chez Oliv' Auto Clean - Votre destination de confiance pour un lavage de voiture exceptionnel. Depuis Août 2020, nous nous sommes engagés à fournir à nos clients des services de lavage de voitures de qualité supérieure avec un service exceptionnel.
                                    Nous sommes fiers d'être la première choix de la communauté pour le soin de leurs véhicules.
                                </p>
                            </div>
                            <div className="mission">
                                <h2>Notre Mission</h2>
                                <p>Notre mission est de rendre chaque voiture propre et étincelante tout en fournissant une expérience client exceptionnelle.
                                    Nous croyons que chaque véhicule mérite le meilleur traitement, c'est pourquoi nous utilisons uniquement des produits de lavage de haute qualité et une équipe de professionnels formés pour donner à votre véhicule l'amour et l'attention qu'il mérite
                                </p>
                            </div>
                            <div className="environ">
                                <h2>Engagez-vous pour l'environnement</h2>
                                <p>
                                    Chez Oliv' Auto Clean, nous nous soucions de l'environnement. C'est pourquoi nous utilisons des produits de nettoyage respectueux de l'environnement et adoptons des pratiques de lavage éco-responsables.
                                    Notre installation est conçue pour minimiser la consommation d'eau et réduire notre empreinte carbone.
                                </p>
                            </div>
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
                                        <div className="service">
                                            <h2>Nos Services</h2>
                                            <div className="service-boxes">
                                                <div className="service-first">
                                                    <h3>Nettoyage de Voiture</h3>
                                                    <ul className='service-c'>
                                                        <div className='serv-c--m'>
                                                            {
                                                                firstIconsArray.map(({ cover, alt, _id, title }) => (
                                                                    <div key={_id} className='serv-m--mo'>
                                                                        <li className='ul-li'>
                                                                            <img src={cover} alt={alt} className='ul-li-img' />
                                                                        </li>
                                                                        <p>{title}</p>
                                                                    </div>
                                                                )
                                                                )
                                                            }
                                                        </div>
                                                        <div className='serv-c--m'>
                                                            {
                                                                secondIconsArray.map(({ cover, alt, _id, title }) => (
                                                                    <div key={_id} className='serv-m--mo'>
                                                                        <li className='ul-li'>
                                                                            <img src={cover} alt={alt} className='ul-li-img' />
                                                                        </li>
                                                                        <p>{title}</p>
                                                                    </div>
                                                                )
                                                                )
                                                            }
                                                        </div>
                                                    </ul>
                                                </div>
                                                <div className="service-second">
                                                    <h3>Services Additionnels</h3>
                                                    <ul className='service-c'>
                                                        <div className='serv-c--m'>
                                                            {
                                                                thirdIconsArray.map(({ cover, alt, _id, title }) => (
                                                                    <div key={_id} className='serv-m--mo'>
                                                                        <li className='ul-li'>
                                                                            <img src={cover} alt={alt} className='ul-li-img' />
                                                                        </li>
                                                                        <p>{title}</p>
                                                                    </div>
                                                                )
                                                                )
                                                            }
                                                        </div>
                                                        <div className='serv-c--m'>
                                                            {
                                                                fourthIconsArray.map(({ cover, alt, _id, title, }) => (
                                                                    <div key={_id} className='serv-m--mo'>
                                                                        <li className='ul-li'>
                                                                            <img src={cover} alt={alt} className='ul-li-img' />
                                                                        </li>
                                                                        <p>{title}</p>
                                                                    </div>
                                                                )
                                                                )
                                                            }
                                                        </div>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                }
                            </ErrorBoundary>
                        </Fade>
                    </div>
                    <button type='button' className='btn'>
                        <h3 className='head'> Nos réalisations</h3>
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
