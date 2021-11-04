import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import pl from '../assets/pl.png';
import en from '../assets/en.png';


const LanguageButtonStyled = styled.div`
  position: absolute;
  top: .25rem;
  left: 0;
  
`;

const ButtonStyled = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 0;
  padding: .25rem .5rem .1rem;
  margin-left: .25rem;

  :hover {
    border-radius: .25rem;
    background-color: #1f4f64;
  }

`;


const LanguageButton = () => {

  const {t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <LanguageButtonStyled>
        <ButtonStyled type="button" onClick={() => changeLanguage('pl')}>
          <img src={pl}  alt={t('language.pl')}/>
        </ButtonStyled>
        <ButtonStyled type="button" onClick={() => changeLanguage('en')}>
          <img src={en}  alt={t('language.en')}/>
        </ButtonStyled>
      </LanguageButtonStyled>
    </>
  )


};
export default LanguageButton;