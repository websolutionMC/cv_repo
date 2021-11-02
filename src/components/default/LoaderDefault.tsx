import styled from "styled-components";

const LoaderDefault = () => {
  return (
    <FallbackContainer>
      Loading...
    </FallbackContainer>
  )
}

export default LoaderDefault;

const FallbackContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;