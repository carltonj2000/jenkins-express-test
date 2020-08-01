const app = require("./app");
const request = require("supertest");

test("/", () =>
  request(app)
    .get("/")
    .expect(200)
    .then((res) => expect(res.text).toBe("Saw path / on host 127.0.0.1.")));

test("/hi", () =>
  request(app)
    .get("/hi")
    .expect(200)
    .then((res) => expect(res.text).toBe("Saw path /hi on host 127.0.0.1.")));

test("/h not hi", () =>
  request(app)
    .get("/h")
    .expect(200)
    .then((res) =>
      expect(res.text).not.toBe("Saw path /hi on host 127.0.0.1.")
    ));
