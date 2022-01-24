import tw, { styled } from "twin.macro";

export const Wrapper = styled.header`
  ${
    tw`
      w-77
      md:w-175
      h-24
      md:h-37
      border-3
      md:border-2
      border-outline-header
      rounded-md
      md:rounded-xl
      flex
      justify-between
      items-center
      relative
      mt-8
    `
  }
`

export const Logo = styled.img`
  ${
    tw`
      w-12
      md:w-28
      h-12
      md:h-28
      ml-6
    `
  }
`

export const ScoreWrapper = styled.div`
  ${
    tw`
      w-20
      md:w-37
      h-18
      md:h-28
      bg-white
      rounded-md
      flex
      flex-col
      justify-center
      items-center
      gap-0
      mr-3
    `
  }
`

export const ScoreTitle = styled.span`
  ${
    tw`
      uppercase
      text-score-title
      tracking-widest
      text-xs
      md:text-base
      leading-none
    `
  }
`

export const Score = styled.span`
  ${
    tw`
      font-bold
      text-score
      text-4.5xl
      md:text-6.5xl
      leading-none
    `
  }
`