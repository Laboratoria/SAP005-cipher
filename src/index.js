import cipher from './cipher.js';

document.getElementById('encode').addEventListener('click', cifrar);
    function cifrar() {
    const text = document.getElementById("msg").value;
    const offset = Number(document.getElementById("chave").value);
    // let texto = cipher.encode(offset, text);
    document.getElementById('text-encoded').innerHTML = cipher.encode(offset, text);

    // `<p><stonge>${texto}</stonge></p>`;
}

document.getElementById('decode').addEventListener('click', decifrar);
    function decifrar() {
    const text = document.getElementById("msg").value;
    const offset = Number(document.getElementById("chave").value);
    // let texto = cipher.decode(offset, text);
    document.getElementById('text-encoded').innerHTML = cipher.decode(offset, text);

    // `<p><stonge>${texto}</stonge></p>`;
}
