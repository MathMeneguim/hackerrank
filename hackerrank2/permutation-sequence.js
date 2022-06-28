function permutationEquation(p) {

  const result = new Array(p.length);

  for (const i of p) {
    result [p[p[i-1]-1]-1] = i;
  }
  return result;
}