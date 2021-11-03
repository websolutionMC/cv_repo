import styled, { css } from "styled-components";
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
  box-shadow: 3px 5px 4px -2px rgb(156 156 156);

  @keyframes progress-bar-stripes {
    from  { background-position: 1rem 0; }
    to    { background-position: 0 0; }
  }
`;

interface Animated {
  animated?: boolean
}

const ProgressBarBgStyled = styled.div<Animated>`
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
    
    ${({ animated }) =>
    animated &&
      css`
        animation: progress-bar-stripes 1s linear infinite;
      `
    }
    `;

const ProgressBarValue = styled.span`
    font-weight: bold;
    font-size: .5rem;
    left: 50%;
    color: whitesmoke;
    position: absolute;
    top: 1px;

`;



type ChildProps = {
  percent: number,
  animated?: boolean
}

const ProgressBarBg : React.FC<ChildProps> = ({percent, animated}) => {
  return (
    <ProgressBarBgStyled animated={animated} style={{ width: `${percent}%` }}>
      <ProgressBarValue>
        {percent} %
      </ProgressBarValue>
    </ProgressBarBgStyled>
  )
}

ProgressBarBg.propTypes = {
	percent: PropTypes.number.isRequired,
  animated: PropTypes.bool,
};

ProgressBarBg.defaultProps = {
	percent: 0,
  animated: false
};

interface ProgressInterface extends ChildProps{
  small?: boolean,
}


const Progress: React.FC<ProgressInterface> = ({percent, small, animated}) => {
  
  return (
    <ProgressStyled small>
      <ProgressBarBg animated={animated}  percent={percent}></ProgressBarBg>
    </ProgressStyled>
  )
}

Progress.propTypes = {
  percent: PropTypes.number.isRequired,
  small: PropTypes.bool,
  animated: PropTypes.bool,
}

Progress.defaultProps = {
	percent: 0,
  small: false,
  animated: false
};


export default Progress;