export default function scrollTo(ref) {
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth",
  });
}
