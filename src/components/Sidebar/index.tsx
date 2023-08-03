import "./sidebar.scss";

import source from "../../assets/svg/source.svg";
import logo from "../../assets/images/Voltbras logo@2x.png"; 
import dashboard from "../../assets/svg/dashboard-24px.svg";
import emoji_events from "../../assets/svg/emoji_events-24px.svg";
import help_outline from "../../assets/svg/help_outline-24px.svg";
import miscellaneous_services from "../../assets/svg/miscellaneous_services-24px.svg";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="navbar-brand d-flex">
        <img src={logo} alt="logo" />
        <div className="content">
          <h4>Voltbras App</h4>
          <span>Pokémon Manager</span>
        </div>
      </div>

      <ul className="nav-list">
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

      <span className="text-version">Versão 5.12.485</span>
    </aside>
  );
}
