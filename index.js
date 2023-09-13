///action
const redux=require('redux')
const creatStore=redux.creatStore;
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
 
    const store=creatStore(reducer);