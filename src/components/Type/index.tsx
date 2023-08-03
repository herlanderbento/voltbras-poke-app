import icon from "../../assets/svg/Icons-Type-Base-Bas-013.svg";

import "./type.scss";

type TypeComponentProps = {
  name: string;
  isChoosed: boolean;
  handleChangeChoosedState: (pokeType: string) => void;
};

export function Type({
  name,
  isChoosed,
  handleChangeChoosedState,
}: TypeComponentProps) {
  return (
    <div
      className={`type-content ${isChoosed ? "active" : ""}`}
      onClick={() => handleChangeChoosedState(name)}
      data-testid="type-content"
    >
      <div className="checkbox">
        <img src={icon} alt="icon" />
      </div>
      <label> {name} </label>
    </div>
  );
}
