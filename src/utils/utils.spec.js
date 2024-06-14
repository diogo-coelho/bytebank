import { calculaNovoSaldo } from './index'

describe("Quando eu realizo uma transação", () => {
    test("Que é um depósito, o valor do saldo deve aumentar", () => {
        const transacao = {
            transacao: 'Depósito',
            valor: 50
        }

        const novoSaldo = calculaNovoSaldo(transacao, 100)

        expect(novoSaldo).toBe(150)
    })

    test("Que é uma transferência, o valor do saldo deve diminuir", () => {
        const transacao = {
            transacao: 'Transferência',
            valor: 50
        }

        const novoSaldo = calculaNovoSaldo(transacao, 100)

        expect(novoSaldo).toBe(50)
    })
})