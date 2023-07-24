// import Blog from "./components/Blog"
import Download from "./components/Download"
import Hero from "./components/Hero"
import Interface from "./components/Interface"
import Manage from "./components/Manage"
import SignUp from "./components/SignUp"
import Why from "./components/Why"
import Footer from "./layouts/Footer"
import Navbar from "./layouts/Navbar"

function App() {

  return (
    <div className="font-poppins min-h-screen">
      <Navbar />
      <Hero />
      <Why />
      <Manage />
      <Interface />
      <SignUp />
      <Download />
      {/* <Blog /> */}
      <Footer />
    </div>
  )
}

export default App
