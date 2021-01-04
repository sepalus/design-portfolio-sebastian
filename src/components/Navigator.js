import classNames from "classnames";
import "./Navigator.scss";

function Navigator({
  navigatorViewport,
  currentViewport,
  selectViewport,
  sections,
  isScrollSnapped,
  catalogIsCompressed,
}) {
  const hideButton = navigatorViewport === 1 && catalogIsCompressed;
  return (
    <div
      className={classNames("navigator", {
        "navigator-dark ": navigatorViewport === 2,
        "animate-navigator-in":
          navigatorViewport === currentViewport && isScrollSnapped,
        "animate-navigator-in-slow":
          navigatorViewport === 1 && !catalogIsCompressed,
        "animate-navigator-out":
          navigatorViewport !== currentViewport ||
          !isScrollSnapped ||
          hideButton,
      })}
    >
      <ul>
        {sections.map((section, index) => (
          <li
            className={classNames("navigator-item", {
              "navigator-item-active": index === currentViewport,
              "cursor-auto": hideButton,
            })}
            onClick={() => {
              if (hideButton) return;
              selectViewport(index);
            }}
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
