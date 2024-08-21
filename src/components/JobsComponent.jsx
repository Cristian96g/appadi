import Button from './Button';
import JobsCard from './JobsCard';
import { jobs } from '../constants/index.js'

const JobsComponent = () => {

  return (
    <section className="activities py-6 lg:mt-16">
      <div className="container mx-auto">
        <div className="mx-auto max-w-lg text-center">
          <h2>Nuestros Trabajos</h2>

          <p className="mt-4 text-gray-600">
          Descubre más sobre nuestras diversas actividades y cómo impactan positivamente en la comunidad local y más allá.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 mt-8 md:mt-12">
          {jobs.map((job) => (
            <JobsCard key={job.id} job={job} />
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default JobsComponent;


