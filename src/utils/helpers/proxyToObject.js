export default function proxyToObject(p) {
  return JSON.parse(JSON.stringify(p));
}
