import React, {useState, useEffect} from 'react';



function JobForm({onSubmit}) {
    const [file, setFile] = useState(null);


const handleFileChange = (e) => {
        setFile(e.target.files[0]);
      };
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(file)
  };
    
    return (
        <form className='max-w-xl mx-auto flex flex-col gap-4'>
        <fieldset className="w-full space-y-1 ">
        <label for="image" className="block text-lg font-medium">Add Image</label>
        <div className="flex">
            <input onChange={handleFileChange} type="file" name="image" className="px-8 py-12 border-2 border-dashed rounded-md w-full" />
        </div>
        </fieldset>

            
            <button onClick={handleSubmit} type="submit" className="w-full bg-black text-white py-2 px-4 rounded">
                Post
      </button>
        </form>
    );
}

export default JobForm;