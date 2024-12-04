import { useState } from "react"
import instance from "../axios"
import "./create.css"
import { faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Create = () => {

    const [product, setProduct] = useState({
        title: '',
        img: "",
        price: '',
    })




    const handleSubmit = (e) => {
        e.preventDefault()

        const { title, img, price } = product
        instance.post('mahsulotlar', { title, price, img, })
            .then(res => {
                setProduct(res.data)
                console.log('Product yaratildi', res.status)
            })
            .catch(err => console.log(err))
    }


    return (

        <>
            <header className='header'>
                <div className="header-h1"><b><a href="/">Vendify</a></b></div>
                <nav className='nav'>
                    <a href="/about">About</a>
                    <a href="#sale">Sale %</a>
                    <a href="/Contact">Contact</a>
                    <div className="header-icon">
                        <a href="https://t.me/Vendify_shop_bot"><FontAwesomeIcon icon={faTelegram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </nav>
            </header>
            <div className="create">
                <h1>Create Product</h1>
                <form onSubmit={handleSubmit} >

                    <input
                        type="text"
                        placeholder="Name:"
                        value={product.title}
                        onChange={e => setProduct({ ...product, title: e.target.value })}
                    /><br /><br />


                    <input
                        type="number"
                        placeholder="Price:"
                        value={product.price}
                        onChange={e => setProduct({ ...product, price: e.target.value })}
                    /><br /><br />
                    <input
                        type="text"
                        placeholder="Img:"
                        value={product.img}
                        onChange={e => setProduct({ ...product, img: e.target.value })}
                    /><br /><br />
                    <button type="submit">Yuborish</button>
                </form>
            </div>
            <footer className='footer'>
                <div className="footer2">
                    <div className="footer-icon">
                        <a href="https://t.me/Vendify_shop_bot"><FontAwesomeIcon icon={faTelegram} /></a>
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div className="footer-text">Also follow us in social networks and visit <br /> our showroom in Bruxelles.</div>
                    <div className="footer-tell">
                        Rue Montagne du Parc 4. Bruxelles <br />
                        Phone: +123 235 346 457
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Create