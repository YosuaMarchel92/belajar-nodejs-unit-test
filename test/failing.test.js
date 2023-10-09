import { sayHello } from "../src/say-hello"

test ("sayHello success", () => {
    expect(sayHello("Eko")).toBe("Hello Eko");
});

test.failing("sayHello error", () => {
    sayHello(null);
});

test("sayHello error matcher", () => {
    expect(() => sayHello(null)).toThrow();
});