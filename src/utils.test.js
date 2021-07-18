const { formatAmount } = require("./utils");

test("formatAmount", () => {
    expect(formatAmount(42)).toStrictEqual("42.00");
});
