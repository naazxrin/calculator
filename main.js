const display=(content)=>{
    result.value+=content
}
const evaluteExpr =()=>{
    try{
        result.value=eval(result.value)
    }catch{
        result.value="Invalid Expression"
    }
}