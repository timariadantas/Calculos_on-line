import * as S from "./ButtonStyled";

function Button({ children, event }) {
  return <button onClick={event}>{children}</button>;
}

export default Button;
