const post_id = window.location.toString().split('/')[window.location.toString().split('/').length-1]

const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_body = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/post/${post_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      post_body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
  await fetch(`/api/post/${post_id}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
