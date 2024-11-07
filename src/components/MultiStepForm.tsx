import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
} from "./form-steps";
import { useFormLogic } from "../hooks/useFormLogic";
import useMediaQuery from "../hooks/mediaQuery";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import {
  StyledButton,
  StyledCardContent,
  StyledCard,
  StyledCardFooter,
  StyledContainer,
  StyledContentColumn,
  StyledImageColumn,
  StyledImage,
  StyledMobileHeader,
  StyledImageMobile,
  ProgressBar,
  ProgressFill,
  StepsCount,
  StyledLogo,
  StyledButtonText,
} from "./styles";

export default function MultiStepForm() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const totalSteps = 6;
  const {
    step,
    formData,
    setFormData,
    handleInputChange,
    nextStep,
    prevStep,
    isNextButtonEnabled,
  } = useFormLogic(totalSteps);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === totalSteps) {
      window.location.href = "https://www.customerscoops.com/";
    }
  };

  const renderStepContent = () => {
    const stepProps = { formData, handleInputChange, setFormData };

    switch (step) {
      case 1:
        return <Step1 {...stepProps} />;
      case 2:
        return <Step2 {...stepProps} />;
      case 3:
        return <Step3 {...stepProps} />;
      case 4:
        return <Step4 {...stepProps} />;
      case 5:
        return <Step5 {...stepProps} />;
      case 6:
        return <Step6 />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-screen max-h-screen">
      <ProgressBar>
        <ProgressFill progress={(step - 1) * 20} />
      </ProgressBar>
      <StyledContainer isFinalStepXl={step === totalSteps && !isMobile}>
        <StyledContentColumn>
          <StyledCard>
            <StyledMobileHeader>
              <StyledImageMobile src="/mobile-image.png" alt="Header Image" />
              <StepsCount>
                <span>{step.toString().padStart(2, "0")}</span>
                <span className="separator">|</span>
                <span>{totalSteps.toString().padStart(2, "0")}</span>
              </StepsCount>
            </StyledMobileHeader>
            <StyledCardContent>
              {!isMobile && <StyledLogo src="/logo.png" />}
              <form onSubmit={(e) => e.preventDefault()}>
                {renderStepContent()}
              </form>
              <StyledCardFooter>
                {step > 1 && step < totalSteps && (
                  <StyledButton onClick={prevStep} className="outline">
                    <IoArrowBack size={16} />
                  </StyledButton>
                )}
                {step < totalSteps ? (
                  <StyledButtonText
                    onClick={nextStep}
                    className="primary"
                    disabled={!isNextButtonEnabled()}
                  >
                    {step === 1 ? "Comenzar" : "Siguiente"}
                    {step !== 1 && !isMobile ? <IoArrowForward size={16} />: null}
                  </StyledButtonText>
                ) : (
                  <StyledButtonText onClick={handleSubmit} className="primary">
                    Finalizar
                  </StyledButtonText>
                )}
              </StyledCardFooter>
            </StyledCardContent>
          </StyledCard>
        </StyledContentColumn>
        {!isMobile && (
          <StyledImageColumn>
            <StyledImage src="/laptop-image.png" alt="Step Image" />
            <StepsCount>
              <span>{step.toString().padStart(2, "0")}</span>
              <span className="separator">|</span>
              <span>{totalSteps.toString().padStart(2, "0")}</span>
            </StepsCount>
          </StyledImageColumn>
        )}
      </StyledContainer>
    </div>
  );
}
