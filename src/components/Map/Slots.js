
import { useState } from 'react';
import './Slots.css'
function Slots() {
  const [slotColor, setSlotColor] = useState("darkseagreen")
  const mystyle = {
    // width: "3rem",
    // height: "3rem",
    // borderRadius: "0.8rem",
    backgroundColor: slotColor,
    // display: "inline-block",
    // margin: "0.2rem 0.3rem"
  };
  const handleClick = () => {
    if (slotColor === "darkseagreen") { setSlotColor("green") }
    else setSlotColor("darkseagreen")
  }
  return (
    <div className="slot" style={mystyle} onClick={handleClick}  >
      {/* <span style={mystyle}></span> */}
    </div>
  )
}
export default Slots;