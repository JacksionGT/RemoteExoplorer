const { remote } = require('electron')

function close() {
    var list = remote.BrowserWindow.getAllWindows();
    var mainWindow = list[0];
    mainWindow.close();
}

window.onload = function () {

    var closeBtn = this.document.querySelectorAll(".close")[0];
    closeBtn.addEventListener('click', close);

}
