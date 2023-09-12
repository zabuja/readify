import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter your URL"
            value={article.url}
            onChange={(e) => setarticle({...article, url: e.target.value})}
            required
            className="url_input peer"
          ></input>
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ⏎
          </button>
        </form>

        {/* Browse URL history */}
      </div>
      {/* Display results */}
    </section>
  )
}

export default Hero