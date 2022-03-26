export default function (align) {
    let result = {
        container:{justifyContent:align},
        tab:{}
    } ;
    switch (align) {
        case 'uniform':
            result.container.justifyContent = 'space-evenly';
            result.tab['flex'] = 1;
            break;
        case 'right':
            result.container.justifyContent = 'flex-end';
            break;
        case 'left':
            result.container.justifyContent = 'flex-start';
    }
    return result;
}