import BlogForm from "../components/BlogForm";

const CreateBlog = () => {
    const handleCreateBlog = (formData) => {
      // Implement logic to create a new blog (e.g., send API request)
      console.log('Creating blog with data:', formData);
      // Redirect or perform any additional actions after successful creation
    };
  
    return (
      <div className="items-center justify-center flex flex-col mx-4 mt-8">
        <h2 className="text-2xl font-bold mb-4">Create a New Blog</h2>
        <BlogForm onSubmit={handleCreateBlog} />
      </div>
    );
  };
  
  export default CreateBlog;