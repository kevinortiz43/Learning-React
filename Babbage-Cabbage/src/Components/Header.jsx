function Header(props){
    return(
        <div id="HeaderContainer">
            <h1>{props.CompanyName}</h1>
            <h2>{props.EventName}</h2>
            <h3>{props.EventDate}</h3>
            <img class="DiscountImage" src={props.image}></img>
            
        </div>
    );
}

export default Header;