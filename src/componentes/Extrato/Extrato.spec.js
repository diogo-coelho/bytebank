import { render, screen } from '@testing-library/react'
import Extrato from './index'

describe("Deve renderizar uma lista de Transações", () => {
    test("", () => {
        const transacoes = [
            {
                transacao: 'Depósito',
                valor: 100
            }
        ]

        render(<Extrato transacoes={transacoes} />)
        const lista = screen.getByRole('listitem')
        expect(lista).toBeInTheDocument()
    })
})