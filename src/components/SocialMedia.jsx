import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <section className="bg-gray-100 py-16 text-center mt-8">
            <div className="container mx-auto flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-4">Síguenos en Redes Sociales</h2>
                <p className="mb-8 max-w-[480px]">
                    Mantente informado sobre nuestras actividades y comparte nuestro contenido para ayudar a difundir nuestra causa.
                </p>
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://www.facebook.com/tu-fundacion"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-blue-600 hover:text-blue-800"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://twitter.com/tu-fundacion"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-blue-400 hover:text-blue-600"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://www.instagram.com/tu-fundacion"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-pink-600 hover:text-pink-800"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/tu-fundacion"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-blue-700 hover:text-blue-900"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialMedia;

