function test(raw){

   if (raw.dizziness){
    let req = 0.1 * raw.weight * raw.experience;
    raw.levelOfHydrated += req;
    raw.dizziness = false;
   }
   return raw;

}
test({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  );
console.log(`-----------`);
test({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  );
  console.log(`-----------`);
  test({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  );