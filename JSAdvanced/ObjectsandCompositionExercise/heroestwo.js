function test(raw) {

    let create = solve();
    const scorcher = create.mage("Scorcher");
    scorcher.cast("fireball")
    scorcher.cast("thunder")
    scorcher.cast("light")

    const scorcher2 = create.fighter("Scorcher 2");
    scorcher2.fight()

    console.log(scorcher2.stamina);
    console.log(scorcher.mana);

    function solve() {


        let mage = function mage(ime) {
            let m = {
                ime,
                health: 100,
                mana: 100,
                cast(spel) {
                    m.mana--;
                    console.log(`${m.ime} cast ${spel}`);
                }
                
            }
            return m;
        }
        let fighter = function fighter(ime) {
            let f = {
                ime,
                health: 100,
                stamina: 100,
                fight() {
                    f.stamina--;
                    console.log(`${f.ime} slashes at the foe!`);
                }

            }
            return f;
        }

        return { mage: mage, fighter: fighter };

    }






}

test();
console.log(`----------`);