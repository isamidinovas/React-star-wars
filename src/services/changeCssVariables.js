export const changeCssVariables = (theme) => {
  const root = document.querySelector(":root");
  //   Изменяем свет заголовка и фона
  const cssVariables = ["header", "bgimage"];
  
  cssVariables.forEach((elem) => {
    root.style.setProperty(
      `--theme-default-${elem}`,
      `var(--theme-${theme}-${elem})`
    );
  });
};
