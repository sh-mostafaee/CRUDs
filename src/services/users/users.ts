import { apiFetch } from "../fetch/fetch";

export function fetchUsers() {
  return apiFetch("users");
}
