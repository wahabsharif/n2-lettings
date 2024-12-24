// Function to format date-time
export const formatDateTime = (dateTime: string): string => {
  const date = new Date(dateTime); // Convert to Date object
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short", // Short weekday name
    year: "numeric",
    month: "short", // Short month name
    day: "numeric",
  };

  return date.toLocaleString("en-US", options); // Format date-time string
};

// Function to format amounts with commas (e.g., 1,000,000.00)
export const formatAmount = (amount: number): string => {
  if (isNaN(amount)) {
    console.error("Invalid amount", amount); // Debugging the amount
    return "Invalid Amount"; // In case the input is not a valid number
  }

  return amount.toLocaleString("en-US", {
    minimumFractionDigits: 2, // Always show at least 2 decimal places
    maximumFractionDigits: 2, // Maximum 2 decimal places
  }); // Formats number with commas as thousand separators
};
