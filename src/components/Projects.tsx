import React from 'react'
import Heading from './Heading'
import Card from './Card'
import '../app//styles/Projects.css'

const data = [
    {
        id:0,
        title:"cryptoQuokkaCoin",
        desc:"This is project which based on Ethereum Blockchain, I perform in this Project as Blockchain Developer to write a smart contract in solidity.",
        img:"/cryptoquokkacoin.PNG",
        tags:["Solidity","Node","HTML","Typescript", "CSS"]

    },
    {
        id:1,
        title:"Static Resume",
        desc:"In this Project I am Working A Resume Builder, In Sample Words Explain it When user land into my project and review it then click the Hide buttion Down section is varnish.",
        img:"/Resume-project.PNG",
        tags:["Javascript","Node","HTML","Typescript", "CSS",]

    },
    {
        id:2,
        title:"Pawganja",
        desc:"Pawganja, the Australian Rottweiler, proudly stands as the official mascot of our esteemed community. This is token website in Solana Token Creation",
        img:"/pangja-project.PNG",
        tags:["Javascript","Rust","HTML","Typescript", "CSS",]

    },
    {
        id:3,
        title:"Editable Resume",
        desc:"In this Project I was writing a code for Editable Resume Builder when any user come to my website just put in Personal Information and generate the resume and last make it change personal Information. ",
        img:"/EDITABLE-RESUME.PNG",
        tags:["Javascript","Node","HTML","Typescript", "CSS",]

    },
    {
        id:4,
        title:"Sharable Resume",
        desc:"In this Project I was writing a code for Sharable Resume Builder when any user come to my website just put in Personal Information and generate the resume and make it change personal Information and also download the resume. ",
        img:"/sharable-reusme.PNG",
        tags:["Javascript","Node","HTML","Typescript", "CSS",]

    },
    {
        id:5,
        title:"Tiamat Dapp",
        desc:"In this Project, I was deploying the smart contract in Solana Blockchain then user come to my wesbite connect the wallet buy the token in Usdt, Usdc and Sol",
        img:"/tiamat-project.PNG",
        tags:["Javascript","Rust","HTML","Typescript", "CSS",]

    },


]

const Projects = () => {
  return (
    <div  id="projects" className='projects-container'>
      <Heading title ="My Project"/>
      
      <div className='projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-centre'>
        {data.map((el) => (<Card 
          key={el.id} 
          title={el.title} 
          desc={el.desc} 
          img={el.img}
            tags={el.tags}   />))}
      </div>
    </div>
  )
}

export default Projects
