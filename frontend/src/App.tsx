import NotificationButton from "./components/NotificationButton"
import Header from "./components/Header"
import './index.css'
import SalesCard from "./components/SalesCard"


function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>

  )
}

export default App
