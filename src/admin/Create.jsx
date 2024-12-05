import { useState } from "react"
import instance from "../axios"
import "./create.css"
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
        </>
    )
}

export default Create