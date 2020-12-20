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

