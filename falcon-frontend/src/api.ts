const BASE_API = "http://localhost:4000";

const usersAPI = {
  getAllUsers: async () => {
    const response = await fetch(`${BASE_API}/users`, {
      method: "GET",
    });
    const json = await response.json();
    return json;
  },

  signUp: async (name: string, email: string, password: string) => {
    const response = await fetch(`${BASE_API}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    return response.status;
  },
  logIn: async (email: string, password: string) => {
    const response = await fetch(`${BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return response.status === 200;
  },
};

export { usersAPI };
