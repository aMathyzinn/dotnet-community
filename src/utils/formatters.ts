// String formatters for the landing page

export const formatMemberCount = (count: number): string => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};

export const formatPercentage = (value: number): string => {
  return `${value > 0 ? '+' : ''}${value}%`;
};

export const formatProjectCount = (count: number): string => {
  return `${count} ${count === 1 ? 'Project' : 'Projects'}`;
};

export const formatDate = (month: string, year: number): string => {
  return `${month} ${year}`;
};