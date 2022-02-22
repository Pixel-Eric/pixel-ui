export default function(model,type=[],data){
    let exti = false;
    //检查模式是否存在
    type.forEach(cur=>{
        if(cur === model){
            exti = true;
        }
    });
    if(!exti){
        throw new Error('model is not found')
    }
    if(data?.length == 0 || Object.keys.length == 0){
        throw new Error('Data is Null');
    }
    return exti;
}