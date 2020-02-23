const Header = () =>  (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );

const Player = () => {
    <div className="player">
        <span className="player-name">
            Vic
        </span>
        <div className="counter">
            <button className="counter-action decrement">-</button>
            <span>20</span>
            <button className="counter-action increment">+</button>
        </div>
    </div>
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
);