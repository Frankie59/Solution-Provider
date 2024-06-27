const calculateFvx = (weights, Cvx, V) => {
  return Cvx.map((cvx, index) => cvx * V);
};

export default calculateFvx;
