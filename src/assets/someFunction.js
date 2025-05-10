export function formatPathTitle(pathname) {
  if (!pathname) return "";

  const lastPart = pathname.split("/").pop();

  return lastPart
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
