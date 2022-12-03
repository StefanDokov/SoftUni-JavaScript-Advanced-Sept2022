function createFormatter(separate, symbol, symbolFirst, formatter) {
 return (value) => formatter(separate, symbol, symbolFirst, value);
}