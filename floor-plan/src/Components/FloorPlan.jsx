import Bath from "./Bath";
import BedRoom from "./BedRoom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

function FloorPlan(props) {
  return (
    <div class="FloorPlan">
      <Bath class="bath1" size="Full Bath" />

      <Bath size="Half" />

      <BedRoom bedNum="1" />

      <BedRoom bedNum="2" />

      <BedRoom bedNum="3" />
    
      <Kitchen />

      <LivingRoom />
    </div>
  );
}

export default FloorPlan;                        
