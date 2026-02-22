import { SettingsIcon } from "../partials/settingsSVG";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <h1 className="off-screen">Messaging App</h1>

      {/* ======= logged in only ========= */}
      {/* TODO: put username here! */}
      <Link to={"/"}>
        <p className="title">Welcome, [USER]!</p>
      </Link>

      <Link to={"/contacts"}>Contacts</Link>

      <Link className="settings" to={"/settings"}>
        <SettingsIcon /> Settings
      </Link>

      <form action="">
        <button type="submit">Logout</button>
      </form>

      {/* ======= logged out only ========= */}
      <Link to={"/login"}>Login</Link>
      <Link to={"/signup"}>Signup</Link>

    </header>
  )
}