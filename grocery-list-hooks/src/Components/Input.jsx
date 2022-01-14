import React, {useState} from 'react'


export default function Input(props){

        // let stuff = {
        //     item:"",
        //     units:"",
        //     quantity:"",
        //     isPurchased: false,
        // }
        // this is the same thing as below

    let [item, setItem] = useState('')
    let [units, setUnits] =useState('')
    let [quantity, setQuantity] =useState('')
    let [purchased, setPurchased] =useState(false)

 let  handleChange = (event) => {
   
        if (event.target.id === 'item') {
            setItem( event.target.value )

        } else if (event.target.id === 'units') {
            setUnits(event.target.value )

        } else {
            setQuantity(event.target.value )
        }
   
        //Computed property name
 // this.setState({ [event.target.id]: event.target.value });

};

  let handleSubmit = (event) => {
      event.preventDefault();

      let oneGroceryData ={
          item,
          units,
          quantity,
          // this works becasue the variable is the name 
          // normally it would be item: item, since they are the same
          // passing the value down
      }
      
      props.addGroceries(oneGroceryData)
    //    onClick ... onChange ... onSubmit
    // this. = because we are in a class
    // props. because its being passed down from a different componenet 
    // oneGrocery because we established it as a variable equal to our function 
    // props (properties) = object 
    // trying to use a function 
    // console.log(this.state);
  };


    return (
      <form onSubmit={handleSubmit} className="cf">
       
        <label htmlFor="item">item:</label>
        <input
          id="item"
          onChange={handleChange}
          value={item}
          />

        <label htmlFor="units">units:</label>
        <input 
        // maxLength={13}
        // necessary for using max length
          id="units"
          onChange={handleChange}
          value={units}
          />

        <label htmlFor="quantity">quantity:</label>
        <input
          id="quantity"
          onChange={handleChange}
          value={quantity}
          //this is targeting our above 
        />

        <button>Submit</button>
      </form>
    );
  }
