import logoImg from "../../assets/logo.svg";

import { Button, Container, Content } from "./styles";

interface HeaderProps {
  onOpenModal: () => void;
}

export function Header({ onOpenModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Controle finanças" />
        <Button type="button" onClick={onOpenModal}>
          nova transação
        </Button>
      </Content>
    </Container>
  );
}
