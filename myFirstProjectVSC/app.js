
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
        <buttone className="remove-player" onClick={ () => props.removePlayer(props.id)}></buttone>
            { props.name }
        </span>
        <Counter />
        {/* can use counter inside of player component */}
    </div>
    );
}

class Counter extends React.Component {
        /*shortcut for state*/
    state = {
        score: 0
    };

    decrementScore = () => {
        this.setState( prevState => ({
                score: prevState.score -1
        }));
    }
    incrementScore = () => {
        // console.log('hi from inside increment score');
        // react needs to be told when state changes
        this.setState( prevState => ({
                score: prevState.score + 1
        }));
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}>-</button>
                {/*props are properties of the component itself so use THIS*/}
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment" onClick={this.incrementScore}>+</button>
            </div>
        );
    }
 
}


class App extends React.Component {
    state = {
        players:[
            {
                name: "Vic",
                id: 1
            },
            {
                name: "Heebee",
                id: 2
            },   {
                name: "Alex",
                id: 3
            }
        ]
    };
    handleRemovePlayer =(id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.fileter( p => p.id !== id )
            };
        });
    }
    render (){
        return (
            <div className="scoreboard">
                <Header title = "Scoreboard" 
                totalPlayers ={ this.state.players.length }/>
                {/* returns number of player objects in array*/}
    
                {/*Players list*/}
                {this.state.players.map( player => 
                    <Player 
                    name={player.name} 
                    id={player.id}
                    key={player.id.toString()}
                    removePlayer={this.handleRemovePlayer}
    
                    />
            
                )}
                
            </div>
        )
    }
   
}

ReactDOM.render(
    <App />,
    
    document.getElementById('root')
);