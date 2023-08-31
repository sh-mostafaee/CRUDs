export function apiFetch(endpoint: string) {
  return fetch(`https://jsonplaceholder.typicode.com/${endpoint}`).then((res) =>
    res.json()
  );
}
