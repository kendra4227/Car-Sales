import {ADD_FEATURE,REMOVE_FEATURE} from "../actions/actions"
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

export const reducer = (state=initialState,action) => {
switch(action.type){
    case ADD_FEATURE: 
    const priceUpdate = state.additionalFeatures.filter((feature) => feature.id === action.payload.id)
    return {
        ...state,
        car: {
        ...state.car,
        price: state.car.price + priceUpdate[0].price,
        features: [...state.car.features, action.payload],
        },
        additionalFeatures: state.additionalFeatures.filter(
        (feature) => feature.id !== action.payload.id
        ),
        additionalPrice: state.additionalPrice + action.payload.price,
        

    };
    case REMOVE_FEATURE:
        const newpriceUpdate = state.additionalFeatures.filter((feature) => feature.id === action.payload.id)
        return {
            ...state,
            car: {
            ...state.car,
            price: state.car.price + newpriceUpdate[0].price,
            features: state.car.features.filter(
                (feature) => feature.id !== action.payload.id
            ),
            },
            additionalFeatures: [...state.additionalFeatures, action.payload],
            additionalPrice: state.additionalPrice - action.payload.price
        };

        default:
            return state;
}
}
