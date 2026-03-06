import { defaultClothingItems } from "./constants";

const baseUrl = import.meta.env.MODE === "production" 
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

// GET /items
export function getItems() {
  return request(`${baseUrl}/items`).catch((err) => {
    console.error("API Error, falling back to static data:", err);
    return defaultClothingItems;
  });
}

// POST /items
export function addItem({ name, imageUrl, weather }) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  });
}

// DELETE /items/:id
export function deleteItem(id) {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  });
}
