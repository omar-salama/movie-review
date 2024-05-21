export default function getImageUrl(path) {
  const baseImageUrl = import.meta.env.VITE_REACT_APP_BASE_IMAGE_URL;
  return `${baseImageUrl}${path}`
}