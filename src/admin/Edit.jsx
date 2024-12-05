import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import instance from "../axios"
import "./edit.css"

const Edit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    title: '',
    img: '',
    price: '',
  })
  console.log(product)
  useEffect(() => {
    instance.get(`mahsulotlar/${id}`).then(res => setProduct(res.data))
  }, [id])
  const handleSubmit = e => {
    e.preventDefault()
    const { _id, ...copyproduct } = product
    instance.put(`mahsulotlar/${id}`, copyproduct).then(() => {
      navigate('/all')
    })
  }
  return (
    <>
      <div className="edit">
        <h1>Edit Product</h1>
        <form onSubmit={handleSubmit} >
          <input
            type="text"
            placeholder="Name:"
            value={product.title}
            onChange={e => setProduct({ ...product, title: e.target.value })}
          /><br />
          <input
            type="text"
            placeholder="Price:"
            value={product.price}
            onChange={e => setProduct({ ...product, price: e.target.value })}
          /><br />
          <input
            type="text"
            placeholder="Img:"
            value={product.img}
            onChange={e => setProduct({ ...product, img: e.target.value })}
          /><br />
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  )
}

export default Edit