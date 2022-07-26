import { useState, useEffect } from 'react'
import PlayerList from './PlayerList';
import { Card } from 'react'

const Home = () => {

    // let name ='mario'

    // hooks
    const [players, setPlayers] = useState([
        {name: 'Tom Brady', team: "Tampa Bay Buccaneers", position: "QB", number: "12"},
        {name: 'Aaron Rodgers', team: "Green Bay Packers", position: "QB", number: "12"},
        {name: 'Lamar Jackson', team: "Baltimore Ravens", position: "QB", number: "8"},
        {name: 'Justin Herbert', team: "San Diego Chargers", position: "QB", number: "10"}

    ]
    )

    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    useEffect(() => {
        console.log('use effect ran')
    });

    const handleClick = () => {
        setName('luigi');
        setAge(30);
       
    }



    

    return ( 
        <div className="home">
        <PlayerList players={players} />            
            <button onClick={handleClick}>Click Me</button>
            <div class="card">
            <img src = "brady.png" style={{width: "100%"}}></img>
            <div class="container">
                <h4><b>Tom Brady</b></h4>
                <p>Quarterback</p>
                <p>Tampa Bay</p>
            </div>
        </div>
        </div>
    
      );
}
 
export default Home;