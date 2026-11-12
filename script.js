// ==========================================
// 1. FUNCIONALIDADE DO MODO ESCURO
// ==========================================
const btnTema = document.getElementById('btn-tema');
const body = document.body;

if (btnTema) {
    btnTema.addEventListener('click', function () {
        body.classList.toggle('tema-escuro');

        if (body.classList.contains('tema-escuro')) {
            btnTema.textContent = '☀️ Modo Claro';
        } else {
            btnTema.textContent = '🌙 Modo Escuro';
        }
    });
}

// ==========================================
// 2. FUNCIONALIDADE DAS CURTIDAS
// ==========================================
const botoesReacao = document.querySelectorAll('.btn-reacao');

botoesReacao.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener('click', function () {
        let texto = botao.querySelector('span');

        if (texto) {
            let contador = parseInt(texto.textContent, 10);

            if (curtiu === false) {
                texto.textContent = contador + 1;
                curtiu = true;
            } else {
                texto.textContent = contador - 1;
                curtiu = false;
            }
        }
    });
});