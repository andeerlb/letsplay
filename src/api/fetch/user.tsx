export async function fetchUser() {
  const res = await fetch('/api/user');
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}
