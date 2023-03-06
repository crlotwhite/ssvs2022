# Survey of Singing voice synthesis 2022 Report
This is the Survey Reports web page.
For high compatibility and performance, no third party libraries except chart.js are used.

Translation and design contributions can be used by referring to the explanations below.

## Translation
You can add translations by copying the following entry in strings.js.


```javascript
const strings = {
    en: {
        ...
    }
}
```

and change this

```javascript
language: {
    name: "Language",
    langName: [
        "English",
        "Korean",
        "Japanese"
    ],
}
```

and add author too
```javascript
footer: {
    ...
    authors: [
        "crlotwhite"
    ],
    ...
        },
```

But don't change following items:
- Section Name
- Software name
- Community name

When you add a translation, it is listed automatically, so there is no additional work required other than adding a language object.

## Design Guide
This website is structured in components.js using the web-component, but all components are affected by global css.
You can easily modify the UI by referring to the structure below.

### Sections
The section consists of the following code.

```html
<section id="about" class="">
    <div class="big-container big-shadow">
        <h1>Overview</h1>
        <hr>
        <p class="normal-text">
            The questions we ask in our annual survey help us improve the Stack Overflow community and the platform that serves them.
        </p>
        <p class="normal-text">
            The challenge and opportunity for us is to continue expanding and improving our ability to help all developers and to make them feel welcome in our community.
        </p>
        <p class="normal-text">
            Read on for more great insights about the attitudes, tools, and environments that are shaping the art and practice of software today.
        </p>
    </div>
    <!-- divide question   -->
    <hr class="line-big">
    <div class="sub-section">
        <div class="question-overview">
            <h4>User Trends</h4>
            <h2>Education</h2>
            <p>Most developers (87%) have a post-secondary education, having some college or more.</p>
        </div>
        <hr class="line-small">
        <div class="question-detail">
            <h3>Educational attainment</h3>
            <p>38% of those learning to code already have a degree, learning doesn't have to stop after you graduate.</p>
            <p>70% of all respondents and 80% of Professional Developers have completed some form of higher education, a bachelor’s degree being the most common.</p>
        </div>
        <hr class="line-small">
        <div class="chart-box">
            <canvas id="myChart" ></canvas>
        </div>
        <script type="text/javascript" src="js/charts.js"></script>
        <p class="question-text">What is your sex?</p>
    </div>
    <!-- divide question   -->
    <hr class="line-big">
    <div class="sub-section">
        <div class="question-overview">
            <h4>User Trends</h4>
            <h2>Education</h2>
            <p>Most developers (87%) have a post-secondary education, having some college or more.</p>
        </div>
        <hr class="line-small">
        <div class="question-detail">
            <h3>Educational attainment</h3>
            <p>38% of those learning to code already have a degree, learning doesn't have to stop after you graduate.</p>
            <p>70% of all respondents and 80% of Professional Developers have completed some form of higher education, a bachelor’s degree being the most common.</p>
        </div>
        <hr class="line-small">
        <div class="chart-box">
            <canvas id="myChart1" ></canvas>
        </div>
        <script type="text/javascript" src="js/charts.js"></script>
        <p class="question-text">What is your sex?</p>
    </div>
</section>
```

This is Section Header
```html
<div class="big-container big-shadow">
    <h1>Overview</h1>
    <hr>
    <p class="normal-text">
        The questions we ask in our annual survey help us improve the Stack Overflow community and the platform that serves them.
    </p>
    <p class="normal-text">
        The challenge and opportunity for us is to continue expanding and improving our ability to help all developers and to make them feel welcome in our community.
    </p>
    <p class="normal-text">
        Read on for more great insights about the attitudes, tools, and environments that are shaping the art and practice of software today.
    </p>
</div>
```

This is subsection and lines
```html
<hr class="line-big">
<div class="sub-section">
    <div class="question-overview">
        <h4>User Trends</h4>
        <h2>Education</h2>
        <p>Most developers (87%) have a post-secondary education, having some college or more.</p>
    </div>
    <hr class="line-small">
    <div class="question-detail">
        <h3>Educational attainment</h3>
        <p>38% of those learning to code already have a degree, learning doesn't have to stop after you graduate.</p>
        <p>70% of all respondents and 80% of Professional Developers have completed some form of higher education, a bachelor’s degree being the most common.</p>
    </div>
    <hr class="line-small">
    <div class="chart-box">
        <canvas id="myChart1" ></canvas>
    </div>
    <script type="text/javascript" src="js/charts.js"></script>
    <p class="question-text">What is your sex?</p>
</div>
```

This is overall card
```html
<div class="small-container small-shadow">
    <span class="topic-name">User Trends</span>
    <p class="small-text">
        Learning to code online increased from 60% to 70% year over year.
        Respondents older than 45 years are most likely to have learned from books, while younger ones are learning online. Younger (under 18) respondents rely most on online resources and are most likely to have learned from online courses or certifications.
    </p>
</div>
```

This is first header
```html
<header id="header">
    <div class="container big-shadow">
        <div id="logo-box">
            <span>2022</span>
            <span>Singing Voice Synthesis</span>
            <span>Survey</span>
        </div>
        <p>
            In December 2022, 96 respondents from various communities around the world shared their views on Vocaloid fandom tendencies, software experience, and artificial intelligence technology.
        </p>
    </div>
</header>
```

This is navbar
```html
<nav id="navbar" class="sticky">
    <a href="#header" class="nav-s">Top</a>
    <hr class="menu-split" >
    <a href="#s0" class="nav-s">About</a>
    <hr class="menu-split">
    <a href="#s1" class="nav-s">User Trends</a>
    <div id="nav-s1" class="sub-menu">
        <hr class="sub-menu-split">
        <a href="#s1ss0">Gender</a>
        <hr class="sub-menu-split">
        <a href="#s1ss1">Favourite software</a>
        <hr class="sub-menu-split">
        <a href="#s1ss2">Introduction</a>
        <hr class="sub-menu-split">
        <a href="#s1ss3">Favorite content</a>
        <hr class="sub-menu-split">
        <a href="#s1ss4">Duration</a>
        <hr class="sub-menu-split">
        <a href="#s1ss5">Reason</a>
        <hr class="sub-menu-split">
        <a href="#s1ss6">Experience</a>
    </div>
    <hr class="menu-split">
    <a href="#s2" class="nav-s">Non Users</a>
    <hr class="menu-split">
    <a href="#s3" class="nav-s">Expert Users</a>
    <hr class="menu-split">
    <a href="#s4" class="nav-s">Ai Technology</a>
    <hr class="menu-split">
    <a href="#s5" class="nav-s">Feedbacks</a>
    <div id="nav-s5" class="sub-menu">
        <hr class="sub-menu-split">
        <a href="#s5ss0">Engagement routes</a>
        <hr class="sub-menu-split">
        <a href="#s5ss1">Needed Improvement</a>
    </div>
    <hr class="menu-split">
    <span>Language</span>
    <div class="lang-select">
        <hr class="sub-menu-split">
        <select id="lang">
            <option value="en" selected>English</option>
            <option value="kr">Korean</option>
        </select>
    </div>
</nav>
```

This is footer
```html
<footer>
    <h1>
        Thank you for reading
    </h1>
    <h2>
        Translation by:
    </h2>
    <ul>
        <li>crlotwhite</li>
    </ul>
    <p>
        If you would like to add new translations or report translation issues, please create an issue or PR in the GitHub repository below.
    </p>
    <a href="https://github.com/crlotwhite/ssvs2022">https://github.com/crlotwhite/ssvs2022</a>
</footer>
```