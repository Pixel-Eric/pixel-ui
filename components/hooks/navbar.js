export default function(data,config,callback=()=>{}){
    //判断data是否存在数据配置
    if(data){
        // {titile,width,href,children}
        data.forEach(cur=>{
            config['ul_data'].push(cur);
        })
        return false;
    }
    else{
        callback();
        return true;
    }
}