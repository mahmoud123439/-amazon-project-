
 import { useContext } from 'react';
import './Products.css';
 import { SetIdContext } from './SetIdContext';
import { useSelector, useDispatch } from 'react-redux';

const Products = ({AllApiProducts}) => {

    const cart = useSelector(state => state);
    const dispacth = useDispatch();

    const id = useContext(SetIdContext);

  let AllData =   AllApiProducts.map((items)=>{
    items.quantity = 1;
        return(
            <div className='items' key={items.id}>
                    <img src={items.image} className="product__Img" /> 

<div className="product__Sponser">
    <p>{items.title}</p>
    <a href="">{items.description.substring(0, 100)}</a>
    <p>{items.category}</p>
    <p>{items.rating.rate}</p>
    <p>{Math.ceil(items.rating.rate) == 1 ? '⭐': Math.ceil(items.rating.rate) == 2 ? '⭐⭐' :
    Math.ceil(items.rating.rate) == 3 ? '⭐⭐⭐' :
    Math.ceil(items.rating.rate) == 4 ? '⭐⭐⭐⭐':
    Math.ceil(items.rating.rate) == 5 ? '⭐⭐⭐⭐⭐' : '✩✩✩✩✩'
    }</p>
    <p>{items.price}$</p>
    <p>Exclusive to Amazon</p>
</div>

<button className="product_addBtn" onClick={()=>dispacth({type: 'ADD TO CART', payload: items })} >Add to Cart</button>

                    </div>
        )
    })

    return ( 
        <div className="products" >
                    
                    
                    <div className='products__Items'>


                        

                    



                {AllData}

                   
                   




                    
                    












                    </div>
        </div>
     );
}
 
export default Products;