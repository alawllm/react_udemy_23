import { CartItemContainer, ItemDetails } from './cart-items.styles'

const CartItem = ({ cartItem }) => {
    const { name, quantity, price, imageUrl } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <span>{name}</span>
                <span>
                    {quantity} x ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;