import React from 'react';
/* Importação do react para interfaces no código. */

/*Importação de ReactDom do arquivo react-dom.*/
import ReactDOM from 'react-dom';
/*Importação de app para app*/
import App from './App';
/*provê métodos específicos para o DOM que podem ser usados no nível superior de sua aplicação como uma válvula de escape para sair do modelo do React se você precisar.*/
ReactDOM.render(<App />, document.getElementById('root'));
