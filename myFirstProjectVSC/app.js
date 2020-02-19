const title = React.createElement(
    'h1',
    {id: 'main-title', title: "This is a title."},
    'My First React Element!'

);

console.log(title);

const desc = React.createElement(
    'p',
    null,
    'I just learned how to create a React node and rendor it into the DOM. '
)

ReactDOM.render(
    title,
    document.getElementById('root')
);