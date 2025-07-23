export function seeds(server) {
  server.create("user", {
    id: 1,
    givenName: "ExampleName",
    surname: "ExampleSurname",
    nickname: "example",
    email: "anderson@example.com",
  });

  server.create("setting", {
    id: 1,
    theme: "dark",
    language: "en"
  });
}