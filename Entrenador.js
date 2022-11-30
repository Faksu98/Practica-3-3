class Entrenador{

    #nombre
    #apellido
    #edad
    #fechaDeNacimiento
    #localidad
    #dni
    #banco
    #telefono
    #sexo
    #precio

    constructor(N, A , E, F, L, D, B, T, S, P){
        this.#nombre = N;
        this.#apellido = this.verificarSiEsMayorDeEdad(A);
        this.#edad = E;
        this.#fechaDeNacimiento = F;
        this.#localidad = L;
        this.#dni = D;
        this.#banco = B;
        this.#telefono = T;
        this.#sexo = S;
        this.#precio = P;
    }
    

    verificarSiEsMayorDeEdad(A){
        let aniosDevolver = -1;
        if ( (A >= 0) && (A <= 50)){
            aniosDevolver = A
        }
        return aniosDevolver;
    }

    //SETTERyGETTER

    setNombre(nombre){
        this.#nombre = nombre;        
    }

    getNombre(){
        return this.#nombre;
    }

    setApellido(apellido){
        this.#apellido = apellido;
    }

    getApellido(){
        return this.#apellido;
    }
    
    setEdad(edad){
        this.#edad = edad;
    }

    getEdad(){
        return this.#edad;
    }
    
    setFechaDeNacimiento(fechaDeNacimiento){
        this.#fechaDeNacimiento = fechaDeNacimiento;
    }

    getFechaDeNacimiento(){
        return this.#fechaDeNacimiento;
    }
    
    setLocalidad(localidad){
        this.#localidad = localidad;
    }

    getLocalidad(){
        return this.#localidad;
    }
    
    setDNI(DNI){
        this.#dni = DNI;
    }

    getDNI(){
        return this.#dni;
    }
    
    setBanco(banco){
        this.#banco = banco;
    }

    getBanco(){
        return this.#banco;
    }
    
    setTelefono(telefono){
        this.#telefono = telefono;
    }

    getTelefono(){
        return this.#telefono;
    }
    
    setSexo(sexo){
        this.#sexo = sexo;
    }

    getSexo(){
        return this.#sexo;
    }
    
    setPrecio(precio){
        this.#precio = precio;
    }

    getPrecio(){
        return this.#precio
    }
    


}

module.exports = Entrenador