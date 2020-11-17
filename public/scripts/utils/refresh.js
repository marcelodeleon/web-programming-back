export default function refresh() {
  window.dispatchEvent(new CustomEvent('refresh'));
}
