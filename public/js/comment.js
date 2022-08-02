const commentFormHandler = async function(event) {
  event.preventDefault();

  const postId = window.location.toString().split('/')[window.location.toString().split('/').length-1];
  const body = document.querySelector('textarea[name="comment-body"]').value.trim();

  if (body) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
