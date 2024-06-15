// Database
import { blogsDB } from '@/database';
// Views
import { BlogsView } from '@/ui/views';


const blogs = blogsDB;

const BlogsPage = () => {
  return <BlogsView blogs={ blogs } />
}

export default BlogsPage;
