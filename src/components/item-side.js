import React from "react";
import Side from "../components/side.js";
import cyberpunk from "../assets1/cyberpunk.jpg";
import roadster from "../assets1/roadster.jpg";
import semi from "../assets1/semi.jpg";
import MyComponent from "../font/cybersvg.js";
import charging from "../assets1/charging";
import model3 from "../assets2/model-3";
import modelx from "../assets2/tesla-x";
import modely from "../assets2/tesla-y";
import roof from "../assets2/roof";
import panels from "../assets/Desktop-SolarPanels.jpeg";
import RoofSVG from "../font/roofsvg.js";
import Sun from "../font/sun.js";

const ItemSide = () => {
  return (
    <div>
      <Side
        svg={MyComponent()}
        name=""
        pic={cyberpunk}
        path="/cyberpunk"
        desc="BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS CAR"
        roundButton={false}
        text="ORDER NOW"
        f="cy"
      />
      <Side
        name="Roadster"
        pic={roadster}
        path="/roadster"
        desc="​The quickest car in the world, with record-setting acceleration, range and performance."
        roundButton={true}
        text="Reserve Now"
        l="1.9s"
        ls="0-60mph"
        m="+250mph"
        ms="Top Speed"
        r="620mi"
        rs="Range"
      />
      <Side
        name="Semi"
        pic={semi}
        path="/semi"
        desc="​Semi is the safest, most comfortable truck ever. Four independent motors provide maximum power and acceleration and require the lowest energy cost per mile."
        roundButton={true}
        text="Reserve Now"
        l="20s"
        ls="0-60 mph with 80k lbs"
        m="< 2 kWh/mi"
        ms="Energy consumption"
        r="0.36"
        rs="Drag Ceoffiient"
      />
      <Side
        name="Model 3"
        pic={model3}
        path="/3"
        desc="​"
        roundButton={true}
        text="ORDER NOW"
        l="3.1s"
        ls="From 0-60 mph"
        m="365mi "
        ms="Range"
        r="AWD"
        rs="Dual Motor"
      />
      <Side
        name="Model X"
        pic={modelx}
        path="/X"
        desc="​"
        roundButton={true}
        text="ORDER NOW"
        l="340 mi"
        ls="Range (est.)"
        m="2.5s "
        ms="0-60 mph"
        r="1,020hp"
        rs="Peak power"
      />
      <Side
        name="Model Y"
        pic={modely}
        path="/Y"
        desc="​"
        roundButton={true}
        text="Reserve Now"
        l="Use"
        ls="at home"
        m="Charge "
        ms="Where youpark"
        r="over"
        rs="3000 stations"
      />

      <Side
        name="Solar Roof"
        pic={roof}
        path="/roofs"
        desc="​"
        roundButton={true}
        text="ORDER NOW"
        l="Pays"
        ls="off over time"
        m="3X"
        ms="Stronger than standard titles"
        r={Sun()}
        rs="Beautiful Solar Without Compromise"
        solar="solar"
        black="black"
      />
      <Side
        name="Solar for Existing Roofs"
        pic={panels}
        path="/panels"
        desc="​"
        roundButton={true}
        text="ORDER NOW"
        l={RoofSVG()}
        ls="Convert Sunlight into Energy"
        m="£"
        ms="Guaranteed Lowest Price "
        r="24/7"
        rs="Energy Monitoring"
        solar="solar"
      />
      <Side
        name="Charging"
        pic={charging}
        path="/charging"
        desc="​"
        roundButton={true}
        text="Reserve Now"
        l="Use"
        ls="at home"
        m="Charge "
        ms="Where youpark"
        r="over"
        rs="3000 stations"
        black="black"
      />
    </div>
  );
};

export default ItemSide;
