import { useState } from 'react'
import { FormData } from '../types/form'

export function useFormLogic(totalSteps: number) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    position: '',
    challenge: '',
    CRM: '',
    industry: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

  const isNextButtonEnabled = () => {
    switch (step) {
        case 1:
            return formData.name.trim() !== ''
          case 2:
            return formData.position !== ''
          case 3:
            return formData.challenge !== ''
          case 4:
            return formData.CRM !== ''
          case 5:
            return formData.industry !== ''
          default:
            return true
        }
  }

  return {
    step,
    formData,
    setFormData,
    handleInputChange,
    nextStep,
    prevStep,
    isNextButtonEnabled
  }
} 