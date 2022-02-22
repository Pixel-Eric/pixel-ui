export default function(index,length){
    let nextIndex = -1;
    nextIndex = index%length+1;
    return nextIndex;
}