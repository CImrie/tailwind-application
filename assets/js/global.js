import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

hljs.highlightAll();
document.querySelectorAll('code').forEach(function(el) {
  hljs.highlightElement(el);
});