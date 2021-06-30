import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyle";
import { lightTheme, darkTheme } from "./Theme";
import { useDarkMode } from "./Utils/useDarkMode";
import Toogler from "./Utils/Toogler";
import Card from "./Components/Card";
import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  max-width: 1280px;
  margin: auto;
`;
const CardContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Wrapper>
          <Toogler
            theme={theme}
            toggleTheme={themeToggler}
            buttonText={theme === "light" ? "Dark Mode" : "Light Mode"}
          />
          <CardContainer>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </CardContainer>
        </Wrapper>
      </>
    </ThemeProvider>
  );
};

export default App;
