import PropTypes, { string } from "prop-types";

export function Button({ caption, other = "default value" }) {
  if (!caption) {
    console.error("no data");
  }

  return (
    <button
      onClick={function () {
        alert("saludo buena");
      }}
    >
      {caption} - {other}
    </button>
  );
}

export function Buttonv2({ caption, other = "other" }) {
  if (!caption) {
    console.error("no data");
  }

  return <button>{caption}</button>;
}

Button.propTypes = {
  caption: PropTypes.string.isRequired,
};

// Button.defaultProps = {
//   other: "default value",
//   // Support for defaultProps will be removed from function components in a future major release.
// };
