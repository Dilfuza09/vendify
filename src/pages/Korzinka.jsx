import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './korzinka.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

const Korzinka = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();  // Initialize navigate function

    // Update cart quantity
    const updateQuantity = (id, newQuantity) => {
        const updatedCart = cart.map((product) => {
            if (product._id === id) {
                return { ...product, quantity: newQuantity, total: newQuantity * product.price };
            }
            return product;
        });
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const increaseQuantity = (id) => {
        const product = cart.find((item) => item._id === id);
        if (product) {
            updateQuantity(id, product.quantity + 1);
        }
    };

    const decreaseQuantity = (id) => {
        const product = cart.find((item) => item._id === id);
        if (product && product.quantity > 1) {
            updateQuantity(id, product.quantity - 1);
        }
    };

    const deleteProduct = (id) => {
        const updatedCart = cart.filter((product) => product._id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Load cart data from localStorage
    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = cartData.map((product) => ({
            ...product,
            quantity: product.quantity || 1,
            total: (product.quantity || 1) * product.price,
        }));
        setCart(updatedCart);
    }, []);

    // Calculate total amount
    const totalAmount = cart.reduce((sum, product) => sum + product.total, 0);

    const handleOrderClick = () => {
        // Pass cart items and total amount to Buyurtma page via navigate
        navigate("/buyurtma", { state: { items: cart, totalAmount } });
    };

    return (
        <div className="korzinka">
            <h1 style={{color:'black'}}>Korzinka <FontAwesomeIcon icon={faCartShopping}/></h1>
            {cart.map((product, index) => (
                <div className="korzinka1" key={index}>
                    <img src={product.img} alt={product.title} />
                    <p style={{marginLeft:'10px'}}>{product.title}</p>
                    <p className="price">${product.total || product.price}</p>
                    <div className="quantity-controls">
                        <button onClick={() => decreaseQuantity(product._id)}>-</button>
                        <span style={{marginRight:"40px"}}> {product.quantity} </span>
                        <button onClick={() => increaseQuantity(product._id)}>+</button>
                    </div>
                    <button onClick={() => deleteProduct(product._id)}>Bekor qilish</button>
                </div>
            ))}
            <button onClick={handleOrderClick}><a href="/buyurtma" style={{color:'white',textDecoration:'none'}}>Buyurtma berish</a></button>
        </div>
    );
};

export default Korzinka;
