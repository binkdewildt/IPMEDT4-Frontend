export default function authHeader() {
  const token = JSON.parse(sessionStorage.getItem("session")).token;
  if (token) {
    return {
      "Content-Type": "application/json",
      Authorization: token,
    };
  } else {
    return {};
  }
}
