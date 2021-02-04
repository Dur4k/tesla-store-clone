import React from "react";
import "./css/style.css";
import Header from "./components/header.js";
import Item from "./components/item.js";
import Route from "./router/router.js";
import ItemSide from "./components/item-side.js";

import accessories from "./assets/Desktop-Accessories.jpg";
import model3 from "./assets/Desktop-Model3.jpeg";
import modelS from "./assets/Desktop-ModelS.jpeg";
import modelX from "./assets/Desktop-ModelX.jpeg";
import modelY from "./assets/Desktop-ModelY.jpeg";
import panels from "./assets/Desktop-SolarPanels.jpeg";
import roof from "./assets/Desktop-SolarRoof.jpeg";
function App() {
  return (
    <div className="App">
      <Header />
      <Route path={"/S"}>
        <div className="app_itemsContainer ">
          <Item
            title="Model S"
            desc="Order Online for Touchless Delivery"
            descLink="/S"
            backgroundImg={modelS}
            leftBotnTxt="COSTOM ORDER"
            leftBotnLink=""
            rightBtnText="LEARN MORE"
            rightBtnLink=""
            twoButtons={true}
            first
          ></Item>

          <Item
            title="Model 3"
            desc="Order Online for Touchless Delivery"
            descLink="/cyberpunk"
            backgroundImg={model3}
            leftBotnTxt="ORDER NOW"
            leftBotnLink=""
            rightBtnText="LEARN MORE"
            rightBtnLink=""
            twoButtons={true}
          ></Item>

          <Item
            title="Model X"
            desc="Order Online for Touchless Delivery"
            descLink="X"
            backgroundImg={modelX}
            leftBotnTxt="ORDER NOW"
            leftBotnLink=""
            rightBtnText="LEARN MORE"
            rightBtnLink=""
            twoButtons={true}
          ></Item>
          <Item
            title="Model Y"
            desc="Order Online for Touchless Delivery"
            descLink="Y"
            backgroundImg={modelY}
            leftBotnTxt="ORDER NOW"
            leftBotnLink=""
            rightBtnText="LEARN MORE"
            rightBtnLink=""
            twoButtons={true}
          ></Item>
          <Item
            title="Lowest cost solar panels in America"
            desc="Money-back guaranteed"
            descLink="#"
            backgroundImg={panels}
            leftBotnTxt="ORDER NOW"
            leftBotnLink=""
            rightBtnText="LEARN MORE"
            rightBtnLink=""
            twoButtons={true}
          ></Item>

          <Item
            title="Solar for New Roofs"
            desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            descLink="#"
            backgroundImg={roof}
            leftBotnTxt="ORDER NOW"
            leftBotnLink=""
            rightBtnText="LEARN MORE"
            rightBtnLink=""
            twoButtons={true}
          ></Item>
          <Item
            title="Accessories"
            desc=""
            descLink="#"
            backgroundImg={accessories}
            leftBotnTxt="SHOP NOW"
            leftBotnLink=""
            rightBtnText="LEARN MORE"
            rightBtnLink=""
            twoButtons={false}
          ></Item>
        </div>
      </Route>

      <ItemSide></ItemSide>
    </div>
  );
}

export default App;
