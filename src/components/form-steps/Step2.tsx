import { StepProps } from "../../types/form.ts";
import { StyledLabel, StyledOption, MapContainer } from "../styles";
import { positionOptions } from "../../constants/formOptions";

export function Step2({ formData, setFormData }: StepProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <StyledLabel>
          <strong>Genial {formData.name},</strong> ahora nos gustaría tener
          cierta info para diseñar una gran propuesta de valor para ti:
        </StyledLabel>
        <StyledLabel>
          ¿Cuál es tu cargo/posición dentro de tu empresa?
        </StyledLabel>
        <MapContainer isOdd={positionOptions.length % 2 !== 0}>
          {positionOptions.map((option, index) => (
            <StyledOption
              key={index}
              onClick={() =>
                setFormData((prev) => ({ ...prev, position: option.name }))
              }
              className={
                formData.position === option.name ? "primary" : "outline"
              }
            >
              {option.name}
            </StyledOption>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
