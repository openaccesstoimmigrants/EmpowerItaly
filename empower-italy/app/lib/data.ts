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
        title: "EmpowerItaly: Exploring Immigrants and Italians disparities in the labour market",
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
        id: "D1(a)",
        format: "SDMX-ML",
        title: "Resident foreigners on 1st January",
        source: "IstatData",
        license: "CC BY 3.0",
        license_link: "https://creativecommons.org/licenses/by/3.0",
        metadata: "Provided in SDMX",
        metadata_link: "",
        link_dataset: "https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_FOREIGNIM/DCIS_POPSTRRES1/IT1,29_7_DF_DCIS_POPSTRRES1_1,1.0",
        description: ""
    },
    {
        id: "D1(b)",
        format: "SDMX-ML",
        title: "Estimated resident population - Years 2001-2019",
        source: "IstatData",
        license: "CC BY 3.0",
        license_link: "https://creativecommons.org/licenses/by/3.0",
        metadata: "Provided in SDMX",
        metadata_link: "",
        link_dataset: "https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_INTCENSPOP/DCIS_RICPOPRES2011/IT1,164_164_DF_DCIS_RICPOPRES2011_1,1.0",
        description: ""
    },
    {
        id: "D2",
        format: "SDMX-ML",
        title: "Country of citizenship",
        source: "IstatData",
        license: "CC BY 3.0",
        license_link: "https://creativecommons.org/licenses/by/3.0",
        metadata: "Provided in SDMX",
        metadata_link: "",
        link_dataset: "https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_FOREIGNIM/DCIS_POPSTRCIT1/IT1,29_317_DF_DCIS_POPSTRCIT1_1,1.0",
        description: ""
    },
    {
        id: "D3",
        format: "SDMX-ML",
        title: "Resident population on 1st January",
        source: "IstatData",
        license: "CC BY 3.0",
        license_link: "https://creativecommons.org/licenses/by/3.0",
        metadata: "Provided in SDMX",
        metadata_link: "",
        link_dataset: "https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_POPULATION/DCIS_POPRES1/IT1,22_289_DF_DCIS_POPRES1_1,1.0",
        description: ""
    },
    {
        id: "D4",
        format: "CSV",
        title: "Population by educational attainment level, sex, age, country of birth and NUTS 2 regions",
        source: "EUROSTAT",
        license: "CC BY 4.0",
        license_link: "https://creativecommons.org/licenses/by/4.0/",
        metadata: "Provided (see metadata)",
        metadata_link: "https://ec.europa.eu/eurostat/cache/metadata/en/edat1_esms.htm",
        link_dataset: "https://ec.europa.eu/eurostat/databrowser/view/edat_lfs_9917__custom_8389265/default/table?lang=en",
        description: ""
    },
    {
        id: "D5",
        format: "CSV",
        title: "Highest level of education attained, ctizenship",
        source: "ISTAT",
        license: "CC BY 3.0",
        license_link: "https://creativecommons.org/licenses/by/3.0",
        metadata: "Not provided",
        metadata_link: "", 
        link_dataset: "http://dati.istat.it//Index.aspx?QueryId=64369",
        description: ""
    },
    {
        id: "D6",
        format: "SDMX-ML",
        title: "Employment (thousands) - Nace 2007 - professional status, citizenship",
        source: "IstatData",
        license: "CC BY 3.0",
        license_link: "https://creativecommons.org/licenses/by/3.0",
        metadata: "Provided in SDMX",
        metadata_link: "",
        link_dataset: "https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_POPULATION/DCIS_POPRES1/IT1,22_289_DF_DCIS_POPRES1_1,1.0",
        description: ""
    },
    {
        id: "D7",
        format: "CSV",
        title: "Unemployment Rate - Highest level of education attained, citizenship",
        source: "ISTAT",
        license: "CC BY 3.0",
        license_link: "https://creativecommons.org/licenses/by/3.0/",
        metadata: "Not provided",
        metadata_link: "",
        link_dataset: "https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,Z0500LAB,1.0/LAB_OFFER/LAB_OFF_UNEMPLOY/DCCV_TAXDISOCCU1/IT1,151_914_DF_DCCV_TAXDISOCCU1_3,1.0",
        description: ""
    },
    {
        id: "MD1",
        format: "JSON",
        title: "Activity rate and Unemployment rate by level of education",
        source: "EmpowerItaly",
        license: "CC BY 4.0",
        license_link: "https://creativecommons.org/licenses/by/4.0/",
        metadata: "",
        metadata_link: "",
        link_dataset: "https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/MASHUP/mashup.json",
        description: ""
    }
] as const;