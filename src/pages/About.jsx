import AboutSection from "../components/AboutSection"
import PageBanner from "../components/PageBanner"
import imgFoundation from '../assets/images/foundation.jpg'
import imgEquipo from '../assets/images/equipo.jpg'


const About = () => {
  return (
    <>
      <PageBanner title={"Quienes somos"} />
      <section className="container">
        <div className=" flex flex-col items-center px-4 py-8 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl">
          Contribuyendo al <span className="text-green-500">bienestar comunitario</span>
          </h2>
          <p className="max-w-4xl mt-6 text-center text-gray-500 ">
          Somos una organización dedicada a mejorar la calidad de vida de nuestra comunidad. Nos esforzamos por ofrecer oportunidades laborales y apoyo a aquellos que más lo necesitan. Nuestra misión es crear un impacto positivo a través de diversas actividades y programas sociales.
          </p>
        </div>
 </section>
      <section >
        

        <AboutSection 
        imageSrc={imgFoundation} 
        imageAlt="imagen ong" 
        title="Nuestro hogar es un espacio de esperanza y comunidad" 
        text={"Nuestro edificio principal, ubicado en el corazón de la ciudad, es un espacio acogedor y abierto a todos. Aquí es donde organizamos nuestras actividades, talleres y reuniones. Es un lugar lleno de vida y esperanza, donde cada día trabajamos para construir un futuro mejor para nuestra comunidad."} 
        imagePosition="right" // Imagen a la derecha
      />
      <AboutSection 
        imageSrc={imgEquipo}
        imageAlt="Equipo de la ong" 
        title="Nuestro equipo cuenta con personas apasionadas y comprometidas" 
        text={"Nuestro equipo está compuesto por personas apasionadas y dedicadas, provenientes de diversos ámbitos profesionales. Juntos, trabajamos incansablemente para brindar apoyo y oportunidades a quienes más lo necesitan. Creemos en el poder de la colaboración y en la fuerza de nuestra comunidad para lograr grandes cambios."} 
        imagePosition="left" // Imagen a la izquierda
      />
      </section>
    </>
  )
}

export default About