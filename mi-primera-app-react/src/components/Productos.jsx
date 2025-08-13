import productos from '../products.json'
import './Productos.css'

function Productos() {
    return (
        <main>
            {productos.map(producto => (
                <div className='producto'>
                    <img src={producto.image} alt="" />
                    <h1>{producto.title}</h1>
                    <p>{producto.description}</p>
                    <p className='price'>{producto.price}</p>
                </div>
            ))}
        </main>
    )
}

export default Productos