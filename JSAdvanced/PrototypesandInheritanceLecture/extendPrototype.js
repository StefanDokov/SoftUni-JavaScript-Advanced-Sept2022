
function extendPrototype(classToextend){
    classToextend.prototype.species = `Human`;
    classToextend.prototype.toSpeciesString =  function() {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}
