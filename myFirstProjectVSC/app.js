const desc = 'I just learned how to create a React node and rendor it into the DOM.';

const myTitleID = 'main-tile';
const name = 'Amy';

const header =(
    <header>
        <h1 id= {myTitleID}> { name }'s First React Element</h1>
        <p>{ desc}</p>
        {/*this is a jsx comment*/}
    </header>
);


ReactDOM.render(
    header,
    document.getElementById('root')
);