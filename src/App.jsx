import Card from "./components/Card"
import Home from "./components/Home"
import Payment from "./components/Payment"
import AppleMusic from "./components/AppleMusic"


const App = () => {
  return (
    <body className="flex flex-col antialiased">
      
      <Home />
      <Payment />
      <Card />
     <AppleMusic />
    </body>
  )
}

export default App
