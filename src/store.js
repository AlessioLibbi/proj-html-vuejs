import { reactive } from "vue";
export const store = reactive({
    links: ["HOME", "ABOUT", "SERVICES", "WORK", "ARTICLES", "GET QUOTE"],
    explainCard: [
        {
            cardImg: "building",
            cardTitle: "Buildings",
            cardText: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur"
        },
        {
            cardImg: "arrows-rotate",
            cardTitle: "Renovate",
            cardText: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur"
        },
        {
            cardImg: "house-chimney",
            cardTitle: "Construct",
            cardText: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur"
        },
        {
            cardImg: "truck",
            cardTitle: "Exclusive",
            cardText: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur"
        }
    ],
    numberGraph: [
        {
            graphImg: "suitcase",
            graphNumber: "3534",
            graphName: "PLANNING APPLICATIONS"
        },
        {
            graphImg: "building",
            graphNumber: "896",
            graphName: "COMPLETED PROJECTS"
        },
        {
            graphImg: "users",
            graphNumber: "172",
            graphName: "TRAINED PROFESSIONALS"
        },
        {
            graphImg: "globe",
            graphNumber: "19",
            graphName: "INTERNATIONAL OFFICES"
        },
    ]
}) 