import  { useState } from 'react'
import { featured1, featured2, featured3, featured4, featured5, featured6,  } from "../assets";

const useFeaturedProjects = () => {

  const [showMore, setShowMore] = useState(false);


  const featuredProjects = [
    {
      title:"AH2 & Matt Horn",
      image: featured1 ,
      btnText:["Pitch deck"]

    },
    {
      title:"Fyde",
      image: featured2 ,
      btnText:["AUDIT","COPYWRITING","SALES DECK","SLIDES DESIGN"]

    },
    {
      title:"Trawa",
      image: featured3 ,
      btnText:["BRAND IDENTITY","DESIGN RESEARCH","INVESTOR DECK"]

    },
    {
      title:"Premium Blend",
      image: featured4 ,
      btnText:["BRANDED TEMPLATE",]

    },
    {
      title:"Planetly",
      image: featured5,
      btnText:["AGENCY","BIG NEWS DECK", "BRANDED TEMPLATE","INVESTOR DECK","POLICY DECK & PLAYBOOK","SALES DECK"]

    },
    {
      title:"Black Book",
      image: featured6,
      btnText:["INVESTOR DECK","REDESIGN","REVIEW"]

    },
  ]
  
  const projectsToShow = showMore ? featuredProjects : featuredProjects.slice(0, 4);

  return {projectsToShow,showMore,setShowMore}
}

export default useFeaturedProjects