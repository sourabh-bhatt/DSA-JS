function towerOfHanoi(n, sourceRod, destinationRod, auxiliaryRod) {
  if (n === 1) {
    console.log(`move disk 1 from rod ${sourceRod} to rod ${destinationRod}`);
    return 1;
  }

  let moves = 0;

  moves += towerOfHanoi(n - 1, sourceRod, auxiliaryRod, destinationRod);
  console.log(`move disk ${n} from rod ${sourceRod} to rod ${destinationRod}`);
  moves++;
  moves += towerOfHanoi(n - 1, auxiliaryRod, destinationRod, sourceRod);

  return moves;
}
console.log(towerOfHanoi(2, 1, 3, 2));
console.log("-------");
console.log(towerOfHanoi(3, 1, 3, 2));
