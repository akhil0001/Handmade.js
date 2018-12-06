class HandmadeSwitch extends HTMLElement {
    get Flag()
    {
        return this.getAttribute('flag');
    }
    constructor() {
        super();

        var shadowElement = this.attachShadow({
            mode: 'open'
        });

        var flag = this.getFlag();
        // if (!flag)
        // flag = 'false';
        debugger;
        function toggleFlag() {
            if (flag === 'false') {
                flag = 'true';
            } else {
                flag = 'false';
            }
            switchDiv.setAttribute('data-value', flag);
            this.setAttribute('flag', flag);
        }
        var switchDiv = document.createElement('div');
        switchDiv.className = "switch";
        switchDiv.setAttribute('data-value', flag);
        switchDiv.addEventListener("click", toggleFlag);

        var sliderSpan = document.createElement('span');
        sliderSpan.className = "slider";

        switchDiv.appendChild(sliderSpan);

        var styles = `
        .switch
        {
            position:relative;
            display: inline-block;
            width:50px;
            height:24px;
            border: 2px solid #111111;
            border-radius: 95% 4% 93% 5%/4% 95% 5% 93%;
            -webkit-border-radius: 95% 4% 93% 5%/4% 95% 5% 93%;
            -moz-border-radius: 95% 4% 93% 5%/4% 95% 5% 93%;
            -ms-border-radius: 95% 4% 93% 5%/4% 95% 5% 93%;
            -o-border-radius: 95% 4% 93% 5%/4% 95% 5% 93%;
            background: #ddd;
            cursor: pointer;
            transition: .3s;
            -webkit-transition: .3s;
            -moz-transition: .3s;
            -ms-transition: .3s;
            -o-transition: .3s;
        }
        .slider
        {
            position: absolute;
            left:0px;
            top:5%;
            height:90%;
            width:45%;
            background:#fff;
            border-radius: 2px;
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            -ms-border-radius: 2px;
            -o-border-radius: 2px;
            transition: .5s;
            -webkit-transition: .3s;
            -moz-transition: .5s;
            -ms-transition: .5s;
            -o-transition: .5s;
        }
        .switch[data-value = "true"] .slider
        {
            transform: translateX(120%);
            -webkit-transform: translateX(120%);
            -moz-transform: translateX(120%);
            -ms-transform: translateX(120%);
            -o-transform: translateX(120%);
        }
        
        .switch[data-value = "true"]{
            background: blueviolet;
            border: 2px solid #111111;
        }`;

        var style = document.createElement('style');
        style.textContent = styles;

        shadowElement.appendChild(switchDiv);
        shadowElement.appendChild(style);

    }
}



customElements.define('handmade-switch', HandmadeSwitch);