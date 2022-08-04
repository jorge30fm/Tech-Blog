const commentFormHandler = async function(event) {
  event.preventDefault();

  const post_id = window.location.toString().split('/')[window.location.toString().split('/').length-1];
  const body = document.querySelector('textarea[name="comment-body"]').value.trim();

  if (body) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // document.location.reload();
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
