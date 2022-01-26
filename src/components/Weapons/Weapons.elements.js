// Libs
import tw, { styled, css } from "twin.macro";

// Assets
import scissors from "../../images/icon-scissors.svg";
import spock from "../../images/icon-spock.svg";
import paper from "../../images/icon-paper.svg";
import lizard from "../../images/icon-lizard.svg";
import rock from "../../images/icon-rock.svg";

export const Wrapper = tw.div`
  w-76
  lg:w-120
  h-77
  lg:h-120
  flex
  justify-center
  items-center
  relative
  mt-24
  lg:mt-10
`;

export const ImgWrapper = tw.div`
  w-52
  lg:w-86
  h-54
  lg:h-86
`;

export const Img = tw.img`
  w-full
`;

export const Btn = styled.button(({ isPrimary, win }) => [
  tw`
  flex
  items-center
  justify-center
  absolute
  rounded-full
  w-24
  lg:w-36
  h-24
  lg:h-36
  before:w-18
  lg:before:w-28
  before:h-18
  lg:before:h-28
  before:rounded-full
  before:bg-white
  `,

  css`
    transition: 0.2s ease-in-out 0s;
    &:hover {
      transform: ${!isPrimary && "scale(1.25)"};
    }

    &::before {
      box-shadow: inset 0 6px rgba(0, 0, 0, 0.2);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 50%;
      box-shadow: ${win &&
      `
          inset 0 4px rgba(0, 0, 0, 0.2),
          0 0 0 35px rgba(255 ,255, 255, 0.06),
          0 0 0 60px rgba(255 ,255, 255 ,0.04),
          0 0 0 90px rgba(255, 255, 255, 0.03)
      `};

      @media screen and (min-width: 1024px) {
        box-shadow: ${win &&
        `
          inset 0 6px rgba(0, 0, 0, 0.2),
          0 0 0 70px rgba(255 ,255, 255, 0.06),
          0 0 0 110px rgba(255 ,255, 255 ,0.04),
          0 0 0 150px rgba(255, 255, 255, 0.03)
        `};
      }
    }
  `,

  isPrimary &&
    tw`
    w-33
    lg:w-71
    h-33
    lg:h-71
    before:w-25
    lg:before:w-56
    before:h-25
    lg:before:h-56
    relative
    !inset-auto
    lg:order-3
  `,
]);

export const ScissorsBtn = styled(Btn)`
  ${tw`
      bg-scissors-bg
      top-0
    `};

  box-shadow: 0 6px #c76c1b;

  &::before {
    background-image: url(${scissors});
  }
`;

export const SpockBtn = styled(Btn)`
  ${tw`
      bg-spock-bg
      left-0
      top-20
      lg:top-32
    `};

  box-shadow: 0 6px #2d8dab;

  &::before {
    background-image: url(${spock});
  }
`;

export const PaperBtn = styled(Btn)`
  ${tw`
      bg-paper-bg
      right-0
      top-20
      lg:top-32
    `};

  box-shadow: 0 6px #2a45c2;

  &::before {
    background-image: url(${paper});
  }
`;

export const LizardBtn = styled(Btn)`
  ${tw`
      bg-lizard-bg
      bottom-2
      left-10
      lg:left-16
    `};

  box-shadow: 0 6px #5f37a8;

  &::before {
    background-image: url(${lizard});
  }
`;

export const RockBtn = styled(Btn)`
  ${tw`
      bg-rock-bg
      bottom-2
      right-10
      lg:right-16
    `};

  box-shadow: 0 6px #9d1634;

  &::before {
    background-image: url(${rock});
  }
`;
