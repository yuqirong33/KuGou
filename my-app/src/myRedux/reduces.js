import { combineReducers } from 'redux';
function reducer (state={
    loading:false
},action){
    switch (action.type) {
        case "ON":
            // console.log('有没有')
            return Object.assign({},{loading:true})
        case "OFF":
            return Object.assign({},{loading:false});//Object.assign({},{loading:false});
            //JSON.parse(JSON.stringify(Object.assign({},{loading:false})));
        default: return state;
    }
}


const Reducers = combineReducers({
    reducer
});

export default Reducers;


