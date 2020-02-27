const Header = () =>  (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );

const Player = () => {
    return(
    <div className="player">
        <span className="player-name">
            Vic
        </span>
        <Counter />
        {/* can use counter inside of player component */}
    </div>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header />
            {/*Players list*/}
            <Player />
        </div>
    )
}

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement">-</button>
            <span className="counter-score">20</span>
            <button className="counter-action increment">+</button>
        </div>
    );
}

ReactDOM.render(
    <Player/>,
    
    document.getElementById('root')
);