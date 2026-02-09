export const sizes = () => {
  const container = document.querySelector('[data-sizes="list"]');
  const buttons = document.querySelectorAll('[data-sizes="button"]');
  const onSizeClick = (event) => {
    const clickedButton = event.target;
    if (!clickedButton.classList.contains("product__sizes-button")) {
      return;
    }
    buttons.forEach(btn => {
      btn.classList.remove("product__sizes-button--active");
    });
    clickedButton.classList.add("product__sizes-button--active");
  };
  container.addEventListener("click", onSizeClick);
};
