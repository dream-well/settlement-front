
export function getCellText(row, col) {
    if(typeof col.value == 'string') {
        switch(typeof row[col.value]) {
            case 'string':
                return row[col.value];
            case 'number':
                return row[col.value].toLocaleString();
            case 'undefined':
                return '';
        }
        if(isNaN(row[col.value])) return '';
        if(row[col.value] == null) return '';
        return row[col.value].toString();
    }
    if(typeof col.value == 'function') 
        return col.value(row);
}