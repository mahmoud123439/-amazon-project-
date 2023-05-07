export const CartReducer = (cart = [], action)=>{
        if(action.type == 'ADD TO CART'){
           let tempCart = cart.filter(items => items.id == action.payload.id)
            if(tempCart < 1){
                return [...cart, action.payload ]
            }else{
                return cart
            }
        }

        if(action.type == 'REMOVE FROM CART'){
            return cart.filter(items => items.id != action.payload.id)
        }

        if(action.type == "Increment" ){
            let tempCart = cart.map((items)=>{
                 if(items.id == action.payload.id){
                     return {...items, quantity: items.quantity + 1};
                 }return items
             })
     
     
             return tempCart;
         }



         if(action.type == "Decrement"){
            let tempCart = cart.map((items)=>{
                if(items.id == action.payload.id){
                    return {...items, quantity : items.quantity - 1}
                }
                return items
            })

            return tempCart
         }

        return cart;
}