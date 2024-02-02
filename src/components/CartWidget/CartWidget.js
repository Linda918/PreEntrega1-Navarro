import cart from "./cart.svg";
const CartWidget = () => {
    return(
        <div className="containerIco">
            <img src={cart} alt="cart" width={"30%"}></img>
            <span className="cantCart">
                1
            </span>
        </div>
    );
}

export default CartWidget;