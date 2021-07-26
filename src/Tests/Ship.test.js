import { expect } from "@jest/globals";
import Ship from "../Modules/Ship";

test('hit function works', () => {
    const testShip = Ship(3);
    expect(testShip.hit(2)).toStrictEqual(["", "", "X"]);
})
test('hit function rejects wrong value', () => {
    const testShip = Ship(5);
    expect(testShip.hit(-2)).toBe("Wrong input");
})
test('ship sank', () => {
    const testShip = Ship(4);
    testShip.hit(0);
    testShip.hit(1);
    testShip.hit(2);
    testShip.hit(3);
    expect(testShip.isSunk()).toBe(true);
})


