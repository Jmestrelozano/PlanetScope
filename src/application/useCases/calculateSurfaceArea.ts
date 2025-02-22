export const calculateSurfaceArea = (radius: number): string => {
  const area = 4 * Math.PI * Math.pow(radius, 2);
  return area.toLocaleString('en-US', {maximumFractionDigits: 0});
};