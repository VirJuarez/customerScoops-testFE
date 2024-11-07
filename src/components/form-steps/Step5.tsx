import { StepProps } from '../../types/form'
import { StyledLabel, StyledOption, MapContainer } from '../styles'
import { industryOptions } from '../../constants/formOptions'

export function Step5({ formData, setFormData }: StepProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <StyledLabel><strong>Ahora te vamos a sorprender...</strong><br/>
        ¿A cuál industria pertenece tu empresa?</StyledLabel>
        <MapContainer isOdd={industryOptions.length % 2 !== 0}>
          {industryOptions.map((option, index) => (
            <StyledOption
              key={index}
              onClick={() => setFormData(prev => ({ ...prev, industry: option.name }))}
              className={formData.industry === option.name ? 'primary' : 'outline'}
            >
              {option.name}
            </StyledOption>
          ))}
        </MapContainer>
      </div>
    </div>
  )
} 