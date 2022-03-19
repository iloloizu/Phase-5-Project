import allShoes from "./all-shoes";

const getAll = () => {
  return allShoes.get("");
};

const ShoeService = {
  getAll
};

export default ShoeService;