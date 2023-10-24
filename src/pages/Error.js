import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import '../sass/pages/_error.scss';

const Error = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/', { replace: true });
    }
    return (
        <motion.main
            className='error'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: .3 } }}
            exit={{ opacity: 0 }}
        >
            <h1>404</h1>
            <p>
                Oups! This is not the web page you are looking for.
            </p>
            <Link to='/' onClick={handleClick}>
                <span className='btn-error'> Please return to Home page</span>
            </Link>
        </motion.main>
    )
}

export default Error