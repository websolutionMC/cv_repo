import 'react-i18next';
import i18n from 'i18next';


import DefaultTag from './components/defaultStyle'
import Container from './components/default/Container';
import avatar from './assets/avatar.png';

import LeftColumn from './components/default/LeftColumn';
import RightColumn from './components/default/RightColumn';
import LanguageButton from './components/LanguageButton';
import Progress from './components/base/ProgressBar';
import Contact from './components/default/Contact';

import { MyDataWrapper, Img, LayerImg, ImgWrapper, MyName, Job, AboutLeft, Title, About, Wrapper, YearCompany, InfoCompany, LanguageInfo } from './components/Components.group';
import './App.css';
import { data_pl } from './data/data_pl';
import { data_en } from './data/data_en';

import { useTranslation } from 'react-i18next';
import React from 'react';


const App: React.FC = () => {

  const { t } = useTranslation();

  const getLanguage = () => i18n.language;

  const lng = getLanguage();

  let myDate = data_pl;

  switch (lng) {
    case 'pl':
      myDate = data_pl;
      break;
    case 'en':
      myDate = data_en;
      break;
    default:

  }

  return (
    <>
      <DefaultTag></DefaultTag>
      <Container>
        <LeftColumn>
          <LanguageButton></LanguageButton>
          <MyDataWrapper>
            <ImgWrapper>
              <LayerImg></LayerImg>
              <Img src={avatar} alt="avatar" />
            </ImgWrapper>
            <MyName>
              {myDate.name} {myDate.surname} <br />
              <Job>{myDate.job}</Job>
            </MyName>
          </MyDataWrapper>
          <AboutLeft>
            <Title>{t("titles.contact")}</Title>
            <Contact data={myDate.contact}></Contact>
          </AboutLeft>
          <AboutLeft>
            <Title>{t("titles.languages")}</Title>

            {myDate.languages.map((item, index) => (
              <div>
                <React.Fragment key={index}>
                  <LanguageInfo>
                    {item.name}: {' '}
                    <span>{t("foreignLanguages.read")}:</span> {item.read}, {' '}
                    <span>{t("foreignLanguages.speak")}:</span> {item.speaking}
                  </LanguageInfo>
                  <Progress
                    small
                    percent={item.percent}
                    animated={false}
                  >
                  </Progress>
                </React.Fragment>
              </div>
            ))}
          </AboutLeft>
        </LeftColumn>
        <RightColumn>
          <About>
            <Title>{t("titles.aboutMe")}</Title>
            <p>{myDate.aboutMe}</p>
            {myDate.motto && (
              <>
                <p>{t('motto')}</p>
                <blockquote>{myDate.motto}</blockquote>
              </>
            )}
          </About>
          <About>
            <Title>
              {t("titles.education")}
            </Title>
            {
              myDate.education.map((item, index) => (
                <Wrapper key={index}>
                  <YearCompany>
                    <h5>
                      {item.date.start} - {item.date.end}
                    </h5>
                  </YearCompany>
                  <InfoCompany>
                    <h4>{item.name}</h4>
                    <p>{item.specification}</p>
                  </InfoCompany>
                </Wrapper>
              ))
            }
          </About>
          <About>
            <Title>{t("titles.experience")}</Title>
            {
              myDate.experience.map((item, index) => (
                <Wrapper key={index}>
                  <YearCompany>
                    <h5>
                      {item.date.start} - {item.date.end}
                    </h5>
                    <h5>{item.name}</h5>
                  </YearCompany>
                  <InfoCompany>
                    <h4>{item.job}</h4>
                    <p>{item.info.join(', ')}</p>
                  </InfoCompany>
                </Wrapper>
              ))
            }
          </About>
          <About>
            <Title>{t("titles.skills")}</Title>
            <Wrapper skills>
              {myDate.skills.map((item, index) => (
                <React.Fragment key={index}>
                  <h4>{item.name}</h4>
                  <Progress
                    percent={item.percent}
                    animated={true}
                  >
                  </Progress>
                </React.Fragment>
              ))}
            </Wrapper>

          </About>
        </RightColumn>

      </Container>
    </>
  );
}

export default App;
