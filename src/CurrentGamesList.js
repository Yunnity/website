import {motion} from 'framer-motion';
import {useState} from 'react';
import LeagueOfLegendsIcon from './LeagueOfLegendsIcon.png';
import ValoranteIcon from './ValorantIcon.png';
import CSGOIcon from './CSGOIcon.png';
import OsuRhythmIcon from './OsuRhythmIcon.png';
import GenshinIcon from './GenshinIcon.png';
import SSBBIcon from './SSBBIcon.png';
import DeemoMobileIcon from './DeemoMobileIcon.png';
import SSBUIcon from './SSBUIcon.jpg';


const containerVariants = {
    begin: {
        opacity: 0
    },
    end: {
        opacity: 1
    },
    moving: {
        type: "spring",
        stiffness: 120,
        when: "beforeChildren"
    },
    hovering: {
        scale: 1.14
    },
}

const childVariants = {
    begin: {
        opacity: 0
    },
    end: {
        opacity: 1,
    }
}

function SetOpacity(gameID, newOpacity){
    console.log(getComputedStyle(document.documentElement).getPropertyValue('--' + gameID + 'Opacity'));
    document.documentElement.style.setProperty('--' + gameID + 'Opacity', newOpacity);
}

function PickIcon(gameID){
    switch(gameID){
        case "LeagueOfLegends":
            return LeagueOfLegendsIcon;
            break;
        case "Valorante":
            return ValoranteIcon;
            break;
        case "CSGO":
            return CSGOIcon;
            break;
        case "DeemoMobile":
            return DeemoMobileIcon;
            break;
        case "Genshin":
            return GenshinIcon;
            break;
        case "OsuRhythm":
            return OsuRhythmIcon;
            break;
        case "SSBU":
            return SSBUIcon;
            break;
        case "SSBB":
            return SSBBIcon;
            break;
    }
}


const CurrentGamesList = ({currGames}) => {
    
    return (
        <div className="currentGamesList">
            {currGames.map(game => (
                <div className="gameView" key={game.gameName}>
                    <motion.img className="gameIcon" src={PickIcon(game.id)} alt={game.gameName}
                    variants={containerVariants}
                    animate="end"
                    transition="moving"
                    whileHover="hovering"
                    onMouseOver={() => SetOpacity(game.id, 1)}
                    onMouseOut={() => SetOpacity(game.id, 0)}
                    />
                    {  (
                    <motion.div className="gamesBody" id={game.id}>
                        <p id="gameTitle"><b>Game</b>: <i>{game.gameName}</i></p>
                        <p><b>Genre</b>: {game.genre}</p>
                        <p><b>Pros</b>: {game.pros}</p>
                        <p><b>Cons</b>: {game.cons}</p>
                        <p><b>Rating</b>: {game.rating}</p>
                    </motion.div>)}
                </div>
            ))
            }
        </div>
    );
}
 
export default CurrentGamesList;