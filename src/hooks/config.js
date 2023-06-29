import jwt_decode from "jwt-decode";

function config(){
  let id = null;
  const token = localStorage.getItem("jwt");

  if (token) {
    const decoded = jwt_decode(token);
    id = decoded.data;
  }

  const headers = {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  return { id, headers };
}


export default config
