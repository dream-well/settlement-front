export const truncateAddress = (address, dots = 6, left=5, right=6, dot = ' .') => {
    if (!address) return "";
    const match = address.match(
      new RegExp(`(0x[a-zA-Z0-9]{${left}})[a-zA-Z0-9]+([a-zA-Z0-9]{${right}})$`)
    );
    if (!match) return address;
    return `${match[1]}${dot.repeat(dots)}${match[2]}`;
};

export const filterDateRange = (rows, col, dateRange) => {
  const _dateRange = dateRange ? dateRange.map(each => new Date(each.toDateString())) : null;
  return rows.filter(row => _dateRange ? (row[col] * 1000 >= _dateRange[0].getTime() && row[col] * 1000 <= (_dateRange[1].getTime() + 24 * 3600 * 1000)): true)
}