const modal = document.getElementById("modal");

const mostrarModal = () => {
    modal.style.display = "flex";
    modal.style.opacity = 1;
    inputParaFocus.focus()
};



modal.addEventListener('keyup', e => e.key === 'Escape' ? esconderModal(e) : null);