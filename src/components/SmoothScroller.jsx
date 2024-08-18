import { ReactLenis, useLenis } from 'lenis/react'

function SmoothScroller({children}) {


  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}


export default SmoothScroller
