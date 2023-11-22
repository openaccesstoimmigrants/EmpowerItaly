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
    }
];

//
// HERO DATA
//

export const HERO_DATA = [
    {
        title: "Exploring Immigrants' Contribution to Italian Economic Growth",
        paragraph: "We investigate the labor market dynamics and assess whether there might be disparities in employment opportunities for immigrants.",
        imageSrc: hero,
        payoff: "An open data project",
        layoutOrder: true
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur.",
        paragraph: "Aliquam massa iaculis in sit felis. Diam bibendum fames lectus odio porttitor consectetur purus donec. Tellus nulla tortor a orci est. Nam cursus velit facilisis sed. Egestas bibendum eget semper sed cras pellentesque. Aenean ut iaculis vitae maecenas orci mattis porta lacus. Mauris ut purus id ipsum ultricies.",
        imageSrc: workflow,
        payoff: "Our workflow",
        layoutOrder: false
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur.",
        paragraph: "Aliquam massa iaculis in sit felis. Diam bibendum fames lectus odio porttitor consectetur purus donec. Tellus nulla tortor a orci est. Nam cursus velit facilisis sed. Egestas bibendum eget semper sed cras pellentesque. Aenean ut iaculis vitae maecenas orci mattis porta lacus. Mauris ut purus id ipsum ultricies.",
        imageSrc: documentation,
        payoff: "Project's information",
        layoutOrder: true
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur.",
        paragraph: "Aliquam massa iaculis in sit felis. Diam bibendum fames lectus odio porttitor consectetur purus donec. Tellus nulla tortor a orci est. Nam cursus velit facilisis sed. Egestas bibendum eget semper sed cras pellentesque. Aenean ut iaculis vitae maecenas orci mattis porta lacus. Mauris ut purus id ipsum ultricies.",
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
        name: "Introduction",
        href: "#Introduction"
    },
    {
        name: "Scenario",
        href: "#Scenario"
    },
    {
        name: "Datasets",
        href: "#Datasets"
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