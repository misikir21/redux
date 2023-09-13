///action
const redux=require('redux')
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
        case ORDERCAKE:{
            return{
                ...initalState,
                numofcakes:state.numofcakes -1,
            }
            default:
                return state
        }
    }
