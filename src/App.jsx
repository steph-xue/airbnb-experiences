import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"
import data from "./data.jsx"

function App() {
    const cardElements = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        );
    });  
    
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards-list">
                {cardElements}
            </div>
        </div>
    );
}

export default App;