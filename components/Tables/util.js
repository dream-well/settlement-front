
export function getCellText(row, col) {
    if(typeof col.value == 'string') {
        switch(typeof row[col.value]) {
            case 'string':
                return row[col.value];
            case 'undefined':
            case 'number':
                return '';
        }
        return row[col.value].toString();
    }
    if(typeof col.value == 'function') 
        return col.value(row);
}