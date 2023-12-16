import BigCard from "./components/BigCard"
import Card from "./components/Card"
import Home from "./components/Home"
import Payment from "./components/Payment"

const App = () => {
  return (
    <body className="flex flex-col antialiased">
      <Home />
      <Payment />
      <Card />
      <BigCard />
     
    </body>
  )
}

export default App
