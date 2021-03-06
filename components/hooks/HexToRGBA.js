export default function(color,opacity) {
    return hexToRgba(color,opacity);
}

function hexToRgba(hex, opacity) {
    return 'rgba(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5)) + ','
            + parseInt('0x' + hex.slice(5, 7)) + ',' + opacity + ')';
}