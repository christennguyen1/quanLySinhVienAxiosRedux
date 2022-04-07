import { BAT_LOADING, TAT_LOADING } from "../constant/QuanLySinhVienLoading";

let  initState={
    isLoading:false,
    count:0,
}

export const QuanLySinhVienLoading = (state=initState,action)=>{
    switch(action.type){
        case BAT_LOADING :{
           state.count++;
           state.isLoading=true;
            return {...state};
        }
        case TAT_LOADING :{
            state.count--;
            if(state.count<=0){
            state.isLoading=false;
            }
             return {...state};
         }
        default: 
        return {...state};
    }
}