import { queryHelpers } from '@testing-library/react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const containerVariants = {
    initial: {
        scale: 0
    },
    visible: {
        scale: 1
    },
    transition: {
        delay: 0.5,
        duration: 0.7,
        type: "spring",
        stiffness: 120
    }
}

const NavBar = () => {
    return (
        <>
            <motion.div className="navBar"
            variants={containerVariants}
            initial="initial"
            animate="visible"
            transition={{delay: 0, type: "spring", stiffness: 110, duration: 1.2}}>
                <br/>
                <Link to="/" >
                <motion.button id="nameHomePage"
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{delay: 0, type: "spring", stiffness: 110, duration: 1.2}}
                whileHover={{backgroundColor: "rgba(0, 0, 255, 0.1)"}}
                >
                    Y.S.<br/>Yang
                </motion.button>
                </Link>
                <Link to="/"><motion.button
                whileHover={{backgroundColor: "rgba(255, 0, 0, 0.15)"}}>
                    Home
                    </motion.button></Link>&nbsp;&nbsp;
                <Link to="/AboutMe"><motion.button
                whileHover={{backgroundColor: "rgba(255, 0, 0, 0.15)"}}>
                    Rating My Interests</motion.button></Link>&nbsp;&nbsp;
                <Link to="/Projects"><motion.button
                whileHover={{backgroundColor: "rgba(255, 0, 0, 0.15)"}}>
                    Projects</motion.button></Link>&nbsp;&nbsp;
                <Link to="/GameCorner"><motion.button
                whileHover={{backgroundColor: "rgba(255, 0, 0, 0.15)"}}>
                    Game Corner</motion.button></Link>&nbsp;&nbsp;
            </motion.div>
        </>

    );
}
 
export default NavBar;