import produce from '../utils/produce';
export const  initialState = {

    //temp List
    tempList : [], 


};


//temp List
export const TEMP_REQUEST='TEMP_REQUEST';
export const TEMP_SUCCESS='TEMP_SUCCESS';
export const TEMP_FAILURE='TEMP_FAILURE';



const reducer = (state = initialState, action) => produce(state, (draft) => {

    switch(action.type){

//temp List
//--------------------------------------------------------------------
        case TEMP_REQUEST : {    
            break;
        }
        case TEMP_SUCCESS : {
            draft.btnLoading=false; 
            draft.reginValue=action.region; 
    
            //지역 정보를 바꿨을 경우 배열 초기화
            if(action.changeLocalValue){
                draft.dealerInfoList.length=0; 
            }
            draft.PerDataLength=action.data.length;
            draft.dealerInfoList=draft.dealerInfoList.concat(action.data); 
            break;

        }
        case TEMP_FAILURE: {
            draft.dealerInfoListError='서버에러 관리자에게 문의하세요'; 
            break; 
        }
//--------------------------------------------------------------------
        default : break; 
    
    }

}); 
export default reducer;