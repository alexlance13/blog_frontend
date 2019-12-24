export default function validateAll(field, value) {
  const validateObject = {
    text: value => value.replace(/<.+?>/g, '').length <= 2000 && value.replace(/<.+?>/g, '').length >= 100,
    title: value => value.length <= 60 && value.length >= 3,
    subtitle: value => value.length <= 80
  };
  return validateObject[field] && validateObject[field](value);
}
