export function seeds(server) {
  server.create("user", { id: 1, name: "Alice" });
  server.create("user", { id: 2, name: "Bob" });
}