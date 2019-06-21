window.addEventListener('focus',event =>
{console.log("focus")}
);
// foco no navegador (janela), por isso 'window' provoca a saída 'focus' no console.

document.addEventListener('click', event =>
{console.log('click')}
);
// clique no documento (site), por isso 'document'. O clique provoca a saída 'click'.

