import { useState } from "react";
import logo from "../../../../assets/images/Voltbras logo@2x.png";

import { FiltersModal } from "../FiltersModal";
import { FiltersDropDrillingProps } from "../../../../types/filters-drop-drilling-type";

import "./header.scss";

export function Header(filtersProps: FiltersDropDrillingProps) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div className="logo-content">
                <h4>Voltbras App</h4>
                <span>Pokémon Manager</span>
              </div>
            </div>
            <button onClick={toggle} className="btn btn-filter">
              Filtros
            </button>
          </div>
        </div>
      </header>

      <FiltersModal isOpen={open} handleClose={toggle} {...filtersProps} />
    </>
  );
}
