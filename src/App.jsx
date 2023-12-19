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
import Scrollableimgsec from "./components/Scrollableimgsec"

const App = () => {
  return (
    <body className="wrapper">
      <Home />
      <Payment />
      <RedirectToSonoama />
      <AfterRedirectText />
      <BigCard />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <AfterBigCardLeft />
      <AfterBigCardRight />
      </div>
      <AfterBigCardText />
      <ImmersiveCard />
      <Scrollableanime1 />
      <Scrollableanime2 />
      <Scrollableanime3 />
      <Scrollableanime4 />
    </body>
  )
}

export default App
