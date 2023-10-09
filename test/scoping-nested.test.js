beforeAll(() => console.info("Before All Outer"));
afterAll(() => console.info("After All Outer"));
beforeEach(() => console.info("Before Each Outer"));
afterEach(() => console.info("After Each Outer"));

test("Test Outer", () => console.info("Test Outer"));

describe("Inner", () => {

    beforeAll(() => console.info("Before All Inner"));
    afterAll(() => console.info("After All Inner"));
    beforeEach(() => console.info("Before Each Inner"));
    afterEach(() => console.info("After Each Inner"));

    test("Test Inner", () => console.info("Test Inner"));

    describe("Inner Inner", () => {
        beforeEach(() => console.info("Before Each Inner Inner"));
        afterEach(() => console.info("After Each Inner Inner"));

        test("Test Inner Inner", () => console.info("Test Inner Inner"));
    })
})

describe("Inner 2", () => {

    beforeEach(() => console.info("Before Each Inner"));
    afterEach(() => console.info("After Each Inner"));

    test("Test Inner", () => console.info("Test Inner"));
})