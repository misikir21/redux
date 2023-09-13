///action
const redux=require('redux')
const createstore=redux.configureStore;
const ORDERCAKE="ORDERCAKE";
function ORDERCAKE (){
return {
  tyepe:ORDERCAKE,
  quanitiy:1
}
}
///reducer

const initalState={
    numofcakes:10,
}

const reducer= (state=initalState,action)=>{
    switch(action.type){
        case ORDERCAKE:
            return{
                ...initalState,
                numofcakes:state.numofcakes -1,
            }
            default:
                return state
        }
    }
 
    const store=configureStore(reducer);
  
    console.log('initalState',store.getState()); 
    const unsub=  store.subscribe(()=>console.log('updatee state',store.getState))
    store.dispatch(ORDERCAKE())
    store.dispatch(ORDERCAKE())
    store.dispatch(ORDERCAKE())

unsub()
    