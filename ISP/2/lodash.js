import map from "lodash/fp/map";
import flatten from "lodash/fp/flatten";
import sortBy from "lodash/fp/sortBy";
import flow from "lodash/fp/flow";

flow(
  map(x => [x, x*2]),
  flatten,
  sortBy(x => x) 
)([1,2,3]);

// https://github.com/lodash/babel-plugin-lodash
// https://medium.com/making-internets/why-using-chain-is-a-mistake-9bc1f80d51ba