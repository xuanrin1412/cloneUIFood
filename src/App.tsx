import Category from "./components/Category"
import { Chef } from "./components/Chef"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Intro from "./components/Intro"
import Order from "./components/Order"
import Special from "./components/Special"

function App() {
  return (
    <div className="">
      <Header />
      <Intro />
      <Special />
      <Chef />
      <Category />
      <Order />
      <Footer />

    </div>
  )
}

export default App
