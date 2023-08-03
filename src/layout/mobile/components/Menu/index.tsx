import "./menu.scss";

import source from "../../../../assets/svg/source.svg";
import dashboard from "../../../../assets/svg/dashboard-24px.svg";
import emoji_events from "../../../../assets/svg/emoji_events-24px.svg";
import help_outline from "../../../../assets/svg/help_outline-24px.svg";
import miscellaneous_services from "../../../../assets/svg/miscellaneous_services-24px.svg";

export function Menu() {
  return (
    <nav className="mobile-menu">
      <div className="container">
        <ul>
          <li className="nav-item">
            <div className="menu-icon">
              <img src={source} alt="dashboard" />
            </div>
            <a href="#" className="nav-link active">
              Lista
            </a>
          </li>

          <li className="nav-item">
            <img src={emoji_events} alt="" />
            <a href="#" className="nav-link">
              Conquistas
            </a>
          </li>

          <li className="nav-item">
            <img src={dashboard} alt="" />

            <a href="#" className="nav-link">
              Pokédex
            </a>
          </li>

          <li className="nav-item">
            <img src={help_outline} alt="" />

            <a href="#" className="nav-link">
              Ajuda
            </a>
          </li>

          <li className="nav-item">
            <img src={miscellaneous_services} alt="" />

            <a href="#" className="nav-link">
              Configuração
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
