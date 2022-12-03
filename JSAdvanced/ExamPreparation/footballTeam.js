

class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];

    }
    newAdditions(players) {
        let topg = [];
        for (let r of players) {
            let [name, age, value] = r.split(`/`);
            let hasit = false;
            for (let i of this.invitedPlayers) {
                if (i.name == name) {
                    hasit = true;
                    if (i.value < Number(value)) {
                        i.value = Number(value);
                    }
                }
            }
            if (hasit == false) {
                this.invitedPlayers.push({name, age: Number(age), value: Number(value)});
            }
        }
        for (let o of this.invitedPlayers) {
            topg.push(o.name);
        }

        return `You successfully invite ${topg.join(`, `)}.`;
    }


    signContract(selectedPlayer) {
        let [name, offer] = selectedPlayer.split(`/`);
        for (let i of this.invitedPlayers) {
            if (i.name == name) {
                if (Number(offer) < i.value) {
                    throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${i.value - Number(offer)} million more are needed to sign the contract!`);
                } else {
                    i.value = `Bought`;
                    return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
                }
            }
        }
        throw new Error(`${name} is not invited to the selection list!`);

    }

    ageLimit(name, age) {
        for (let w of this.invitedPlayers) {
            if (w.name == name) {
                if (w.age < age) {
                    if ((age - w.age) < 5) {
                        return `${name} will sign a contract for ${age - w.age} years with ${this.clubName} in ${this.country}!`;
                    } else {
                        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
                    }
                } else {
                    return `${name} is above age limit!`;
                }
            }
        }
        throw new Error(`${name} is not invited to the selection list!`);
    }

    transferWindowResult() {
        let buff = `Players list:\n`;

        this.invitedPlayers.sort((a, b) => (a.name).localeCompare(b.name))
            .forEach(el => {
                buff += `Player ${el.name}-${el.value}\n`;
            })

        return buff.trim();


    }
}


let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.ageLimit("Lionel Messi", 33 ));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.ageLimit("Pau Torres", 26));
console.log(fTeam.signContract("Kylian Mbappé/240"));
