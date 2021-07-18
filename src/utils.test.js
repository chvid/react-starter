import { formatAmount } from "./utils";

test("formatAmount", () => {
    expect(formatAmount(42)).toStrictEqual("42.00");
});
