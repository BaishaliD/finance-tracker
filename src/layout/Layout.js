import "./Layout.scss";
import Sidemenu from "./Sidemenu";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Sidemenu />
      <div className="body-container">{children}</div>
    </div>
  );
}
