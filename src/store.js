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
    ],
    valueData: [
        {
            valueImg: "house-chimney",
            valueColor: "#4EA4A5",
            valueTitle: "Great Services",
            valueText: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia"
        },
        {
            valueImg: "gear",
            valueColor: "#4E6DA5",
            valueTitle: "Highest Standards",
            valueText: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia"
        },
        {
            valueImg: "users",
            valueColor: "#F6722A",
            valueTitle: "Professional Team",
            valueText: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia"
        },
        {
            valueImg: "lightbulb",
            valueColor: "#A7CF47",
            valueTitle: "Creative Solutions",
            valueText: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia"
        },
    ],
    sliderData: [
        {
            sliderImg: "../assets/img/home-parallax-144609983.jpg",
            sliderPpl: "../assets/img/testimonial1.jpg",
            sliderText: "No man but feels more of a man in the world if he have but a bit ground than he call his own. However small it is on the surface, it is four thousand miles deep; and that is a very handsome property",
            sliderName: "JOANNA DOE  NEW HOME OWNER"
        },
        // {
        //     sliderImg: "../assets/img/home-slider-62528242.jpg",
        //     sliderPpl: "../assets/img/testimonial2.jpg",
        //     sliderText: "No man but feels more of a man in the world if he have but a bit ground than he call his own. However small it is on the surface, it is four thousand miles deep; and that is a very handsome property",
        //     sliderName: "HARRY DOE  NEW HOME OWNER"
        // },
    ],
    newsData: [
        {
            newsImg: "../assets/img/project1-small.jpg",
            newsTitle: "Redeveloping Florida's Remote Southern Coast",
            newsDate: "December 7th, 2015",
            newsText: "Tecnology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique et enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus thoncus sed."
        },
        {
            newsImg: "../assets/img/project2-small.jpg",
            newsTitle: "How We Menage Large Construction Projects",
            newsDate: "December 7th, 2015",
            newsText: "Tecnology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique et enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus thoncus sed."
        },
        {
            newsImg: "../assets/img/project3-small.jpg",
            newsTitle: "Future proofing a modern home",
            newsDate: "December 6th, 2015",
            newsText: "Tecnology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique et enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus thoncus sed."
        },
    ],
    partnersData: [
        {
            partnersImg: "../assets/img/partner-1.png"
        },
        {
            partnersImg: "../assets/img/partner-2.png"
        },
        {
            partnersImg: "../assets/img/partner-3.png"
        },
        {
            partnersImg: "../assets/img/partner-4.png"
        },
        {
            partnersImg: "../assets/img/partner-5.png"
        },
    ],
    infoData: [
        {
            infoIcon: "fa-solid fa-globe",
            infoText: "Corporate Location 1600 Amphitheatre Parkway London WC1 1BA "
        },
        {
            infoIcon: "fa-solid fa-house-chimney",
            infoText: "Residential Location 9521 Broadsberry Avenue Paddington RC7 gZA"
        },
        {
            infoIcon: "fa-solid fa-phone-flip",
            infoText: "1.800.458.556 / 1.800.532.2112"
        },
        {
            infoIcon: "fa-regular fa-envelope",
            infoText: "info@your-domain.com"
        },
        {
            infoIcon: "fa-regular fa-clock",
            infoText: "Monday - Friday: 9:00 AM - 6:00 PM"
        },
        {
            infoIcon: "fa-regular fa-clock",
            infoText: "Saturday - Sunday: 9:00 AM - 12:00 PM"
        },
    ]

}) 