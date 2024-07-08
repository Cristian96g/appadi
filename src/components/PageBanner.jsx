import React from 'react'

const PageBanner = ({title}) => {

    const [firstWord, ...remainingWords] = title.split(' ');
  const remainingTitle = remainingWords.join(' ');


  return (
    <div className="w-full bg-center bg-cover h-[18rem]" >
      <div className="flex items-center justify-center w-full h-full bg-green-900/40">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white lg:text-[2.5rem]"> {firstWord} <span className="text-green-900">{remainingTitle}</span></h1>
        </div>
      </div>
    </div>
  )
}

export default PageBanner