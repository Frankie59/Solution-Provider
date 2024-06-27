const calculateCs = (SDS, SD1, T, Ie, R) => {
  const Cs = SDS / (R / Ie);
  return Math.min(Math.max(Cs, 0.01), 0.06 * SD1 / T);
};

export default calculateCs;
