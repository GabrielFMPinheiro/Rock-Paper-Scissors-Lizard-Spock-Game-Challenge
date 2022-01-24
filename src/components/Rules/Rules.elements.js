import tw, { styled } from "twin.macro";

export const RulesBtn = styled.button`
  ${
    tw`
      border
      rounded-lg
      text-white
      border-white
      tracking-widest
      text-lg
      uppercase
      bg-transparent
      w-32
      h-10
      mt-12
      mb-3
      duration-300
      ease-in-out
      hover:text-main-grad-2nd
      hover:bg-white
      lg:absolute
      lg:m-0
      lg:right-8
      lg:bottom-8
    `
  }
`

export const Modal = styled.div`
  ${
    tw`
      absolute
      inset-0
      z-10
      bg-black
      opacity-40
    `
  }
`

export const RulesWrapper = styled.div`
  ${
    tw`
      bg-white
      flex
      flex-col
      sm:flex-row
      items-center
      absolute
      z-20
      inset-0
      sm:flex-wrap
      sm:w-100
      sm:h-115
      rounded-md
      sm:px-8
      sm:inset-auto
      sm:top-1/2
    `
  }
  @media screen and (min-width: 640px) {
    transform: translateY(-50%)
  }  
`

export const Title = styled.h1`
  ${
    tw`
      uppercase
      mt-24
      sm:m-0
      text-3.5xl
      text-dark-blue
      sm:order-1
    `
  }
`

export const RulesImg = styled.img`
  ${
    tw`
      mt-24
      sm:m-0
      w-85
      h-78
      sm:order-3
      sm:mb-8
    `
  }
`

export const CloseBtn = styled.img`
  ${
    tw`
      mt-36
      mb-20
      sm:m-0
      w-5
      h-5
      cursor-pointer
      sm:order-2
      sm:ml-auto
    `
  }
`