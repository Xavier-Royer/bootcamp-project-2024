import blogs from "../../blogData";
import { getBlog } from "../../blogData";
import { notFound } from "next/navigation";
import Blog from "@/src/database/blogSchema";
import type {IComment} from "@/src/database/blogSchema";
import Comment from "@/src/components/commentPreview";

export default async function BlogPostPage(
  props: { params: Promise<{ slug: string }> }  
) {
  const { slug } = await props.params;   
  
  /*
  console.log("slug string: " + '/api/blog/' + slug) 
  const res = await fetch(`/api/blog/${encodeURIComponent(slug)}`);
  const data = await res.json();        
  const blog = new Blog({ title: data.title, description: data.description, image: data.image, imagAlt: data.imagAlt});
  */

  const blog = await getBlog(slug.toLowerCase());
  
  
  if (!blog) notFound();

  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <img src={blog.image} alt={blog.imageAlt} />
      <p>{String(blog.date)}</p>

      <h2>Comments:</h2>
      
      {blog.comments.length > 0 &&(
    
        <div className="comment-section">
          {(blog.comments ?? []).map((comment: IComment, i: number) => (
          <Comment
          key={(comment as any)._id ?? `${comment.user}-${i}-${String(comment.time)}`}
          comment={comment}/>
          ))}
        </div>
      )}
      
      
      

    </main>
  );
}
