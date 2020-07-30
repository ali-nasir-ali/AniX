import styled from "styled-components";

const SkeletonPulse = styled.div`
  height: 100%;
  width: 100%;

  background: linear-gradient(
    -90deg,
    ${(props) => props.theme.tertiaryColor},
    ${(props) => props.theme.bg} 50%,
    ${(props) => props.theme.tertiaryColor} 100%
  );

  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;

  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

export const SkeletonLine = styled(SkeletonPulse)`
  width: 20rem;
  height: 32px;
  border-radius: 4px;

  &::before {
    content: "\\00a0";
  }
`;

export const SkeletonCard = styled(SkeletonPulse)`
  margin-top: 1rem;
  width: 185px;
  height: 265px;
  border-radius: 4px;

  @media screen and (max-width: 830px) {
    width: 145px;
    height: 205px;
  }

  @media screen and (max-width: 660px) {
    width: 180px;
    height: 230px;
  }

  @media screen and (max-width: 600px) {
    width: 150px;
    height: 200px;
  }

  @media screen and (max-width: 515px) {
    width: 130px;
    height: 180px;
  }

  @media screen and (max-width: 450px) {
    width: 120px;
    height: 160px;
  }

  @media screen and (max-width: 420px) {
    width: 175px;
    height: 240px;
  }

  @media screen and (max-width: 385px) {
    width: 160px;
    height: 220px;
  }
`;

export const SkeletonBanner = styled(SkeletonPulse)`
  width: 100%;
  height: 340px;

  @media screen and (max-width: 700px) {
    height: 200px;
  }
`;

export const SkeletonPoster = styled(SkeletonPulse)`
  width: 215px;
  height: 305px;
  border-radius: 4px;
  margin-top: -125px;
  margin-bottom: 1rem;

  @media screen and (max-width: 700px) {
    margin-top: -135px;
    width: 120px;
    height: 170px;
  }
`;

export const SkeletonDesc = styled(SkeletonLine)`
  height: 90px;
  width: 35rem;
  margin-top: 1rem;

  @media screen and (max-width: 880px) {
    height: 70px;
    width: 25rem;
  }

  @media screen and (max-width: 700px) {
    width: 99%;
    margin-bottom: 1rem;
  }
`;
