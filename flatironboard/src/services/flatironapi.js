export function login(params) {
  return fetch("http://localhost:3000/signin", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  }).then(res => res.json());
}

export function signup(params) {
  return fetch("http://localhost:3000/signup", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  }).then(res => res.json());
}

export function currentUser() {
  return fetch("http://localhost:3000/me", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
    }
  }).then(res => res.json());
}

export function logOut() {
  localStorage.removeItem("jwtToken");
}
