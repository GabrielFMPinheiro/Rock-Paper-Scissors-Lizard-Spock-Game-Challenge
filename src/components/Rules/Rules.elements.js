import tw, { styled } from "twin.macro";

export const RulesBtn = tw.button`
  bg-transparent
  border
  border-white
  duration-300
  ease-in-out
  h-10
  hover:bg-white
  hover:text-main-grad-2nd
  lg:absolute
  lg:bottom-8
  lg:m-0
  lg:right-8
  mb-3
  mt-12
  rounded-lg
  text-lg
  text-white
  tracking-widest
  uppercase
  w-32
`;

export const Modal = tw.div`
  absolute
  bg-black
  inset-0
  opacity-40
  z-10
`;

export const RulesWrapper = styled.div`
  ${tw`
      absolute
      bg-white
      flex
      flex-col
      inset-0
      items-center
      rounded-md
      sm:flex-row
      sm:flex-wrap
      sm:h-115
      sm:inset-auto
      sm:px-8
      sm:top-1/2
      sm:w-100
      z-20
    `}

  @media screen and (min-width: 640px) {
    transform: translateY(-50%);
  }
`;

export const Title = tw.h2`
  mt-24
  sm:m-0
  sm:order-1
  text-3.5xl
  text-dark-blue
  uppercase
`;

export const RulesImg = tw.img`
  h-78
  mt-24
  sm:m-0
  sm:mb-8
  sm:order-3
  w-85
`;

export const CloseBtn = styled.img`
  ${tw`
      cursor-pointer
      h-5
      mb-20
      mt-36
      sm:m-0
      sm:ml-auto
      sm:order-2
      w-5
      duration-300
  `};

  &:hover {
    filter: brightness(40%);
    -webkit-filter: brightness(40%);
    -moz-filter: brightness(40%);
  }
`;
