async function comment(event) {
    event.preventDefault();
    event.stopPropagation();
    const text = document.getElementById('comment-form').value.trim();
    const blogId = document.getElementById('blog-id').textContent.trim();
    console.log(blogId)
    if (text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ text, blogId }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        location.reload()
      } else {
        alert('Failed to create comment');
      };
    };
  };

  let comment_el = document.getElementById('submit-btn');
 comment_el.addEventListener('click', (e) => comment(e));


  // delete comment
  const deleteComment = async (event) => {

    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        location.reload();
      } else {
        alert('Failed to delete comment');
      };
    };
  };

  document.querySelector('.comment-section').addEventListener('click', deleteComment);