import { useEffect, useState } from "react"
import axios from "axios"

export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(" https://fakestoreapi.com/products").then((resp) => {
            setProducts(resp.data)
            console.log(resp)
        })
    }, [])
    return (
        <section>
            <h3>Products</h3>
            <div className="container">
                <div className="row row-cols-4 g-3">
                    {
                        products.map((product) => (
                            <div key={product.id} className="col">
                                <div className="card h-100">
                                    <img src={product.image} className="card-img-top img-fluid" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{product.category}</li>
                                        <li className="list-group-item">${product.price}</li>
                                    </ul>
                                    <div className="card-body">
                                        <a href="#" className="card-link">Card link</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}