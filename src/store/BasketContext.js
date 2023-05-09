import { createContext, useReducer} from "react";

export const BasketContext = createContext({
    items:[],
})
const actionTypes = {
   ADD_BASKET:"ADD_BASKET",
   INCREMENT:"INCREMENT",
   DECREMENT:"DECREMENT",
}
const reducer = (state, action) => {
   switch (action.type) {
     case actionTypes.ADD_BASKET:
       const itemExists = state.itemsMenu.some((item) => item.id === action.payload.id);
       if (itemExists) {
         const updatedItems = state.itemsMenu.reduce((items, item) => {
           if (item.id === action.payload.id) {
             items.push({ ...item, amount: item.amount + action.payload.amount });
           } else {
             items.push(item);
           }
           return items;
         }, []);
         return { ...state, itemsMenu: updatedItems };
       } else {
         return { ...state, itemsMenu: [...state.itemsMenu, action.payload] };
       }
       case actionTypes.INCREMENT:
         const index = state.itemsMenu.findIndex((item) => item.id === action.payload);
         const updatedItem = { ...state.itemsMenu[index], amount: state.itemsMenu[index].amount + 1 };
         const updatedItems = [...state.itemsMenu];
         updatedItems[index] = updatedItem;
         return { ...state, itemsMenu: updatedItems };
       
       case actionTypes.DECREMENT:
         const decrementIndex = state.itemsMenu.findIndex((item) => item.id === action.payload);
         const decrementItem = { ...state.itemsMenu[decrementIndex], amount: state.itemsMenu[decrementIndex].amount - 1 };
         const updatedItemss = [...state.itemsMenu];
         updatedItemss[decrementIndex] = decrementItem;
         return { ...state, itemsMenu: updatedItemss };
     default:
       return state;
   }
 };
 


export  const BasketProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,{
      itemsMenu:[]
    })
    
    const addToBasket = (newItem) => dispatch({type: actionTypes.ADD_BASKET,payload: newItem})
   
    const  increment = (id) => dispatch({type: actionTypes.INCREMENT, payload: id})
    
    const  decrement = (id) => dispatch({type: actionTypes.DECREMENT, payload: id})

    const states = {
        itemsMenu: state.itemsMenu,
         addToBasket, 
         increment,
         decrement,
    }
    return <BasketContext.Provider value={states}>{children}</BasketContext.Provider>
}
