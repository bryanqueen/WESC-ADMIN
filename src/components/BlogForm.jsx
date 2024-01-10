import React, {useState, useEffect} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function BlogForm({onSubmit, initialData}) {
    const [formData, setFormData] = useState({

    });

    useEffect(() => {
        if(initialData){
            setFormData(initialData)
        }
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    };

    function handleSubmit(e) {
       e.preventDefault();
       onSubmit(formData);
    }
    return (
        <form onS className='max-w-xl mx-auto'>
           <div className='mb-4'>
                <label htmlFor="title">Title</label>
                <input 
                    type="text"
                    id='title'
                    name='title'
                    value={formData}
                    onChange={handleChange}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    required
                 />
            </div> 
            <div className='mb-4'>
                <label htmlFor="content">Blog Content</label>
                <ReactQuill
                    theme='snow'
                    value={formData}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded">
                Post
      </button>
        </form>
    );
}

export default BlogForm;