import tw, { styled } from 'twin.macro';

export const MainWrapper = styled.main`
  ${
    tw`
      bg-gradient-to-b from-main-grad-1st to-main-grad-2nd
      w-full
      min-h-screen
      flex
      flex-col
      items-center
      relative
    `
  }
`
