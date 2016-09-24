import _ from "lodash";

_.chain([1, 2, 3])
  .map(x => [x, x*2])
  .flatten()
  .sort()
  .value();


  //https://medium.com/making-internets/why-using-chain-is-a-mistake-9bc1f80d51ba