
export function getCellText(row, col) {
    if(typeof col.value == 'string') {
        switch(typeof row[col.value]) {
            case 'string':
                return row[col.value];
            case 'undefined':
            case 'number':
                return '';
        }
        if(isNan(row[col.value])) return '';
        return row[col.value].toString();
    }
    if(typeof col.value == 'function') 
        return col.value(row);
}