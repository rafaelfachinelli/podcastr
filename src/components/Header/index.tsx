import format from "date-fns/format";
import enUS from "date-fns/locale/en-US";
import ThemeSwitch from "../ThemeSwitch";

import { Container, Logo } from "./styles";

export function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: enUS
  });

  return (
    <Container>
      <Logo>
        <img src="/logo.svg" alt="Podcastr" />
        <p>The best to you hear, always.</p>
      </Logo>

      <ThemeSwitch />

      <span>{currentDate}</span>
    </Container>
  );
}
