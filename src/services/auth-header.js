export default function authHeader() {
  const token = sessionStorage.getItem("access_token");
  if (token) {
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
}
