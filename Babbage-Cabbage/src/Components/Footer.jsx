function Footer(props){
    return(
        <div id="FooterContainer">
            <h1>{props.StoreHours}</h1>
            <h1>{props.StoreLocation}</h1>
            <h1>{props.StoreTelephone}</h1>   
        </div>
    )
}

export default Footer;