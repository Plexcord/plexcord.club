import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Cursor from "./Cursor";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <Cursor />
      <header>
        <div className="logo">
          <img
            src={logo}
            width={35}
            height={35}
            onClick={() => navigate("/")}
            alt="logo"
          />
        </div>
        <ul style={{userSelect: "none"}}>
          <li>
            <div className="href" onClick={() => navigate("/download")}>
              Download
            </div>
          </li>
          <li>
            <div className="href" onClick={() => navigate("/plugins")}>
              Plugins
            </div>
          </li>
          <li>
            <div className="href" onClick={() => navigate("/faq")}>
              Faq
            </div>
          </li>
          <li>
            <a
              className="href"
              href="https://docs.plexcord.club"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              className="href"
              href="https://api.plexcord.club"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloud
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
