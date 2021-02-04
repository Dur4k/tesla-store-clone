import React from "react";
import Side from "../components/side.js";
import cyberpunk from "../assets1/cyberpunk.jpg";
import roadster from "../assets1/roadster.jpg";
import semi from "../assets1/semi.jpg";
import MyComponent from "../font/cybersvg.js";
import charging from "../assets1/charging";

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
