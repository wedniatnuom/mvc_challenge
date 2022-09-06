
  // add new blog function
  async function blog(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("blog function is running");

    const title = document.getElementById('blog-title').value.trim();
    const text = document.getElementById('blog-text').value.trim();

    if (title && text) {
      console.log("awaiting blog fetch")
      const response = await fetch('/api/dashboard', {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        location.reload()
      } else {
        alert('Failed to create blog');
      };
    };
  };

  let blog_el = document.getElementById('create-btn');
  blog_el.addEventListener('click', (e) => blog(e));


  // delete blog function
 const deleteBlog = async (event) => {

    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      
      const response = await fetch(`/api/dashboard/${id}` , {
        method: 'DELETE'
      });
     if (response.ok) {
        location.reload();
      } else {
        alert('Failed to delete blog');
      };
    };
  };

document.querySelector('.blog-list').addEventListener('click', deleteBlog);