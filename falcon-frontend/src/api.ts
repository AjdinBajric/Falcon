const BASE_API = "http://localhost:4000";

const usersAPI = {
  getAllUsers: async () => {
    const response = await fetch(`${BASE_API}/users`, {
      method: "GET",
    });
    const json = await response.json();
    return json;
  },
};

export { usersAPI };
