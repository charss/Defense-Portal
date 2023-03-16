const request = require("supertest");

const app = require("../app");

test("Environment File should be .env.test", () => {
  expect(process.env.TRY).toBe("TEST ENV FILE");
});

