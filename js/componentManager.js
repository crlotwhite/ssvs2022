class CustomInput extends HTMLElement {
    connectedCallback() {
        let label = document.createElement('label');
        label.innerHTML = 'input your name';
        this.appendChild(label);
        let input = document.createElement('input');
        this.appendChild(input);
    }
}

customElements.define('custom-input', CustomInput);
console.log(currentLanguage.headerText);
/*
<Question
section="User Trends"
subject="Education"
overview=""
detailSubject="Educational attainment"
detailParagraph=""
chartName=""
questionText=""
></Question>
 */