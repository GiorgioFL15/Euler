// Chamando Euler 
let euler = "2,7182818284590452353602874713526624977572470936999595749669676277240766303535475945713821785251664274274663919320030599218174135966290435729003342952605956307381323286279434907632338298807531952510190115738341879307021540891499348841675092447614606680822648001684774118537423454424371075390077449920695517028386062613313845830007520449338265602976067371132007093287091274437470472306969772093101416928368190255151086574637721112523897844250569536967707854499699679468644549059879316368892300987931277361782154";

// Retirando as virgulas do Euler
euler = euler.replace(',', '');

// Percorrendo o número de euler de 10 em 10 
for(let i = 0; i < (euler.length-10); i++){ 


	// Verificar 10 numeros 
    let currentNumber = euler.substring(i, i+10); 

	// Iniciando a variavel isPrime (Variavel que irá verificar se é primo)
    let isPrime = true; 

	// Verificando se é primo 
	for(let j = 2; j< (currentNumber**0.5); j++){
		if(currentNumber % j == 0 ){
			// Verifica que não é primo 
			isPrime= false
			// Finaliza 
			break;
		}
	}
	// Verifica se achou isPrime verdadeiro 
    if(isPrime){ 
		// isPrime verdadeiro
        console.log("Número primo encontrado: ", currentNumber); 
		// Finaliza 
        break; 
    }

}