export type FormData = {
  name: string
  position: string
  challenge: string
  CRM: string
  industry: string
}

export type StepProps = {
  formData: FormData
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
} 