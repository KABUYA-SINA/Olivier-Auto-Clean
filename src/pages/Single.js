import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import datas from '../data/simpleImages';
import { ColorRing } from 'react-loader-spinner';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '../pages/Error';
import Slider from '../components/Slider';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import '../sass/base/_base.scss';
import '../sass/pages/_single.scss';

const Single = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        setIsLoading(true);
        setData(datas.find(element => { return element.id === id }))
        setIsLoading(false)
    }, [id])

    return (
        <>
            {
                isLoading ?
                    <div className="loader">
                        < ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        />
                    </div >
                    :
                    <motion.div
                        className='single'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: .3 } }}
                        exit={{ opacity: 0 }}
                    >
                        <Header />
                        <main className='single-main'>
                            <ErrorBoundary FallbackComponent={Error} onReset={() => { }}>
                                <Slider images={data?.pictures} txt={data?.title} alt={data?.alt} />
                            </ErrorBoundary>
                            <div className="text-single">
                                <div className="qualite">
                                    <h2>Notre Engagement envers la Qualité</h2>
                                    <p>Chez Oliv' Auto Clean, nous croyons fermement que chaque voiture mérite un traitement de qualité. C'est pourquoi nous utilisons uniquement les meilleurs produits et équipements de lavage. Nous sommes également déterminés à être respectueux de l'environnement en adoptant des pratiques éco-responsables.</p>
                                </div>
                                <div className="satisfaction">
                                    <h2>Votre Satisfaction est Notre Priorité</h2>
                                    <p>Chez Oliv' Auto Clean, votre satisfaction est notre priorité numéro un. Nous nous efforçons de dépasser vos attentes à chaque visite. Si vous avez des commentaires, des questions ou des suggestions, n'hésitez pas à nous contacter. Nous sommes là pour vous.</p>
                                </div>
                            </div>
                        </main>
                        <Footer />
                    </motion.div>
            }
        </>
    )
}

export default Single;