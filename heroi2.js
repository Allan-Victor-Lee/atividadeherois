
function calcularRankeadas(vitorias, derrotas) {

    let saldoVitorias = vitorias - derrotas;

    let ranking = 'sem ranking';

    if (saldoVitorias <= 10) {
        ranking = 'ferro';
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        ranking = 'bronze';
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        ranking = 'prata';
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        ranking = 'ouro';
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        ranking = 'diamante';
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        ranking = 'lendário';
    } else {
        ranking = 'imortal';
    }

    console.log(`o numero de vitorias do herói é de:  ${saldoVitorias} e o ranking dele é: ${ranking}`)


}
    calcularRankeadas(200, 4);

    