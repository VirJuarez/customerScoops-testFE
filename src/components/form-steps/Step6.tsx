import { StyledLabel } from "../styles";

export function Step6() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <StyledLabel>
          <strong style={{ fontSize: "30px", lineHeight: "39px" }}>
            Muchas Gracias
          </strong>
          <br />
          por querer ser parte de la familia Scoopers.
        </StyledLabel>
        <StyledLabel style={{ fontStyle: "italic" }}>
          Nos vemos pronto!
        </StyledLabel>
      </div>
    </div>
  );
}
