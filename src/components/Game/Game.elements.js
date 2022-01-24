import tw, { styled } from "twin.macro";

export const GameWrapper = styled.section`
  ${
    tw`
      flex
      items-center
      justify-center
      mt-24
      lg:mt-14
      gap-10
      lg:gap-20
      flex-wrap
    `
  }
`

export const PlayerWrapper = styled.div`
  ${
    tw`
      grid
      grid-rows-layout-mobile
      lg:grid-rows-layout-desktop
      items-center
      justify-items-center
      lg:order-1
    `
  }

`

export const PcWrapper = styled(PlayerWrapper)`
  ${
    tw`
      lg:order-3
    `
  }
`

export const Description = styled.p`
  ${
    tw`
      text-base
      tracking-widest
      text-white
      uppercase
      self-end
      lg:self-start
      lg:order-1
    `
  }
`

export const Loading = styled.div`
  ${
    tw`
      w-28
      lg:w-56
      h-28
      lg:h-56
      bg-loading
      rounded-full
      lg:order-2
    `
  }
`

export const ResultWrapper = styled.div`
  ${
    tw`
      flex
      flex-col
      items-center
      gap-3
      w-full
      lg:w-auto
      mt-5
      lg:order-2
    `
  }
`

export const Result = styled.h1`
  ${
    tw`
      text-5.5xl
      font-bold
      text-white
      uppercase
    `
  }
`

export const PlayAgainBtn = styled.button`
  ${
    tw`
      w-55
      h-12
      bg-white
      rounded-md
      uppercase
      text-dark-blue
      text-base
      tracking-wider
    `
  }
`