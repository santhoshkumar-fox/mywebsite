import React, { useRef } from 'react'
import "./mountainScreen.css"
import { useScroll, useTransform ,motion} from 'framer-motion';
// import Mountain ""
function MountainScreen() {
  const parallexRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target:parallexRef,
    offset:["start start","end start"]
  })
  const backgroundY = useTransform(scrollYProgress,[0,1],['0','100%']);
  const textY = useTransform(scrollYProgress,[0,1],['0','200%']);
  const backgroundBlurOpacity = useTransform(scrollYProgress,[0,1],[0,10]);
  console.log(backgroundBlurOpacity);
  return (
   <div ref={parallexRef} className='mountainScreenContainer'>
     {/* background Image */}
     <motion.div className='parallexBackgroundImagContainer'style={{y:backgroundY,filter:`blur(${backgroundBlurOpacity}px)`}}>
      <motion.div style={{y:textY}} className='parallexContainer0'>
        <p className='headline01' style={{color:"white",fontSize:'100px'}} >I AM SANTHOSH</p>
        {/* <p className='headline01' style={{color:"white",fontSize:'100px'}} >I Build Apps</p> */}

      </motion.div>
     </motion.div>
     <div className='parallexContainer1'>

     </div>
     <div className='parallexContainerFooter'>
       <p className='loab101' style={{color:'white'}}>
        Duis minim cupidatat occaecat sunt eiusmod elit exercitation aliqua commodo pariatur. Minim sint ut incididunt amet Lorem dolore eu fugiat aliqua id culpa. Excepteur adipisicing anim duis voluptate labore. Lorem exercitation do irure adipisicing proident quis ad aliqua pariatur tempor deserunt fugiat. In tempor fugiat quis aute excepteur ex culpa laboris est.

Id eiusmod adipisicing tempor et fugiat excepteur proident do eiusmod pariatur duis incididunt deserunt Lorem. Enim do exercitation ea officia ea Lorem voluptate ad. Proident cupidatat qui aliquip mollit culpa amet labore consectetur reprehenderit adipisicing adipisicing cillum do sint.
       </p>
       <p className='loab101' style={{color:'white'}}>
        Irure minim et esse voluptate et. Elit adipisicing cillum id excepteur Lorem proident sit. Ea ipsum deserunt eiusmod amet cupidatat. Consectetur eu veniam qui enim veniam officia adipisicing tempor enim ut. Qui duis cillum culpa eu consequat magna magna.

Mollit labore elit non id. Ex ut commodo minim officia in cupidatat commodo cupidatat proident voluptate. Est laborum reprehenderit officia consectetur consequat dolor qui cupidatat adipisicing nulla consectetur minim deserunt. Voluptate ipsum id consequat quis.
       </p>
       <p className='loab101' style={{color:'white'}}>
        Sunt non in dolore consequat incididunt tempor exercitation duis commodo in cillum. Cupidatat aliquip quis dolor ut ad elit fugiat amet laborum. Voluptate quis nisi ipsum proident exercitation nostrud elit sunt occaecat incididunt labore pariatur.

Pariatur ullamco nulla irure in aliqua est. Magna labore tempor enim ipsum enim sint. Lorem qui consectetur fugiat non ut nulla fugiat exercitation voluptate ad exercitation mollit.
       </p>
       <p className='loab101' style={{color:'white'}}>
        Consequat consequat irure cupidatat esse deserunt aute commodo do reprehenderit mollit. Laboris ea aliquip dolore esse adipisicing commodo pariatur ipsum sit et ullamco dolore cillum. Aute veniam reprehenderit labore quis do. Nostrud mollit mollit eiusmod deserunt commodo veniam fugiat. Nisi esse occaecat consequat exercitation dolor consectetur id sunt esse aliqua occaecat adipisicing labore.

Ea sunt anim adipisicing officia adipisicing in. Irure nisi aliquip eu sint elit aute. Magna et veniam irure non aliqua deserunt aute amet. Esse qui ad irure amet deserunt mollit aliquip.
       </p>
     </div>
   </div>
  )
}

export default MountainScreen