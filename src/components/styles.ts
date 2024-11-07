import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.6rem;
  border-radius: 1.25rem;
  font-weight: 510;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  font-size: 14px;

  &.primary {
    background-color: #231331;
    color: white;

    &:disabled {
      background-color: #f0f0f0;
      color: #cccccc;
      border: 1px solid #f0f0f0;
    }
  }

  &.outline {
    background-color: transparent;
    border: 1px solid #231331;
    color: #231331;
  }
`;

export const StyledButtonText = styled.button`
  padding: 0.7rem 2rem;
  border-radius: 1.25rem;
  font-weight: 510;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 35px;
  font-size: 14px;

  &.primary {
    background-color: #231331;
    color: white;

    &:disabled {
      background-color: #f0f0f0;
      color: #cccccc;
      border: 1px solid #f0f0f0;
    }
  }

  &.outline {
    background-color: transparent;
    border: 1px solid #231331;
    color: #231331;
  }

  svg {
    color: #13847b;
  }
`;

export const StyledInput = styled.input`
  height: 24px;
  width: 80%;
  border: none;
  border-bottom: 1px solid #231331;
  font-family: "SF Pro", sans-serif;
  background-color: transparent;

  &::placeholder {
    font-family: "SF Pro", sans-serif;
    font-size: 17px;
    font-weight: 110;
    line-height: 20.29px;
    text-align: left;
    color: #231331;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  font-family: "K2D", sans-serif !important ;
  font-size: 19px;
  font-weight: 300;
  line-height: 24.7px;
  text-align: left;
  margin-bottom: 1rem;
`;

export const StyledContainer = styled.div<{ isFinalStepXl: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: ${(props) => (props.isFinalStepXl ? "#00CCBC" : "#F4F4F4")};
  min-height: 100vh;
  position: ${(props) => (props.isFinalStepXl ? "relative" : "static")};

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const StyledContentColumn = styled.div`
  flex: 1;
  min-width: 50vw;
  display: flex;
  justify-content: center;
`;

export const StyledImageColumn = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: block;
    flex: 1;
    position: relative;
  }
`;

export const StyledImage = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
`;

export const StyledImageMobile = styled.img`
  margin-left: 10px;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const StyledMobileHeader = styled.div`
  position: relative;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;

  @media (min-width: 769px) {
    width: 50%;
    margin: auto;
    min-height: auto;
  }
`;

export const StyledCardHeader = styled.div`
  background-image: url(/mobile-image.png);
  background-size: cover;
  background-position: center;
  margin-left: 10px;
  height: 213px;
`;

export const StyledCardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const StyledCardContent = styled.div`
  margin: 2.18rem;
  @media (min-width: 769px) {
    width: 70%;
    margin: auto;
  }
`;

export const StyledCardFooter = styled.div`
  margin-top: 2.18rem;
  margin-bottom: 2.18rem;
  display: flex;
  gap: 4px;
`;

export const MapContainer = styled.div<{ isOdd: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;

  > div:last-child {
    ${({ isOdd }) => isOdd && `grid-column: 1 / -1;`}
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
    > div:last-child {
      ${({ isOdd }) => isOdd && `grid-column: auto;`}
    }
  }
`;

export const MapContainer2 = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;

@media (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
`;

export const MapItem = styled.div`
  background-color: #f2f2f2;
  padding: 16px;
  border-radius: 8px;
`;

export const StyledOption = styled.div`
  border-radius: 1.25rem;
  font-weight: 400;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 13.13px;
  font-size: 11px;
  height: 39px;

  &.primary {
    background-color: #231331;
    color: white;
  }

  &.outline {
    background-color: transparent;
    border: 1px solid #231331;
    color: #231331;
  }
`;

export const IdBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  width: 24px;
  height: 24px;
  border-radius: 1.25rem;
  font-weight: 500;
  background-color: #00ccbc;
  color: white;
  flex-shrink: 0;
  padding: 0.2rem;
`;

export const OptionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 0.1rem 0.2rem; 
  border-radius: 1.25rem;
  font-weight: 400;
  cursor: pointer;
  line-height: 13.13px;
  font-size: 11px;
  height: 39px;

  &.primary {
    background-color: #231331;
    color: white;
  }

  &.outline {
    background-color: transparent;
    border: 1px solid #231331;
    color: #231331;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: #f4f4f4;

  @media (min-width: 769px) {
    height: 8px;
  }
`;

export const ProgressFill = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: #231331;
  transition: width 0.3s ease-in-out;
`;

export const StepsCount = styled.p`
  position: absolute;
  top: 20px;
  right: 20px;
  font-weight: 700;
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 0;

  /* Estilo para el primer número y la barra */
  & > span:first-child {
    font-weight: 590;
    line-height: 1;
    font-size: 18px;
    margin-right: 4px; /* Espacio entre el primer número y la barra */
  }

  /* Estilo para la barra vertical */
  & > span.separator {
    font-size: 18px;
    line-height: 1;
    margin: 0 4px; /* Espacio a ambos lados de la barra */
  }

  /* Estilo para el número total */
  & > span:last-child {
    font-size: 10px;
    margin-left: 4px;
    line-height: 1;
    padding-top: 4px; /* Ajusta este valor para alinear con el número más grande */
  }
`;

export const StyledLogo = styled.img`
  margin-bottom: 2.18rem;
`;
