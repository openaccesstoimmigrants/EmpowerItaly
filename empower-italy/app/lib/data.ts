//
// Import Heros images
//
import hero from "@/public/hero.png"
import workflow from "@/public/workflow.jpg"
import documentation from "@/public/documentation.jpg"
import datasets from "@/public/datasets.jpg"


//
// HEADER LINKS
//

export const HEADER_LINKS = [
    {
        name: "Workflow",
        href: "/workflow"
    },
    {
        name: "Documentation",
        href: "/documentation"
    },
    {
        name: "Datasets",
        href: "/datasets"
    },
    {
        name: "Info",
        href: "/info"
    }
];

//
// HERO DATA
//

export const HERO_DATA = [
    {
        title: "Exploring Immigrants and Italians disparities in the labour market",
        paragraph: "The project addresses the potential difference in unemployment rates between immigrants and native Italians. It allows to investigate the labor market dynamics and assess whether there might be disparities in employment opportunities for immigrants.",
        imageSrc: hero,
        payoff: "An open data project",
        layoutOrder: true
    },
    {
        title: "EmpowerItaly's Project Journey: Unveiling the Methodological Steps",
        paragraph: "Embark on the journey of EmpowerItaly's project methodology in our Workflow section. Here, we meticulously outline the systematic steps and processes undertaken to realize the project's objectives. From initial ideation to data collection, analysis, ethical considerations, and eventual conclusions, this section unveils the roadmap followed, offering insight into the structured approach employed to comprehend Italy's employment landscape comprehensively.",
        imageSrc: workflow,
        payoff: "Our workflow",
        layoutOrder: false
    },
    {
        title: "Documentation: Insights into Italy's Workforce Dynamics",
        paragraph: "Welcome to the project's documentation. Our documentation covers a diverse array of topics, including an insightful introduction, exploration of open data scenarios, quality and legal analyses, ethical considerations, technical insights, sustainability measures, visualization techniques, RDF metadata assertions, and our work methodology. Delve into each section to gain a profound understanding of our project's objectives, methodology, and conclusions, fostering a deeper comprehension of Italy's employment landscape.",
        imageSrc: documentation,
        payoff: "Project's information",
        layoutOrder: true
    },
    {
        title: "Dataset Collection: Unveiling Insights into Italy's Workforce Diversity",
        paragraph: "Welcome to EmpowerItaly's Dataset Collection, where we showcase a comprehensive array of cards representing each dataset utilized within our project. These cards provide in-depth information and relevant details regarding the datasets employed, including their origins, sources, formats, and other pertinent metadata. Dive into this section to explore the rich tapestry of data that forms the foundation of our research, shedding light on various aspects of Italy's diverse workforce.",
        imageSrc: datasets,
        payoff: "Our sources",
        layoutOrder: false
    },
] as const;

//
// DOCUMENTATION LINKS
//

export const DOCUMENTATION_LINKS = [
    {
        name: "1. Introduction",
        href: "#Introduction"
    },
    {
        name: "2. Scenario",
        href: "#Scenario"
    },
    {
        name: "3. Original datasets and mashup datasets",
        href: "#Datasets"
    },
    {
        name: "4. Quality Analysis of the datasets",
        href: "#Quality"
    },
    {
        name: "5. Legal Analysis",
        href: "#Legal"
    },
    {
        name: "6. Ethics Analysis",
        href: "#Ethics"
    },
    {
        name: "7. Technical Analysis",
        href: "#Technical"
    },
    {
        name: "8. Sustainability of updating the datasets over time",
        href: "#Sustainability"
    },
    {
        name: "9. Visualization",
        href: "#Visualization"
    },
    {
        name: "10. RDF Assertation of Metadata",
        href: "#RDF"
    },
    {
        name: "11. Our Work Praxis",
        href: "#Praxis"
    },
    {
        name: "12. Conclusions",
        href: "#Conclusions"
    }
];

//
// DATASETS METADATA
//

export const DATASETS_OBJ = [
    {
        id: "D1",
        format: "SDMXML",
        title: "Wonder Woman",
        source: "Diana Prince",
        license: "Creative Commons License – Attribution – 3.0 (CC BY) Istat Legal Notice",
        license_link: "www.link.link",
        metadata: "Provided in SDMXt",
        link_dataset: "www.link.link",
        description: "Aliquam massa iaculis in sit felis. Diam bibendum fames lectus odio porttitor consectetur purus donec."
    },
    {
        id: "D2",
        format: "SDMXML",
        title: "Wonder Woman",
        source: "Diana Prince",
        license: "Creative Commons License – Attribution – 3.0 (CC BY) Istat Legal Notice",
        license_link: "www.link.link",
        metadata: "Provided in SDMXt",
        link_dataset: "www.link.link",
        description: "Aliquam massa iaculis in sit felis. Diam bibendum fames lectus odio porttitor consectetur purus donec."
    },
    {
        id: "D3",
        format: "CSV",
        title: "Wonder Woman",
        source: "Diana Prince",
        license: "Creative Commons License – Attribution – 3.0 (CC BY) Istat Legal Notice",
        license_link: "www.link.link",
        metadata: "Provided in SDMXt",
        link_dataset: "www.link.link",
        description: "Aliquam massa iaculis in sit felis. Diam bibendum fames lectus odio porttitor consectetur purus donec."
    },
    {
        id: "D4",
        format: "SDMXML",
        title: "Wonder Woman",
        source: "Diana Prince",
        license: "Creative Commons License – Attribution – 3.0 (CC BY) Istat Legal Notice",
        license_link: "www.link.link",
        metadata: "Provided in SDMXt",
        link_dataset: "www.link.link",
        description: "Aliquam massa iaculis in sit felis. Diam bibendum fames lectus odio porttitor consectetur purus donec."
    }
] as const;