import Bath from "./Bath";
import BedRoom from "./BedRoom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";


function FloorPlan(props){
    return(
        <div>
          <Bath
          size="Full Bath"  
            />
            <Bath
            size ="Half"
            />
          <BedRoom
          bedNum="1" 
          />
          <BedRoom
          bedNum="2"
          />
          <BedRoom 
          bedNum="3"
          />
          <Kitchen
          Kitchen="Kitchen"
          />
          <Kitchen
          Oven="Oven"
          />
          <Kitchen
          Sink="Sink"
          />
          <LivingRoom/>
        </div>
    )
}

export default FloorPlan;