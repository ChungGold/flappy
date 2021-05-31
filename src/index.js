import ReactDOM from 'react-dom';
import { App } from './App';
import { Char } from './components/Styles';

ReactDOM.render(
    <App />
,document.getElementById('root'));

const char = document.getElementById('char');

let counter = 0;

setInterval(()=> {
    counter++;
    char.style.bottom = `calc(50% - ${counter}px)`
}, 100)