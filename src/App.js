import './App.css';

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
            <p>Whatever you want for your appearance, {props.name}</p>
        </section>
    );
}

function Footer(props) {
    return (
        <section>
            <p>Access <a href="https://www.darkstudio.com">https://www.darkstudio.com || {props.author + ' ' + new Date().getFullYear()}</a></p>
        </section>
    );
}

function App() {
    return (
        <div className="App">
            <Header company_name = "Dark Studio"/>
            <Body name = "Bitch"/>
            <Footer author = "poisonshade"/>
        </div>
    );
}

export default App;
