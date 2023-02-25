class SectionHeader extends HTMLElement {
    render() {
        // clear first 
        this.innerHTML = '';

        // get strings from
        const lang = this.getAttribute("lang");
        let currentLanguageStrings = strings["en"];

        if (lang != null) {
            currentLanguageStrings = strings[lang];
        }

        // get section id
        const sectionId = parseInt(this.getAttribute("sid"));
        const sectionStrings = currentLanguageStrings.section[sectionId];

        // add class
        this.classList.add("big-container");
        this.classList.add("big-shadow");

        // add h1
        const header = document.createElement("h1");
        header.innerHTML = sectionStrings.name;
        this.appendChild(header);

        // draw line
        const line = document.createElement("hr");
        this.appendChild(line);
        
        // add paraghraphs
        const paraghraphs = sectionStrings.paragraphs.split('\n');
        for (let i=0;i<paraghraphs.length;i++) {
            const p = document.createElement("p");
            p.innerHTML = paraghraphs[i];
            p.classList.add("normal-text");
            this.appendChild(p);
        }
    }
    
    static get observedAttributes() {
        return ["lang"];
    }

    connectedCallback() {
        this.render();
    }
    attributeChangedCallback() {
        this.render();
    }
}
customElements.define('section-header', SectionHeader);

class SubSection extends HTMLElement {
    render() {
        // clear first 
        this.innerHTML = '';

        // get strings from
        const lang = this.getAttribute("lang");
        let currentLanguageStrings = strings["en"];

        if (lang != null) {
            currentLanguageStrings = strings[lang];
        }

        // get section id
        const sectionId = parseInt(this.getAttribute("sid"));
        const sectionStrings = currentLanguageStrings.section[sectionId];

        // get subsection id
        const subSectionId = parseInt(this.getAttribute("ssid"));
        const subSectionStrings = sectionStrings.subSection[subSectionId];

        // draw big-line
        const bigLine = document.createElement("hr");
        bigLine.classList.add("line-big");
        this.appendChild(bigLine);

        // create sub-section
        const subSection = document.createElement("div");
        subSection.classList.add("sub-section");
        this.appendChild(subSection);

        // create question overview
        const overview = document.createElement("div");
        overview.classList.add("question-overview");
        subSection.appendChild(overview);

        const sectionName = document.createElement("h4");
        sectionName.innerHTML = sectionStrings.name;
        overview.appendChild(sectionName);

        const questionName = document.createElement("h2");
        questionName.innerHTML = subSectionStrings.name;
        overview.appendChild(questionName);

        const overall = document.createElement("p");
        overall.innerHTML = subSectionStrings.overall;
        overview.appendChild(overall);

        // create small line 1
        const smallLine1 = document.createElement("hr");
        smallLine1.classList.add("line-small");
        subSection.appendChild(smallLine1);

        // create question detail
        const detail = document.createElement("div");
        detail.classList.add("question-detail");
        subSection.appendChild(detail);

        const sectionSubName = document.createElement("h3");
        sectionSubName.innerHTML = subSectionStrings.subName;
        detail.appendChild(sectionSubName);

        // add paraghraphs
        const paraghraphs = subSectionStrings.paragraphs.split('\n');
        for (let i=0;i<paraghraphs.length;i++) {
            const p = document.createElement("p");
            p.innerHTML = paraghraphs[i];
            detail.appendChild(p);
        }

        // create small line 2
        const smallLine2 = document.createElement("hr");
        smallLine2.classList.add("line-small");
        subSection.appendChild(smallLine2);

        // create chart box
        const chartBox = document.createElement("div");
        chartBox.classList.add("chart-box");
        subSection.appendChild(chartBox);

        // create canvas
        const chartCanvas = document.createElement("canvas");
        chartCanvas.id = subSectionStrings.chartId;
        chartBox.appendChild(chartCanvas);

        // append chart code
        const chartScript = document.createElement("script");
        chartScript.type = "text/javascript";
        chartScript.src = `js/${subSectionStrings.chartSrc}.js`;
        subSection.appendChild(chartScript);

        const questionText = document.createElement("p");
        questionText.innerHTML = subSectionStrings.questionText;
        questionText.classList.add("question-text");
        subSection.appendChild(questionText);
    }

    static get observedAttributes() {
        return ["lang"];
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback() {
        this.render();
    }
}
customElements.define("sub-section", SubSection);