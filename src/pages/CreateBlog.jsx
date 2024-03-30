import BlogForm from "../components/BlogForm";
import axios from "axios";

const apiPath = 'https://fair-gold-termite-sock.cyclic.app/api/v1/'

const CreateBlog = () => {
    const handleCreateBlog = async (formData) => {
      // Implement logic to create a new blog (e.g., send API request)
      try {
        const response = await axios.post(`${apiPath}blogs`, formData , {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        console.log('Blog Created Successfully:', response.data);
        // Redirect or perform any additional actions after successful creation
      } catch (error) {
        console.error('Error creating blog:', error);
      }
    };
  
    return (
      <div className="items-center justify-center flex flex-col mx-4 mt-8">
        <h2 className="text-2xl font-bold mb-4">Create a New Blog</h2>
        <BlogForm onSubmit={handleCreateBlog} />
      </div>
    );
  };
  
  export default CreateBlog;