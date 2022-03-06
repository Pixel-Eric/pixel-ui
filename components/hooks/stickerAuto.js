export default function (option) {
    //接收用户配置信息
    let userOption = option;
    if (userOption == null) return {};
    //解析用户信息
    let result = Parse(userOption);
    //返回解析后的信息
    return result;
}

function Parse(option) {
    //检查是否配置mode属性
    if (option?.mode === 'key') {
        if (option?.key) {
            return {
                key: option.key
            };
        } else {
            throw new Error('key mode is not found key option');
        }
    } else {
        if (option?.mode === 'config') {
            return {
                key: option.key,
                config: option.config
            };
        } else {
            throw new Error('config mode is not found config option');
        }
    }
}