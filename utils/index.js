export const truncateAddress = (address, dots = 6, left=5, right=6, dot = ' .') => {
    if (!address) return "No Account";
    const match = address.match(
      new RegExp(`(0x[a-zA-Z0-9]{${left}})[a-zA-Z0-9]+([a-zA-Z0-9]{${right}})$`)
    );
    if (!match) return address;
    return `${match[1]}${dot.repeat(dots)}${match[2]}`;
};

