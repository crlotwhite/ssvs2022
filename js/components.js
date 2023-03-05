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
        
        // add paragraphs
        const paragraphs = sectionStrings.paragraphs;
        for (let i=0;i<paragraphs.length;i++) {
            const p = document.createElement("p");
            p.innerHTML = paragraphs[i];
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

        // add id
        this.id = `s${sectionId}ss${subSectionId}`;

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

        if (subSectionStrings.subName !== "") {
            // create question detail
            const detail = document.createElement("div");
            detail.classList.add("question-detail");
            subSection.appendChild(detail);

            const sectionSubName = document.createElement("h3");
            sectionSubName.innerHTML = subSectionStrings.subName;
            detail.appendChild(sectionSubName);

            // add paragraphs
            const paragraphs = subSectionStrings.paragraphs;
            for (let i=0;i<paragraphs.length;i++) {
                const p = document.createElement("p");
                p.innerHTML = paragraphs[i];
                detail.appendChild(p);
            }
        }

        if (subSectionStrings.subName !== "" && subSectionStrings.chartId !== "") {
            // create small line 2
            const smallLine2 = document.createElement("hr");
            smallLine2.classList.add("line-small");
            subSection.appendChild(smallLine2);
        }

        if (subSectionStrings.chartId !== "") {
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
            chartScript.innerHTML = `${subSectionStrings.chartId}("${subSectionStrings.chartId}", "${lang}");`
            subSection.appendChild(chartScript);
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
customElements.define("sub-section", SubSection);

class OverallCard extends HTMLElement {
    render() {
        // clear first
        this.innerHTML = '';

        // get strings from
        const lang = this.getAttribute("lang");
        let currentLanguageStrings = strings["en"];

        if (lang != null) {
            currentLanguageStrings = strings[lang];
        }

        // get card id
        const cardId = parseInt(this.getAttribute("cid"));
        const cardStrings = currentLanguageStrings.overallCard[cardId];

        // add class
        this.classList.add("small-container");
        this.classList.add("small-shadow");

        // add topic name
        const topicName = document.createElement("span");
        topicName.classList.add("topic-name");
        topicName.innerHTML = cardStrings.name;
        this.appendChild(topicName);

        // add paragraphs
        const paragraphs = cardStrings.paragraphs;
        for (let i=0;i<paragraphs.length;i++) {
            const p = document.createElement("p");
            p.classList.add("small-text");
            p.innerHTML = paragraphs[i];
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
customElements.define('overall-card', OverallCard);

class FirstHeader extends HTMLElement {
    render() {
        // clear first
        this.innerHTML = '';

        // get strings from
        const lang = this.getAttribute("lang");
        let currentLanguageStrings = strings["en"];

        if (lang != null) {
            currentLanguageStrings = strings[lang];
        }

        // add id
        this.id = "header";

        // add container
        const container = document.createElement("div");
        container.classList.add("container");
        container.classList.add("big-shadow");
        this.appendChild(container);

        // add logo box
        const logoBox = document.createElement("div");
        logoBox.id = "logo-box";
        container.appendChild(logoBox);

        // add logo box texts
        const text = ["2022", "Singing Voice Synthesis", "Survey"];
        for (let i=0;i<text.length;i++) {
            const span = document.createElement("span");
            span.innerHTML = text[i];
            logoBox.appendChild(span);
        }

        // add paragraph
        const headerParagraph = document.createElement("p");
        headerParagraph.innerHTML = currentLanguageStrings.headerText;
        container.appendChild(headerParagraph);
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
customElements.define('first-header', FirstHeader);

class NavMenu extends HTMLElement {
    render() {
        // clear first
        this.innerHTML = '';

        // get strings from
        const lang = this.getAttribute("lang");
        let currentLanguageStrings = strings["en"];

        if (lang != null) {
            currentLanguageStrings = strings[lang];
        }

        const navStrings = currentLanguageStrings.nav;

        // add id and class
        this.id = "navbar";
        this.classList.add("sticky");

        // add header
        const header = document.createElement("a");
        header.innerHTML = navStrings.section[0];
        header.href = "#header";
        header.classList.add("nav-s");
        this.appendChild(header);

        const hr = document.createElement("hr");
        hr.classList.add("menu-split");
        this.appendChild(hr);

        for (let i=1;i<navStrings.section.length;i++) {
            // add section name
            const anchor = document.createElement("a");
            anchor.innerHTML = navStrings.section[i];
            anchor.href = `#s${i-1}`;
            anchor.classList.add("nav-s");
            this.appendChild(anchor);
            if (i !== 1) {
                // add sub-section box
                const div = document.createElement("div");
                div.id = `nav-s${i-1}`;
                div.classList.add("sub-menu");
                this.appendChild(div);

                const navSubSectionStrings = navStrings.subSection[`s${i-1}`];

                for (let j=0;j<navSubSectionStrings.length;j++) {
                    const innerHr = document.createElement("hr");
                    innerHr.classList.add("sub-menu-split");
                    div.appendChild(innerHr);

                    const innerAnchor = document.createElement("a");
                    innerAnchor.innerHTML = navSubSectionStrings[j];
                    innerAnchor.href = `#s${i-1}ss${j}`;
                    div.appendChild(innerAnchor);
                }
            }
            const hr = document.createElement("hr");
            hr.classList.add("menu-split");
            this.appendChild(hr);
        }

        const span = document.createElement("span");
        span.innerHTML = navStrings.language.name;
        this.appendChild(span);

        const div = document.createElement("div");
        div.classList.add("lang-select");
        this.appendChild(div);

        const innerHr = document.createElement("hr");
        innerHr.classList.add("sub-menu-split");
        div.appendChild(innerHr);

        const select = document.createElement("select");
        select.id = "lang";
        div.appendChild(select);

        // get all keys from strings
        const langCode = [];
        for (let key in strings) {
            langCode.push(key);
        }

        let isSelected = true;
        for (let i=0;i<navStrings.language.langName.length;i++) {
            const option = document.createElement("option");
            option.innerHTML = navStrings.language.langName[i];
            option.value = langCode[i];
            if (isSelected) {
                // first item only selected
                option.selected = true;
                isSelected = false;
            }
            select.appendChild(option);
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
customElements.define('nav-menu', NavMenu);

