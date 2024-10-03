const readlineSync = require("readline-sync");

// Função para calcular o saldo e o nivel do jogador
function calcularRank(vitorias, derrotas) {
	const saldoVitorias = vitorias - derrotas;
	let nivel;

	// Determinar o nível do jogador com base no número de vitórias

	if (vitorias < 10) {
		nivel = "Ferro";
	} else if (vitorias >= 11 && vitorias <= 20) {
		nivel = "Bronze";
	} else if (vitorias >= 21 && vitorias <= 50) {
		nivel = "Prata";
	} else if (vitorias >= 51 && vitorias <= 80) {
		nivel = "Ouro";
	} else if (vitorias >= 81 && vitorias <= 90) {
		nivel = "Diamante";
	} else if (vitorias >= 91 && vitorias <= 100) {
		nivel = "Lendário";
	} else if (vitorias >= 101) {
		nivel = "Imortal";
	}

	return { saldoVitorias, nivel };
}

function main() {
	const vitorias = Number.parseInt(
		readlineSync.question("Digite a quantidade de vitorias: "),
	);
	const derrotas = Number.parseInt(
		readlineSync.question("Digite a quantidade de derrotas: "),
	);

	const resultado = calcularRank(vitorias, derrotas);
	const saldoVitorias = resultado.saldoVitorias;
	const nivel = resultado.nivel;

	console.log(
		`O Herói tem um saldo de ${saldoVitorias} vitorias e está no nível ${nivel}`,
	);
}

main();