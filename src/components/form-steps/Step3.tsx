import { StepProps } from "../../types/form";
import { StyledLabel, MapContainer2, OptionButton, IdBadge } from "../styles";
import { challengeOptions } from "../../constants/formOptions";

export function Step3({ formData, setFormData }: StepProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <StyledLabel>
          ¿Cuáles son tus principales desafíos para 2024?
        </StyledLabel>
        <MapContainer2>
          {challengeOptions.map((option, index) => (
            <OptionButton
              key={index}
              onClick={() =>
                setFormData((prev) => ({ ...prev, challenge: option.name }))
              }
              className={
                formData.challenge === option.name ? "primary" : "outline"
              }
            >
              <IdBadge>{option.id}</IdBadge>
              {option.name}
            </OptionButton>
          ))}
        </MapContainer2>
      </div>
    </div>
  );
}
