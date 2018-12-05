function toggleClasses() {
    var switchDiv = document.getElementsByClassName('switch')[0];
    var flag = switchDiv.getAttribute('data-value');
    console.log(flag);
    if (!flag)
        flag = 'true';

    if (flag === 'false') {
        flag = 'true';
    } else {
        flag = 'false';
    }
    switchDiv.setAttribute('data-value', flag);
}

function getDiv() {
    var switchDiv = document.getElementsByClassName('switch')[0];
    switchDiv.addEventListener("click", toggleClasses);
}

window.onload = getDiv();