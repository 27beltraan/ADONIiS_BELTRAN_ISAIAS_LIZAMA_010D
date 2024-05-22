
const fondo = document.querySelector(".fondo");
const loginlink = document.querySelector(".login-link");
const registrarlink = document.querySelector(".registrar-link");
const btn = document.querySelector(".btn");
const iconocerrar = document.querySelector(".icono-cerrar");

if (registrarlink) {
    registrarlink.addEventListener("click", () => {
        if (fondo) {
            fondo.classList.add('active');
        }
    });
}

if (loginlink) {
    loginlink.addEventListener("click", () => {
        if (fondo) {
            fondo.classList.remove('active');
        }
    });
}

if (btn) {
    btn.addEventListener("click", () => {
        if (fondo) {
            fondo.classList.add('active-btn');
        }
    });
}

if (iconocerrar) {
    iconocerrar.addEventListener("click", () => {
        if (fondo) {
            fondo.classList.remove('active-btn');
        }
    });
}



/* Lanzamientos*/

