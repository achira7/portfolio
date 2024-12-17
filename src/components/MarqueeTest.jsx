import React from "react";
import styled from "styled-components";

const MarqueeTest = () => {
  return (
    <StyledMarquee>
      {[...Array(46)].map((_, index) => (
        <div className="icon" key={index}>
          <svg viewBox="0 0 122.88 122.88" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25.2,0H97.68a25.27,25.27,0,0,1,25.2,25.2V97.68a25.27,25.27,0,0,1-25.2,25.2H25.2A25.27,25.27,0,0,1,0,97.68V25.2A25.27,25.27,0,0,1,25.2,0Z"
              fill="#5865F2"
            />
          </svg>
        </div>
      ))}
    </StyledMarquee>
  );
};

const StyledMarquee = styled.div`
  display: flex;
  gap: 10px;
  overflow: hidden;
  white-space: nowrap;
  animation: scroll 10s linear infinite;

  .icon {
    display: inline-block;
    width: 50px;
    height: 50px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  @keyframes scroll {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

export default MarqueeTest;
