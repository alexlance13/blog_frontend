import Swal from "sweetalert2";

export default function setErrorText(e, title) {
  let text = "";
  if (e.response.status === 400) {
    switch (e.response.data) {
      case "Validation error":
        text = "You must stick with validation rules";
      case "Invalid token":
        text = "Your token is invalid";
      default:
        text = "Something went wrong";
    }
  }
  Swal.fire({
    icon: "error",
    title,
    text,
    showConfirmButton: true,
    timer: 6000
  });
}
