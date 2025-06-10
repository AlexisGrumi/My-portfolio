import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/home/home"

function App() {

  return (
    <div className="text-[#ABB2BF] w-full">
      <Navbar />
      <div className="text-[#ABB2BF] w-11/12 flex justify-items-center justify-self-center">
        <Home />
      </div>
    </div>
  )
}

export default App
