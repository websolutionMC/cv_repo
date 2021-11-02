import styled from "styled-components";
import { useTranslation, } from 'react-i18next';
import pl from '../assets/pl.png';
import en from '../assets/en.png';


const LanguageButtonStyled = styled.div`
  position: absolute;
  top: .25rem;
  right: .5rem;
  
`;

const ButtonStyled = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 0;
  padding: .5rem;
  margin-left: .25rem;

`;


const LanguageButton = () => {


  const {i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <LanguageButtonStyled>
        <ButtonStyled type="button" onClick={() => changeLanguage('pl')}>
          <img src={pl} />
        </ButtonStyled>
        <ButtonStyled type="button" onClick={() => changeLanguage('en')}>
          <img src={en} />
        </ButtonStyled>
      </LanguageButtonStyled>
    </>
  )


};
export default LanguageButton;