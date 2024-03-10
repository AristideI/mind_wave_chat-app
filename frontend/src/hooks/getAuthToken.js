export function getAuthToken() {
  try {
    return JSON.parse(localStorage.getItem("chatToken") || "");
  } catch {
    return null;
  }
}
