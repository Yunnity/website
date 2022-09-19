import {SocialIcon} from 'react-social-icons';
import { motion } from 'framer-motion';
import MePicture from './PictureOfMe.jpg';


const containerVariants = {
    moving: {
        type: "spring",
        stiffness: 120,
    },
    hovering: {
        scale: 1.14
    },
}

const Home = () => {
    return (
        <div className="home">
            <motion.p id="whereHome"
            initial={{y:-150}}
            animate={{y:0}}
            transition={{duration:1.3}}>
                Home is where _____ is
            </motion.p>
            <motion.span className="myName"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.2, duration: 1}}
            >
                Yun Seok<br/>Yang
            </motion.span>
            <motion.p className="myDesc"
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{delay: 0.2, duration: 1.1}}>
                Game Developer
            </motion.p>
            <motion.p className="myDesc"
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{delay: 0.2, duration: 1.1}}>
                Computer {"&"} Electrical Engineer
            </motion.p>
            <motion.img className="pictureOfMe"
            initial={{x: 600}}
            animate={{x: 0}}
            transition={{duration: 1.3}}
            // initial={{opacity: 0}}
            // animate={{opacity: 1}}
            // transition={{duration: 1.5}}
            src={MePicture} alt="Picture of Me"/>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.4, duration: 1}}>
                <p className="myBio">Hi there, glad you could make it c:
                    <br/><br/>My name is Yun ("yoooooon") and I'm a 
                    third-year undergraduate student at the University of Toronto enrolled in 
                    Engineering Science. Starting from my third year, I'll be majoring in electrical
                    and computer engineering and minoring in artificial intelligence
                    (and potentially/hopefully psychology).
                    <br/><br/>While I'm breathing and not occupied with
                    school work, I love to (over)think; I'm always keeping my mind
                    occupied with unconventional thoughts. I also enjoy playing and programming games,
                    reading manga, and going down the rabbit holes of introspection and life. Feel free
                    to explore my site and remember to stay up 👑💯.</p>
                <SocialIcon className="socialLink"
                variants={containerVariants}
                transition="moving"
                whileHover="hovering"
                url="https://www.linkedin.com/in/yun-seok-yang-7068771b5/"/>
                <SocialIcon className="socialLink"
                variants={containerVariants}
                transition="moving"
                whileHover="hovering"
                url="https://github.com/Yunnity"/>
                <SocialIcon className="socialLink"
                variants={containerVariants}
                transition="moving"
                whileHover="hovering"
                url="https://yunnity.itch.io/"/>
                <SocialIcon className="socialLink"
                variants={containerVariants}
                transition="moving"
                whileHover="hovering"
                url="https://na.op.gg/summoners/na/Yunnity"/>
            </motion.div>
        </div>
    );
}
 
export default Home;