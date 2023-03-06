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
                    "Analyzes opinions on Ai technology and cross-lingual synthesis techniques.",
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
                            "Thirty-two respondents said they liked the character's voice, followed closely by 31 who said they liked it because they were intrigued by the technology.",
                            "There are also significant numbers of respondents who like the charming characters themselves or are interested in the content type itself, at 13 and 12, respectively."
                        ],
                        chartId: "chart6",
                    },
                    {
                        name: "Using Experience",
                        overall: "Almost all respondents have experience using related software.",
                        subName: "How to know it?",
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
                    "Let's talk about the barriers to entry for the software."
                ],
                subSection: [
                    {
                        name: "Work Experience",
                        overall: "Most respondents had three years or less of experience.",
                        subName: "Years of using the software",
                        paragraphs: [
                            "Sixty-one respondents reported three years or less of experience, followed by 13 respondents with four to six years of experience.",
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
                            "Forty-three respondents said they used the software because they liked the characters, followed by ease of use and good synthesis quality (17 and 13, respectively).",
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
                    "Let's talk about the new technologies."
                ],
                subSection: [
                    {
                        name: "Opinion about AI",
                        overall: "Most respondents had a positive opinion of Ai technology.",
                        subName: "The influence of Ai technology",
                        paragraphs: [
                            "65 respondents said they were excited about advances in artificial intelligence technology, and 11 said it would make their software easier to use.",
                            "However, 9 respondents worried that this would devalue their output, and 3 respondents worried that they would have to learn new skills to use the software."
                        ],
                        chartId: "chart19",
                    },
                    {
                        name: "Experience of AI Technology",
                        overall: "Most respondents said they had used software with Ai technology.",
                        subName: "Experience using Ai technologies",
                        paragraphs: [
                            "52 respondents said they had experience with software that used Ai technology, such as Synthesizer V or NNSVS/ENUNU, while the remaining 44 respondents said they did not.",
                            "Rather than being completely skewed to one side or the other, the proportions were balanced."
                        ],
                        chartId: "chart20",
                    },
                    {
                        name: "Advantages of AI Technology",
                        overall: "The biggest benefit of Ai technology is the improvement in vocal synthesis quality.",
                        subName: "What are the advantages of Ai technology?",
                        paragraphs: [
                            "31 respondents said that improved compositing quality was the biggest benefit, and 30 respondents said that being able to showcase great quality with less effort was an advantage.",
                            "In addition, 12 respondents said it was easier to use, while 10 and 7 respondents selected the increased clarity of pronunciations and various expressions, respectively."
                        ],
                        chartId: "chart21",
                    },
                    {
                        name: "Disadvantages of AI Technology",
                        overall: "The major drawback of software using Ai technology was the increased cost.",
                        subName: "What are the inconveniences of Ai technology?",
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
            h1: "Thank you for reading",
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
                    "CeVIO/CeVIO Ai/VoiSona",
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
                    "CeVIO/CeVIO Ai/VoiSona",
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
                    "CeVIO/CeVIO Ai/VoiSona",
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
                    "Yes",
                    "No"
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
                "Ai Technology",
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
                    "Japanese"
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
                    "Learning to code online increased from 60% to 70% year over year.",
                    "Respondents older than 45 years are most likely to have learned from books, while younger ones are learning online. Younger (under 18) respondents rely most on online resources and are most likely to have learned from online courses or certifications."
                ]
            },
            {
                name: "User Trends",
                paragraphs: [
                    "Learning to code online increased from 60% to 70% year over year.",
                    "Respondents older than 45 years are most likely to have learned from books, while younger ones are learning online. Younger (under 18) respondents rely most on online resources and are most likely to have learned from online courses or certifications."
                ]
            },
            {
                name: "User Trends",
                paragraphs: [
                    "Learning to code online increased from 60% to 70% year over year.",
                    "Respondents older than 45 years are most likely to have learned from books, while younger ones are learning online. Younger (under 18) respondents rely most on online resources and are most likely to have learned from online courses or certifications."
                ]
            },
            {
                name: "User Trends",
                paragraphs: [
                    "Learning to code online increased from 60% to 70% year over year.",
                    "Respondents older than 45 years are most likely to have learned from books, while younger ones are learning online. Younger (under 18) respondents rely most on online resources and are most likely to have learned from online courses or certifications."
                ]
            },
            {
                name: "User Trends",
                paragraphs: [
                    "Learning to code online increased from 60% to 70% year over year.",
                    "Respondents older than 45 years are most likely to have learned from books, while younger ones are learning online. Younger (under 18) respondents rely most on online resources and are most likely to have learned from online courses or certifications."
                ]
            }
        ],
        section: [
            {
                name: "Overview",
                paragraphs: [
                    "The questions we ask in our annual survey help us improve the Stack Overflow community and the platform that serves them.",
                    "The challenge and opportunity for us is to continue expanding and improving our ability to help all developers and to make them feel welcome in our community.",
                    "Read on for more great insights about the attitudes, tools, and environments that are shaping the art and practice of software today."
                ],
            },
            {
                name: "User Trends",
                paragraphs: [
                    "보컬로이드 팬덤에 대해서 알아보자"
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
                        overall: "명불허전 보컬로이드가 가장 많은 선택을 받았다.",
                        subName: "어떤 것이 가장 선호되는가?",
                        paragraphs: [
                            "Synthesizer V가 두 번째로 많은 선택을 받았으며, 그다음으로 UTAU/OpenUTAU가 51명의 선택을 받으며, 여전히 인기가 많음을 보여주고 있다.",
                            "또한 CeVIO/CeVIO AI/Voisona도 29명의 선택을 받았으며, 마지막으로 DeppVocal2 또한 16명의 선택을 받으며 영향력을 보여주었다."
                        ],
                        chartId: "chart2",
                    },
                    
                ]
            },
        ],
        chart: {
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
                label: "응답수",
                labels: [
                    "Vocaloid",
                    "CeVIO/CeVIO Ai/VoiSona",
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
                question: "좋아하는 가창 합성 엔진이 무엇입니까? (3개까지)",
                label: "응답수",
                labels: [
                    "Vocaloid",
                    "CeVIO/CeVIO Ai/VoiSona",
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
            chart4: {
                question: "좋아하는 가창 합성 엔진이 무엇입니까? (3개까지)",
                label: "응답수",
                labels: [
                    "Vocaloid",
                    "CeVIO/CeVIO Ai/VoiSona",
                    "Synthesizer V",
                    "UTAU/OpenUTAU",
                    "NEUTRINO",
                    "NNSVS/ENUNU",
                    "VOCALINA",
                    "DeepVocal",
                    "Piapro Studio NT",
                    "ACE Studio"
                ]
            }
        }
    },
    jp: {
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
                    "Analyzes opinions on Ai technology and cross-lingual synthesis techniques.",
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
                            "Thirty-two respondents said they liked the character's voice, followed closely by 31 who said they liked it because they were intrigued by the technology.",
                            "There are also significant numbers of respondents who like the charming characters themselves or are interested in the content type itself, at 13 and 12, respectively."
                        ],
                        chartId: "chart6",
                    },
                    {
                        name: "Using Experience",
                        overall: "Almost all respondents have experience using related software.",
                        subName: "How to know it?",
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
                    "Let's talk about the barriers to entry for the software."
                ],
                subSection: [
                    {
                        name: "Work Experience",
                        overall: "Most respondents had three years or less of experience.",
                        subName: "Years of using the software",
                        paragraphs: [
                            "Sixty-one respondents reported three years or less of experience, followed by 13 respondents with four to six years of experience.",
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
                            "Forty-three respondents said they used the software because they liked the characters, followed by ease of use and good synthesis quality (17 and 13, respectively).",
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
                    "Let's talk about the new technologies."
                ],
                subSection: [
                    {
                        name: "Opinion about AI",
                        overall: "Most respondents had a positive opinion of Ai technology.",
                        subName: "The influence of Ai technology",
                        paragraphs: [
                            "65 respondents said they were excited about advances in artificial intelligence technology, and 11 said it would make their software easier to use.",
                            "However, 9 respondents worried that this would devalue their output, and 3 respondents worried that they would have to learn new skills to use the software."
                        ],
                        chartId: "chart19",
                    },
                    {
                        name: "Experience of AI Technology",
                        overall: "Most respondents said they had used software with Ai technology.",
                        subName: "Experience using Ai technologies",
                        paragraphs: [
                            "52 respondents said they had experience with software that used Ai technology, such as Synthesizer V or NNSVS/ENUNU, while the remaining 44 respondents said they did not.",
                            "Rather than being completely skewed to one side or the other, the proportions were balanced."
                        ],
                        chartId: "chart20",
                    },
                    {
                        name: "Advantages of AI Technology",
                        overall: "The biggest benefit of Ai technology is the improvement in vocal synthesis quality.",
                        subName: "What are the advantages of Ai technology?",
                        paragraphs: [
                            "31 respondents said that improved compositing quality was the biggest benefit, and 30 respondents said that being able to showcase great quality with less effort was an advantage.",
                            "In addition, 12 respondents said it was easier to use, while 10 and 7 respondents selected the increased clarity of pronunciations and various expressions, respectively."
                        ],
                        chartId: "chart21",
                    },
                    {
                        name: "Disadvantages of AI Technology",
                        overall: "The major drawback of software using Ai technology was the increased cost.",
                        subName: "What are the inconveniences of Ai technology?",
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
            h1: "Thank you for reading",
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
                    "CeVIO/CeVIO Ai/VoiSona",
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
                    "CeVIO/CeVIO Ai/VoiSona",
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
                    "CeVIO/CeVIO Ai/VoiSona",
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
                    "Yes",
                    "No"
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
                "Ai Technology",
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
                    "Japanese"
                ],
            }
        }
    },
}