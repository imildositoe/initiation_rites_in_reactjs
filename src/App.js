import './App.css';

let dishes = [
    "Spaghetti with cheese",
    "Tomatoes with salt",
    "Cabbage with nothing"
];

function Header(props) {
    return (
        <div className="header">
            <h1>{props.company_name}</h1>
        </div>
    );
}

function Body(props) {
    return (
        <section>
            <p>Whatever you want for your stomach, {props.name}</p>
            <ul style={{textDecoration: "none"}}>
                {props.dishes.map((dish) => (
                    <li>{dish}</li>
                ))}
            </ul>
        </section>
    );
}

function Footer(props) {
    return (
        <section>
            <p>Access <a href="https://www.perfectfood.com">https://www.perfectfood.com || {props.author + ' ' + new Date().getFullYear()}</a></p>
        </section>
    );
}

function Table() {
    return (
        <table>
            <thead>
                <th></th>
            </thead>
        </table>
    );
}

function App() {
    return (
        <div className="App">
            <Header company_name = "Perfect Food"/>
            <Body name = "Perfect" dishes = {dishes}/>
            <Footer author = "poisonshade"/>
        </div>
    );
}

export default App;
