export const convertKelvinToCelsiusUseCase = (kelvin: number): string => {
  return (kelvin - 273.15).toFixed(2);
};