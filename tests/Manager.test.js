const Manager = require("../Classes/Manager");

test("Can set office number via constructor argument", () => {
    const testValue = 300;
    const e = new Manager("Karen", 1, "test@email.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });
  
  test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Karen", 1, "test@email.com", 303);
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get office number via getOffice()", () => {
    const testValue = 300;
    const e = new Manager("Karen", 1, "test@email.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });