import tw from "twin.macro";

export const Wrapper = tw.header`
  border-3
  border-outline-header
  flex
  h-24
  items-center
  justify-between
  md:border-2
  md:h-37
  md:rounded-xl
  md:w-175
  mt-8
  relative
  rounded-md
  w-77
`;

export const Logo = tw.img`
  h-12
  md:h-28
  md:w-28
  ml-6
  w-12

`;

export const ScoreWrapper = tw.div`
  bg-white
  flex
  flex-col
  gap-0
  h-18
  items-center
  justify-center
  md:h-28
  md:w-37
  mr-3
  rounded-md
  w-20
`;

export const ScoreTitle = tw.span`
  leading-none
  md:text-base
  text-score-title
  text-xs
  tracking-widest
  uppercase
`;

export const Score = tw.span`
  font-bold
  leading-none
  md:text-6.5xl
  text-4.5xl
  text-score
`;
