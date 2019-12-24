export default function dateFormatter(date) {
  let res = date.split('T');
  res[1] = res[1].slice(0, -8);
  return res.reverse().join(' ');
}
