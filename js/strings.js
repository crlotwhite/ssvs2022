const strings = {
    en: {
        headerText: "In December 2022, 96 respondents from various communities around the world shared their views on Vocaloid fandom tendencies, software experience, and artificial intelligence technology.",
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
                    "Let's get to know the Vocaloid fandom."
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
                        name: "The favourite software",
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
                        overall: "Most respondents were introduced to the fandom through Internet searches or video platform recommendation algorithms.",
                        subName: "How to know it?",
                        paragraphs: [
                            "In addition, there were many respondents who were introduced through friends, through games such as Project Diva, or through social media such as Facebook and Twitter.",
                        ],
                        chartId: "chart3",
                    },
                    {
                        name: "Most Favorite Content",
                        overall: "The most preferred content by most respondents was songs.",
                        subName: "Which content is the most preferred?",
                        paragraphs: [
                            "Vocal covers like Utaite and media mix contents are also highly preferred.",
                            "And there was one respondent who preferred games and 3D animations that are not directly related to songs."
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
                        overall: "The reason most respondents chose it was the timbre of the voice.",
                        subName: "Why you have liked it?",
                        paragraphs: [
                            "The next most people answered that they were interested in the technology by a narrow margin.",
                            "Also, interest in attractive characters and the type of content itself seem to have contributed to many people entering the content."
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
        ],
        chart: {
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
                label: "The number of responses",
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
                label: "The number of responses",
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
        }
    },
    jp: {

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
    }
}