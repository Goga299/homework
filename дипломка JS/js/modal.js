export default class Modal {
  constructor(config = {}) {
    this.config = {
      MODAL_WRAPPER: "modal",
      PAGE_BODY: "page__body",
      PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
      ...config
    };
    this.modal = document.querySelector(`.${this.config.MODAL_WRAPPER}`);
    this.body = document.querySelector(`.${this.config.PAGE_BODY}`);
    if (!this.modal) {
      console.error("Элемент .modal не найден");
      return;
    }
    document.addEventListener("click", (e) => this.handleClick(e));
    document.addEventListener("keydown", (e) => this.handleKey(e));
    this.modal.addEventListener("click", (e) => this.handleOverlayClick(e));
  }
  handleClick(e) {
    const btn = e.target.closest("[data-modal-button]");
    if (btn) {
      const name = btn.dataset.modalButton;
      const targetWindow = document.querySelector(`[data-modal-window="${name}"]`);
      if (targetWindow) {
        this.open(targetWindow);
      }
      return;
    }
    if (e.target.closest("[data-modal-close]")) {
      this.close();
    }
  }
  handleOverlayClick(e) {
    if (e.target === this.modal) {
      this.close();
    }
  }
  handleKey(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }
  open(modalWindow) {
    this.modal.classList.add("modal--open");
    modalWindow.classList.add("modal__window--open");
    this.body.classList.add(this.config.PAGE_BODY_NO_SCROLL);
  }
  close() {
    this.modal.classList.remove("modal--open");
    document.querySelectorAll(".modal__window--open").forEach(el => {
      el.classList.remove("modal__window--open");
    });
    this.body.classList.remove(this.config.PAGE_BODY_NO_SCROLL);
  }
}