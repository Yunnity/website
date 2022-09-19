const LookingForwardToPlaying = ({futureGames}) => {
    return (
        <div className="lookingForwardToPlaying">
            {futureGames.map(game => (
                <ul key={game.gameName}>
                    <li className="futureGamesList">{game.gameName}</li>
                    <br/>
                </ul>
            ))}
        </div>
    );
}
 
export default LookingForwardToPlaying;