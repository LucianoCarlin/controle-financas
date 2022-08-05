import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import close from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { TransactionsContext } from "../../context/TransactionsContext";
import { api } from "../../services/api";
import {
  ActionButton,
  ButtonClose,
  Container,
  TransactionButton,
} from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}
export function NewTransactionModal({
  isOpen,
  handleCloseModal,
}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  const handleTypeDeposit = () => setType("deposit");
  const handleTypeWithdraw = () => setType("withdraw");

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) =>
    setAmount(Number(e.target.value));
  const handleChangeCategory = (e: ChangeEvent<HTMLInputElement>) =>
    setCategory(e.target.value);

  const handleCreateNewTransaction = async (e: FormEvent) => {
    e.preventDefault();
    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
    handleCloseModal();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ButtonClose type="button" onClick={handleCloseModal}>
        <img src={close} alt="Fechar modal" />
      </ButtonClose>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={handleChangeTitle}
        />
        <input
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={handleChangeValue}
        />
        <TransactionButton>
          <ActionButton
            type="button"
            onClick={handleTypeDeposit}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </ActionButton>
          <ActionButton
            type="button"
            onClick={handleTypeWithdraw}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </ActionButton>
        </TransactionButton>
        <input
          placeholder="Categoria"
          value={category}
          onChange={handleChangeCategory}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
