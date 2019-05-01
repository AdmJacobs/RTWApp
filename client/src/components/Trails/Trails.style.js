import styled from 'styled-components';

export const SectionHeading = styled.h2`
  font-size: calc(28px + (46 - 28) * ((100vw - 320px) / (1700 - 320)));
  @media (min-width: 1700px) {
    font-size: 46px;
  }
  @media (max-width: 320px) {
    font-size: 28px;
  }
  color: ${props => props.white ? 'white' : '#191919'};
  .break-large {
    display: none;
  }
  @media (min-width: 768px){
    .break-large {
      display: block;
    }
  }
`;

export const Paragraph = styled.p`
  color: ${props => props.white ? 'rgba(250,250,250,0.7)' : 'rgba(25, 25, 25, 0.8)'};
  font-size: calc(16px + (20 - 16) * ((100vw - 320px) / (1700 - 320)));
  border-radius: 10px;
  width: 150px;
  @media (min-width: 1700px) {
    font-size: 20px;
  }
  @media (max-width: 320px) {
    font-size: 16px;
  }
`;
export const Hr = styled.hr`
  margin-bottom: 30px;
  @media (min-width: 576px) {
    margin-bottom: 40px;
  }
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
  @media (min-width: 1200px) {
    display: none;
  }
`;