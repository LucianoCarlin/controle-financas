import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map((reg) => (
              <tr key={reg.id}>
                <td>{reg.title}</td>
                <td className={reg.type}>
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(reg.amount)}
                </td>
                <td>{reg.category}</td>
                <td>
                  {Intl.DateTimeFormat("pt-BR").format(new Date(reg.createdAt))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}
