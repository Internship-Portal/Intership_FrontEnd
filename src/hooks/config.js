import jwt_decode from "jwt-decode"

function config() {
    const token =localStorage.getItem("jwt")

    const decoded = jwt_decode(token)
    const id = decoded.data

    const headers ={
        "Content-type":"multipart/form-data",
        Authorization : `Bearer ${token}`
    }
  return ({id , headers})
}

export default config
