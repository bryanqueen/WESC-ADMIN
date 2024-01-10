import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import BlogForm from '../components/BlogForm';

const EditBlog = () => {
  const { blogId } = useParams();
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    // Fetch blog data for editing based on blogId
    // For example, send an API request to get the blog data
    // and update the state with the fetched data
    // setBlogData(fetchedBlogData);
  }, [blogId]);

  const handleEditBlog = (formData) => {
    // Implement logic to edit the existing blog (e.g., send API request)
    console.log('Editing blog with data:', formData);
    // Redirect or perform any additional actions after successful edit
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>
      {blogData ? <BlogForm onSubmit={handleEditBlog} initialData={blogData} /> : 'Loading...'}
    </div>
  );
};

export default EditBlog;