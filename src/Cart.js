import { useSelector, useDispatch } from "react-redux";
import './Cart.css'

const Cart = ()=>{


    const cart = useSelector(state => state);
    const dispatch = useDispatch();

    // const id = useContext(SetIdContext);


    const addition = (accumlator, currentValue)=>{
        return accumlator + currentValue.price * currentValue.quantity
    }

    const TotalAddition = cart.reduce(addition, 0)

  let AllData =   cart.map((items)=>{

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
    <p>{items.price * items.quantity }$</p>
    <p>Exclusive to Amazon</p>
</div>

<button className="product_remvBtn" onClick={()=>dispatch({type: 'REMOVE FROM CART', payload: items })} >Remove</button>

<button style={{marginLeft: "10px"}} onClick={()=>dispatch({type: 'Increment', payload: items })}>+</button>
{items.quantity}
{items.quantity > 1 ? <button onClick={()=>dispatch({type: 'Decrement', payload: items})} style={{marginLeft: "10px"}}>-</button>
: <button onClick={()=>dispatch({type: 'REMOVE FROM CART', payload: items})} style={{marginLeft: "10px"}}>-</button>
}

                    </div>
        )
    })

    return ( 
        <div className="products" >
                    
                    <p>{ "SubTotal : " + TotalAddition}</p>

                    <div className='products__Items'>


                    

                    
                    


            
                {AllData.length == 0 ? <img  src='https://thumbs.gfycat.com/MasculineNauticalCockatiel-max-1mb.gif' /> : AllData}

                   


            
                    
                    











                </div>
                    
        </div>
     );

}

export default Cart;