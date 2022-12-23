import styled from 'styled-components';

export const DisplaySectionContainer = styled.div`
  .first {
    background: #f6f6f6;
  }
  .third {
    background: #f6f6f6;
    div:last-child {
      background-image: url('/uploads/Rectangle2876.png');
    }
  }
  .second {
    p,
    h2 {
      direction: ltr;
    }
    background: white;
    grid-auto-flow: dense;
    direction: rtl;
    div:last-child {
      background-image: url('/uploads/Rectangle2877.png');
      &:hover {
        background-image: url('/uploads/Rectangle2877Zoomed.png');
      }
    }
    button {
      margin-right: auto;
      direction: ltr;
    }
  }

  @media (max-width: 900px) {
    .second {
      direction: ltr;
    }
  }
`;
