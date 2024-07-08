import Button from "./Button"

const Hero = () => {
  return (
    <div className="mt-1">
    <div className="flex bg-white h-96 container mx-auto">
      <div className="flex items-center text-center lg:text-left  lg:w-1/2">
        <div>
          <h2>
          <span className="text-green-600">Appadi</span> Creando trabajos y apoyando comunidades para un impacto positivo.
          </h2>
          <p className="mt-2 text-sm text-gray-500 md:text-base">
          Nos dedicamos a crear oportunidades laborales significativas y a fortalecer comunidades mediante programas de apoyo integral, contribuyendo positivamente al desarrollo local y social.
          </p>
          <div className="flex justify-center gap-2 lg:justify-start mt-6">
          <Button text={"Descubre más"} />
 
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2" style={{clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"}}>
        <div className="h-full  object-cover " style={{backgroundImage: `url('../src/assets/images/hero.jpg')`}}>
          <div className="h-full bg-black opacity-25"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero