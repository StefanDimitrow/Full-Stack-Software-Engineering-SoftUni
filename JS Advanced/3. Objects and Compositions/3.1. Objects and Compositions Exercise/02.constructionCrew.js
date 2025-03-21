function solve(obj) {
  let worker = {
    weight: Number,
    experience: Number,
    levelOfHydrated: Number,
    dizziness: Boolean,
  };

  if(obj.dizziness === true) {
    obj.levelOfHydrated += 0.1 * obj.weight * obj.experience
    obj.dizziness = false
}
return obj;
}
solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });
console.log("--------------------");
solve({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true });
console.log("--------------------");
solve({ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false });
console.log("--------------------");
solve();
console.log("--------------------");
