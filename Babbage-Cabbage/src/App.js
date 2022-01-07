import "./App.css";
import Header from "./Components/Header";
import Item from "./Components/Item";
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      
        <Header
          CompanyName = "Babbage Cabbage"
          EventName = "50 for 50"
          EventDate = "January 7th-9th from 9:00am - 3:00pm"
          image = "https://static.vecteezy.com/system/resources/thumbnails/001/879/892/small/50-percent-off-3d-lettering-promotion-free-vector.jpg"
        />

        <Item
        Name1 = "Charcoal Grill"
        Discount1 = "$197.00"
        image1 = "https://media.tractorsupply.com/is/image/TractorSupplyCompany/1565236_A1?"
        Name2 = "Fruit Platter"
        Discount2 = "$12.88"
        image2 = "https://scene7.samsclub.com/is/image/samsclub/0007464102702_A"
        Name3 = "Gourmet Cupcakes 6 Count"
        Discount3 = "$19.99"
        image3 = "https://m.media-amazon.com/images/I/616oymrx2nL._SS400_.jpg"
        Name4 = "Charcuterie Board"
        Discount4 = "$29.87"
        image4 = "https://myheavenlyrecipes.com/wp-content/uploads/2020/12/charcuterie-board-400x400.png"
        Name5 = "Organic Avocados"
        Discount5 = "$4.24"
        image5 = "https://i0.wp.com/mimiavocado.com/wp-content/uploads/2013/04/hard-avocados.jpg?resize=400%2C400"
        Name6 = "Kitchen Knife Set"
        Discount6 = "$63.59"
        image6 = "https://kitchensamurai.co.za/wp-content/uploads/2021/09/Tojiro-DP-Kurouchi-SET-400x400.jpg"
        Name7 = "Cabbage"
        Discount7 ="$3.75"
        image7 = "http://cdn.shopify.com/s/files/1/1537/5553/products/00252_52632143-6b37-418f-848f-0c85ecda9b40_grande.jpg?v=1617028109"
        />

        <Footer
        StoreHours = "Store Hours (9am to 9pm, Tuesday-Sunday) "
        StoreLocation = "123 Cabbage Street, Beverly Hils CA 90210 "    
        StoreTelephone = "101-101-1010"    
        />
      
    </div>
  );
}

export default App;
