const ADD_FEATURE = 'ADD_FEATURE'

function addFeature(){
    return{
        type:'ADD_FEATURE',
    info:'First redux action' 
    }
}

const REMOVE_FEATURE = 'REMOVE_FEATURE'

function removeFeature(){
    return{
        type:'REMOVE_FEATURE',
        info:'2nd redux action'
        
    }
}

const UPDATE_TOTAL = 'UPDATE_TOTAL'

function updateTotal() {
    return {
        type:'UPDATE_TOTAL',
        info:'3rd redux action'
    }
}

//(previousState,action) => newState

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}
