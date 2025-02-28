import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="logo">
        <img
          src={logo}
          width={35}
          height={35}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
          alt="logo"
        />
      </div>
      <ul>
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
  );
};

export default Header;
