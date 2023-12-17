import AfterRedirectText from "./components/AfterRedirectText"
import BigCard from "./components/BigCard"
import Home from "./components/Home"
import Payment from "./components/Payment"
import RedirectToSonoama from "./components/RedirectToSonoama"

const App = () => {
  return (
    <body className=" absolute flex flex-col antialiased gap-24 container sm:pt-4 pb-24">
      <Home />
      <Payment />
      <RedirectToSonoama />
      <AfterRedirectText />
      <BigCard />
    </body>
  )
}

export default App
