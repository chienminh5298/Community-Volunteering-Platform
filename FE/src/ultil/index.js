export const toUSD = (value, maximumFractionDigits = 2) => {
    return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        signDisplay: "never",
        minimumFractionDigits: 2,
        maximumFractionDigits: maximumFractionDigits,
    });
};

export const checkFormFieldEmpty = (str) => {
    if (str.length === 0) return true;
    return false;
};
