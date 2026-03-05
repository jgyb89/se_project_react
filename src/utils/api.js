import { defaultClothingItems } from "./constants";

const baseUrl = import.meta.env.MODE === "production" 
  ? "https://my-json-server.typicode.com/jamesgreen/se_project_react" 
  : "http://localhost:3001";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

// GET /items
export function getItems() {
  return fetch(`${baseUrl}/items`)
    .then(checkResponse)
    .catch((err) => {
      console.error("API Error, falling back to static data:", err);
      return defaultClothingItems;
    });
}

// POST /items
export function addItem({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(checkResponse);
}

// DELETE /items/:id
export function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(checkResponse);
}
