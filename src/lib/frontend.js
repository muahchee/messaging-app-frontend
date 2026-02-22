import dayjs from "dayjs";

class AuthService {
  //response obj {success, user, token, expiresIn}
  //when? 1. when new user registers, 2. when user logs in
  setLocalStorage(responseObj) {
    const expiryNumber = Number(responseObj.expires.slice(0, -1));
    const expiryUnit = responseObj.expires.slice(-1);

    const expires = dayjs().add(expiryNumber, expiryUnit);
    localStorage.setItem("token", responseObj.token);
    localStorage.setItem("expires", JSON.stringify(expires.valueOf()));
  }

  getCurrentUser() {
    if (this.isLoggedOut()) {
      return null;
    } else {
      const jwt = localStorage.getItem("token");
      const jwtParts = jwt.replace("Bearer ", "").split(".");
      const payload = jwtParts[1];
      const decodedPayload = JSON.parse(atob(payload));

      return decodedPayload.sub;
    }
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expires");
  }

  isLoggedIn() {
    return dayjs().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires");
    const expiresAt = JSON.parse(expiration);
    return dayjs(expiresAt);
  }
}

export const auth = new AuthService();

export function createPayload(dataObj) {
  const payload = Object.keys(dataObj)
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(dataObj[key])
    )
    .join("&");

  return payload;
}

