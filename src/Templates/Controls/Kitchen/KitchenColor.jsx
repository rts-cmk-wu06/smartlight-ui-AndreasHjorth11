import { useState, useEffect } from "react";
import ColorConverter from "cie-rgb-color-converter";

const KitchenColor = (props) => {
  let xy = ColorConverter.rgbToXy(props.r, props.g, props.b);
  const [color, setColor,] = useState([]);

  useEffect(() => {
    fetch(
      "http://192.168.8.100/api/qjFRqc--SdeaB4gl-cYIb96qmqVY2ydjUsz0usAv/groups/11/action",
      {
        method: "PUT",
        body: JSON.stringify({
          xy: [color.x, color.y],
        }),
      }
    );
  }, [color]);
  

  return (
    <div className="Button-Container"> 
      <div className="Buttons"
        onClick={() => {
          setColor(xy);
          console.log(xy);
        }}
        style={{
          width: "24px",
          height: "24px",
          borderRadius: "50px",
          display: "flex",
          flexDirection: "row",
          zIndex: "10",
          backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        }}
      ></div>
    </div>
  );
};

export default KitchenColor;