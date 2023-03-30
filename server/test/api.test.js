const request = require("supertest");
const app = require("../app");

require("dotenv").config();

describe("Students APIs", () => {
  describe("GET /students", () => {
    it("should return success", async () => {
      const res = await request(app).get("/students/1");
      expect(res.statusCode).toBe(200);
    });

    it("should show all students", async () => {
      const res = await request(app).get("/students");
      expect(res.body).toBeInstanceOf(Object);
    });
  });
  
  describe("GET /students/:id", () => {
    const id = 1;
    const url = `/students/${id}`;
    it("should return success", async () => {
      const res = await request(app).get(url);
      expect(res.statusCode).toBe(200);
    });
  
    it("should contain the correct property", async () => {
      const res = await request(app).get(url);
      // console.log(res.body)
      expect(res.body).toHaveProperty('last_name')
      expect(res.body).toHaveProperty('first_name')
      expect(res.body).toHaveProperty('middle_name')
      expect(res.body).toHaveProperty('group_id')
    });
  
    it("should return the correct student ID", async () => {
      const res = await request(app).get(url);
      expect(res.body.id).toBe(id);
    });
  });
});


