export default function Receipt(props) {
    // this is my receipts component
  console.log(props)
    return (
    <div className="receipt">
      <h1>Receipts</h1>
      <p> Person: {props.receipt.person} </p>
      <p> Main: {props.receipt.order.main} </p>
      <p> Protein: {props.receipt.order.protein} </p>
      <p> Rice:{ props.receipt.order.rice} </p>
      <p> Toppings: {props.receipt.order.toppings[0]},{props.receipt.order.toppings[1]},{props.receipt.order.toppings[2]} </p>
      <p> Sauce: {props.receipt.order.sauce} </p>
      <p> Drink: {props.receipt.order.drink} </p>
      <p> Cost: ${props.receipt.order.cost} </p>

    </div>
  );
}
