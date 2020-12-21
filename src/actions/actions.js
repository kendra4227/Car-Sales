

//ACTION TYPES
export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

// ACTION CREATOR
export const addFeature = (feature,price) => {
  console.log(feature) 
   return{
        type:'ADD_FEATURE',
    payload:feature,
    car:price
    }
}

export const removeFeature = (feature,price) => {
    return{
        type:'REMOVE_FEATURE',
        payload:feature,
        car:price
    }
}


