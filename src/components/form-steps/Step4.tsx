import { StepProps } from '../../types/form'
import { StyledLabel, StyledOption, MapContainer } from '../styles'
import { CRMOptions } from '../../constants/formOptions'

export function Step4({ formData, setFormData }: StepProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <StyledLabel>¿Cuál CRM están utilizando en tu empresa?<br/> CRM:</StyledLabel>
        <MapContainer isOdd={CRMOptions.length % 2 !== 0}>
          {CRMOptions.map((option, index) => (
            <StyledOption
              key={index}
              onClick={() => setFormData(prev => ({ ...prev, CRM: option.name }))}
              className={formData.CRM === option.name ? 'primary' : 'outline'}
            >
              {option.name}
            </StyledOption>
          ))}
        </MapContainer>
      </div>
    </div>
  )
} 