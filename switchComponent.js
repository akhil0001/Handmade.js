class HandmadeSwitch extends HTMLElement {
    constructor(){
        super();

        var shadowElement =  this.attachShadow({mode:'open'});

        var label = document.createElement('label');
        label.className = "switch";
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        var slider = document.createElement('span');
        slider.className = "slider";

        label.appendChild(checkbox);
        label.appendChild(slider);

        var stateFlag = this.hasAttribute('value');
        // if(stateFlag)
        

        var appendStyles = function() {
            return `
            .switch {
                position: relative;
                display: inline-block;
                width: 50px;
                height: 24px;
                border: 2px solid #000;
                border-radius: 95% 4% 93% 5%/4% 95% 5% 93%;
                -webkit-border-radius: 95% 4% 93% 5%/4% 95% 5% 93%;
                -moz-border-radius: 95% 4% 93% 5%/4% 95% 5% 93%;
                -ms-border-radius: 95% 4% 93% 5%/4% 95% 5% 93%;
                -o-border-radius: 95% 4% 93% 5%/4% 95% 5% 93%;
            }
            .switch input {
                opacity: 0;
                width: 0;
                height: 0;
            }
            
            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background-color: #ccc;
                transition: .4s;
                -webkit-transition: .4s;
                -moz-transition: .4s;
                -ms-transition: .4s;
                -o-transition: .4s;
            }
            
            
            .slider::before {
                position: absolute;
                content: "";
                height: 22px;
                width: 25px;
                left: 0px;
                bottom: 1px;
                background-color: white;
                -webkit-transition: .4s;
                transition: .4s;
                border-radius: 1px;
                -webkit-border-radius: 1px;
                -moz-border-radius: 1px;
                -ms-border-radius: 1px;
                -o-border-radius: 1px;
            }
            
            input:checked+.slider {
                background-color: #2196F3;
            }
            
            
            input:checked+.slider:before {
                
                transform: translateX(30px);
                -webkit-transform: translateX(25px);
                -moz-transform: translateX(25px);
                -ms-transform: translateX(25px);
                -o-transform: translateX(25px);
            }
            `
        }
        shadowElement.appendChild(label);
        var stylesForNode = document.createElement('style');
        var styles =  appendStyles();
        stylesForNode.textContent = styles;
        shadowElement.appendChild(stylesForNode);
    }
}

customElements.define('handmade-switch',HandmadeSwitch);