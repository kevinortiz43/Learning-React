import React, {useState} from 'react'
import Input from './Input'
import Render from './Render'

export default function Groceries(){
        // let username,setusername= userSate("")
        // if you have it in an object 
    let groceries = [
        {
        item: "beer",
        units: "12 oz",
        quantity: 1,
        isPurchased: false,
      },
      {
        item: "soda",
        units: "12oz",
        quantity: 1,
        isPurchased: false,
      },
      {
        item: "water",
        units: "1 gallon",
        quantity: 1,
        isPurchased: false,
      }
    ]

  let [grocery, setGrocery] = useState(groceries)

  let addGroceries = (oneGrocery) => setGrocery([...grocery, oneGrocery]);
  
  
  // setGrocery
  // no this.props just props

  // setGrocery => allows re-rendering  means of changing state. when we want to change it
  // useState is the hook . when we want to render it. sets up the state

return <div>
    <Input addGroceries = {addGroceries}/>

    {grocery.map((grocery, index) => {return <Render grocery={grocery} key={index} />;})}
   
</div>

}
  
//     return (
//       <div>
//         <Input oneGrocery={this.addGroceries} />


//         {/* pass down the function by invoking */}
//       </div>
//     );
//   }
// }
