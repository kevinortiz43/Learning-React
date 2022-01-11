import receipts from "../Data";
// this is my data file
import Receipt from "./Receipt";
// component, we pass everything down to

// This is where we get the receipt data and the component for our receipts

export default function Layout() {
  return (
    <div className="Layout">
      {receipts.map((receipt) => {
        return <Receipt receipt={receipt} />;
      })}
    </div>
  );
}
