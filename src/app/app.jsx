import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme/default-theme";
import * as S from "./app.style";
import CustomForm from "../components/custom-form/custom-form";

const App = () => {
  return(
    <ThemeProvider theme={defaultTheme}>
      <S.GlobalStyle />
      <CustomForm />
    </ThemeProvider>
  )
}

export default App;
