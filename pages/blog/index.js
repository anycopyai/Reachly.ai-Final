// pages/blog/index.js
import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const client = createClient({
        space: 'uncp5kl990n0',
        accessToken: 'V9HDhaux6AeDVC2ULtA3riBdJjg_UI3HMvZdFYLfBLw',
      });

    // Define the content type for your blog posts
    const contentType = 'blogPage'; // Change to match your content type ID

    client.getEntries({ content_type: contentType })
      .then((response) => {
        setBlogPosts(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Welcome to the Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.sys.id} className="blog-post">
            <h2>{post.fields.title}</h2>
            {/* Render the blog post body using Rich Text rendering */}
            <div>{documentToReactComponents(post.fields.body)}</div>
            {/* You can also display the image and recommended posts as needed */}
            {post.fields.image && (
              <img src={post.fields.image.fields.file.url} alt={post.fields.image.fields.title} />
            )}
            {/* Render recommended posts if available */}
            {post.fields.recommendedPosts && post.fields.recommendedPosts.map((recommendedPost) => (
              <div key={recommendedPost.sys.id} className="recommended-post">
                {/* You can display recommended post details here */}
                <h3>{recommendedPost.fields.title}</h3>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
