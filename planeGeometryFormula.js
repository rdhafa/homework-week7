const squarePerimeter = ({ side }) => {
  return 4 * side;
};

const squareArea = ({ side }) => {
  return side * side;
};

const rectanglePerimeter = ({ length, width }) => {
  return 2 * (length + width);
};

const rectangleArea = ({ length, width }) => {
  return length * width;
};

module.exports = {
  squarePerimeter,
  squareArea,
  rectanglePerimeter,
  rectangleArea,
};
