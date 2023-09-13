import React from 'react'
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["EPUB", "PDF"];

const Hero = () => {

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <section className='m-16 w-full max-w-md'>
      <div className='p-5 ' >
      <h1 className='pb-5 text-lg font-bold'>Drag & Drop Files</h1>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p className='pt-5 text-red-500'>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
    </div>
    </section>
  )
}

export default Hero;

