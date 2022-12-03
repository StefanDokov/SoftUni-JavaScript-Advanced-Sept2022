function test(raw){
    
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};

myCar.nowPlaying();


assemblyLine.hasParktronic(myCar);

myCar.checkDistance(0.4);
myCar.checkDistance(0.2);


console.log(myCar);

  function createAssemblyLine() {
     
        return {
            hasClima(car) {
                car.temp = 21;
                car.tempSettings = 21;
                car.adjustTemp = () => {
                    if (car.temp < car.tempSettings) {
                        car.temp++;
                    } 
                    if (car.temp > car.tempSettings){
                        car.temp--;
                    }
                }

            },
            hasAudio(car) {
                car.currentTrack = null;
                car.nowPlaying = () =>{
                    if (car.currentTrack != null) {
                        console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`)
                    }

                }

            },
            hasParktronic(car){
                car.checkDistance = (raw) => {
                    if (raw < 0.1) {
                        console.log(`Beep! Beep! Beep!`);
                    } 
                    if (0.1 <= raw && raw < 0.25){
                        console.log(`Beep! Beep!`);
                    }
                    if (0.25 <= raw && raw < 0.5){
                        console.log(`Beep!`);
                    } 
                    if (raw >= 5){
                        console.log(``);
                    }
                }

            }
        }
        
      

  }





}
test();