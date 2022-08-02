const newFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const post_body = document.querySelector('#post-body').value.trim();

  await fetch('/api/post', {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_body,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
