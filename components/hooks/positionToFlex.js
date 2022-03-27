export default function (position) {
    let result = {};
    switch (position) {
        case 'top':
            result['alignItems'] = 'flex-start';
            break;
        case 'left':
            result["justifyContent"] = 'flex-start';
            break;
        case 'right':
            result["justifyContent"] = 'flex-end';
            break;
        case 'center':
            result["justifyContent"] = 'center';
            result["alignItems"] = 'center';
            break;
        case 'bottom':
            result["alignItems"] = 'flex-end';
            break;
        case 'top-left':
            result["justifyContent"] = 'flex-start';
            result["alignItems"] = 'flex-start';
            break;
        case 'top-right':
            result["justifyContent"] = 'flex-end';
            result["alignItems"] = 'flex-start';
            break;
        case 'bottom-left':
            result["justifyContent"] = 'flex-start';
            result["alignItems"] = 'flex-end';
            break;
        case 'bottom-right':
            result["justifyContent"] = 'flex-end';
            result["alignItems"] = 'flex-end';
            break;
    }
    return result;
}