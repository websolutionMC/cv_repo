import styled, { css } from "styled-components";
import PropTypes from "prop-types";


export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(245, 245, 245, 0.2);
`;

export const MyDataWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(245, 245, 245, 0.2);
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  background-color: white;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding-top: .5rem;
  z-index: 100;
  pointer-events: none;
`;

export const LayerImg = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 101;
`;

export const MyName = styled.h1`
  font-size: 1.5rem;
  margin-top: 20px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  line-height: 1.6rem;
`;

export const Job = styled.span`
  font-size: 0.8rem;
  font-weight: 300;
`;

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 2rem 0;
    border-bottom: 1px solid rgba(245, 245, 245, 0.2);
`;


export const Title = styled.h3`
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.1rem;
    margin-bottom: 20px;
`;

export const About = styled.div`
  margin-bottom: 3rem;
  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    margin-top: 0;
  }
`;

export const YearCompany = styled.div`
  min-width: 150px;

  @media screen and (max-width: 600px) {
    min-width: 150px;
    margin-bottom: 5px;
  }

  h4 {
    margin-bottom: .5rem;
  }

  h5 {
    text-transform: uppercase;
    color: #848c90;
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;

  @media screen and (max-width:600px) {
    flex-direction: column;
  }
`;

/*







export const Content = styled.div`
  padding-top: 40px;

  ul {
    position: relative;
    margin: 0;
    padding: 0;
  }

  li {
    position: relative;
    list-style: none;
    margin: 10px 0;
    cursor: pointer;
  }
`;

export const Title = styled.h3`
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

export const Icon = styled.span`
  display: inline-block;
  width: 30px;
  font-size: 18px;
  color: #03a9fa;
`;

export const TextC = styled.span`
  color: #fff;
  font-weight: 300;
`;

export const DateEducation = styled.h5`
  color: #03a9f4;
  font-weight: 500;
  margin: 0;
`;

export const SpecEducation = styled.h4`
  color: #fff;
  font-weight: 500;
  margin: 0;
`;
export const PlaceEducation = styled.h4`
  color: #fff;
  font-weight: 300;
  margin: 0;
`;
export const Progress = styled.span`
  position: relative;
  width: 100%;
  height: ${({ skills }) => (skills ? "10px" : "6px")};
  background: ${({ skills }) => (skills ? "#f0f0f0" : "#081921")};
  display: block;
  margin-top: 5px;

  div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: #03a9f4;
  }
`;


export const Title2 = styled.h2`
  color: #003147;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;





export const SpecJob = styled.div`
  h4 {
    text-transform: uppercase;
    color: #2a7da2;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
  }
`;

export const ProjekctLogo = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  transition: height 0.25s linear;
  overflow: hidden;
  margin-bottom: 25px;
  margin-top: 25px;

  &.active {
    border: 5px solid white;
    height: 200px;
  }
`;


*/