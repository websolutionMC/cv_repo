import 'react-i18next';

import DefaultTag from './components/defaultStyle'
import Container from './components/default/Container';
import avatar from './assets/avatar.png';

import LeftColumn from './components/default/LeftColumn';
import RightColumn from './components/default/RightColumn';
import LanguageButton from './components/LanguageButton';
import Progress from './components/base/ProgressBar';

import { MyDataWrapper, Img, LayerImg, ImgWrapper, MyName, Job, ContactWrapper, Title, About, Wrapper, YearCompany, InfoCompany } from './components/Components.group';
import './App.css';
import { data } from './data/data';

import { useTranslation } from 'react-i18next';
import React from 'react';


const App: React.FC = () => {

  const { t } = useTranslation();

  const myDate = data.pl;

  return (
    <>
      <DefaultTag></DefaultTag>
      <Container>
        <LeftColumn>
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
          <ContactWrapper>
            <Title>
              {t("titles.contact")}
            </Title>
          </ContactWrapper>
        </LeftColumn>
        <RightColumn>
          <LanguageButton></LanguageButton>
          <About>
            <Title>{t("titles.aboutMe")}</Title>
            <p>{myDate.aboutMe}</p>
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
                  <Progress percent={item.percent}></Progress>
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
