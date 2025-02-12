import ProjectCard from "./Helper/ProjectCard"




const Project = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading__mini">Recent work</p>
        <h1 className="heading__primary">
            My Best <span className="text-yellow-300">Projects</span>
        </h1>
      </div>

      {/* ProjectCard */}

      <ProjectCard
        title="E-commerce Website"
        tech1="React"
        tech2="NextJS"
        tech3="Tailwind"
        tech4="Typescript"
        image="/images/p1.png"
      />
      <ProjectCard
        title="Portfolio Website"
        tech1="React"
        tech2="NextJS"
        tech3="Tailwind"
        tech4="Typescript"
        image="/images/p2.png"
      />
      <ProjectCard
        title="Fullstack Food Delivery Webapp"
        tech1="React"
        tech2="NextJS"
        tech3="NodeJS"
        tech4="MongoDB"
        image="/images/p3.png"
      />
      <ProjectCard
        title="Travel website"
        tech1="React"
        tech2="NextJS"
        tech3="Tailwind"
        tech4="Typescript"
        image="/images/p4.png"
      />
    </div>
  )
}

export default Project
