import classNames from "classnames";
import "./Navigator.scss";

function Navigator({ currentViewport, selectViewport, sections }) {
  return (
    <div className="navigator">
      <ul>
        {sections.map((section, index) => (
          <li
            className={classNames("navigator-item", {
              "navigator-item-active": index === currentViewport,
            })}
            onClick={() => selectViewport(index)}
          >
            <div className="vertical-line"></div>
            <p className="navigator-item-text text-extra-small">
              {section.toUpperCase()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigator;
