export const toUSD = (value, maximumFractionDigits = 2) => {
    return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        signDisplay: "never",
        minimumFractionDigits: 2,
        maximumFractionDigits: maximumFractionDigits,
    });
};
