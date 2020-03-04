const players = [
    {
        name: "Vic",
        score: 50,
        id: 1
    },
    {
        name: "Heebee",
        score: 56,
        id: 2
    },   {
        name: "Alex",
        score: 2,
        id: 3
    }
];


const Header = (props) =>  {
    console.log(props)
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
};

const Player = (props) => {
    return(
    <div className="player">
        <span className="player-name">
            { props.name }
        </span>
        <Counter score={props.score} />
        {/* can use counter inside of player component */}
    </div>
    );
}

class Counter extends React.Component {
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement">-</button>
                {/*props are properties of the component itself so use THIS*/}
                <span className="counter-score">{ this.props.score }</span>
                <button className="counter-action increment">+</button>
            </div>
        );
    }
 
}


const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title = "Scoreboard" 
            totalPlayers ={ props.initialPlayers.length }/>
            {/* returns number of player objects in array*/}

            {/*Players list*/}
            {props.initialPlayers.map( player => 
                <Player 
                name={player.name}  
                score={player.score}
                key={player.id.toString()}

                />
        
            )}
            
        </div>
    )
}

ReactDOM.render(
    <App initialPlayers={ players} />,
    
    document.getElementById('root')
);