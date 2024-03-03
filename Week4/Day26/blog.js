
const postInfo = {
    title: "The Art of Data Visualization: Transforming Complexity into Clarity",
    author: "Jane Smith",
    content: " In this blog post, we embark on a journey through the fascinating world of data visualization. We'll explore the power of graphs, charts, and interactive visual representations in transforming complex datasets into meaningful insights. Join me as we unravel the secrets behind effective data visualization techniques and discover how to communicate information with clarity and impact."
  };
  
 
  const { title, author, content } = postInfo;
  
 
  const categories = ["Technology", "Programming"];
  const tags = ["JavaScript", "Web Development"];
  
  
  const metadata = {
    ...postInfo,
    categories,
    tags
  };
  
 
  const blogPost = {
    ...metadata,
    date: new Date().toLocaleDateString()
  };
  
  
  const displayBlogPost = ` 
  
    <article style="background-color: blue; padding: 20px; border-radius: 5px;  margin:100px; width:700px; margin-left:300px;">
      <header>
        <h1 style="color: white;">${blogPost.title}</h1>
        <p style="color: white;">By ${blogPost.author}</p>
      </header>
      <section>
        <p style="color: white;">${blogPost.content}</p>
      </section>
      <footer>
        <p style="color: white;">Categories: ${blogPost.categories.join(", ")}</p>
        <p style="color: white;">Tags: ${blogPost.tags.join(", ")}</p>
        <p style="color: white;">Date: ${blogPost.date}</p>
      </footer>
    </article>
    
  `;
  
  
  document.body.innerHTML = displayBlogPost;