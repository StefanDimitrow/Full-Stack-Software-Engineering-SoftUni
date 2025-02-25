function solve(...args) {
    let n = Number(args.shift())
    const actions = {
        chop: x => n = x / 2,
        dice: x => n = Math.sqrt(x),
        spice: x => n = x + 1,
        bake: x => n = x * 3,
        fillet: x => n = x - x * 0.2,
    }

    args.forEach(x => console.log(actions[x](n)))
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log("--------------------");
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");