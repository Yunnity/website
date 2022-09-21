import CurrentGamesList from './CurrentGamesList';
import LookingForwardToPlaying from './LookingForwardToPlaying';
import useFetch from './useFetch';
import { motion } from 'framer-motion';

const GameCorner = () => {
    let { data: currentGames, loading, loadingMessage } = useFetch("https://my-json-server.typicode.com/yunnity/websiteinfo/currentGames");
    let { data: futureGames, loading1, loadingMessage1 } = useFetch("http://localhost:3002/lookingForwardToPlaying");

    return (
        <motion.div className="gameCorner"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.3, duration: 0.5}}
        >
            <p className="currPlaying">Played/Playing</p>
                {loading && <div>{loadingMessage}</div>}
                {currentGames && <CurrentGamesList currGames={currentGames}/>}
            <p className="futurePlaying">Looking Forward to Playing</p>
                {loading1 && <div>{loadingMessage1}</div>}
                {futureGames && <LookingForwardToPlaying futureGames={futureGames}/>}
        </motion.div>
    );
}
 
export default GameCorner;