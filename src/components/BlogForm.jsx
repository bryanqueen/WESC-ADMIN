import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function BlogForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    title: '',
    image: '',  
    body: '',
    author: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBodyChange = (value) => {
    setFormData({ ...formData, body: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // FormData object to handle multipart data
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('image', formData.image);
    formDataToSend.append('body', formData.body);
    formDataToSend.append('author', formData.author);

    try {
      await onSubmit(formDataToSend);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <form className='max-w-xl mx-auto flex flex-col gap-4' onSubmit={handleSubmit}>
      <fieldset className="w-full space-y-1 ">
        <label htmlFor="image" className="block text-lg font-medium">Cover Image</label>
        <div className="flex">
          <input type="file" name="image" id="image" onChange={handleFileChange} className="px-8 py-12 border-2 border-dashed rounded-md w-full" />
        </div>
      </fieldset>
      <div className=''>
        <label htmlFor="title" className='block text-lg font-medium'>Title</label>
        <input
          type="text"
          id='title'
          name='title'
          value={formData.title}
          onChange={handleChange}
          className='appearance-none border-2 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          required
        />
      </div>
      <div className='' style={{ height: '300px' }}>
        <label htmlFor="content" className='block text-lg font-medium'>Blog Content</label>
        <ReactQuill
          theme='snow'
          value={formData.body}
          onChange={handleBodyChange}
          style={{ height: '100%' }} // Set height to 100% of parent div
          modules={{
            toolbar: [
              [{ 'header': [1, 2, false] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ size: [] }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
              ['link', 'image'],
              ['clean']
            ],
          }}
          formats={[
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image'
          ]}
        />
      </div>
      <div className='mt-32'>
        <label htmlFor="author" className='block text-lg font-medium'>Author's Name</label>
        <input
          type="text"
          name='author'
          value={formData.author}
          onChange={handleChange}
          className='appearance-none border-2 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          required
        />
      </div>
      <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded">
        Post
      </button>
    </form>
  );
}

export default BlogForm;
