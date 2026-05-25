export const truncateText = (
  text,
  limit = 100
) => {
  if (!text) return "";

  return text.length > limit
    ? text.slice(0, limit) + "..."
    : text;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};