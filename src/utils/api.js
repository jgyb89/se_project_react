import { defaultClothingItems } from "./constants";

const baseUrl =
  import.meta.env.MODE === "production"
    ? "https://my-json-server.typicode.com/jamesgreen/se_project_react"
    : "http://localhost:3001";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

// GET /items (Does not need authorization)
export function getItems() {
  return request(`${baseUrl}/items`).catch((err) => {
    console.error("API Error, falling back to static data:", err);
    return defaultClothingItems;
  });
}

// POST /items (Protected)
export function addItem({ name, imageUrl, weather }, token) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  });
}

// DELETE /items/:id (Protected)
export function deleteItem(id, token) {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}

// PUT /items/:id/likes (Protected)
export function addCardLike(id, token) {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}

// DELETE /items/:id/likes (Protected)
export function removeCardLike(id, token) {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
