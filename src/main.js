(() => {
  const refs = {
    // Кнопка відкриття
    openMenuBtn: document.querySelector("[data-mobile-menu-open]"),
    // Кнопка закриття
    closeMenuBtn: document.querySelector("[data-mobile-menu-close]"),
    // Бекдроп мобільного меню
    menu: document.querySelector("[data-mobile-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-open");
    }
    
      refs.menu.addEventListener("click", onMenuClick);

  function toggleModal() {
    refs.menu.classList.toggle("is-open");
  }

   function onMenuClick(e) {
    
    const link = e.target.closest(".mobile-menu-link");
    const button = e.target.closest(".mobile-menu-button");

    if (link || button) {
      refs.menu.classList.remove("is-open");
    }
  }
})();

