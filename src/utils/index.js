export const formattedDate = new Date()
  .toLocaleDateString("en-GB")
  .split("/")
  .reverse()
  .join("-");
