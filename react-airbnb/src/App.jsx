
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

import Data from './data'




function App() {

  const cards = Data.map(item => {
        return <Card 
               item = {item}

                />
    })
  return(
  <div>
    <Navbar/>
    <Hero/>
    <section className="cards-list">
                {cards}{cards}{cards}{cards}{cards}{cards}{cards}{cards}{cards}{cards}{cards}{cards}
    </section>
  </div>)
}

export default App
