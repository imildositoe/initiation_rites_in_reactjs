import './App.css';

function Header() {
    return (
        <div className="header">
            <h1>Dark Studio</h1>
        </div>
    );
}

function Body() {
    return (
        <section>
            <p>Whatever you want for your appearance</p>
        </section>
    );
}

function Footer() {
    return (
        <section>
            <p>Access <a href="https://www.darkstudio.com">https://www.darkstudio.com</a></p>
        </section>
    );
}

function App() {
    return (
        <div className="App">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default App;
