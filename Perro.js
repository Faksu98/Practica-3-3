class Perro {

    #nombre
    #peso
    #sexo
    #raza
    #caracter
    #altura
    #edad

    /**
     * Inicia los datos del perro
     * @param {String} N Nombre nuevo
     * @param {Number} P Peso nuevo
     * @param {String} S Sexo nuevo
     * @param {String} R Raza nuevo
     * @param {Boolean} C Caracter nuevo
     * @param {Number} A Altura nuevo
     * @param {Number} E Edad nuevo
     */
    constructor(N, P, S, R, C, A, E){
        this.#nombre = N;
        this.#peso = P;
        this.#sexo = S;
        this.#raza = R;
        this.#caracter = C;
        this.#altura = A;
        this.#edad = E;
    }




    //SETTER Y GETTER

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre
    }

    setPeso(peso){
        this.#peso = peso;        
    }

    getPeso(){
        return this.#peso
    }
    
    setSexo(sexo){
        this.#sexo = sexo;
    }

    getSexo(){
        return this.#sexo;
    }
    
    setRaza(raza){
        this.#raza = raza;
    }

    getRaza(){
        return this.#raza;
    }
    
    setCaracter(caracter){
        this.#caracter = caracter;
    }

    getCaracter(){
        return this.#caracter;
    }
    
    setAltura(altura){
        this.#altura = altura;
    }

    getAltura(){
        return this.#altura;
    }
    
    setEdad(edad){
        this.#edad = edad;
    }

    getEdad(){
        return this.#edad;
    }
    

} 


module.exports = Perro;