programa
{
	//Crie um programinha que receba 5 números e os guarde em um vetor, em seguida
	//crie a lógica que encontre o maior desses 5 números, a saída do programa deve ser
	//algo como → O maior número é o 2º número digitado, no caso o 456.

	funcao inicio()
	{
		inteiro vetor[5]
		
		escreva("Insira o 1° número: ")
		leia(vetor[0])

		escreva("Insira o 2° número: ")
		leia(vetor[1])

		escreva("Insira o 3° número: ")
		leia(vetor[2])

		escreva("Insira o 4° número: ")
		leia(vetor[3])

		escreva("Insira o 5° número: ")
		leia(vetor[4])
		limpa()
		
		escreva("===================== \n")
		percorreVetor(  vetor)
		escreva("===================== \n")

		se (vetor[0] > vetor[1] e vetor[0] > vetor[2] e vetor[0] > vetor[3] e vetor[0] > vetor[4]) {
         	   escreva ("O maior número é o 1º número digitado, no caso ", vetor[0]) }
		senao
			se (vetor[1] > vetor[0] e vetor[1] > vetor[2] e vetor[1] > vetor[3] e vetor[1] > vetor[4]) {
         	   	   escreva ("O maior número é o 2º número digitado, no caso ", vetor[1]) }
			senao 
				se (vetor[2] > vetor[0] e vetor[2] > vetor[1] e vetor[2] > vetor[3] e vetor[2] > vetor[4]) {
         	   	   	   escreva ("O maior número é o 3º número digitado, no caso ", vetor[2]) }
         	   	   	senao 
					se (vetor[3] > vetor[0] e vetor[3] > vetor[1] e vetor[3] > vetor[2] e vetor[3] > vetor[4]) {
         	   	   		   escreva ("O maior número é o 4º número digitado, no caso ", vetor[3]) }
         	   	   		senao 
         	   	   			se (vetor[4] > vetor[0] e vetor[4] > vetor[1] e vetor[4] > vetor[2] e vetor[4] > vetor[3]) {
         	   	   		 	   escreva ("O maior número é o 5º número digitado, no caso ", vetor[4]) }
         	   	   		 	senao
         	   	   		 		se (vetor[0] == vetor[1] e vetor[1] == vetor[2] e vetor[2] == vetor[3] e vetor[3] == vetor[4]) {
                              	   escreva ("TODOS OS NÚMEROS DIGITADOS FORAM IGUAIS.") } 
                              	senao
                              		se (vetor[0] == vetor[1] ou vetor[1] == vetor[2] ou vetor[2] == vetor[3] ou vetor[3] == vetor[4]) {
                              		   escreva ("ERRO! \n") 
                              	  	   escreva ("FORAM DIGITADOS UM OU MAIS NÚMEROS IGUAIS.") } 
	}

		funcao percorreVetor(inteiro vetor[]){
		  para (inteiro i = 0; i < 5; i++){
		    escreva("Posicao " + i + " -> " + vetor[i], "\n")
		  }
		}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 665; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */