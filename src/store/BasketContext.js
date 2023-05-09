import { useState ,createContext} from "react";

export const BasketContext = createContext({
    items:[],
})


export  const BasketProvider = ({children}) => {
    const [itemsMenu,setItemsMenu] = useState([])
    
    const addToBasket = (newItem) => {
   setItemsMenu(prev => {
   if(!prev.length){
    return [newItem]
   }

   const addItemsExist = itemsMenu.find((oldItem) => oldItem.id === newItem.id)

   if(!addItemsExist){
    return [...itemsMenu,newItem]
   }
  const updatedItems = itemsMenu.map((oldItem) => {
     if(oldItem.id === newItem.id){
        oldItem.amount = oldItem.amount + newItem.amount;
     }
     return oldItem;
  })

  return updatedItems;
    
   })
    }

    function increment(id){
        const updatedItems = itemsMenu.map((oldItem) => {
            if(oldItem.id === id){
               oldItem.amount = oldItem.amount + 1;
            }
            return oldItem;
         })
    return setItemsMenu(updatedItems)
    }

    function decrement(id){
        const updatedItems = itemsMenu.map((oldItem) => {
            if(oldItem.id === id){
               oldItem.amount = oldItem.amount - 1;
            } 
            return oldItem;
         })
    return setItemsMenu(updatedItems)
    }
    const state = {
        itemsMenu,
         addToBasket, 
         increment,
         decrement,
    }
    return <BasketContext.Provider value={state}>{children}</BasketContext.Provider>
}
