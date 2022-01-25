// Libs
import tw, { styled } from "twin.macro";

// Component
import { FaQuestion } from "react-icons/fa";

export const GameWrapper = tw.section`
  flex
  flex-wrap
  gap-10
  items-center
  justify-center
  lg:gap-20
  lg:mt-14
  mt-24
`;

export const UserWeaponWrapper = tw.div`
  grid
  grid-rows-layout-mobile
  items-center
  justify-items-center
  lg:grid-rows-layout-desktop
  lg:order-1
`;

export const ComputerWeaponWrapper = tw(UserWeaponWrapper)`
  lg:order-3
`;

export const Description = tw.p`
  lg:order-1
  lg:self-start
  self-end
  text-base
  text-white
  tracking-widest
  uppercase
`;

export const Loading = styled.div`
  ${tw`
    bg-loading
    flex
    h-28
    items-center
    justify-center
    lg:h-56
    lg:order-2
    lg:w-56
    relative
    rounded-full
    w-28
    `}

  animation: rotate 1s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`;

export const IconQuestion = tw(FaQuestion)`
  lg:text-9xl 
  text-6xl
  text-white
`;

export const WinnerWrapper = tw.div`
  flex
  flex-col
  gap-3
  items-center
  lg:order-2
  lg:w-auto
  mt-5
  w-full
`;

export const Winner = tw.h1`
  font-bold
  text-5.5xl
  text-white
  uppercase
`;

export const PlayAgainBtn = styled.button`
  ${tw`
      bg-white
      h-12
      rounded-md
      text-base
      text-dark-blue
      tracking-wider
      uppercase
      w-55
    `};

  &:hover {
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0px rgba(101, 110, 117, 0.3);
      transform: scale(1);
    }
    50% {
      box-shadow: 0 0 0 5px rgba(101, 110, 117, 0.3);
      transform: scale(1.1);
    }
    100% {
      box-shadow: 0 0 0 0px rgba(101, 110, 117, 0.3);
    }
  }
`;
