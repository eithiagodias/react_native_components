import { ThemeProvider } from "@shopify/restyle";

import { Button } from "../components/Button";

import { theme } from "../theme";

const ButtonTemplate = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <Button label="Clicar" />
    </ThemeProvider>
  )
}

const meta = {
  title: "Button",
  component: ButtonTemplate,
};

export default meta;

export const GettingStarted = {
  args: {},
  parameters: {
    noBackground: true
  }
};
