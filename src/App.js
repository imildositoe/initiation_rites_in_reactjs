import './App.css';
import restaurant from './restaurant.jpg'

let dishes = [
    "Spaghetti with cheese",
    "Tomatoes with salt",
    "Cabbage with nothing"
];

const dishesObjects = dishes.map((dish, i) => ({id: i, title: dish}))

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
            <img src={restaurant} alt="profile" height={200}/>
            <ul style={{textDecoration: "none"}}>
                {props.dishes.map((dish) => (
                    <li key={dish.id}>{dish.title}</li>
                ))}
            </ul>

            <Table/>
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
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
}

function App() {
    return (
        <div className="App">
            <Header company_name = "Perfect Food"/>
            <Body name = "Perfect" dishes = {dishesObjects}/>
            <Footer author = "poisonshade"/>
        </div>
    );
}

export default App;
