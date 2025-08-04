import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/home/Home"

function App() {

  return (
    <div className="text-[#ABB2BF] w-full">
      <Navbar />
      <div className="text-[#ABB2BF] w-8/12 flex justify-items-center justify-self-center">
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
