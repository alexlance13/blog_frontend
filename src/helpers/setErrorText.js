import Swal from 'sweetalert2';

export default function setErrorText(e, title) {
  let text = '';
  if (e.response && e.response.status === 400) {
    switch (e.response.data) {
      case 'Validation error':
        text = 'You must stick with validation rules';
        break;
      case 'Invalid token':
        text = 'Your token is invalid';
        break;
      case 'Credentials is invalid':
        text = 'There is no user with this login and password combination';
        break;
      case 'Login already exist':
        text = 'Login already exist';
        break;
      case 'Image too large':
        text = 'Image too large';
        break;
      default:
        text = 'Something went wrong';
        break;
    }
  } else console.error(e);
  Swal.fire({
    icon: 'error',
    title,
    text,
    showConfirmButton: true,
    timer: 6000,
  });
}
