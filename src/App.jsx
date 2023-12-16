import BigCard from "./components/BigCard"
import Home from "./components/Home"
import Payment from "./components/Payment"
import RedirectToSonoama from "./components/RedirectToSonoama"

const App = () => {
  return (
    <body className="flex flex-col antialiased">
      <Home />
      <Payment />
      <RedirectToSonoama />
      <BigCard />
      
    
     
    </body>
  )
}

export default App
