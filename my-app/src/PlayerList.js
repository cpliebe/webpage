const PlayerList = (props) => {

     const players = props.players;

    return ( 
        <div className="player-list">
            {players.map((player) => (
                <div className="player-preview" key={player.name}>
    <h2>{player.name}
    </h2>
    <p>Plays for the {player.team} </p>
                </div>
            ))}
        </div>
     );
}
 
export default PlayerList;