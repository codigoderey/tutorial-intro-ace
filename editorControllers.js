btnReset = document.getElementById('btnReset');
btnRun = document.getElementById('btnRun');
btnLive = document.getElementById('btnLive');
iframe = document.getElementById('output');

// trigger editor extensions
ace.require('ace/ext/language_tools');

// create editor
let editor = ace.edit('editor');

editor.session.setMode('ace/mode/html');
editor.setTheme('ace/theme/monokai');
editor.setOptions({
    fontSize: '16pt',
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible: false,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
});

btnReset.addEventListener('click', function () {
    editor.setValue('');
    iframe.src = '';
});

btnRun.addEventListener('click', function () {
    getValueAndDisplay();
});

// ceck if button is checked
btnLive.addEventListener('change', function () {
    if (btnLive.checked) {
        editor.session.on('change', function (delta) {
            console.log(delta);
            getValueAndDisplay();
        });
    }
});

function getValueAndDisplay() {
    const text = editor.getValue();
    iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(text);
}
