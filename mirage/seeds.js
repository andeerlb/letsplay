export function seeds(server) {
  server.create("user", {
    id: 1,
    name: "Anderson",
    lastName: "Babinski",
    age: "29",
  });

  server.create("setting", {
    id: 1,
    theme: "system",
    language: "en"
  });
}