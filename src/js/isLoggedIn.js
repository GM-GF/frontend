import { domain } from "./api.js";
import header from "./loginPages/header2.js";

export async function isLoggedIn() {
  if (localStorage.getItem("id") && localStorage.getItem("token")) {
    try {
      const id = localStorage.getItem("id");
      const token = localStorage.getItem("token");
      let options = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const res = await fetch(`${domain()}/users/${id}`, options);
      const data = await res.json();
      if (!res.ok) {
        throw {
          status: res.status,
          statusText: res.statusText,
        };
      } else {
        if (document.querySelector("header"))
          header("header", data.body[0].name);
      }
    } catch (err) {
      localStorage.removeItem("id");
      localStorage.removeItem("token");
      window.location.href = "./login";
    }
  } else {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    window.location.href = "./login";
  }
}

export async function connected() {
  if (localStorage.getItem("id") && localStorage.getItem("token")) {
    try {
      const id = localStorage.getItem("id");
      const token = localStorage.getItem("token");
      let options = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const res = await fetch(`${domain()}/users/${id}`, options);
      if (!res.ok) {
        throw {
          status: response.status,
          statusText: response.statusText,
        };
      } else {
        window.location.href = "./home";
      }
    } catch (err) {
      localStorage.removeItem("id");
      localStorage.removeItem("token");
      window.location.href = "./login";
    }
  } else {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
  }
}
