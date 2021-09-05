const Intern = require("../Intern");

test("Can set school via constructor", () => {
    const testValue = "UCF";
    const e = new Intern("Karen", 1, "test@email.com", testValue);
    expect(e.school).toBe(testValue);
  });
  
  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Karen", 1, "test@email.com", "UCF");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get school via getSchool()", () => {
    const testValue = "UCF";
    const e = new Intern("Karen", 1, "test@email.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });