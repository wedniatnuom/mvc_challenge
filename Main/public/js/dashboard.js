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
        console.log("test to rerender")
      } else {
        alert('Failed to create blog');
      };
    };
  };

  let blog_el = document.getElementById('create-btn');
  blog_el.addEventListener('click', (e) => blog(e));
