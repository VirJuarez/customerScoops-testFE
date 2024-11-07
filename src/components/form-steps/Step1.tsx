import { StepProps } from '../../types/form.ts'
import { StyledLabel, StyledInput } from '../styles'

export function Step1({ formData, handleInputChange }: StepProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <StyledLabel htmlFor="name">
          Muchas gracias por tu interés en conocer <strong>customerScoops</strong> que a través de Formularios Conversacionales Inteligente te ayudamos 
a aumentar el revenue y rentabilidad de tu negocio.
        </StyledLabel>
        <StyledLabel>Queremos conocerte, ¿cuál es tu nombre?</StyledLabel>
        <StyledInput
          id="name"
          name="name"
          placeholder='Nombre'
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
  )
} 