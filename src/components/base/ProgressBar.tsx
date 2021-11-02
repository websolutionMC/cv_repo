import styled from "styled-components";
import PropTypes from "prop-types";

interface ProgressSize{
  small?: boolean; 
}

const ProgressStyled = styled.span<ProgressSize>`
  position: relative;
  width: 100%;
  height: ${({ small }) => (small ? "10px" : "6px")};
  background: ${({ small }) => (small ? "#f0f0f0" : "#4db8c9")};
  display: block;
  margin-top: 5px;
  border: 1px solid #747474;

  @keyframes progress-bar-stripes {
    from  { background-position: 1rem 0; }
    to    { background-position: 0 0; }
  }
`;

const ProgressBarBgStyled = styled.div`
  position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-image: linear-gradient(
      45deg,rgba(255,255,255,.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255,255,255,.15) 50%,
      rgba(255,255,255,.15) 75%,
      transparent 75%,transparent
      );
    background-size: 1rem 1rem;    
    transition: width .6s ease;
    background-color: #03a9f4;
    animation: progress-bar-stripes 1s linear infinite;
`;


type ChildProps = {
  percent: number
}

const ProgressBarBg : React.FC<ChildProps> = ({percent}) => {
  return (
    <ProgressBarBgStyled style={{ width: `${percent}%` }}></ProgressBarBgStyled>
  )
}

ProgressBarBg.propTypes = {
	percent: PropTypes.number.isRequired,
};

interface ProgressInterface{
  percent: number,
  small?: boolean
}


const Progress: React.FC<ProgressInterface> = ({percent, small}) => {
  return (
    <ProgressStyled small>
      <ProgressBarBg percent={percent}></ProgressBarBg>
    </ProgressStyled>
  )
}

Progress.propTypes = {
  percent: PropTypes.number.isRequired,
  small: PropTypes.bool,
}

Progress.defaultProps = {
	percent: 0,
  small: false
};


export default Progress;