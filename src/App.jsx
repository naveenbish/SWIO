import Card from "./components/Card"
import Home from "./components/Home"
import Payment from "./components/Payment"


const App = () => {
  return (
    <body className="flex flex-col antialiased">
      
      <Home />
      <Payment />
      <Card/>
    </body>
  )
}

export default App
