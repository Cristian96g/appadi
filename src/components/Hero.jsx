import Button from "./Button"
import imageHero from '../assets/images/hero.jpg'

const Hero = () => {
  return (
    <div className="mt-1">
    <div className="flex bg-white h-96 container mx-auto">
      <div className="flex items-center text-center lg:text-left  lg:w-1/2">
        <div>
          <h2>
          <span className="text-green-600">Promoviendo</span> la Igualdad de Oportunidades para Personas con Discapacidad
          </h2>
          <p className="mt-2 text-sm text-gray-500 md:text-base">
          A.P.P.A.Di trabaja para la inclusión plena de personas con discapacidad, en colaboración con el Estado y la sociedad civil.
          </p>
          <div className="flex justify-center gap-2 lg:justify-start mt-6">
          <Button to={"/about"} text={"Descubre más"} />
 
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2" style={{clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"}}>
        <div className="h-full  object-cover " style={{backgroundImage: `url(${imageHero})`}}>
          <div className="h-full bg-black opacity-25"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero