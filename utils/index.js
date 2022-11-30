
export const truncateAddress = (address, dots = 6, left=5, right=6, dot = ' .') => {
    if (!address) return "";
    const match = address.match(
      new RegExp(`(0x[a-zA-Z0-9]{${left}})[a-zA-Z0-9]+([a-zA-Z0-9]{${right}})$`)
    );
    if (!match) return address;
    return `${match[1]}${dot.repeat(dots)}${match[2]}`;
};

export const truncate = (str, dots = 6, left=6, right=6, dot = ' .') => {
  if (!str) return "";
  const match = str.match(
    new RegExp(`(.{${left}}).+(.{${right}})$`)
  );
  if (!match) return str;
  return `${match[1]}${dot.repeat(dots)}${match[2]}`;
};

export const filterDateRange = (rows, col, dateRange) => {
  const _dateRange = dateRange ? dateRange.map(each => new Date(each.toDateString())) : null;
  return rows.filter(row => _dateRange ? (row[col] * 1000 >= _dateRange[0].getTime() && row[col] * 1000 <= (_dateRange[1].getTime() + 24 * 3600 * 1000)): true)
}

export const isValidToken = (token) => {
  return true;
}

export const fetcher = async url => {
  const token = localStorage.getItem('token');
  const headers = {

  };
  if(token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  const res = await fetch(url, {
    headers: headers
  })

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    if(res.status == 401) {
      window.location.href = '/login';
    }
    const error = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object.
    error.info = await res.json()
    error.status = res.status
    throw error
  }

  return res.json()
}
