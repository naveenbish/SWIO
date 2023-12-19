import AfterBigCardLeft from "./components/AfterBigCardLeft"
import AfterBigCardRight from "./components/AfterBigCardRight"
import AfterBigCardText from "./components/AfterBigCardText"
import AfterRedirectText from "./components/AfterRedirectText"
import BigCard from "./components/BigCard"
import Home from "./components/Home"
import ImmersiveCard from "./components/ImmersiveCard"
import Payment from "./components/Payment"
import RedirectToSonoama from "./components/RedirectToSonoama"
import Scrollableanime1 from "./components/Scrollableanime1"
import Scrollableanime2 from "./components/Scrollableanime2"
import Scrollableanime3 from "./components/Scrollableanime3"
import Scrollableanime4 from "./components/Scrollableanime4"

const App = () => {
  return (
    <body className=" absolute flex flex-col antialiased gap-24 container sm:pt-4 pb-24">
      <Home />
      <Payment />
      <RedirectToSonoama />
      <AfterRedirectText />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <BigCard />
      <AfterBigCardLeft />
      <AfterBigCardRight />
      </div>
      <AfterBigCardText />
      <ImmersiveCard />
    </body>
  )
}

export default App
