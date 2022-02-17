export default function(position){
    let pares = position.split('-');
    let config = determination(pares);
    return config;
}

function determination(str){
    //functiono params list
    let horizontal = false;
    let vertical = false;
    let h_pog = 1;
    let v_pog = 1;
    let is_center = false;
    let style = {};

    //用于水平位置的处理
    switch(str[0]){
        case 'right':
            style['right'] = 0;
            horizontal = true;
            break;
        case 'left':
            style['left'] = 0;
            h_pog *=-1;
            horizontal = true;
            break;
        case 'center':
            if(str.length != 1){
                style['left'] = '50%';
            }else{
                throw new Error('position`s param center is not single param,you need use center-top or center-bottom.')
            }
            break;
        default:
            throw new Error('Position value ss invalid');
    }
    //用于垂直位置的处理
    switch(str[1]){
        case 'top':
            style['top'] = 0;
            vertical = true;
            break;
        case 'bottom':
            style['bottom'] = 0;
            vertical = true;
            v_pog *= -1;
            break;
    }

    //位置的校正
    if(horizontal && !is_center){
        //处理水平轴居中
        if(!vertical){
            style['top'] = '50%';
        }
        style['transform'] = `translate(${h_pog*120}%,${vertical ? v_pog*-50 : -50 }%)`;
    }else{
        style['transform'] = `translate(-50%,${v_pog*-50}%)`;
    }
    return style;
}