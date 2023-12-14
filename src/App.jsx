import Card from "./components/Card"
import Home from "./components/Home"
import Payment from "./components/Payment"
import AppleMusic from "./components/AppleMusic"
import Customize from "./components/Customize"
import Artwork from "./components/Artwork"

const App = () => {
  return (
    <body className="flex flex-col antialiased">
      <Home />
      <Payment />
      <Card />
      <AppleMusic />
      <Customize />
      <Artwork />
    </body>
  )
}

export default App
