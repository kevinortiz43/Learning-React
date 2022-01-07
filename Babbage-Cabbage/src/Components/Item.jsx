function Item(props){
    return(
        <div id="ItemContainer">
            <p>{props.Name1}</p>
            <p>{props.Discount1}</p>
            <img src={props.image1}/>
            <p>{props.Name2}</p>
            <p>{props.Discount2}</p>
            <img src={props.image2}/> 
            <p>{props.Name3}</p>
            <p>{props.Discount3}</p>
            <img src={props.image3}/>
            <p>{props.Name4}</p>
            <p>{props.Discount4}</p>
            <img src={props.image4}/>
            <p>{props.Name5}</p>
            <p>{props.Discount5}</p>
            <img src={props.image5}/>
            <p>{props.Name6}</p>
            <p>{props.Discount6}</p>
            <img src={props.image6}/>
            <p>{props.Name7}</p>
            <p>{props.Discount7}</p>
            <img src={props.image7}/>
        </div>
    );
}
export default Item;