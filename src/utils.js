export const formatDate = function (inputDate) {
  // Parse the input date string in "yyyy-mm-dd" format
  const dateParts = inputDate.split("-");
  if (dateParts.length !== 3) {
    // Invalid input format
    return "Invalid Date";
  }

  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];

  // Construct the formatted date string in "dd/mm/yyyy" format
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};
