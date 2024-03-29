const strings = {
    en: {
        headerText: "In December 2022, 96 respondents from various communities around the world shared their views on Vocaloid fandom tendencies, software experience, and artificial intelligence technology.",
        overallCard: [
            {
                name: "User Trends",
                paragraphs: [
                    "Analyzes the fandom.",
                    "It covers topics such as sex ratios, favorite genres of content, etc."
                ]
            },
            {
                name: "Non the software user",
                paragraphs: [
                    "Analyze the barriers to entry for the software.",
                    "It asks why they haven't tried it and what needs to be done to address them."
                ]
            },
            {
                name: "Experience with the software",
                paragraphs: [
                    "Analyze the opinions and experiences of creators.",
                    "It covers how creators got started, the most popular software they use, and pros and cons of their software."
                ]
            },
            {
                name: "AI in Singing Voice Synthesis",
                paragraphs: [
                    "Analyzes opinions on AI technology and cross-lingual synthesis techniques.",
                    "It analyzes various people's opinions on the current state of the recent technology and analyzes their validity through questions related to my research."
                ]
            },
            {
                name: "Survey feedback",
                paragraphs: [
                    "This is the feedback on the questionnaire.",
                    "It analyzes the level of community participation, and reflects on the results of the survey."
                ]
            }
        ],
        section: [
            {
                name: "About",
                paragraphs: [
                    "A brief introduction to each section."
                ],
            },
            {
                name: "User Trends",
                paragraphs: [
                    "Let's get to know the fandom."
                ],
                subSection: [
                    {
                        name: "Gender",
                        overall: "It showed that the ratio of men and women and the third sex was about 30% very equal.",
                        subName: "The gender ratio of a fandom",
                        paragraphs: [
                            "The 37 respondents identified themselves as male, and another 38 respondents identified themselves as female.", 
                            "Also, 16 respondents said they were neither, and the remaining 5 respondents were reluctant to identify their sex."
                        ],
                        chartId: "chart1",
                    },
                    {
                        name: "The Favourite Software",
                        overall: "Vocaloid is the most popular choice.",
                        subName: "Which is the most preferred?",
                        paragraphs: [
                            "Synthesizer V was the second most popular with 52, followed by UTAU/OpenUTAU with 51, showing that it is still very popular.",
                            "CeVIO/CeVIO AI/Voisona also got 29, and DeppVocal2 also showed its influence with 16."
                        ],
                        chartId: "chart2",
                    },
                    {
                        name: "Introduction",
                        overall: "The most way of entry was the internet.",
                        subName: "How to know it?",
                        paragraphs: [
                            "36 respondents said they found us through an internet search, followed closely by 35 who found us through a video platform's recommendation algorithm.",
                            "Furthermore, 9 and 6 respondents said they were introduced to it through recommendations from friends and some media such as gaming, respectively, while the remaining 11 said they were introduced through social media or other means."
                        ],
                        chartId: "chart3",
                    },
                    {
                        name: "Most Favorite Content",
                        overall: "The most preferred content by respondents was songs.",
                        subName: "Which content is the most preferred?",
                        paragraphs: [
                            "With 87 respondents favoring song content, it was the most overwhelming, while similar vocal covers were the next most popular, with 36 respondents choosing them.",
                            "There were also some respondents who preferred mixed media, games, and 3D animations, with 18, 17, and 10 respondents respectively."
                        ],
                        chartId: "chart4",
                    },
                    {
                        name: "Duration",
                        overall: "Most respondents have seen and liked the above content for at least three years.",
                        subName: "How long have you been known?",
                        paragraphs: [
                            "The number of respondents who had been exposed to content for more than 10 years was the highest with 27 people, followed by those who had been exposed to content for 7 to 9 years with 24 people.",
                            "In addition, there were 22 respondents who had encountered the content for 1 to 3 years and 18 respondents who had encountered the content for 4 to 6 years. Overall, the proportion of all responses was uniform."
                        ],
                        chartId: "chart5",
                    },
                    {
                        name: "Reason",
                        overall: "The most popular reason was the voice's timbre.",
                        subName: "Why you have liked it?",
                        paragraphs: [
                            "32 respondents said they liked the character's voice, followed closely by 31 who said they liked it because they were intrigued by the technology.",
                            "There are also significant numbers of respondents who like the charming characters themselves or are interested in the content type itself, at 13 and 12, respectively."
                        ],
                        chartId: "chart6",
                    },
                    {
                        name: "Using Experience",
                        overall: "Almost all respondents have experience using related software.",
                        subName: "Have you ever used Vocaloid or a related program?",
                        paragraphs: [
                            "Contrary to the expectation that only a small percentage of respondents used the software directly because it requires specialized knowledge, a large percentage of respondents said that they had experience using the software.",
                        ],
                        chartId: "chart7",
                    },
                ]
            },
            {
                name: "Non the software user",
                paragraphs: [
                    "Let's talk about the barriers to entry for the software."
                ],
                subSection: [
                    {
                        name: "Difficulty",
                        overall: "The majority of non-user respondents said the need for musical knowledge was the biggest barrier to entry.",
                        subName: "Why did they fail in their attempts to use the software?",
                        paragraphs: [
                            "As expected, the need for musical knowledge and the cost of specialized software were mentioned as the main reasons.",
                            "There were also comments that they didn't try it because they weren't interested in the software."
                        ],
                        chartId: "chart8",
                    },
                    {
                        name: "Improvement",
                        overall: "The most improvement needed for popularization is promotion.",
                        subName: "What would it take to get them to use the software?",
                        paragraphs: [
                            "Promotions such as contests and fixes to frustrating usability were cited as the most needed improvements.",
                            "The price and accessibility of the product is a barrier to adoption, so it's likely that something needs to be done to make it easier to buy."
                        ],
                        chartId: "chart9",
                    },
                ]
            },
            {
                name: "Experience with the software",
                paragraphs: [
                    "Let's talk about the experience of experts."
                ],
                subSection: [
                    {
                        name: "Work Experience",
                        overall: "Most respondents had three years or less of experience.",
                        subName: "Years of using the software",
                        paragraphs: [
                            "61 respondents reported three years or less of experience, followed by 13 respondents with four to six years of experience.",
                            "There was a small but significant number of 15 respondents with seven or more years of experience."
                        ],
                        chartId: "chart10",
                    },
                    {
                        name: "Learning",
                        overall: "Surprisingly, most respondents said they learned by trying it out.",
                        subName: "How they learned Vocaloid",
                        paragraphs: [
                            "More than half of the respondents said they learned how to use the software by trying it out, while 20 respondents said they learned from internet posts.",
                            "In addition, 11 respondents said they learned by watching online video lessons, and 7 people said they already have musical skills.",
                            "Fewer respondents said they learned from an official manual, suggesting it wasn't very helpful."
                        ],
                        chartId: "chart11",
                    },
                    {
                        name: "Proficiency",
                        overall: "The majority of respondents said they could produce simple content with the software.",
                        subName: "The level of using the software",
                        paragraphs: [
                            "37 respondents said they had experience uploading their work online, followed by 25 who said they could manipulate simple parameters.",
                            "Also, 17 respondents said they could perform simple tasks at the note-taking level, while the remaining 10 respondents said they had the usage level of a professional producer."
                        ],
                        chartId: "chart12",
                    },
                    {
                        name: "Most Using Software",
                        overall: "The most popular software is the UTAU series and Vocaloid.",
                        subName: "What is the most popular software?",
                        paragraphs: [
                            "Vocaloid and UTAU Series were the most popular choices with 47 and 42 respondents, respectively, followed by Synthesizer V with 36.",
                            "DeepVocal and CeVIO series was also chosen by 16 and 12 respondents, respectively, with the occasional respondent using VOCALINA, NNSVS, NEUTRINO, etc."
                        ],
                        chartId: "chart13",
                    },
                    {
                        name: "Operating System",
                        overall: "The operating system most people use is Windows 10 or Windows 11.",
                        subName: "What environment do you work in?",
                        paragraphs: [
                            "The overwhelming majority of respondents said they work on the latest version of Windows.",
                            "The remaining 10 respondents said they use Mac OS, iPad OS, Linux, etc."
                        ],
                        chartId: "chart14",
                    },
                    {
                        name: "Advantages",
                        overall: "The main reason they used the software was that they liked the character's voice.",
                        subName: "Why do you use the software?",
                        paragraphs: [
                            "43 respondents said they used the software because they liked the characters, followed by ease of use and good synthesis quality (17 and 13, respectively).",
                            "A surprising number of people said they use the UTAU series or DeepVocal because it's free."
                        ],
                        chartId: "chart15",
                    },
                    {
                        name: "Inconvenience",
                        overall: "The most inconvenient factor about their software is the voice configuration.",
                        subName: "What was the most inconvenient?",
                        paragraphs: [
                            "41 respondents said that the music settings in UTAU or DeepVocal were too complicated, followed by the cost of commercial software like Vocaloid, which was chosen by 31 respondents.",
                            "The lack of native language support and complex parameters were followed by 23 and 22 respondents, respectively, and the lack of a community site and limited usage environment were chosen by 12 and 10 respondents, respectively."
                        ],
                        chartId: "chart16",
                    },
                    {
                        name: "Additional Software",
                        overall: "In terms of software to use in the future, CeVIO and Vocaloid received the most attention.",
                        subName: "Software to be considered to use in the future",
                        paragraphs: [
                            "CeVIO and Vocaloid are the most popular choices with 22 and 21 respondents, respectively.",
                            "Also, The next highest number of respondents (10 each) are considering using Synthesizer V or don't plan to use any other tools.",
                            "Moreover, there are significant numbers of respondents considering NNSVS, Piapro Studio NT, and UTAU, with 7, 6, and 5 respectively."
                        ],
                        chartId: "chart17",
                    },
                    {
                        name: "Reason",
                        overall: "The main reasons mentioned for wanting to try a new tool were the characters.",
                        subName: "Why are you considering trying additional tools?",
                        paragraphs: [
                            "Similar to the reasons for choosing their primary software, the proprietary character of the software was cited as the primary reason.",
                            "The next largest group, 24 respondents, said they wanted to try new software, and 12 respondents said they were considering moving because of better compositing quality."
                        ],
                        chartId: "chart18",
                    },
                ]
            },
            {
                name: "AI in Singing Voice Synthesis",
                paragraphs: [
                    "Let's talk about the recent technologies."
                ],
                subSection: [
                    {
                        name: "Opinion about AI",
                        overall: "Most respondents had a positive opinion of AI technology.",
                        subName: "The influence of AI technology",
                        paragraphs: [
                            "65 respondents said they were excited about advances in artificial intelligence technology, and 11 said it would make their software easier to use.",
                            "However, 9 respondents worried that this would devalue their output, and 3 respondents worried that they would have to learn new skills to use the software."
                        ],
                        chartId: "chart19",
                    },
                    {
                        name: "Experience of AI Technology",
                        overall: "Most respondents said they had used software with AI technology.",
                        subName: "Experience using AI technologies",
                        paragraphs: [
                            "52 respondents said they had experience with software that used AI technology, such as Synthesizer V or NNSVS/ENUNU, while the remaining 44 respondents said they did not.",
                            "Rather than being completely skewed to one side or the other, the proportions were balanced."
                        ],
                        chartId: "chart20",
                    },
                    {
                        name: "Advantages of AI Technology",
                        overall: "The biggest benefit of AI technology is the improvement in vocal synthesis quality.",
                        subName: "What are the advantages of AI technology?",
                        paragraphs: [
                            "31 respondents said that improved compositing quality was the biggest benefit, and 30 respondents said that being able to showcase great quality with less effort was an advantage.",
                            "In addition, 12 respondents said it was easier to use, while 10 and 7 respondents selected the increased clarity of pronunciations and various expressions, respectively."
                        ],
                        chartId: "chart21",
                    },
                    {
                        name: "Disadvantages of AI Technology",
                        overall: "The major drawback of software using AI technology was the increased cost.",
                        subName: "What are the inconveniences of AI technology?",
                        paragraphs: [
                            "23 respondents said the increased purchase cost was the biggest downside, and 16 respondents said the pronunciation adjustment was frustrating.",
                            "Also, 15 respondents said they were uncomfortable with the increase in hardware specifications, and finally, subtle noise and increased synthesis time were picked by 11 and 9 respondents, respectively."
                        ],
                        chartId: "chart22",
                    },
                    {
                        name: "Experience of Cross-lingual Synthesis",
                        overall: "Most respondents said they had no experience with cross-lingual synthesis technology.",
                        subName: "Have you ever used cross-lingual synthesis?",
                        paragraphs: [
                            "The majority of respondents (61) had not encountered cross-lingual synthesis technology, while the remaining 35 respondents said they had not.",
                        ],
                        chartId: "chart23",
                    },
                    {
                        name: "Quality of Cross-lingual Synthesis",
                        overall: "Most respondents are unsure about the quality of cross-lingual synthesis.",
                        subName: "The current state of cross-lingual synthesis technology",
                        paragraphs: [
                            "42 respondents said they weren't sure, while 40 respondents said they saw a lot of improvement.",
                            "2 respondents said it's still not good, but only 12 said it's getting closer to human-like."
                        ],
                        chartId: "chart24",
                    },
                    {
                        name: "What cross-lingual synthesis lack",
                        overall: "The biggest problem with cross-lingual synthesis is the limited number of supported languages.",
                        subName: "What is lacking in cross-lingual synthesis?",
                        paragraphs: [
                            "35 respondents said that there were not enough supported languages, and 28 respondents said that they were only available in certain software.",
                            "In addition, 18 respondents said the pronunciation was still unnatural, and the remaining 15 respondents said they didn't know through other categories."
                        ],
                        chartId: "chart25",
                    },
                    {
                        name: "Necessity of cross-lingual synthesis",
                        overall: "The majority of respondents said they need cross-lingual synthesis.",
                        subName: "Is cross-lingual synthesis required?",
                        paragraphs: [
                            "The majority of respondents, 57, said that cross-lingual synthesis is necessary, while the remaining 34 respondents said that it is not."
                        ],
                        chartId: "chart26",
                    },
                    {
                        name: "Reason of necessity",
                        overall: "Most respondents said they need cross-lingual synthesis technology to create content in multiple languages.",
                        subName: "Why the feature is needed?",
                        paragraphs: [
                            "23 respondents cited the ability to use multiple languages for singing.",
                            "Next, creating multilingual content at a lower cost and capitalizing on the expressive power of languages were each selected by 15 respondents.",
                            "However, the second highest number of respondents, 17, said they didn't think it was necessary."
                        ],
                        chartId: "chart27",
                    },
                    {
                        name: "Open-sourcing of cross-lingual synthesis",
                        overall: "Most respondents were in favor of open-sourcing cross-lingual synthesis technology.",
                        subName: "Opinions of open-sourcing cross-language synthesis",
                        paragraphs: [
                            "84 respondents said it would be good to have, and 12 respondents said it would be fine without.",
                        ],
                        chartId: "chart28",
                    },
                ]
            },
            {
                name: "Survey feedback",
                paragraphs: [
                    "Let's talk about the feedback of the survey."
                ],
                subSection: [
                    {
                        name: "Engagement routes",
                        overall: "The survey engagement routes for respondents are as follows.",
                        subName: "",
                        paragraphs: [
                            ""
                        ],
                        chartId: "chart29",
                    },
                    {
                        name: "Sections that need improvement",
                        overall: "Thankfully, 59 respondents said no improvements were needed, but the remaining items all received a balanced amount of votes, suggesting that there is an overall design mistake.",
                        subName: "",
                        paragraphs: [
                            ""
                        ],
                        chartId: "chart30",
                    },
                    {
                        name: "Detailed improvement",
                        overall: "The messages below are a list of comments about improvements needed to the questionnaire.",
                        subName: "What is lacking in the questionnaire?",
                        paragraphs: [
                            "I think it's better to structure the question with a little more detail.",
                            "I don't know what cross lingual is",
                            "A lot of software doesn't support macOS.",
                            "Some questions, such as the reason question, would be better with multiple choices rather than a single answer.",
                            "Improvements in ambiguous English expressions",
                            "Include questions that discuss vocal type, style, or genre",
                            "I felt a little difficult answering some of the questions.",
                            "Section 2 (Non-user) is not about speech synthesis.",
                            "Consider getting someone to proofread and edit your English for clarity.",
                            "Nothing is ever perfect",
                            "The questions are phrased weirdly",
                            "Consider including \"not applicable\" or \"don't know\" options for more questions.",
                            "Questions shoud be dependent on the previous answers."
                        ],
                        chartId: ""
                    },
                    {
                        name: "Other",
                        overall: "The messages below are other things you'd like to see improved, or things you'd like to say to the researcher.",
                        subName: "And then...",
                        paragraphs: [
                            "It would be nice if there were AI text-to-speech software and requirements that can be used freely by the general public in Korea, like CeVIO AI.",
                            "Good luck with your project!",
                            "A well-structured tutorial would be useful for new users.",
                            "Merry Christmas!",
                            "It would be nice to be able to talk/rap with speech synthesis.",
                            "I hope you're making good progress on this.",
                            "Vocaloid synthesis is too slow. But it would be great to see a noticeable improvement.",
                            "I'm looking forward to seeing results that can be published in the future, either in closed source development or in the form of a paper.",
                            "In my opinion, a singing synth where you have a lot of control and can create and customize your own singer is cooler.",
                        ],
                        chartId: ""
                    }
                ]
            },
        ],
        footer: {
            h1: "Thank you for reading!",
            h2: "Translation by:",
            authors: [
                "crlotwhite"
            ],
            p: "If you would like to add new translations or report translation issues, please create an issue or PR in the GitHub repository below."
        },
        chart: {
            common: {
                label: "The number of responses",
            },
            chart1: {
                question: "What is your sex?",
                labels: [
                    "Male", 
                    "Female", 
                    "Other", 
                    "I don't want to reveal my gender."
                ]
            },
            chart2: {
                question: "What is your favorite singing voice synthesis software? (Up to 3)",
                labels: [
                    "Vocaloid",
                    "CeVIO/CeVIO AI/VoiSona",
                    "Synthesizer V",
                    "UTAU/OpenUTAU",
                    "NEUTRINO",
                    "NNSVS/ENUNU",
                    "VOCALINA",
                    "DeepVocal",
                    "Piapro Studio NT",
                    "ACE Studio"
                ]
            },
            chart3: {
                question: "How did you know that?",
                labels: [
                    "Recommendation Algorithm for Video Platform (e.g. Youtube, NicoNico, bilibili, etc.)",
                    "Search the Internet",
                    "Refer a friend",
                    "Content in the game (background music, etc.)",
                    "Social media post (e.g. Facebook, Twitter, Instagram, etc.)",
                    "Others"
                ]
            },
            chart4: {
                question: "What is your favorite type of the content? (Up to 2)",
                labels: [
                    "Songs (original, cover songs, etc.)",
                    "Vocal cover (Utaite, etc.)",
                    "Media mix (music-based original content; Kagerou Project, etc.)",
                    "Doujin Manga (Hatsune Mix, etc.)",
                    "3D animation (MMD, etc.)",
                    "Games (Project Diva Series, etc.)",
                    "Others",
                ]
            },
            chart5: {
                question: "How long have you been exposed to that content?",
                labels: [
                    "Less than a year",
                    "1-3 years",
                    "4-6 years",
                    "7-9 years",
                    "Over 10 years"
                ]
            },
            chart6: {
                question: "Why do you like that?",
                labels: [
                    "Attractive characters",
                    "Timbre of the voice",
                    "Interest in the type of content itself (such as 3D animation)",
                    "An interest in the technology",
                    "Others",
                ]
            },
            chart7: {
                question: "Did you ever tried using a singing voice synthesis software?",
                labels: [
                    "Yes",
                    "No"
                ]
            },
            chart8: {
                question: "Why did not you use that?",
                labels: [
                    "Expensive software cost",
                    "Need musical knowledge",
                    "Not interested enough to use",
                    "Out of Stock"
                ]
            },
            chart9: {
                question: "What improvements are needed for popularization?",
                labels: [
                    "More intuitive usability (available without musical knowledge)",
                    "Actively promote contents",
                    "A lower price",
                    "Additional stock"
                ]
            },
            chart10: {
                question: "How long have you experienced the singing voice synthesis software?",
                labels: [
                    "Less than a year",
                    "1-3 years",
                    "4-6 years",
                    "7-9 years",
                    "Over 10 years"
                ]
            },
            chart11: {
                question: "How did you learn that?",
                labels: [
                    "Through the mentors",
                    "Through the official manual",
                    "Through the musical knowledge that you already have",
                    "Through online video lectures",
                    "Through trying to use that",
                    "Through the internet post"
                ]
            },
            chart12: {
                question: "What is your level of use the software?",
                labels: [
                    "Beginner",
                    "Intermediate",
                    "Advanced",
                    "Expert",
                ]
            },
            chart13: {
                question: "What singing voice synthesis software do you mainly use? (Up to 3)",
                labels: [
                    "Vocaloid",
                    "CeVIO/CeVIO AI/VoiSona",
                    "Synthesizer V",
                    "UTAU/OpenUTAU",
                    "NEUTRINO",
                    "NNSVS/ENUNU",
                    "VOCALINA",
                    "DeepVocal",
                    "Piapro Studio NT",
                    "ACE Studio",
                    "Others",
                ]
            },
            chart14: {
                question: "What is your major operating system?",
                labels: [
                    "Windows 10/11",
                    "Other Windows",
                    "Linux (Ubuntu, Fedora, e.t.c)",
                    "macOS/iOS/iPadOs",
                ]
            },
            chart15: {
                question: "What is the main reason for using that?",
                labels: [
                    "Like the character or the voice",
                    "Easy to use",
                    "Easy to integrate with DAW",
                    "Great built-in effect",
                    "Nice synthesis quality",
                    "My favorite artist used that",
                    "It is free",
                    "Others"
                ]
            },
            chart16: {
                question: "What are the inconveniences of the software you used? (Up to 3)",
                labels: [
                    "Complex parameters",
                    "Complex sound source settings (UTAU, DeepVocal, etc.)",
                    "Too expensive cost",
                    "Restriction of use environment (e.g. Windows operating systems only)",
                    "Does not support native language",
                    "No related communities",
                    "High technical requirements (hardware specifications)",
                    "Internet connection required",
                    "Others"
                ]
            },
            chart17: {
                question: "Are there any additional singing voice synthesis software that you would like to use or are interested in?",
                labels: [
                    "Vocaloid",
                    "CeVIO/CeVIO AI/VoiSona",
                    "Synthesizer V",
                    "UTAU/OpenUTAU",
                    "NNSVS/ENUNU",
                    "DeepVocal",
                    "Piapro Studio NT",
                    "ACE Studio",
                    "No intention of using another software",
                    "Others",
                ]
            },
            chart18: {
                question: "Why would you want to use that?",
                labels: [
                    "Better voice synthesis quality",
                    "Same character released on different engines",
                    "Want to try a new engine",
                    "More convenient than the previous engine",
                    "Used by a collaborator",
                    "Want to use engine's own character",
                    "Others",
                ]
            },
            chart19: {
                question: "What do you think of AI technology in the software?",
                labels: [
                    "The technology's development is expected.",
                    "I worry about having to learn new techniques.",
                    "Getting started would be better.",
                    "I'm worried that decrease the value of my result.",
                    "Others",
                ]
            },
            chart20: {
                question: "Have you ever used a singing voice synthesis with AI technology?",
                labels: [
                    "Yes",
                    "No"
                ]
            },
            chart21: {
                question: "What is the biggest advantage of the software that uses AI technology?",
                labels: [
                    "Synthesis quality increased",
                    "Great quality results with less effort",
                    "Easier to use",
                    "Various expressions are possible",
                    "Pronunciation becomes clear",
                    "Others",
                ]
            },
            chart22: {
                question: "What is the biggest disadvantage of the software that uses AI technology?",
                labels: [
                    "Increased purchase costs",
                    "Increased hardware specifications",
                    "Pronunciation adjustment not applied",
                    "Occurrence of subtle noise",
                    "Synthesis takes a long time",
                    "I don't know",
                    "Others",
                ]
            },
            chart23: {
                question: "Have you ever tried the Cross-lingual synthesis feature?",
                labels: [
                    "Yes",
                    "No"
                ]
            },
            chart24: {
                question: "What do you think about the quality of  the Cross-lingual synthesis feature?",
                labels: [
                    "It's still not good.",
                    "I don't really know.",
                    "There is a lot of progress.",
                    "It close to human.",
                ]
            },
            chart25: {
                question: "What is lacking in the Cross-lingual synthesis feature?",
                labels: [
                    "Still unnatural pronunciation",
                    "Only certain software can be used",
                    "Few supported languages",
                    "I don't know",
                    "Others",
                ]
            },
            chart26: {
                question: "Do you think the Cross-lingual synthesis is essential?",
                labels: [
                    "Yes",
                    "No"
                ]
            },
            chart27: {
                question: "If that is important, why?",
                labels: [
                    "A variety of languages are available",
                    "Multilingual contents can be produced at low cost.",
                    "It can express the unique style of the language.",
                    "I think that it is not essential.",
                    "Others",
                ]
            },
            chart28: {
                question: "What do you think about open-sourcing the technology?",
                labels: [
                    "It would be nice",
                    "It does not matter"
                ]
            },
            chart29: {
                question: "Which community did you participate in?",
                labels: [
                    "Discord",
                    "Utau forum",
                    "보컬로이드 제국",
                    "Vocaloid Animo",
                    "우타우 사용자 모임",
                    "Synthesizer V Forum",
                    "Twitter",
                    "딥보컬 연구소",
                    "reddit"
                ]
            },
            chart30: {
                question: "What Section does you think need improvement?",
                labels: [
                    "1. User Trends",
                    "2. Non singing voice synthesis software user",
                    "3. Experience with singing voice synthesis software",
                    "4. AI (Artificial Intelligent) Singing Voice Synthesis",
                    "No section for improvement",
                ]
            },
        },
        nav: {
            section: [
                "Top",
                "About",
                "User Trends",
                "Non Users",
                "Expert Users",
                "AI Technology",
                "Feedbacks",
            ],
            subSection: {
                s1: [
                    "Gender",
                    "Favourite software",
                    "Introduction",
                    "Favorite content",
                    "Duration",
                    "Reason",
                    "Experience"
                ],
                s2: [
                    "Difficulty",
                    "Improvement"
                ],
                s3: [
                    "Work Experience",
                    "Learning",
                    "Proficiency",
                    "Most Using Software",
                    "Operation System",
                    "Advantages",
                    "Inconvenience",
                    "Additional Software",
                    "Reason"
                ],
                s4: [
                    "Opinion (AI)",
                    "Experience (AI)",
                    "Advantages (AI)",
                    "Disadvantages (AI)",
                    "Experience (CL)",
                    "Quality (CL)",
                    "Lack (CL)",
                    "Necessity (CL)",
                    "Reason (CL)",
                    "Open-sourcing (CL)"
                ],
                s5: [
                    "Engagement routes",
                    "Sections needing improvement",
                    "Detailed improvement",
                    "Other"
                ]
            },
            language: {
                name: "Language",
                langName: [
                    "English",
                    "Korean",
                ],
            }
        }
    },
    kr: {
        headerText: "2022년 12월, 전세계 커뮤니티로부터 96 응답자가 보컬로이드 팬덤에서의 자신 및 소프트웨어 사용 경험, 그리고 인공지능 기술에 대한 의견을 공유해주었습니다.",
        overallCard: [
            {
                name: "User Trends",
                paragraphs: [
                    "보컬로이드 팬덤 분석",
                    "보컬로이드 팬덤의 성비, 선호하는 컨텐츠 장르 등과 같은 주제를 다룹니다."
                ]
            },
            {
                name: "Non the software user",
                paragraphs: [
                    "프로그램 사용을 막는 진입장벽 분석",
                    "왜 시도하지 못했는지, 그리고 이를 해결하기 위해 무엇을 해야 하는지 묻습니다."
                ]
            },
            {
                name: "Experience with the software",
                paragraphs: [
                    "아티스트 및 크리에이터의 의견 및 경험 분석",
                    "응답자가 어떻게 입문했는지, 그리고 가장 많이 사용하는 소프트웨어와 소프트웨어의 장단점을 다룹니다."
                ]
            },
            {
                name: "AI in Singing Voice Synthesis",
                paragraphs: [
                    "인공지능 기술 및 다국어 합성 기술에 대한 의견을 분석",
                    "최근 기술의 현황에 대한 다양한 응답자들의 의견을 분석하고, 제 연구와 관련된 질문을 통해 그 타당성을 분석합니다."
                ]
            },
            {
                name: "Survey feedback",
                paragraphs: [
                    "설문조사에 대한 피드백",
                    "커뮤니티 참여율을 분석하고 설문조사 결과를 반성합니다."
                ]
            }
        ],
        section: [
            {
                name: "About",
                paragraphs: [
                    "각 섹션에 대해 간단히 알아봅니다."
                ],
            },
            {
                name: "User Trends",
                paragraphs: [
                    "보컬로이드 팬덤에 대해서 알아보자."
                ],
                subSection: [
                    {
                        name: "성별",
                        overall: "남성과 여성 그리고 제3의 성의 비례가 대략 30% 굉장히 균등함을 보여주었습니다.",
                        subName: "팬덤의 성비",
                        paragraphs: [
                            "37명의 응답자가 자신을 남성이라고 밝혔으며, 또 다른 38명의 답변자는 자신이 여성이라고 밝혔습니다.",
                            "또한 16명의 응답자는 자신이 어느 쪽도 아니라고 했고, 나머지 5명의 답변자는 자신의 성별을 밝히기를 꺼려 했습니다."
                        ],
                        chartId: "chart1",
                    },
                    {
                        name: "가장 좋아하는 소프트웨어",
                        overall: "명불허전 보컬로이드가 가장 많은 선택을 받았습니다.",
                        subName: "어떤 소프트웨어가 가장 선호되는가?",
                        paragraphs: [
                            "Synthesizer V가 두 번째로 많은 선택을 받았으며, 그다음으로 UTAU/OpenUTAU가 51명의 선택을 받으며, 여전히 인기가 많음을 보여주고 있습니다.",
                            "또한 CeVIO/CeVIO AI/Voisona도 29명의 선택을 받았으며, 마지막으로 DeppVocal2 또한 16명의 선택을 받으며 영향력을 보여주었습니다."
                        ],
                        chartId: "chart2",
                    },
                    {
                        name: "입문 경로",
                        overall: "주된 입문 경로는 인터넷이었습니다.",
                        subName: "어떻게 알게 되었나요?",
                        paragraphs: [
                            "36명의 응답자가 인터넷 검색을 통해 알게 되었다고 답했으며, 동영상 플랫폼의 추천 알고리즘을 통해 알게 된 응답자도 35명으로 근소한 차이를 보여주고 있습니다.",
                            "그 외에도 친구의 추천과 게임 등의 매체를 통해 알게 된 응답자가 각각 9명과 6명이며, 나머지 11명은 소셜미디어 또는 다른 경로를 통해 알게 되었다고 합니다."
                        ],
                        chartId: "chart3",
                    },
                    {
                        name: "가장 선호하는 컨텐츠",
                        overall: "가장 많은 응답자가 선호하는 컨텐츠는 노래(음악)였습니다.",
                        subName: "어떤 컨텐츠를 가장 선호하시나요?",
                        paragraphs: [
                            "노래(음악) 컨텐츠를 선호하는 응답자가 87명으로 가장 압도적이었고, 이와 유사한 보컬 커버도 36명의 응답자의 선택을 받으며 다음으로 많은 수치를 보여주었습니다.",
                            "또한 미디어 믹스, 게임, 3D 애니메이션 등을 선호하는 응답자도 각각 18, 17, 10명으로 복합적인 컨텐츠를 선호하는 응답자도 일부 존재했습니다."
                        ],
                        chartId: "chart4",
                    },
                    {
                        name: "기간",
                        overall: "대부분의 응답자들은 최소 3년 이상 위의 컨텐츠를 접해왔고 좋아해왔습니다.",
                        subName: "얼마나 오래 접했나요?",
                        paragraphs: [
                            "10년 이상의 기간 동안 컨텐츠를 접해온 응답자가 27명으로 가장 많았고 이어서 7년에서 9년 동안 접해온 사람이 24명으로 다음으로 많은 비율을 차지했습니다. ",
                            "또한 1년에서 3년 동안 해당 컨텐츠를 접해온 응답자가 22명이고 4년에서 6년의 기간 동안 접해온 응답자가 18명으로 전반적으로 모든 응답의 비율이 균일했습니다."
                        ],
                        chartId: "chart5",
                    },
                    {
                        name: "이유",
                        overall: "가장 많은 사람들이 선택한 이유는 해당 음원의 음색이었습니다.",
                        subName: "왜 좋아하나요?",
                        paragraphs: [
                            "32명의 응답자는 그 캐릭터의 음색을 좋아한다고 답했고, 그 기술에 흥미를 가져서 좋아한다고 답한 응답자는 31명으로 근소한 차이를 보여주었습니다.",
                            "또한 매력적인 캐릭터 그 자체를 좋아하거나 해당 컨텐츠 유형 그 자체에 관심을 가지고 있는 응답자가 각각 13명, 12명으로 의미 있는 수치를 보여주고 있습니다."
                        ],
                        chartId: "chart6",
                    },
                    {
                        name: "프로그램 사용 경험 여험",
                        overall: "대부분의 답변자가 관련 프로그램를 사용한 경험 있다고 합니다.",
                        subName: "보컬로이드 또는 관련 프로그램을 사용해 본 적 있나요?",
                        paragraphs: [
                            "전문지식이 필요한 프로그램이라 적은 비중의 응답자 만이 직접 사용해 봤을 것이라는 예상과 다르게 오히려 지나치게 많은 비중의 응답자가 해당 프로그램을 사용한 경험이 있다고 합니다.",
                        ],
                        chartId: "chart7",
                    },
                ]
            },
            {
                name: "Non the software user",
                paragraphs: [
                    "프로그램의 진입 장벽에 대해 알아보자."
                ],
                subSection: [
                    {
                        name: "어려움",
                        overall: "대다수의 비 사용자 응답자는 음악적 지식의 필요성이 가장 큰 진입 장벽이라고 답했습니다.",
                        subName: "프로그램 사용 시도에 실패한 이유는 무엇일까?",
                        paragraphs: [
                            "예상대로 전문 프로그램이기 때문에 음악적 지식의 필요성과 비용 문제가 주된 원인으로 언급됐습니다.",
                            "또한 애초에 해당 프로그램에 흥미가 없어서 시도하지 않았다는 의견도 존재했습니다."
                        ],
                        chartId: "chart8",
                    },
                    {
                        name: "개선사항",
                        overall: "대중화를 위해 가장 먼저 필요한 개선사항은 홍보라고 답했습니다.",
                        subName: "그들이 프로그램을 사용하게 하려면 어떤 노력이 필요할까?",
                        paragraphs: [
                            "공모전과 같은 홍보와 불편한 사용성 개선이 가장 필요한 개선사항으로 지목했습니다.",
                            "제품의 가격과 접근성이 불편함을 유발하고 있어서 좀 더 쉽게 구매할 수 있는 방안이 필요할 것으로 추정됩니다."
                        ],
                        chartId: "chart9",
                    },
                ]
            },
            {
                name: "Experience with the software",
                paragraphs: [
                    "전문 사용자의 경혐과 의견에 대해 알아보자."
                ],
                subSection: [
                    {
                        name: "사용 경력",
                        overall: "대부분의 응답자들은 3년 이하의 사용 경험을 가지고 있었다.",
                        subName: "얼마나 오래 사용해 봤나요?",
                        paragraphs: [
                            "61명의 응답자가 3년 이하의 사용 경험을 가지고 있다고 답했고, 4-6년의 사용 경력을 가진 응답자가 13명으로 다음으로 많았다.",
                            "7년 이상의 사용 경험을 가진 응답자도 15명으로 적지 않은 수치이나 적은 비중을 차지했다."
                        ],
                        chartId: "chart10",
                    },
                    {
                        name: "학습 방법",
                        overall: "대부분의 응답자들은 놀랍게도 직접 사용해 보면서 배웠다고 합니다.",
                        subName: "보컬로이드를 배우는 방법",
                        paragraphs: [
                            "절반 이상의 답변자가 직접 사용해 보면서 프로그램 사용 방법을 배웠다고 답했으며, 20명의 답변자는 인터넷 게시물을 통해 사용법을 익혔다고 답했습니다.",
                            "또한 11명의 응답자는 온라인 영상 강의를 통해 이를 배웠으며, 7명의 사람들은 음악 분야에서의 경험을 통해 사용법을 익혔다고 합니다.",
                            "공식 매뉴얼 통해 배웠다는 응답자가 적은 것으로 보아 크게 도움이 되지 못한 것으로 추측됩니다."
                        ],
                        chartId: "chart11",
                    },
                    {
                        name: "전문성",
                        overall: "대다수의 답변자들은 해당 프로그램을 통한 간단한 컨텐츠 정도는 생산할 수 있다고 답했습니다.",
                        subName: "소프트웨어 숙련도",
                        paragraphs: [
                            "37명의 응답자는 자신의 결과물을 온라인에 업로드 한 경험이 있다고 답했고, 그다음으로 많은 25명의 응답자가 간단한 파라미터 정도는 조작할 수 있다고 합니다.",
                            "또한, 17명의 응답자는 노트 입력 수준의 간단한 작업을 할 수 있다고 답했으며, 나머지 10명의 응답자는 전문적으로 활동하는 프로듀서 수준의 사용 수준을 가지고 있다고 답했습니다."
                        ],
                        chartId: "chart12",
                    },
                    {
                        name: "자주 사용하는 프로그램",
                        overall: "가장 많은 사람들이 사용하는 프로그램은 우타우와 보컬로이드입니다.",
                        subName: "어떤 프로그램이 가장 많이 사용되나요?",
                        paragraphs: [
                            "보컬로이드와 우타우를 사용하는 응답자가 각각 47명과 42명으로 가장 많았고, 이어서 Synthesizer V를 사용하는 응답자가 36으로 다음으로 많은 선택을 받았습니다.",
                            "또한 Deep vocal과 Cevio가 각각 16명과 12명의 선택을 받았으며, VOCALINA, NNSVS, NEUTRINO 등을 사용하는 응답자도 간혹 존재했습니다."
                        ],
                        chartId: "chart13",
                    },
                    {
                        name: "작업 환경",
                        overall: "가장 많은 사람들이 사용하는 운영체제는 윈도우 10 또는 윈도우 11입니다.",
                        subName: "어떤 환경에서 작업하시나요?",
                        paragraphs: [
                            "압도적으로 많은 응답자가 최신 버전의 윈도우에서 작업한다고 답했습니다.",
                            "나머지 10명의 응답자는 macOs, iPadOS, 리눅스 등을 사용한다고 답했습니다."
                        ],
                        chartId: "chart14",
                    },
                    {
                        name: "장점",
                        overall: "그 프로그램을 사용하는 주된 이유는 캐릭터의 음성이 마음에 들어서입니다.",
                        subName: "왜 그 프로그램을 사용하시나요?",
                        paragraphs: [
                            "43명의 응답자가 캐릭터가 좋아서 해당 프로그램을 사용했다고 답했고, 다음으로 편리한 사용성과 훌륭한 합성 품질이 각각 17명, 13명의 선택을 받았습니다.",
                            "생각보다 많은 사람들이 우타우나 DeepVocal이 무료여서 사용한다고 답했습니다."
                        ],
                        chartId: "chart15",
                    },
                    {
                        name: "불편한 점",
                        overall: "자신이 사용하는 프로그램의 가장 불편한 점은 음원 설정이라고 답했습니다.",
                        subName: "무엇이 불편했나요?",
                        paragraphs: [
                            "41명의 답변자가 우타우나 딥보컬의 음원 설정이 너무 복잡하다고 답했고, 이어서 보컬로이드와 같은 상용 프로그램의 비용 부담이 31명의 선택을 받았습니다.",
                            "또한 모국어를 지원하지 않는다는 점과 복잡한 파라미터가 각각 23명, 22명으로 뒤를 이었고, 관련 커뮤니티 사이트의 부재와 사용 환경의 제약이 각각 12명, 10명으로 많은 선택을 받았습니다."
                        ],
                        chartId: "chart16",
                    },
                    {
                        name: "추가로 사용할 프로그램",
                        overall: "추후 사용할 소프트웨어로 CeVIO와 보컬로이드가 가장 많은 주목을 받았다.",
                        subName: "추후 사용 예정인 프로그램",
                        paragraphs: [
                            "CeVIO와 보컬로이드가 각각 22명, 21명으로 가장 많이 고려되고 있으며, Synthesizer V의 사용을 고려하거나 다른 도구를 추가로 사용할 예정이 없다는 응답자가 각각 10명으로 다음으로 많았습니다.",
                            "또한 NNSVS나 Piapro Studio NT 그리고 UTAU를 고려하고 있는 응답자가 각각 7명과 6명, 5명으로 의미 있는 수치를 보여주었습니다."
                        ],
                        chartId: "chart17",
                    },
                    {
                        name: "이유",
                        overall: "새로운 툴을 도전하려는 이유로 그 소프트웨어만의 캐릭터와 새로운 소프트웨어를 시도하는 것이 주된 이유로 꼽혔습니다.",
                        subName: "추가로 사용하려는 이유가 뭔가요?",
                        paragraphs: [
                            "주로 사용하는 소프트웨어의 선택 이유와 마찬가지로 그 소프트웨어만의 독점적인 캐릭터가 가장 주된 이유로 언급되었습니다.",
                            "또한, 다음으로 많은 24명의 응답자가 새로운 소프트웨어를 시도해 보고 싶었다고 답했으며, 12명의 응답자가 더 나은 합성 품질 때문에 이주를 고려하고 있다고 답했습니다."
                        ],
                        chartId: "chart18",
                    },
                ]
            },
            {
                name: "AI in Singing Voice Synthesis",
                paragraphs: [
                    "최신 기술에 대해 알아보자."
                ],
                subSection: [
                    {
                        name: "AI 기술에 대한 의견",
                        overall: "대부분의 응답자는 AI 기술에 대해 긍정적인 의견을 보였습니다.",
                        subName: "AI 기술이 주는 영향",
                        paragraphs: [
                            "65명의 응답자가 인공 지능 기술의 발전에 대해 기대된다고 답했고, 11명의 응답자는 이로 인해 소프트웨어를 사용하기 편해질 것이라고 답했습니다.",
                            "하지만, 9명의 응답자는 이로 인해 자신의 결과물의 가치가 떨어질 것을 염려했고, 3명의 응답자를 이를 위해 새로운 기술을 배워야 한다는 것을 걱정했습니다."
                        ],
                        chartId: "chart19",
                    },
                    {
                        name: "AI 기술에 대한 경험",
                        overall: "대부분의 응답자가 AI 기술이 사용된 소프트웨어를 사용한 경험이 있다고 답했습니다.",
                        subName: "AI 기술 사용 경험",
                        paragraphs: [
                            "52명의 응답자가 Synthesizer V나 NNSVS/ENUNU와 같은 AI 기술이 사용된 소프트웨어에 대한 사용 경험이 있다고 답했고, 나머지 44명의 응답자는 그렇지 않다고 답했습니다.",
                            "양쪽의 비율이 완전히 치우치기보다는 균형 있는 비율을 보여주고 있습니다."
                        ],
                        chartId: "chart20",
                    },
                    {
                        name: "AI 기술의 장점",
                        overall: "AI 기술이 주는 가장 큰 장점은 가창 합성 품질의 향상입니다.",
                        subName: "AI 기술이 주는 이로운 점",
                        paragraphs: [
                            "31명의 응답자가 합성 품질의 향상을 가장 큰 장점으로 꼽았고, 30명의 응답자가 적은 노력으로 훌륭한 퀄리티를 보여줄 수 있다는 것을 장점으로 언급했습니다.",
                            "또한 12명의 응답자는 사용이 쉬워지는 것을 장점으로 언급했고, 다양한 표현과 발음의 명확성 증가를 각각 10명, 7명의 응답자가 선택했습니다."
                        ],
                        chartId: "chart21",
                    },
                    {
                        name: "AI 기술의 단점",
                        overall: "AI 기술이 사용된 소프트웨어의 가장 큰 단점은 증가한 비용이었습니다.",
                        subName: "AI 기술이 주는 불편한 점",
                        paragraphs: [
                            "23명의 응답자가 구매 비용의 증가가 가장 큰 단점이라고 답했고, 16명의 응답자가 발음 조정이 잘 적용되지 않는 것이 불편하다고 답했습니다.",
                            "또한, 15명의 응답자가 동작 사양의 증가가 불편하다고 답했으며, 마지막으로 미묘한 잡음과 합성 시간의 증가가 각각 11명, 9명의 응답자의 선택을 받았습니다."
                        ],
                        chartId: "chart22",
                    },
                    {
                        name: "교차 언어 합성에 대한 경험",
                        overall: "대부분의 응답자가 교차 언어 합성 기술을 사용해 본 경험이 없다고 답했습니다.",
                        subName: "교차 언어 합성에 대한 경험",
                        paragraphs: [
                            "교차 언어 합성 기술을 접해보지 못한 응답자가 과반수인 61명이고, 나머지 35명의 응답자는 경험해 보지 못했다고 답했습니다.",
                        ],
                        chartId: "chart23",
                    },
                    {
                        name: "교차 언어 합성의 품질",
                        overall: "대부분의 응답자가 교차 언어 합성의 품질에 대해 잘 모르겠다고 답했습니다.",
                        subName: "교차 언어 합성 기술의 현주소",
                        paragraphs: [
                            "42명의 응답자가 잘 모르겠다고 답했고, 40명의 응답자가 많은 발전이 보인다고 말했습니다.",
                            "또한, 2명의 응답자가 여전히 좋지 않다고 답했으나 인간에 가까워졌다고 답한 응답자는 12명에 불과합니다."
                        ],
                        chartId: "chart24",
                    },
                    {
                        name: "교차 언어 합성의 부족한 점",
                        overall: "교차 언어 합성의 가장 큰 문제점으로 지원되는 언어가 한정적이라고 합니다.",
                        subName: "교차 언어 합성의 부족한 점",
                        paragraphs: [
                            "35명의 응답자가 지원되는 언어가 부족하다고 답했고, 28명의 응답자가 특정 소프트웨어에서 만 사용 가능하다고 답했습니다.",
                            "또한, 18명의 응답자가 발음이 여전히 부자연스럽다고 답했고, 나머지 15명의 응답자는 기타 항목을 통해 모른다고 답했습니다."
                        ],
                        chartId: "chart25",
                    },
                    {
                        name: "교차 언어 합성의 필요성",
                        overall: "과반수의 응답자가 교차 언어 합성이 필요하다고 합니다.",
                        subName: "교차 언어 합성이 필요한가요?",
                        paragraphs: [
                            "교차 언어 합성 기술이 필요하다고 답한 응답자가 57명으로 과반수를 차지했고, 나머지 34명의 응답자는 필수는 아니라고 답했습니다."
                        ],
                        chartId: "chart26",
                    },
                    {
                        name: "필요한 이유",
                        overall: "대부분의 응답자는 다양한 언어를 사용한 컨텐츠 제작을 위해 교차 언어 합성 기술이 필요하다고 합니다.",
                        subName: "그 기술이 필요한 이유",
                        paragraphs: [
                            "23명의 응답자는 다양한 언어를 가창에 사용할 수 있다고 답했으며, 적은 비용으로 다국어 컨텐츠 생산과 언어 특유의 표현력을 활용할 수 있다가 각각 응답자 15명의 선택을 받았습니다.",
                            "하지만 필요하다고 생각하지 않는다는 응답이 17명으로 두 번째로 높은 수치를 보여주었습니다."
                        ],
                        chartId: "chart27",
                    },
                    {
                        name: "교차 언어 합성의 오픈소스화",
                        overall: "대부분의 응답자는 교차 언어 합성 기술의 오픈소스화에 긍정적인 의사를 밝혔습니다.",
                        subName: "교차 언어 합성의 오픈소스화에 대한 의견",
                        paragraphs: [
                            "84명의 응답자가 있으면 좋을 것 같다고 답했고, 나머지 12명의 응답자는 없어도 무방하다고 답했습니다.",
                        ],
                        chartId: "chart28",
                    },
                ]
            },
            {
                name: "Survey feedback",
                paragraphs: [
                    "설문조사 피드백에 대해 알아보자."
                ],
                subSection: [
                    {
                        name: "참여 경로",
                        overall: "응답자의 설문조사 참여 경로는 다음과 같습니다.",
                        subName: "",
                        paragraphs: [
                            ""
                        ],
                        chartId: "chart29",
                    },
                    {
                        name: "개선이 필요한 섹션",
                        overall: "감사하게도 59명의 응답자가 개선이 필요하지 않다고 했지만, 나머지 항목이 모두 균형 있는 비중을 차지한 것으로 보아 전반적인 설계 실수가 있는 것으로 보입니다.",
                        subName: "",
                        paragraphs: [
                            ""
                        ],
                        chartId: "chart30",
                    },
                    {
                        name: "자세한 개선사항",
                        overall: "아래 글은 설문조사에 필요한 개선 사항에 대한 의견 목록입니다.",
                        subName: "이 설문조사에서 부족한 점은 무엇인가요?",
                        paragraphs: [
                            "질문을 좀 더 자세하게 구성하는 것이 좋을 것 같습니다.",
                            "교차 언어가 뭔지 모르겠어요.",
                            "많은 소프트웨어가 macOS를 지원하지 않습니다.",
                            "이유를 묻는 질문과 같은 일부 질문은 단답형보다는 다중 선택이 더 좋을 것 같습니다.",
                            "모호한 영어 표현 개선",
                            "보컬 유형, 스타일 또는 장르에 관한 질문도 포함하면 좋겠다.",
                            "몇 가지 질문에 답하기가 조금 어려웠습니다.",
                            "섹션 2(비사용자)는 음성 합성에 관한 질문이 아니다.",
                            "명확성을 위해 누군가에게 영어를 교정하고 편집해 달라고 요청하는 것을 고려하세요.",
                            "어느 것도 완벽한 것은 없다.",
                            "몇몇의 질문은 문구가 이상하다.",
                            "더 많은 질문에 대해 '해당 없음' 또는 '모름' 옵션을 포함하는 것을 고려하세요.",
                            "질문은 이전 답변에 의존해야 합니다."
                        ],
                        chartId: ""
                    },
                    {
                        name: "그 외",
                        overall: "아래 메시지는 개선되었으면 하는 기타 사항이나 연구원에게 하고 싶은 말입니다.",
                        subName: "그리고...",
                        paragraphs: [
                            "한국에도 CeVIO AI처럼 일반인들도 자유롭게 사용할 수 있는 인공지능 텍스트 음성 변환 소프트웨어와 요구사항이 있으면 좋을 것 같습니다.",
                            "프로젝트에 행운을 빕니다!",
                            "잘 짜인 튜토리얼이 있으면 신규 사용자에게 유용할 것 같습니다.",
                            "메리 크리스마스!",
                            "음성 합성으로 대화/랩을 할 수 있으면 좋을 것 같습니다.",
                            "이 부분에 대해 좋은 진전이 있기를 바랍니다.",
                            "보컬로이드 합성이 너무 느립니다. 하지만 눈에 띄게 개선되면 좋을 것 같아요.",
                            "앞으로 클로즈드 소스 개발이나 논문 형태로 발표할 수 있는 결과가 나오기를 기대합니다.",
                            "제 생각에는 많은 제어권을 가지고 자신만의 가수를 만들고 커스터마이징할 수 있는 가창 합성 소프트웨어가 더 멋지다고 생각합니다."
                        ],
                        chartId: ""
                    }
                ]
            },
        ],
        footer: {
            h1: "읽어주셔서 감사합니다.",
            h2: "번역자",
            authors: [
                "crlotwhite"
            ],
            p: "새 번역을 추가하거나 번역 문제를 보고하려면 아래 GitHub 리포지토리에서 이슈 또는 PR을 생성해 주세요."
        },
        chart: {
            common: {
                label: "응답 수",
            },
            chart1: {
                question: "당신의 성별은 무엇입니까?",
                labels: [
                    "남성",
                    "여성",
                    "그 외",
                    "성별을 밝히고 싶지 않음"
                ]
            },
            chart2: {
                question: "좋아하는 가창 합성 엔진이 무엇입니까? (3개까지)",
                labels: [
                    "Vocaloid",
                    "CeVIO/CeVIO AI/VoiSona",
                    "Synthesizer V",
                    "UTAU/OpenUTAU",
                    "NEUTRINO",
                    "NNSVS/ENUNU",
                    "VOCALINA",
                    "DeepVocal",
                    "Piapro Studio NT",
                    "ACE Studio"
                ]
            },
            chart3: {
                question: "어떻게 접하게 되었습니까?",
                labels: [
                    "동영상 플랫폼의 추천 알고리즘 (Youtube, NicoNico, bilibili 등)",
                    "인터넷 검색",
                    "친구의 소개",
                    "게임 속 컨텐츠 (배경 음악 등)",
                    "소셜 미디어 (Facebook, Twitter, Instagram 등)",
                    "기타"
                ]
            },
            chart4: {
                question: "가장 선호하는 컨텐츠 유형은 무엇인가요. (2개까지)",
                labels: [
                    "노래 (오리지널, 커버곡 등)",
                    "보컬 커버 (우타이테 등)",
                    "미디어 믹스 (악곡 기반 오리지널 컨텐츠; 카게로우 프로젝트 등)",
                    "동인 만화 (하츠네 믹스 등)",
                    "3D 애니메이션 (MMD 등)",
                    "게임 (프로젝트 디바 시리즈 등)",
                    "기타",
                ]
            },
            chart5: {
                question: "해당 컨텐츠를 접한 기간이 얼마나 되시나요?",
                labels: [
                    "1년 미만",
                    "1년-3년",
                    "4년-6년",
                    "7년-9년",
                    "10년 이상"
                ]
            },
            chart6: {
                question: "해당 컨텐츠를 좋아하는 이유가 무엇인가요?",
                labels: [
                    "매력적인 캐릭터",
                    "해당 음성의 음색",
                    "해당 컨텐츠 유형 자체에 대한 흥미(3D 애니메이션 등)",
                    "해당 기술에 대한 관심",
                    "기타",
                ]
            },
            chart7: {
                question: "가창 합성 엔진을 사용해본 경험이 있으신가요?",
                labels: [
                    "네",
                    "아니오"
                ]
            },
            chart8: {
                question: "사용하지 못하신 이유가 무엇인가요?",
                labels: [
                    "비싼 소프트웨어 비용",
                    "음악적 지식의 필요성",
                    "사용할 정도로 관심을 가지고 있지 않음",
                    "재고가 없음"
                ]
            },
            chart9: {
                question: "그것의 대중화를 위해 필요한 개선사항은 무엇이라고 생각하시나요?",
                labels: [
                    "좀 더 직관적인 사용성 (음악적인 지식 없이 이용 가능)",
                    "컨텐츠에 대한 적극적인 홍보",
                    "좀 더 저렴한 가격",
                    "추가 재고"
                ]
            },
            chart10: {
                question: "가창 합성 소프트웨어를 얼마나 오래 사용했나요?",
                labels: [
                    "1년 미만",
                    "1년-3년",
                    "4년-6년",
                    "7년-9년",
                    "10년 이상"
                ]
            },
            chart11: {
                question: "가창 합성 엔진을 어떻게 배웠나요?",
                labels: [
                    "먼저 사용한 스승을 통해서",
                    "공식 메뉴얼을 통해서",
                    "이미 가지고 있는 음악적 지식을 통해서",
                    "온라인 영상 강의를 통해서",
                    "직접 사용해 보면서",
                    "인터넷 게시글을 통해서"
                ]
            },
            chart12: {
                question: "가창 합성 엔진 사용 수준이 어떻게 되시나요?",
                labels: [
                    "초급",
                    "중급",
                    "고급",
                    "전문가",
                ]
            },
            chart13: {
                question: "주로 사용하는 가창 합성 엔진이 무엇인가요. (3개까지)",
                labels: [
                    "Vocaloid",
                    "CeVIO/CeVIO AI/VoiSona",
                    "Synthesizer V",
                    "UTAU/OpenUTAU",
                    "NEUTRINO",
                    "NNSVS/ENUNU",
                    "VOCALINA",
                    "DeepVocal",
                    "Piapro Studio NT",
                    "ACE Studio",
                    "기타",
                ]
            },
            chart14: {
                question: "사용하시는 운영체제가 무엇인가요?",
                labels: [
                    "Windows 10/11",
                    "기타 Windows",
                    "Linux (Ubuntu, Fedora, e.t.c)",
                    "macOS/iOS/iPadOs",
                ]
            },
            chart15: {
                question: "그것을 사용하시는 주된 이유가 무엇인가요?",
                labels: [
                    "캐릭터나 음성이 마음에 들어서",
                    "사용하기 편해서",
                    "DAW와의 연계가 편해서",
                    "주어진 내장 이펙트가 훌륭해서",
                    "합성 품질이 좋아서",
                    "좋아하는 아티스트가 사용해서",
                    "무료여서",
                    "기타"
                ]
            },
            chart16: {
                question: "사용하는 소프트웨어의 불편한점은 무엇인가요? (3개까지)",
                labels: [
                    "복잡한 파라미터",
                    "복잡한 음원 설정 (우타우, 딥보컬 등)",
                    "비싼 비용",
                    "사용 환경 제약 (윈도우 운영체제만 사용가능 등)",
                    "모국어를 지원하지 않음",
                    "관련 커뮤니티가 없음",
                    "기술적인 요구사항이 높음 (하드웨어 사양)",
                    "인터넷 연결 필수",
                    "기타"
                ]
            },
            chart17: {
                question: "추가로 사용하려는 또는 관심을 가지고 있는 가창 합성 엔진이 있나요?",
                labels: [
                    "Vocaloid",
                    "CeVIO/CeVIO AI/VoiSona",
                    "Synthesizer V",
                    "UTAU/OpenUTAU",
                    "NNSVS/ENUNU",
                    "DeepVocal",
                    "Piapro Studio NT",
                    "ACE Studio",
                    "다른 엔진을 사용할 생각이 없음",
                    "기타",
                ]
            },
            chart18: {
                question: "그것을 사용하려는 이유가 무엇인가요?",
                labels: [
                    "더 나은 음성 합성 품질",
                    "같은 캐릭터가 다른 엔진으로 출시됨",
                    "새로운 엔진을 사용해보고 싶어서",
                    "기존에 사용하던 엔진보다 편리해서",
                    "협력자가 사용하고 있는 엔진이라서",
                    "그 엔진만의 캐릭터를 사용하고 싶어서",
                    "기타",
                ]
            },
            chart19: {
                question: "가창 합성 엔진에서의 AI 기술에 대해서 어떻게 생각하시나요?",
                labels: [
                    "해당 기술의 발전이 기대된다.",
                    "새로운 기술을 배워야 함에 대해 걱정이 된다.",
                    "입문하기 더 좋아질 것이다.",
                    "자신의 결과물에 대한 가치가 떨어질까 걱정된다.",
                    "기타",
                ]
            },
            chart20: {
                question: "AI 기술이 사용된 가창 합성 시스템을 사용해본 경험이 있으신가요?",
                labels: [
                    "네",
                    "아니오"
                ]
            },
            chart21: {
                question: "AI 기술이 사용된 엔진의 가장 큰 장점은 무엇이라고 생각하시나요?",
                labels: [
                    "가창 합성 품질이 상승됨",
                    "적은 노력으로 훌륭한 퀄리티의 결과물 생성",
                    "사용법이 쉬워짐",
                    "다양한 표현이 가능해짐",
                    "발음이 명확해짐",
                    "기타",
                ]
            },
            chart22: {
                question: "AI 기술이 사용된 엔진의 가장 큰 단점은 무엇이라고 생각하시나요?",
                labels: [
                    "구매 비용이 증가됨",
                    "하드웨어 사양이 높아짐",
                    "발음 조정이 잘 안먹음",
                    "미묘한 잡음이 발생함",
                    "합성 시간이 오래 걸림",
                    "잘 모르겠음",
                    "기타",
                ]
            },
            chart23: {
                question: "교차 언어 합성(Cross-lingual Synthesis)을 사용해보신 경험이 있나요?",
                labels: [
                    "네",
                    "아니오"
                ]
            },
            chart24: {
                question: "교차 언어 합성(Cross-lingual Synthesis)의 품질은 어느정도라고 생각하시나요?",
                labels: [
                    "여전히 좋지 않다.",
                    "딱히 잘 모르겠다.",
                    "많은 발전이 보인다.",
                    "인간에 가까워졌다.",
                ]
            },
            chart25: {
                question: "교차 언어 합성(Cross-lingual Synthesis)에서 부족하다고 느끼는 점은 무엇인가요?",
                labels: [
                    "여전히 부자연스러운 발음",
                    "특정 소프트웨어만 사용 가능",
                    "지원되는 언어가 적음",
                    "잘 모르겠음",
                    "기타",
                ]
            },
            chart26: {
                question: "교차 언어 합성(Cross-lingual Synthesis)이 가창 합성 엔진에 반드시 필요하다고 생각하시나요?",
                labels: [
                    "네",
                    "아니오"
                ]
            },
            chart27: {
                question: "필요하다고 생각하신다면 그 이유가 무엇인가요?",
                labels: [
                    "다양한 언어를 사용할 수 있다.",
                    "적은 비용으로 다국어 컨텐츠를 생산할 수 있다.",
                    "그 언어 특유의 표현력을 살릴 수 있다.",
                    "필요하다고 생각하지 않는다.",
                    "기타",
                ]
            },
            chart28: {
                question: "이 기술의 오픈소스화에 대해 어떻게 생각하시나요?",
                labels: [
                    "있으면 좋을 것 같다.",
                    "없어도 무방하다."
                ]
            },
            chart29: {
                question: "어떤 커뮤니티를 통해 참여하시게 되었습니까?",
                labels: [
                    "Discord",
                    "Utau forum",
                    "보컬로이드 제국",
                    "Vocaloid Animo",
                    "우타우 사용자 모임",
                    "Synthesizer V Forum",
                    "Twitter",
                    "딥보컬 연구소",
                    "reddit"
                ]
            },
            chart30: {
                question: "개선이 필요한 섹션은 무엇이라고 생각하시나요?",
                labels: [
                    "1. User Trends",
                    "2. Non singing voice synthesis software user",
                    "3. Experience with singing voice synthesis software",
                    "4. AI (Artificial Intelligent) Singing Voice Synthesis",
                    "개선이 필요한 섹션 없음",
                ]
            },
        },
        nav: {
            section: [
                "Top",
                "About",
                "User Trends",
                "Non Users",
                "Expert Users",
                "AI Technology",
                "Feedbacks",
            ],
            subSection: {
                s1: [
                    "성별",
                    "가장 좋아하는 소프트웨어",
                    "입문 경로",
                    "가장 선호하는 컨텐츠",
                    "기간",
                    "이유",
                    "프로그램 사용 경험 여부"
                ],
                s2: [
                    "어려움",
                    "개선사항"
                ],
                s3: [
                    "사용 경력",
                    "학습 방법",
                    "전문성",
                    "자주 사용하는 프로그램",
                    "작업 환경",
                    "장점",
                    "불편한 점",
                    "추가로 사용할 프로그램",
                    "이유"
                ],
                s4: [
                    "의견 (AI)",
                    "경험 (AI)",
                    "장점 (AI)",
                    "단점 (AI)",
                    "경험 (CL)",
                    "품질 (CL)",
                    "부족한 점 (CL)",
                    "필요성 (CL)",
                    "이유 (CL)",
                    "오픈소스화 (CL)"
                ],
                s5: [
                    "참여 경로",
                    "개선이 필요한 섹션",
                    "자세한 개선사항",
                    "그 외"
                ]
            },
            language: {
                name: "언어 설정",
                langName: [
                    "영어",
                    "한국어",
                ],
            }
        }
    },
    jp: {
        headerText: "2022年12月、ボーカロイドファンダムの性向とソフトウェア経験、AI技術などに対する世界の多様なコミュニティの回答者の96人が意見を共有したと明らかにしました。",
        overallCard: [
            {
                name: "User Trends",
                paragraphs: [
                    "ボーカロイドファンダムの分析",
                    "ボーカロイドファンダムの性比、気に入りコンテンツジャンルなどのテーマについて話ます。"
                ]
            },
            {
                name: "Non the software user",
                paragraphs: [
                    "プログラムの使用を防ぐエントリーバリアの分析",
                    "なぜ試していなかったのかと、それを解決するために何をすべきかを聞きます。"
                ]
            },
            {
                name: "Experience with the software",
                paragraphs: [
                    "アーティストやクリエイターの意見や経験の分析",
                    "回答者がどのように入門したのかと、最もよく使われるソフトウェアとソフトウェアの長所と短所について話します。"
                ]
            },
            {
                name: "AI in Singing Voice Synthesis",
                paragraphs: [
                    "AI技術と多言語合成技術に関する意見の分析",
                    "最近の技術の現状について、さまざまな回答者の意見を分析し、私の研究に関連する質問を通してその妥当性を分析します。"
                ]
            },
            {
                name: "Survey feedback",
                paragraphs: [
                    "アンケートのフィードバック",
                    "コミュニティ参加率を分析し、アンケートの結果を反映します。"
                ]
            }
        ],
        section: [
            {
                name: "About",
                paragraphs: [
                    "各セクションについて簡単に説明します。"
                ],
            },
            {
                name: "User Trends",
                paragraphs: [
                    "ボーカロイドファンダムについて学びましょう。"
                ],
                subSection: [
                    {
                        name: "性別",
                        overall: "男性と女性と第3の性の比例がおよそ30%で非常に均等であることを見せました。",
                        subName: "ファンダムの性比",
                        paragraphs: [
                            "37人の回答者が自分を男性だと答えました。別の38人の回答者が自分を女性だと答えました。",
                            "また、16人の回答者は自分がどちらでもないと答え、残りの5人の回答者は自分の性別を言いたくないと答えました。"
                        ],
                        chartId: "chart1",
                    },
                    {
                        name: "お気に入りのソフトウェア",
                        overall: "ボーカロイドは最も多く選ばれました。",
                        subName: "どのソフトウェアが最もお気に入りますか？",
                        paragraphs: [
                            "Synthesizer Vは2番目に多く選ばれて、その後５１人がUTAU / OpenUTAUを選んで依然として人気が高いことを見せています。",
                            "または、２９人がCeVIO/CeVIO AI/Voisonaを選び、最後に１６人がDeppVocal2を選んで影響力を見せました。"
                        ],
                        chartId: "chart2",
                    },
                    {
                        name: "入門ルート",
                        overall: "主な入門ルートはインターネットでした。",
                        subName: "どのように知りましたか。",
                        paragraphs: [
                            "36人の回答者はインターネットで知り合ったと答えました。３５人の回答者は動画プラットフォームのオススメアルゴリズムで知り合った答えてわずかな違いを見せています。",
                            "そのほかにも友人の紹介やゲームなどの媒体を通じて知り合った回答者がそれぞれ9人と6人であり、残りの11人はソーシャルメディアや他のルートで知り合ったと答えました。"
                        ],
                        chartId: "chart3",
                    },
                    {
                        name: "お気に入りのコンテンツ",
                        overall: "最も回答者がお気に入りのコンテンツは曲（音楽）でした。",
                        subName: "お気に入りのコンテンツは何ですか。",
                        paragraphs: [
                            "曲（音楽）のコンテンツがお気に入る回答者が87人で最も圧倒的で、これに似たボーカルカバーも36人の回答者から選ばれて次に多くの数値を見せました。",
                            "または、メディアミックス、ゲーム、3Dアニメーなどがお気に入る回答者もそれぞれ18、17、10人で複合的なコンテンツがお気に入る回答者も一部存在しました。"
                        ],
                        chartId: "chart4",
                    },
                    {
                        name: "期間",
                        overall: "ほとんどの回答者は最小3年以上で上記のコンテンツを使うと好きでした。",
                        subName: "どのくらいの時間がありましたか。",
                        paragraphs: [
                            "10年以上の期間にコンテンツを使った回答者が27人で最も多く、続いて7年から9年間使った人が24人で次に多くの割合を占めました。",
                            "または、1年から3年間、そのコンテンツを使った回答者が22人で、4年から6年の間に使った回答者が18人で、全体的にすべての回答の割合が均一でした。"
                        ],
                        chartId: "chart5",
                    },
                    {
                        name: "理由",
                        overall: "最も多い人が選んだ理由は、その音源の音色でした。",
                        subName: "なぜお気に入りますか。",
                        paragraphs: [
                            "32人の回答者はそのキャラクターの音色が好きだと答え、その技術に興味を持って好きだと答えた回答者は31人とわずかな違いを見せました。",
                            "または、魅力的なキャラクターのものが好きか、そのコンテンツタイプのものにお気に入る回答者がそれぞれ13人、12人で意味のある数値を見せています。"
                        ],
                        chartId: "chart6",
                    },
                    {
                        name: "プログラムの使用経験",
                        overall: "ほとんどの回答者が関連プログラムを使った経験がありました。",
                        subName: "ボーカロイドや関連プログラムを使ったことがありますか。",
                        paragraphs: [
                            "専門知識が必要なプログラムだから少ない割合の回答者だけが直接使ってみただろうという予想とは異なり、むしろ過度に多い割合の回答者がそのプログラムを使った経験がありました。",
                        ],
                        chartId: "chart7",
                    },
                ]
            },
            {
                name: "Non the software user",
                paragraphs: [
                    "プログラムのエントリーバリアについて学びましょう。"
                ],
                subSection: [
                    {
                        name: "難しさ",
                        overall: "大半の非ユーザー回答者は音楽的知識の必要性が最大の参入障壁だと答えました。",
                        subName: "プログラムの使用に失敗した理由は何ですか。",
                        paragraphs: [
                            "予想通りプロのプログラムなので、音楽的知識の必要性とコストの問題が主な原因と言われていました。",
                            "また、当初、そのプログラムに興味がないので試していないという意見もありました。"
                        ],
                        chartId: "chart8",
                    },
                    {
                        name: "改善点",
                        overall: "大衆化のために最初に必要な改善点はプロモーションだと答えました",
                        subName: "彼らにプログラムを使用させるにはどんな努力が必要ですか。",
                        paragraphs: [
                            "コンテストのような広報と不便な使用性の改善が最も必要な改善点でありました。",
                            "製品の価格とアクセシビリティが不便であるため、より簡単に購入できる方法が必要になると推定されています。"
                        ],
                        chartId: "chart9",
                    },
                ]
            },
            {
                name: "Experience with the software",
                paragraphs: [
                    "プロのユーザーの経験と意見について学びましょう。"
                ],
                subSection: [
                    {
                        name: "使用キャリア",
                        overall: "ほとんどの回答者は3年以下の使用経験を持っていました。",
                        subName: "どのくらい使用してみましたか。",
                        paragraphs: [
                            "61人の回答者が3年以下の使用経験を持っていると答え、１３人は4-6年の使用経験があると答えて次に多きました。",
                            "7年以上の使用経験がある回答者も15人で少なくない数値や少ない割合を占めました。"
                        ],
                        chartId: "chart10",
                    },
                    {
                        name: "学習の方法",
                        overall: "ほとんどの回答者は驚くべきことに自分で試して学んだと言いました。",
                        subName: "ボーカロイドを学ぶ方法",
                        paragraphs: [
                            "半分以上の回答者は直接使ってみて、プログラムの使い方を学んだと答え、20人の回答者はインターネットの投稿を通じて使い方を身につけたと答えました。",
                            "また、11人の回答者はオンライン映像講義を通じてこれを学び、7人は音楽分野での経験を通じて使い方を身につけたと答えました。",
                            "公式マニュアルを通じて学んだという回答者が少なくて、大きく役に立たなかったと推測されます。"
                        ],
                        chartId: "chart11",
                    },
                    {
                        name: "専門性",
                        overall: "大半の回答者は、そのプログラムを通じた簡単なコンテンツは生産できると答えました。",
                        subName: "ソフトウェアの熟練度",
                        paragraphs: [
                            "37人の回答者は、自分の結果をオンラインにアップロードした経験があると答えたし、その後多くの25人の回答者が簡単なパラメータくらいは操作できると答えました。",
                            "さらに、17人の回答者はノート入力レベルの簡単な作業ができると答え、残りの10人の回答者はプロフェッショナルなプロデューサーレベルの使用レベルだと答えました。"
                        ],
                        chartId: "chart12",
                    },
                    {
                        name: "よく使うプログラム",
                        overall: "最も多い人が使うプログラムはウタウとボーカロイドです。",
                        subName: "どのプログラムが最もよく使われますか。",
                        paragraphs: [
                            "ボーカロイドとウタウを使う回答者がそれぞれ47人と42人で最も多く、続いてSynthesizer Vを使う回答者が36で次に多い選択を受けました。",
                            "また、Deep vocalとCevioがそれぞれ16人と12人の選択を受けており、VOCALINA、NNSVS、NEUTRINOなどを使う回答者も時々存在しました。"
                        ],
                        chartId: "chart13",
                    },
                    {
                        name: "オペレーティングシステム",
                        overall: "最も多い人が使うオペレーティングシステムはWindows10とかWindows11です。",
                        subName: "どの環境で作業しますか。",
                        paragraphs: [
                            "圧倒的に多い回答者は最新バージョンのウィンドウで作業していると答えました。",
                            "残りの10人の回答者は、macOs、iPadOS、Linuxなどを使うと答えました。"
                        ],
                        chartId: "chart14",
                    },
                    {
                        name: "利点",
                        overall: "そのプログラムを使う主な理由はキャラクターの声が好きだからです。",
                        subName: "なぜそのプログラムを使いますか。",
                        paragraphs: [
                            "43人の回答者がキャラクターが好きになってそのプログラムを使いましたと答え、次に便利な使いやすさと優れた合成品質がそれぞれ17人、13人の選択を受けました。",
                            "思ったより多い人がウタウやDeepVocalが無料だから使っていると答えました。"
                        ],
                        chartId: "chart15",
                    },
                    {
                        name: "不便なこと",
                        overall: "自分が使っているプログラムの最も不便なことは音源設定だと答えました。",
                        subName: "何が不便でしたか。",
                        paragraphs: [
                            "41人の回答者がウタウやディープボーカルの音源設定が複雑すぎると答えました。続いてボーカロイドなどの商用プログラムの費用負担が31人の選択を受けました。",
                            "また、母国語をサポートしていないのと複雑なパラメータがそれぞれ23人、22人で後に続いて、関連コミュニティサイトの不在と使用環境の制約がそれぞれ12人、10人で多くの選択を受けました。"
                        ],
                        chartId: "chart16",
                    },
                    {
                        name: "さらに使うプログラム",
                        overall: "今後使うソフトウェアとしてCeVIOとVocaloidが最も注目されています。",
                        subName: "今後使う予定のプログラム",
                        paragraphs: [
                            "CeVIOとボーカロイドがそれぞれ22人、21人と最も多く考慮されており、Synthesizer Vの使用を検討したり、他のツールを追加使う予定がないという回答者がそれぞれ10人で次に多いんでした。",
                            "また、NNSVSやPiapro Studio NT、そしてUTAUを検討している回答者がそれぞれ7人と6人、5人で意味のある数値を見せてくれました。"
                        ],
                        chartId: "chart17",
                    },
                    {
                        name: "理由",
                        overall: "新しいツールに挑戦しようとする理由で、そのソフトウェアだけのキャラクターと新しいソフトウェアを試すことが主な理由に挙げられました。",
                        subName: "もっと使いたい理由は何ですか。",
                        paragraphs: [
                            "主に使用するソフトウェアの選択の理由と同様に、そのソフトウェアだけの排他的なキャラクターが最も主な理由として言及されました。",
                            "また、次に多くの24人の回答者が新しいソフトウェアを試してみたかったと答え、12人の回答者がより良い合成品質のために使うと答えました。"
                        ],
                        chartId: "chart18",
                    },
                ]
            },
            {
                name: "AI in Singing Voice Synthesis",
                paragraphs: [
                    "最新の技術について学びましょう。"
                ],
                subSection: [
                    {
                        name: "AI技術に対する意見",
                        overall: "ほとんどの回答者はAI技術について肯定的な意見を示しました。",
                        subName: "AI テクノロジーの影響",
                        paragraphs: [
                            "65人の回答者が人工知能技術の発展に期待されると答え、11人の回答者はこれがソフトウェアを使いやすくなると答えた。",
                            "しかし、9人の回答者はこれが彼らの成果の価値を落とすことを心配し、3人の回答者をこのために新しい技術具術を学ばなければならないことを心配しました。"
                        ],
                        chartId: "chart19",
                    },
                    {
                        name: "AI技術の経験",
                        overall: "ほとんどの回答者は、AI技術のソフトウェアを使用したことがありますと答えました。",
                        subName: "AI技術の使用経験",
                        paragraphs: [
                            "52人の回答者はSynthesizer VやNNSVS / ENUNUなどのAI技術のソフトウェアを使用したことがあると答え、残りの44人の回答者はそうではないと答えました。",
                            "両側の比率が完全に偏るのではなく、バランスのとれた割合を見せています。"
                        ],
                        chartId: "chart20",
                    },
                    {
                        name: "AI技術の利点",
                        overall: "AI技術が与える最大の利点は歌声合成品質の向上です。",
                        subName: "AI技術が与える有益な点",
                        paragraphs: [
                            "31人の回答者が合成品質の向上を最大のメリットとして挙げた。30人の回答者が少ない労力で優れたクオリティを見せるのができることを利点として述べました。",
                            "また、12人の回答者は使いやすくなることを利点として言及し、さまざまな表現と発音の明確性の増加をそれぞれ10人、7人の回答者が選びました。"
                        ],
                        chartId: "chart21",
                    },
                    {
                        name: "AI技術の欠点",
                        overall: "AI技術のソフトウェアの最大の欠点は増加したコストでした。",
                        subName: "AI技術が与える不便な点",
                        paragraphs: [
                            "23人の回答者が購入コストの増加が最大の欠点であると答え、16人の回答者は発音調整がうまく適用されないのが不便だと答えました。",
                            "また、15人の回答者が動作仕様の増加が不便だと答え、最後に微妙なノイズと合成時間の増加がそれぞれ11人、9人の回答者の選択を受けました。"
                        ],
                        chartId: "chart22",
                    },
                    {
                        name: "クロス言語合成の経験",
                        overall: "ほとんどの回答者がクロス言語合成技術を使った経験がないと答えました。",
                        subName: "クロス言語合成の経験",
                        paragraphs: [
                            "クロス言語合成技術に触れていない回答者が過半数の61人であり、残りの35人の回答者は経験していなかったと答えました。",
                        ],
                        chartId: "chart23",
                    },
                    {
                        name: "クロス言語合成の品質",
                        overall: "ほとんどの回答者がクロス言語合成の品質についてよくわからないと答えました。",
                        subName: "クロス言語合成技術の現住所",
                        paragraphs: [
                            "42人の回答者がよく分からないと答え、40人の回答者が多くの発展が見られると答えました。",
                            "また、2人の回答者はまだ良くないと答えたが、12人の回答者は人間に近づいたと答えました。"
                        ],
                        chartId: "chart24",
                    },
                    {
                        name: "クロス言語合成の欠如",
                        overall: "クロス言語合成の最大の問題としてサポートされている言語が限定的です。",
                        subName: "クロス言語合成の欠如",
                        paragraphs: [
                            "35人の回答者はサポートされている言語が足りないと答え、28人の回答者は特定のソフトウェアでのみ利用可能であると答えました。",
                            "また、18人の回答者は発音がまだ不自然であると答え、残りの15人の回答者は他の項目で知らないと答えました。"
                        ],
                        chartId: "chart25",
                    },
                    {
                        name: "クロス言語合成の必要性",
                        overall: "過半数の回答者はクロス言語合成が必要だと答えました。",
                        subName: "クロス言語合成が必要ですか。",
                        paragraphs: [
                            "クロス言語合成技術が必要だと答えた回答者は57人で過半数を占め、残りの34人の回答者は必須ではないと答えました。"
                        ],
                        chartId: "chart26",
                    },
                    {
                        name: "必要な理由",
                        overall: "ほとんどの回答者はさまざまな言語でコンテンツを作るためにクロス言語合成技術が必要だと答えました。",
                        subName: "その技術が必要な理由",
                        paragraphs: [
                            "23人の回答者は多様な言語を歌唱に使用できると答えました。",
                            "少ない費用で多言語コンテンツの生産と言語特有の表現力を活用できるが、それぞれ回答者15人の選択を受けました。",
                            "しかし、必要ではないと思う回答は17人で2番目に高い数値でした。"
                        ],
                        chartId: "chart27",
                    },
                    {
                        name: "クロス言語合成のオープンソース化",
                        overall: "ほとんどの回答者は、クロス言語合成技術のオープンソース化に肯定的な意思を明らかにしました。",
                        subName: "クロス言語合成のオープンソース化についての意見",
                        paragraphs: [
                            "84人の回答者はいればいいようだと答え、残りの12人の回答者はいなくてもいいと答えました。",
                        ],
                        chartId: "chart28",
                    },
                ]
            },
            {
                name: "Survey Feedback",
                paragraphs: [
                    "アンケートのフィードバックについて学びましょう。"
                ],
                subSection: [
                    {
                        name: "参加ルート",
                        overall: "回答者のアンケート参加経路は次のとおりです。",
                        subName: "",
                        paragraphs: [
                            ""
                        ],
                        chartId: "chart29",
                    },
                    {
                        name: "改善が必要なセクション",
                        overall: "感謝して59人の回答者は改善を必要ではないと答えましたが、残りの項目がすべてバランスのとれた割合を占めているように見え、全体的な設計ミスがあるようです。",
                        subName: "",
                        paragraphs: [
                            ""
                        ],
                        chartId: "chart30",
                    },
                    {
                        name: "詳細な改善点",
                        overall: "以下は、アンケートに必要な改善点についてのコメントのリストです。",
                        subName: "このアンケートの欠如は何ですか。",
                        paragraphs: [
                            "質問をもう少し詳しくまとめると良いと思います。",
                            "クロス言語が何か分かりません。",
                            "多くのソフトウェアが macOS をサポートしていません。",
                            "理由を聞く質問など一部の質問は、単回答より複数の選択肢が優れているのがいいと思います。",
                            "あいまいな英語表現の改善",
                            "ボーカルの種類、スタイル、ジャンルに関する質問も含めてください。",
                            "いくつかの質問に答えるのが少し難しいでした。",
                            "セクション2（非ユーザー）は音声合成に関する質問ではありません。",
                            "わかりやすくするために、誰かに英語を修正して編集してもらうことを頼んでください。",
                            "何も完璧なことはない。",
                            "質問の文章がおかしい。",
                            "その他の質問については、「該当なし」または「不明」オプションを含めることを検討してください。",
                            "質問は以前の回答に頼る必要があります。"
                        ],
                        chartId: ""
                    },
                    {
                        name: "その他",
                        overall: "以下のメッセージは、改善されたいと思う他のことや研究者に言いたいことです。",
                        subName: "えーと...",
                        paragraphs: [
                            "韓国にもCeVIO AIのように一般人も自由に使えるAIテキスト音声変換ソフトウェアと要件があれば良いようです。",
                            "プロジェクトが良くなるように。",
                            "よく書かれたチュートリアルがあれば、新しいユーザーに役立つと思います。",
                            "メリークリスマス！",
                            "音声合成で会話/ラップができればいいようです。",
                            "この部分に良い進歩がありますように。",
                            "ボーカロイド合成が遅すぎます。しかし、著しく改善すれば良いと思います。",
                            "今後クローズドソース開発や論文の形で発表できる結果が出ることを期待します。",
                            "私の考えには、多くの制御権を持って自分だけの歌手を作ってカスタマイズすることができる歌唱合成ソフトウェアがもっと素敵だと思います。",
                        ],
                        chartId: ""
                    }
                ]
            },
        ],
        footer: {
            h1: "読んでくれてありがとう。",
            h2: "翻訳者：キューティージニー",
            authors: [
                "crlotwhite"
            ],
            p: "新しい翻訳を追加するか、翻訳の問題を報告するには以下のGitHubリポジトリからまたはPRを作成してください。"
        },
        chart: {
            common: {
                label: "回答数",
            },
            chart1: {
                question: "あなたの性別は何ですか。",
                labels: [
                    "男性",
                    "女性",
                    "その他",
                    "性別を明らかにしたくない。"
                ]
            },
            chart2: {
                question: "好きな歌唱合成エンジンは何ですか？ （三つまで）",
                labels: [
                    "Vocaloid",
                    "CeVIO/CeVIO AI/VoiSona",
                    "Synthesizer V",
                    "UTAU/OpenUTAU",
                    "NEUTRINO",
                    "NNSVS/ENUNU",
                    "VOCALINA",
                    "DeepVocal",
                    "Piapro Studio NT",
                    "ACE Studio"
                ]
            },
            chart3: {
                question: "どのように触れましたか。",
                labels: [
                    "動画プラットフォームの推奨アルゴリズム（Youtube、NicoNico、bilibiliなど）。",
                    "インターネット検索",
                    "友達の紹介",
                    "ゲームの中のコンテンツ（背景音楽など）",
                    "ソーシャルメディア（Facebook、Twitter、Instagramなど）",
                    "その他"
                ]
            },
            chart4: {
                question: "最も好きなコンテンツタイプは何ですか。（2つまで）",
                labels: [
                    "歌（オリジナル、カバー曲など）",
                    "ボーカルカバー（Utaiteなど)",
                    "メディアミックス（楽曲ベースのオリジナルコンテンツ；カゲロウプロジェクトなど）",
                    "同人漫画（初音ミックスなど）",
                    "3Dアニメーション（MMDなど）",
                    "ゲーム（プロジェクト歌姫シリーズなど）",
                    "その他",
                ]
            },
            chart5: {
                question: "そのコンテンツに触れた期間はどれくらいですか。",
                labels: [
                    "1年未満",
                    "年～3年",
                    "4年～6年",
                    "7年～9年",
                    "10年以上"
                ]
            },
            chart6: {
                question: "そのコンテンツが好きな理由は何ですか。",
                labels: [
                    "魅力的なキャラクター",
                    "該当音声の音色",
                    "該当コンテンツタイプ自体に対する興味（3Dアニメーなど）",
                    "該当技術への関心",
                    "その他",
                ]
            },
            chart7: {
                question: "歌唱合成エンジンを使った経験がありますか。",
                labels: [
                    "はい",
                    "いいえ"
                ]
            },
            chart8: {
                question: "使用できなかった理由は何ですか。",
                labels: [
                    "高価なソフトウェアコスト",
                    "音楽的知識の必要性",
                    "使用するほど興味がない",
                    "在庫なし"
                ]
            },
            chart9: {
                question: "その普及に必要な改善点は何だと思いますか。",
                labels: [
                    "より直感的な使いやすさ（音楽的な知識なしで利用可能）",
                    "コンテンツに対する積極的な広報",
                    "より安い価格",
                    "追加在庫"
                ]
            },
            chart10: {
                question: "歌唱合成ソフトウェアをどれくらい使用しましたか。",
                labels: [
                    "1年未満",
                    "1年～3年",
                    "4年～6年",
                    "7年～9年",
                    "10年以上"
                ]
            },
            chart11: {
                question: "歌唱合成エンジンをどのように学びましたか。",
                labels: [
                    "まず使った師匠を通して",
                    "公式マニュアルを通して",
                    "すでに持っている音楽的知識を通して",
                    "オンラインビデオ講義を通して",
                    "直接使ってみながら",
                    "インターネット投稿を通じて"
                ]
            },
            chart12: {
                question: "歌唱合成エンジンの使用レベルはどうなりますか",
                labels: [
                    "初級",
                    "中級",
                    "高級",
                    "専門家",
                ]
            },
            chart13: {
                question: "主に使用する歌唱合成エンジンとは何ですか。 （3つまで）",
                labels: [
                    "Vocaloid",
                    "CeVIO/CeVIO AI/VoiSona",
                    "Synthesizer V",
                    "UTAU/OpenUTAU",
                    "NEUTRINO",
                    "NNSVS/ENUNU",
                    "VOCALINA",
                    "DeepVocal",
                    "Piapro Studio NT",
                    "ACE Studio",
                    "その他",
                ]
            },
            chart14: {
                question: "ご使用のオペレーティングシステムは何ですか。",
                labels: [
                    "Windows 10/11",
                    "別の Windows",
                    "Linux (Ubuntu, Fedora, e.t.c)",
                    "macOS/iOS/iPadOs",
                ]
            },
            chart15: {
                question: "それを使用する主な理由は何ですか",
                labels: [
                    "キャラクターや声が気に入って",
                    "使いやすい",
                    "DAWとの連携が楽で",
                    "与えられた内蔵エフェクトが素晴らしいから",
                    "合成品質が良くて",
                    "好きなアーティストが使って",
                    "無料だから",
                    "その他"
                ]
            },
            chart16: {
                question: "使用するソフトウェアの不便は何ですか。 （3つまで）",
                labels: [
                    "複雑なパラメータ",
                    "複雑な音源設定(UTAU, DeepVocalなど)",
                    "高価",
                    "使用環境制約（Windowsオペレーティングシステムのみ使用可能など）",
                    "母国語をサポートしていない",
                    "関連コミュニティなし",
                    "技術的な要件が高い（ハードウェア仕様）",
                    "インターネット接続必須",
                    "その他"
                ]
            },
            chart17: {
                question: "追加として使用したい、または興味を持っている歌唱合成エンジンはありますか。",
                labels: [
                    "Vocaloid",
                    "CeVIO/CeVIO AI/VoiSona",
                    "Synthesizer V",
                    "UTAU/OpenUTAU",
                    "NNSVS/ENUNU",
                    "DeepVocal",
                    "Piapro Studio NT",
                    "ACE Studio",
                    "他のエンジンを使うつもりはない",
                    "その他",
                ]
            },
            chart18: {
                question: "それを使う理由は何ですか。",
                labels: [
                    "より良い音声合成品質",
                    "同じキャラクターが別のエンジンで発売される",
                    "新しいエンジンを試してみたい",
                    "従来に使用していたエンジンより便利だから",
                    "協力者が使っているエンジンなので",
                    "あのエンジンだけのキャラクターを使いたくて",
                    "その他",
                ]
            },
            chart19: {
                question: "歌唱合成エンジンにおけるAI技術についてどう思いますか。",
                labels: [
                    "当該技術の発展が期待される。",
                    "新しい技術を学ばなければならないことを心配する。",
                    "入門するほうが良くなる。",
                    "自分の成果物の価値が落ちるか心配になる。",
                    "その他",
                ]
            },
            chart20: {
                question: "AI技術を使った歌唱合成システムを使った経験がありますか。",
                labels: [
                    "はい",
                    "いいえ"
                ]
            },
            chart21: {
                question: "AI技術を使用したエンジンの最大の利点は何だと思いますか。",
                labels: [
                    "歌唱合成品質が上がった",
                    "少ない努力で優れたクオリティの結果を生み出す",
                    "使いやすい",
                    "様々な表現が可能になる",
                    "発音が明確になる",
                    "その他",
                ]
            },
            chart22: {
                question: "AI技術を使用したエンジンの最大の欠点は何だと思いますか。",
                labels: [
                    "購入費用が増加しました。",
                    "ハードウェア仕様が高まる。",
                    "発音調整が良くない。",
                    "微妙なノイズが発生する。",
                    "合成に時間がかかる。",
                    "よく分からない",
                    "その他",
                ]
            },
            chart23: {
                question: "クロス言語合成（Cross-lingual Synthesis）を使った経験はありますか。",
                labels: [
                    "はい",
                    "いいえ"
                ]
            },
            chart24: {
                question: "クロス言語合成（Cross-lingual Synthesis）の品質はどの程度だと思いますか。",
                labels: [
                    "まだ良くない。",
                    "特に分からない。",
                    "多くの発展が見られる。",
                    "人間に近づいた。",
                ]
            },
            chart25: {
                question: "クロス言語合成（Cross-lingual Synthesis）で不足していると感じる点は何ですか。",
                labels: [
                    "まだ不自然な発音",
                    "特定のソフトウェアのみ使用可能",
                    "サポートされる言語が少ない",
                    "よく分からない",
                    "その他",
                ]
            },
            chart26: {
                question: "クロス言語合成（Cross-lingual Synthesis）が歌唱合成エンジンに必ず必要だと思いますか。",
                labels: [
                    "はい",
                    "いいえ"
                ]
            },
            chart27: {
                question: "必要だと思ったら、その理由は何ですか。",
                labels: [
                    "さまざまな言語を使用できます。",
                    "少ない費用で多言語コンテンツを生成できます。",
                    "その言語特有の表現力を活かすことができます。",
                    "要らないと思います。",
                    "その他",
                ]
            },
            chart28: {
                question: "この技術のオープンソース化についてどう思いますか。",
                labels: [
                    "あればいいと思います。",
                    "無くてもいいです。"
                ]
            },
            chart29: {
                question: "どのコミュニティを通じて参加しましたか。",
                labels: [
                    "Discord",
                    "Utau forum",
                    "ボーカロイド帝国",
                    "Vocaloid Animo",
                    "UTAUユーザーの会",
                    "Synthesizer V Forum",
                    "Twitter",
                    "ディープボーカル研究所",
                    "reddit"
                ]
            },
            chart30: {
                question: "改善が必要なセクションは何だと思いますか。",
                labels: [
                    "1. User Trends",
                    "2. Non singing voice synthesis software user",
                    "3. Experience with singing voice synthesis software",
                    "4. AI (Artificial Intelligent) Singing Voice Synthesis",
                    "改善が必要なセクションは要らない。",
                ]
            },
        },
        nav: {
            section: [
                "Top",
                "About",
                "User Trends",
                "Non Users",
                "Expert Users",
                "AI Technology",
                "Feedbacks",
            ],
            subSection: {
                s1: [
                    "性別",
                    "最も好きなソフトウェア",
                    "入門ルート",
                    "最も好むコンテンツ",
                    "期間",
                    "理由",
                    "プログラム使用経験"
                ],
                s2: [
                    "難しさ",
                    "改善事項"
                ],
                s3: [
                    "使用キャリア",
                    "学習方法",
                    "プロフェッショナル",
                    "よく使うプログラム",
                    "Operation System",
                    "利点",
                    "不快な点",
                    "追加として使用するプログラム",
                    "理由"
                ],
                s4: [
                    "意見 (AI)",
                    "経験 (AI)",
                    "利点 (AI)",
                    "不快な点 (AI)",
                    "経験 (CL)",
                    "品質 (CL)",
                    "不足点 (CL)",
                    "必要性 (CL)",
                    "理由 (CL)",
                    "オープンソース化 (CL)"
                ],
                s5: [
                    "参加ルート",
                    "改善が必要なセクション",
                    "詳細な改善",
                    "その他"
                ]
            },
            language: {
                name: "言語設定",
                langName: [
                    "英語",
                    "韓国語",
                    "日本語"
                ],
            }
        }
    }
}