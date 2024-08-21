import React, { useEffect, useState } from 'react';
import PageBanner from '../components/PageBanner';
import JobsCard from '../components/JobsCard';
import { jobs } from '../constants/index.js'

const Jobs = () => {


  return (
    <>
      <PageBanner title={"Nuestros trabajos"} />

      <section className="container">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">Our Blog</h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We use an agile approach to test assumptions and connect with the needs of your audience early and often.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {jobs.map((job, index) => (
              <JobsCard job={job} key={job._id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
