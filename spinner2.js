const sprites = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   '];

let time = 100;

const add = function (increase) {
  return time += increase;
};

for (let i = 0; i < 2; i++) {
  sprites.map(sprite => setTimeout(() => { process.stdout.write(sprite);}, add(200)));
}

setTimeout(() => { process.stdout.write('\n');}, add(200));