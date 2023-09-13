import "./Layout.scss";
import Sidemenu from "./Sidemenu";

export default function Layout({ heading, children }) {
  return (
    <div className="layout">
      <Sidemenu />
      <div className="body-container">
        <div className="heading">
          <span>{heading}</span>
        </div>
        {children}
      </div>
    </div>
  );
}
