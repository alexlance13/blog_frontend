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
