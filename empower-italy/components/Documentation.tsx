'use client'

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface DocumentationLink {
    name: string;
    href: string;
}

interface DocumentationProps {
    links: DocumentationLink[];
}

export default function Documentation({ links }: DocumentationProps) {

    const segment = useSelectedLayoutSegment();

    return (
        <section id="documentation" className="pb-6">
            <article className="max-w-7xl m-auto">
                <div className="grid grid-cols-12 gap-6 relative animate-fade-in-down">
                    <div className="
                                rounded-2xl
                                p-8
                                md:p-12
                                bg-orange-100
                                col-span-12
                                lg:col-span-3
                                sticky
                                top-0
                    ">
                        <nav className="sticky top-0 pt-12">
                            <h3 className="font-bold uppercase pb-8">Index</h3>
                            <ul className="cursor-pointer">
                                {links.map((link) => ( 
                                    <Link key={link.name} className={`/${segment}` === link.href ? 'y' : 'x'} href={link.href}>
                                        <li className="pb-2 hover:font-bold">
                                            {link.name}
                                        </li>
                                    </Link> 
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="
                                bg-indigo-100
                                col-span-12
                                lg:col-span-9
                                rounded-2xl
                                p-8
                                md:p-12
                    ">



                        <div id="Introduction">
                            <h2 className="                                        
                                        font-bold
                                        text-4xl
                                        lg:text-5xl
                                        text-indigo-900
                                        pb-8"
                            >
                                {links[0].name}
                            </h2>
                        </div>
                            <p>
                                The project addresses the potential difference in unemployment rates betwwen immigrants and native italians. It allows to investigate the labour market dynamics and assess whether there might be disparities in employment opportunities for immigrants.
                            </p>
                            <p>
                                This topic is widely discussed by Italian politicians, but it is often based on assumptions rather than data. For instance, some people claim that "Italy has been invaded by migrants," as reported by articles like <Link target="_blank" className="font-bold underline" href="https://www.huffingtonpost.it/archivio/2017/06/28/news/siamo_invasi_dai_migranti_la_piu_grande_tra_le_fake_news-10640403/">"Siamo invasi dai migranti, la più grande tra le fake news."</Link> Other statements, like "an ethnic replacement is in act in order to delete Italian culture," are even more absurd, as reported by the article <Link target="_blank" className="font-bold underline" href="https://edition.cnn.com/2023/04/19/europe/italy-immigration-lollobrigida-intl/index.html">"Italian minister sparks fury for saying immigration leads to ‘ethnic replacement’"</Link>.
                            </p>
                            <p>
                                Acknowledging the complexity of immigration, our focus is on evaluating the active engagement of foreign individuals within Italy's labour market. Our aim is to ascertain whether immigrants experience a disproportionate impact from unemployment rates and the extent of this disparity. Our investigation seeks to pinpoint the regions in Italy with higher concentrations of immigrants and the key industries where they are predominantly employed. We have compared the labor force participation and unemployment rates between foreigners and Italians to observe and analyze any disparities that exist.
                            </p>


                        <div id="Scenario">
                            <h2 className="                                        
                                        font-bold
                                        text-4xl
                                        lg:text-5xl
                                        text-indigo-900
                                        pt-12
                                        pb-8"
                            >
                                {links[1].name}
                            </h2>
                        </div>
                            <p>
                                EmpowerItaly aligns data from various sources to generate insights about the past migrational numbers in Italy and understand were currently immigrants are concentrated the most. Specifically, we are interested in how much the immigrant population represents in the country and what's the usual level of education they present. Additionally, we aim to analyze the activity rate as well as unemployment rate in Italy's economy.
                            </p>
                            <p>
                                In order to obtain an exhaustive picture of the phenomenon, we will align:
                                <ul className="ml-2 mt-2">
                                    <li>1. Immigrants' nationality and distribution</li>
                                    <li>2. Immigrants educational level</li>
                                    <li>3. Industry sector in which immigrants and italians are present</li>
                                    <li>4. Activity rate between immigrants and Italians</li>
                                    <li>5. Unemployment rate between immigrants and Italians</li>
                                </ul>
                            </p>

                        <div>
                            <h2 className="                                        
                                        font-bold
                                        text-3xl
                                        lg:text-4xl
                                        text-indigo-900
                                        pt-10
                                        pb-8"
                            >
                                2.1. The Open Data scenario
                            </h2>
                        </div>
                            <p>
                                We believe in Open Data and want to integrate our project into the larger picture proposed by the United Nations and the <Link target="_blank" className="font-bold underline" href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/">17 Sustainable Development Goals (SDGs)</Link>, which were developed by an Open Working Group of 30 member states over a two-year process.
                            </p>
                            <p>
                                The SDGs are designed to balance the three dimensions of sustainable development: economic, social, and environmental. Open Data can help achieve the SDGs by providing critical information on natural resources, government operations, public services, and population demographics. These insights can inform national priorities and help determine the most effective paths for action on national issues.
                            </p>
                            <p>
                                In particular, for our project, we refer to the 16th goal: <strong>Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.</strong> The kind of government transparency provided by Open Data is critical to making institutions more accountable and inclusive.
                            </p>

                        <div>
                            <h2 className="                                        
                                        font-bold
                                        text-3xl
                                        lg:text-4xl
                                        text-indigo-900
                                        pt-10
                                        pb-8"
                            >
                                2.2. The aims of EmpowerItaly
                            </h2>
                        </div>
                            <p>
                                <ul className="ml-2 mt-2">
                                    <li>1. <strong>Analyze the nature of the datasets</strong>, its legal basis, ownership, quality, and accuracy, and ensure compliance with privacy rules in the EU.</li>
                                    <li>2. <strong>Analyze the datasets from an ethical point of view</strong> to avoid discrimination, cognitive biases, and prejudice.</li>
                                    <li>3. <strong>Produce Linked Open Datasets as output</strong>, including DCAT_AP metadata and license RDF.</li>
                                    <li>4. <strong>Design and develop visualizations</strong> to effectively communicate and exploit the results.</li>
                                </ul>
                            </p>
                            <p>
                                To achieve our goal, we will follow this procedure:
                                <ul className="ml-2 mt-2">
                                    <li>1. <strong>Define your research question:</strong> Clarify the specific aspect of immigrant presence and activity we want to investigate. Refine our hypothesis question and determine the variables and data needed to address it.</li>
                                    <li>2. <strong>Gather data:</strong> Identify relevant data sources that provide information on immigrant labour activity in Italy. Look for datasets that include details on sectors, and other relevant factors. Ensure the data is reliable and covers the desired time period.</li>
                                    <li>3. <strong>Data preprocessing:</strong> Clean and preprocess the data to ensure it's in a suitable format for analysis. This may involve handling missing values, addressing outliers, standardizing variables, and performing data transformations as needed.</li>
                                    <li>4. <strong>Data exploration and analysis:</strong> Conduct exploratory data analysis to gain insights into the characteristics of immigrant labour contribution in Italy. Visualize the data using charts, graphs, and statistical summaries. Perform appropriate statistical analyses to test your hypothesis and identify any significant patterns or correlations.</li>
                                    <li>5. <strong>Interpretation and findings:</strong> Analyze the results of our data analysis and interpret their implications. Discuss any observed trends, patterns, or relationships between immigrant entrepreneurship and economic growth in Italy.</li> 
                                    <li>6. <strong>Draw conclusions:</strong> Based on our findings, draw conclusions about the role of immigrant entrepreneurship in Italy's economy. Discuss the potential benefits and resources that immigrants bring to the country through their entrepreneurial activities. Consider the limitations of our study and any recommendations for further research.</li>
                                    <li>7. <strong>Document our project:</strong> Create a clear and well-structured report or presentation summarizing our project, including the research question, methodology, data sources, analysis techniques, and key findings. We cite our sources appropriately and include visualizations to enhance understanding.</li>
                                </ul>
                            </p>

                        <div id="Datasets">
                            <h2 className="                                        
                                        font-bold
                                        text-4xl
                                        lg:text-5xl
                                        text-indigo-900
                                        pt-12
                                        pb-8"
                            >
                                {links[2].name}
                            </h2>
                        </div>
                            <p>
                                For our datasets, since we are dealing with data related to Italy, our main source was <Link target="_blank" className="font-bold underline" href="https://www.istat.it/en/">Istat</Link>, the Italian National Institute of Statistics, a public research organization that has been the main producer of official statistics since 1926, serving citizens and policy-makers. Istat provides different platforms, and sometimes it can be confusing to determine the correct source of data. For our topic, for example, we found, besides the official website, <Link target="_blank" className="font-bold underline" href="http://dati.istat.it/Index.aspx?lang=en">I.Stat</Link> and <Link target="_blank" className="font-bold underline" href="http://stra-dati.istat.it/?lang=en">Immigrants.Stat</Link>, both of which store data that can be useful for our project. However, they are not compliant with any standard shared format.
                            </p>
                            <p>
                                For these reasons, we decided to select our datasets, whenever possible, from another new platform provided by Istat: <Link target="_blank" className="font-bold underline" href="https://esploradati.istat.it/databrowser/#/en">IstatData</Link>. We chose to prefer this data warehouse because it is compliant with the SDMX (Statistical Data and Metadata eXchange) <Link target="_blank" className="font-bold underline" href="https://www.iso.org/standard/52500.html">ISO standard</Link>.
                            </p>
                            <p>
                                Also, EUROSTAT was the complementary source used in our project, in which the used dataset was retreived in CSV.
                            </p>
                            <p>
                                <h3 className="font-bold pt-2">SDMX: A Design Choice</h3>
                                SDMX (Statistical Data and Metadata eXchange) is sponsored by organizations such as the World Bank, OECD, and IMF. It standardizes the formats, structures, and coding of data and metadata, as well as data exchange processes. As a result, it greatly facilitates data exchange and the consolidation of data from multiple sources.
                            </p>
                            <p>
                                <h3 className="font-bold pt-2">SDMX Metadata and Data Format</h3>
                                SDMX is not only about exchanging data but also about exchanging metadata, which provides information about the structure and meaning of the data. SDMX metadata includes details such as concepts, dimensions, attributes, and codes, enabling better understanding and interpretation of the data.
                            </p>
                            <p>
                                By leveraging the power of SDMX metadata and data formats, analysts and researchers can access standardized and interoperable data, enabling more efficient and accurate analysis, comparison, and sharing of statistical information across organizations and domains.
                            </p>
                            <p>
                                <h3 className="font-bold pt-2">SDMX Information Model (SDMX-IM): Data Structures</h3>
                                The SDMX Information model provides a way of modelling statistical data, structural metadata, reference metadata and the data exchange processes by the representation of concepts, relationships, constraints, rules, and operations to specify data semantics for a chosen statistical domain.
                                Content oriented guidelines are a set of propositions to harmonize the application of SDMX information model to provide concrete solutions for the interoperability in the exchange of data and metadata between organisations. 
                            </p>
                            <p>
                                A DSD (key family) specifies a set of descriptor concepts (concepts that describe and identify a set of data). It tells which concepts are dimensions (identification and description), and which are attributes (just description), and it gives the attachment level for each of these concepts, based on the packaging structure (Data Set, Group, Series/Section, Observation) as well as their status (mandatory versus conditional). It also specifies which code lists provide possible values for the dimensions, as well as the possible values for the attributes, either as code lists or as free text fields. A data structure definition can be used to describe time series data, cross-sectional and multidimensional table data.
                            </p>
                            <p>
                                Most of the concepts are actually SDMX Cross Domain Concepts, of the SDMX Content Oriented Guidelines (COG), which should be applied wherever possible.
                            </p>
                            <p>
                                For more on this topic: 
                                <Link target="_blank" className="font-bold underline" href="https://circabc.europa.eu/ui/group/8828dd71-a744-4914-b019-361aec02b6bb/library/836ed87f-e167-467f-9952-a72310e23676/details">SDMX self-learning package No. 4 Student book - Data Structure Definition</Link>.
                            </p>
                            <p>
                                <h3 className="font-bold pt-2">ISTAT and SDMX</h3>
                                The Italian National Institute of Statistics (ISTAT) allows access to its data warehouse, <Link target="_blank" className="font-bold underline" href="https://esploradati.istat.it/databrowser/#/en">IstatDati</Link>, through various methods. The REST API access is not widely known, but it is very convenient, although poorly documented. The following istruction are taken from <Link target="_blank" className="font-bold underline" href="https://ondata.github.io/guida-api-istat/">OnData</Link>, updated, enriched with our tests and considerations.
                            </p>
                            <p>
                                For the ISTAT SDMX Toolkit: <Link target="_blank" className="font-bold underline" href="https://sdmxistattoolkit.github.io/">https://sdmxistattoolkit.github.io/</Link>.
                            </p>
                            <p>
                                There is no dedicated documentation available on their official web service page or in the existing guides. However, there is a reference to "RESTful API" on this page:<Link target="_blank" className="font-bold underline" href="https://esploradati.istat.it/SDMXWS/">https://esploradati.istat.it/SDMXWS/</Link>.
                            </p>
                            <p>
                                For a an example of how to work with ISTAT's SDMX see on our <Link target="_blank" className="font-bold underline" href="https://github.com/openaccesstoimmigrants/openaccesstoimmigrants/blob/main/_scripts/D1(a)_resident-foreigners-demographic.ipynb">script on GitHub</Link>

                            </p>
                            <p>
                                <Link className="font-bold underline" href="/datasets">Visit the dedicated datasets page to explore all related metadata.</Link>
                            </p>

                        <div id="Quality">
                            <h2 className="                                        
                                        font-bold
                                        text-4xl
                                        lg:text-5xl
                                        text-indigo-900
                                        pt-12
                                        pb-8"
                            >
                                {links[3].name}
                            </h2>
                        </div>
                            <p>
                            <strong>I.Stat:</strong> The institution doesn't publish data regularly but ensures that quality tools have been developed in order to improve the quality of statistical processes and products, consistently with Istat's mission and according to the framework of the European Statistical System. The methodologies used for data quality can be <Link target="_blank" className="font-bold underline" href="https://www4.istat.it/en/tools/data-quality">seen here</Link> and the datasets can’t be used for re-identifying the person.
                            </p>
                            <p>                                  
                            The division among Italian regions presented by ISTAT is to be intented as follows:
                            </p>
                            <p>      
                            - North: includes the regions of the North-West (Liguria, Lombardy, Piedmont, Valle d'Aosta) and those of the North-East (Emilia-Romagna, Friuli Venezia Giulia, Trentino-Alto Adige, Veneto).
                            - Center: includes the regions of Lazio, Marche, Tuscany and Umbria.
                            - South: includes the regions of Southern Italy or Southern Italy (Abruzzo, Basilicata, Calabria, Campania, Molise, Puglia) and those of insular Italy (Sardinia, Sicily). Abruzzo is classified in southern Italy for historical reasons, as it was part of the Kingdom of the Two Sicilies before the unification of Italy in 1861.
                            </p>
                            <p> 
                            <strong>EUROSTAT:</strong> The institution's mission is to provide high quality statistics on data in Europe. Statistical authorities, comprising Eurostat, the National Statistical Institutes (NSIs), and Other National Authorities (ONAs), are strongly committed to quality. They are responsible for the development, production, and dissemination of European statistics. This commitment and an awareness for high quality are clearly expressed in the <Link target="_blank" className="font-bold underline" href="http://ec.europa.eu/eurostat/web/products-catalogues/-/KS-02-17-428">quality declaration of the European Statistical System (ESS)</Link>. 
                            </p>
                            <p> 
                            The same guarantees the following pilars as data quality:
                            </p>
                            <p>
                                <ul className="ml-2 mt-2">
                                    <li>- <strong>Independence:</strong> statistics produced in an independent, impartial and professional manner</li>
                                    <li>- <strong>Relevance:</strong> statistics produced based on user need</li>
                                    <li>- <strong>Reliability:</strong> statistics accuratly and reliably portray reality</li>
                                    <li>- <strong>Comparability:</strong> statistics are coherent and comparable between countries over time</li>
                                    <li>- <strong>Accessibility:</strong> statistics are easily accessible and clearly explained</li>
                                </ul>
                            </p>

                        <div>
                            <h2 className="                                        
                                        font-bold
                                        text-3xl
                                        lg:text-4xl
                                        text-indigo-900
                                        pt-10
                                        pb-8"
                            >
                                4.1 Information quality
                            </h2>
                        </div>
                            <p>
                                This section considers the requirements, established according to the "Linee guida per la valorizzazione del patrimonio informativo pubblico" by <Link target="_blank" className="font-bold underline" href="https://docs.italia.it/italia/daf/lg-patrimonio-pubblico/it/bozza/aspettiorg.html#qualita-dei-dati">AGID</Link>. The four characteristics to control the level of information quality are:
                            </p>
                            <p className="pb-2">                                
                            <ul className="ml-2 mt-2">
                                <li>- <strong>Accuracy</strong> (syntactic and semantic) - the data, and its attributes, correctly represent the real value of the concept or event to which it refers;</li>
                                <li>- <strong>Coherence</strong> - the data, and its attributes are not contradictory to other data regarding the context of the use of the owner administration;</li>
                                <li>- <strong>Completeness</strong> - the data is exhaustive for all its expected values and with respect to the relative entities (sources) that contribute to the definition of the procedure;</li>
                                <li>- <strong>Currentness</strong> (or timeliness of updating) - the data, and its attributes is of the "right time" (it is updated) with respect to the procedure to which it refers.</li>
                            </ul>
                            </p>

                            <table className="pb-2">
                            <tr>
                                <th> </th>
                                <th>Accuracy</th>
                                <th>Coherence</th>
                                <th>Coherence</th>
                                <th>Coherence</th>
                            </tr>
                            <tr>
                                <td className="text-bold">D1</td>
                                <td>YES</td>
                                <td>YES</td>
                                <td>YES</td>
                                <td>YES</td>
                            </tr>
                            <tr>
                                <td className="text-bold">D2</td>
                                <td>YES</td>
                                <td>YES</td>
                                <td>YES</td>
                                <td>YES</td>
                            </tr>
                            <tr>
                                <td className="text-bold">D3</td>
                                <td>YES</td>
                                <td>YES</td>
                                <td>YES</td>
                                <td>YES</td>
                            </tr>
                            <tr>
                                <td className="text-bold">D4</td>
                                <td>YES</td>
                                <td>YES</td>
                                <td>YES</td>
                                <td>YES</td>
                            </tr>
                            <tr>
                                <td className="text-bold">D5</td>
                                <td>NO - See point 2</td>
                                <td>YES</td>
                                <td>NO - See point 2</td>
                                <td>YES</td>
                            </tr>
                            <tr>
                                <td>D6</td>
                                <td>NO - See point 3</td>
                                <td>YES</td>
                                <td>YES</td>
                                <td>YES</td>
                            </tr>
                            <tr>
                                <td className="text-bold">D7</td>
                                <td>NO - See point 1 and 2</td>
                                <td>YES</td>
                                <td>NO - See point 1</td>
                                <td>YES</td>
                            </tr>
                            <tr>
                                <td className="text-bold">MD1</td>
                                <td>YES</td>
                                <td>YES</td>
                                <td>YES</td>
                                <td>YES</td>
                            </tr>
                            </table>

                            <p className="pt-2">
                            1. The dataset cannot be classified as complete due the fact of presenting data on gender only regarding Italy as a total. But once data is retrieved and information about regions in Italy are recovered, the gender upon these regions is not provided anymore.
                            </p>
                            <p>                   
                            2. The institution in general follows the current NUTS 2021 classification <Link target="_blank" className="font-bold underline" href="https://ec.europa.eu/eurostat/web/nuts/background">(see here)</Link> but the datasets relevant to our research follow mostly the used the NUTS2 classification and for this reason it is not accurate as it could be. 
                            </p>
                            <p>
                            3. The dataset presented in the institutional portal presented rounded numbers and had as unit of measurement thousands, which looks quite missleading since it's not accurate to round up a number of individuals.
                            </p>



                        <div id="Legal">
                            <h2 className="                                        
                                        font-bold
                                        text-4xl
                                        lg:text-5xl
                                        text-indigo-900
                                        pt-12
                                        pb-8"
                            >
                                {links[4].name}
                            </h2>
                        </div>
                            <p>
                            This analysis is designed to assess compliance with legal and ethical aspects in accordance with European, state and local regulations and compliance with good practices relating to publication in open data.
                            </p>
                            <p>
                            The analysis pays particular attention to aspects related to privacy, licenses, and interest for the purpose of creating a service that balances the public function, transparency and rights of individual citizens.
                            </p>

                            <h2 className="                                        
                                        font-bold
                                        text-3xl
                                        lg:text-4xl
                                        text-indigo-900
                                        pt-10
                                        pb-8"
                            >
                                5.1. Legal Checklist
                            </h2>

                            <table>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">To check</td>
                                    <td className="text-bold">D1</td>
                                    <td className="text-bold">D2</td>
                                    <td className="text-bold">D3</td>
                                    <td className="text-bold">D4</td>
                                    <td className="text-bold">D5</td>
                                    <td className="text-bold">D6</td>
                                    <td className="text-bold">D7</td>
                                </tr>
                                <tr>
                                    <td className="text-bold">1. Privacy issues</td>
                                    <td className="text-bold">1.1 Is the dataset free of any personal data as defined in the Regulation (EU) 2016/679?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">1.2 Is the dataset free of any indirect personal data that could be used for identifying the natural person? If so, is there a law that authorizes the PA to release them? Or any other legal basis? Identify the legal basis.</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">1.3 Is the dataset free of any particular personal data (art. 9 GDPR)? If so is there a law that authorizes the PA to release them?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">1.4 Is the dataset free of any information that combined with common data available on the web, could identify the person? If so, is there a law that authorizes the PA to release them?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">1.5 Is the dataset free of any information related to human rights (e.g. refugees, witness protection, etc.)?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">1.6 Do you use a tool for calculating the range of the risk of deanonymization? Do you anonymize the dataset? With which technique? Did you check the three mandatory parameters: singling out, linking out, inference out?</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">1.7 Are you using geolocalization capabilities? Do you check that the geolocalization process can’t identify single individuals in some circumstances?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">1.8 Did you check that the open data platform respect all the privacy regulations (registration of the end-user, profiling, cookies, analytics, etc.)?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">1.9 Do you know who are in your open data platform the Controller and Processor of the privacy data of the system?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">1.10 Where the datasets are physically stored (country and jurisdiction)? Do you have a cloud computing platform? Do you have checked the privacy regulation of the country where the dataset are physically stored? (territoriality)</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td className="text-bold">2. Intellectual Property Rights of the dataset</td>
                                    <td className="text-bold">2.1 Do you have created and generated the dataset ?</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">2.2 Are you the owner of the dataset? Who is the owner?</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">2.3 Are you sure to not use third party data without the proper authorization and license ? Are the dataset free from third party licenses or patents?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">2.4 Do you have checked if there are some limitations in your national legal system for releasing some kind of datasets with an open license?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td className="text-bold">3. License</td>
                                    <td className="text-bold">3.1 Do you release the dataset with an open data license? In case of the use of CC0 do you check that you have all the right necessary for this particular kind of license (e.g., jurisdiction)?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">3.2 Do you include the clause: &quot;In any case the dataset can’t be used for re-identifying the person&quot; ?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">3.3 Do you release the API (in case you have) with an open source license no</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="text-bold">4. Limitations on public access</td>
                                    <td className="text-bold">4.1 Do you check that the dataset concerns your institutional competences, scope and finality? Do you check if the dataset concerns other public administration competences?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">4.2 Do you check the limitations for the publication stated by your national legislation or by the EU directives ?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">4.3 Do you check if there are some limitations connected to the international relations, public security or national defence ?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">4.4 Do you check if there are some limitations concerning the public interest ?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">4.5 Do you check the international law limitations ?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">4.6 Do you check the INSPIRE law limitations for the spatial data?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td className="text-bold">5. Economical Conditions</td>
                                    <td className="text-bold">5.1 Do you check that the dataset could be released for free ?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">5.2 Do you check if there are some agreements with some other partners in order to release the dataset with a reasonable price ?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">5.3 Do you check if the open data platform terms of service include a clause of “non liability agreement” regarding the dataset and API provided ?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">5.4 In case you decide to release the dataset to a reasonable price do you check if the limitation imposed by the new directive 2019/1024/EU are respected ? Are you able to calculate the “marginal cost”? Are you able to justify the “reasonable return on investment” limited to cover the costs of collection, production, reproduction, dissemination, preservation and rights clearance? There is a national law that justify your public administration to apply the “reasonable return of investment”?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">5.5 In case you decide to release the dataset to a reasonable price do you check the e-Commerce directive1 and regulation?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td className="text-bold">6. Temporary aspects</td>
                                    <td className="text-bold">6.1 Do you have a temporary policy for updating the dataset ?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">6.2 Do you have some mechanism for informing the end-user that the dataset is updated at a given time to avoid mis-usage and so potential risk of damage ?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">6.3 Did you check if the dataset for some reason can’t be indexed by the research engines (e.g. Google, Yahoo, etc.) ?</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-bold">6.4 In case of personal data, do you have a reasonable technical mechanism for collecting request of deletion (e.g. right to be forgotten)?</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                    <td>N</td>
                                </tr>
                            </table>

                            <h2 className="                                        
                                        font-bold
                                        text-3xl
                                        lg:text-4xl
                                        text-indigo-900
                                        pt-10
                                        pb-8"
                            >
                                5.2 Licenses
                            </h2>
                                <p>
                                <b>I.stat</b>: On the direct page in which data is available to be explored and reused no disclaimers are at sight, so is not possible to understand what are the kind of licenses being used here, meaning that other companies can recopyright the data they find. But since is known the portal belongs to the Italian institution ISTAT, the same provides a disclaimer regarding its license and it can be seen <Link target="_blank" className="font-bold underline" href="https://www.istat.it/en/legal-notice">here</Link>. For that we understand Immigrants.stat is under the same license of the intitution that owns it, which is CC BY 3.0
                                </p>
                                <p>
                                The datasets presented by the institution don&#39;t have a regular date to be published, as they are made public when surveys are concluded. <Link target="_blank" className="font-bold underline" href="https://www.istat.it/en/analysis-and-products/datasets">See here</Link>. Besides the fact there isn&#39;t a specific date in which data is published, for most of the datasets it was possible to find data regarding the first semesters of the current year, 2023.
                                </p>
                                <p>
                                <b>IstatData</b>: The same information presented for I.stat can be considered for this very same item.
                                </p>
                                <p>
                                <b>EUROSTAT</b>: Data in the database are updated twice a day at 11:00 and 23:00, Central European Time (CET). Eurostat has a policy of encouraging free re-use of its data, both for non-commercial and commercial purposes. All statistical data, metadata, content of web pages or other dissemination tools, official publications and other documents published on its website, with the exceptions listed below, can be reused without any payment or written licence provided that:
                                </p>
                                <ul>
                                <li>the source is indicated as Eurostat;</li>
                                <li>when re-use involves modifications to the data or text, this must be stated clearly to the end user of the information.</li>
                                </ul>

                        <div id="Ethics">
                            <h2 className="                                        
                                        font-bold
                                        text-4xl
                                        lg:text-5xl
                                        text-indigo-900
                                        pt-12
                                        pb-8"
                            >
                                {links[5].name}
                            </h2>
                        </div>
                            <p>
                            <b>I.stat:</b> The ISTAT organization is compliant with statistical secrecy forms part of the broader principle of personal data protection as provided for by the Ethical code of conduct concerning the protection of personal data (d.lgs. n. 196/03) (Legislative Decree no. 196/03) and specifically Annex A3, &quot;Ethical code for the processing of personal data for statistical purposes within Sistan&quot;.
                            </p>
                            <p>
                            Respondents are not obliged to provide information when it comes to sensitive data or data relating to criminal records. If data contain anything that could be used to recognize individuals, the same is used in agregated form so it&#39;s impossible to identify that person.
                            </p>
                            <p>
                            The data controller with regard to processing of personal data is Istat; the data managers are the Institute&#39;s central directors who may be contacted by data subjects to exercise their rights; the data processors are all staff who carry out data entry and processing tasks.
                            </p>
                            <p>
                            <b>IstatData:</b> The same applied to I.stat can be considered here since the sources are under the same institution management.
                            </p>
                            <p>
                            <b>EUROSTAT:</b> The European Statistics Code of Practice (CoP) is the cornerstone of the quality framework for EUROSTAT and sets the standards for developing, producing and disseminating European statistics. </p>
                            <p>
                            The institutional is also very clear about the fact of not making microd-data available to the public, but it can be shared under request.
                            </p>

                        <div id="Technical">
                            <h2 className="                                        
                                        font-bold
                                        text-4xl
                                        lg:text-5xl
                                        text-indigo-900
                                        pt-12
                                        pb-8"
                            >
                                {links[6].name}
                            </h2>
                        </div>
                            <p>
                            This section has been written following the <Link target="_blank" className="font-bold underline" href="https://www.agid.gov.it/sites/default/files/repository_files/lg-open-data_v.1.0_1.pdf">Guidelines containing technical rules for data opening and reuse of public sector nformation by Agid</Link>. These guidelines on the opening of data and the reuse of public sector information are provided for by art. 12 of Legislative Decree no. 36/2006, as amended by Legislative Decree no. 200/2021, which implements the European Directive EU 2019/1024 (so-called Open Data Directive).
                            </p>
                            <p>
                            Adhering to the specifications outlined in the DCAT-AP_IT standard as recommended by AGID&#39;s guidelines for the valorization of public information heritage, and to facilitate data harvesting, each and every used dataset and all of the generated mashup datasets have been meticulously documented through metadata enriching format RDF/XML.
                            Following the Open Data indications by AGID, our statistical data are presented and made available in both csv and json format, as they were used in the data scraping and visualization testing phase.
                            Additionally, all datasets and metadata enrichment are available via download icons in the website.
                            </p>
                            <p>
                            The analysis, description and use of all source datasets are meant to be exploited not only by the RDF/XML serialization, but also through metadata quality assessment four main levels, for them being indicated by AGID.
                            </p>
                            <p>
                            It has been established that <Link target="_blank" className="font-bold underline" href="https://github.com/AgID/lg-documenti-informatici-docs/blob/master/conservazione.rst">&quot;The conservation system is logically distinct from the document management system&quot;</Link>; for this reason, we have to say that the project data preparation process that we took into consideration does not include the &quot;conservation and historicization&quot; step, as we will not return to it in the future, eventually making data non-reusable.
                            </p>

                            <h3 className="                                        
                                        font-bold
                                        text-2xl
                                        lg:text-3xl
                                        text-indigo-900
                                        pt-12
                                        pb-8" id="istat"><em>I.Stat</em></h3>
                            <ul>
                            <li>Format: Excel, CSV, SDMX</li>
                            <li>Metadata: </li>
                            <li>URI:<ul>
                            <li><Link target="_blank" className="font-bold underline" href="http://dati.istat.it//Index.aspx?QueryId=64217">Unemployment rate between italians and foreigners</Link></li>
                            <li><Link target="_blank" className="font-bold underline" href="http://dati.istat.it//Index.aspx?QueryId=64369">Activity rate of foreign citizens</Link></li>
                            </ul>
                            </li>
                            <li>Provenance:<ul>
                            <li><Link target="_blank" className="font-bold underline" href="http://dati.istat.it//Index.aspx?QueryId=64217">Unemployment rate between italians and foreigners</Link></li>
                            <li><Link target="_blank" className="font-bold underline" href="http://dati.istat.it//Index.aspx?QueryId=64369">Activity rate of foreign citizens</Link></li>
                            </ul>
                            </li>
                            </ul>
                            <h3 className="                                        
                                        font-bold
                                        text-2xl
                                        lg:text-3xl
                                        text-indigo-900
                                        pt-12
                                        pb-8" id="istatdata"><em>IstatData</em></h3>
                            <ul>
                            <li>Format: Excel, CSV, SDMX, JSON</li>
                            <li>Metadata: Provided in SDMX</li>
                            <li>URI:<ul>
                            <li><Link target="_blank" className="font-bold underline" href="https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_FOREIGNIM/DCIS_POPSTRRES1/IT1,29_7_DF_DCIS_POPSTRRES1_1,1.0">Resident foreign population by region 2019-2023</Link></li>
                            <li><Link target="_blank" className="font-bold underline" href="https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_INTCENSPOP/DCIS_RICPOPRES2011/IT1,164_164_DF_DCIS_RICPOPRES2011_1,1.0">Resident foreign population by region 2001-2019</Link></li>
                            <li><Link target="_blank" className="font-bold underline" href="https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_MIGRATIONS/DCIS_MIGRAZIONI/IT1,28_185_DF_DCIS_MIGRAZIONI_3,1.0">Total immigrants to Italy divided by continents</Link></li>
                            <li><Link target="_blank" className="font-bold underline" href="https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_POPULATION/DCIS_POPRES1/IT1,22_289_DF_DCIS_POPRES1_1,1.0">Italian resident municipal population</Link></li>
                            <li><Link target="_blank" className="font-bold underline" href="http://stra-dati.istat.it//Index.aspx?QueryId=64216">Presence of foreigners and italians divided by industry sector</Link></li>
                            </ul>
                            </li>
                            <li>Provenance:<ul>
                            <li><Link target="_blank" className="font-bold underline" href="https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_FOREIGNIM/DCIS_POPSTRRES1/IT1,29_7_DF_DCIS_POPSTRRES1_1,1.0">Resident foreign population by region 2019-2023</Link></li>
                            <li><Link target="_blank" className="font-bold underline" href="https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_INTCENSPOP/DCIS_RICPOPRES2011/IT1,164_164_DF_DCIS_RICPOPRES2011_1,1.0">Resident foreign population by region 2001-2019</Link></li>
                            <li><Link target="_blank" className="font-bold underline" href="https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_MIGRATIONS/DCIS_MIGRAZIONI/IT1,28_185_DF_DCIS_MIGRAZIONI_3,1.0">Total immigrants to Italy divided by continents</Link></li>
                            <li><Link target="_blank" className="font-bold underline" href="https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_POPULATION/DCIS_POPRES1/IT1,22_289_DF_DCIS_POPRES1_1,1.0">Italian resident municipal population</Link></li>
                            <li><Link target="_blank" className="font-bold underline" href="http://stra-dati.istat.it//Index.aspx?QueryId=64216">Presence of foreigners and italians divided by industry sector</Link></li>
                            </ul>
                            </li>
                            </ul>
                            <h3 className="                                        
                                        font-bold
                                        text-2xl
                                        lg:text-3xl
                                        text-indigo-900
                                        pt-12
                                        pb-8" id="eurostat"><em>EUROSTAT</em></h3>
                            <ul>
                            <li>Format: Excel, CSV, SDMX, JSON</li>
                            <li>Metadata: <Link target="_blank" className="font-bold underline" href="https://ec.europa.eu/eurostat/cache/metadata/en/edat1_esms.htm">LINK</Link></li>
                            <li>URI:<ul>
                            <li><Link target="_blank" className="font-bold underline" href="https://ec.europa.eu/eurostat/databrowser/view/edat_lfs_9917__custom_8389265/default/table?lang=en">Level of education of foreign citizens</Link></li>
                            </ul>
                            </li>
                            <li>Provenance:<ul>
                            <li><Link target="_blank" className="font-bold underline" href="https://ec.europa.eu/eurostat/databrowser/view/edat_lfs_9917__custom_8389265/default/table?lang=en">Level of education of foreign citizens</Link></li>
                            </ul>
                            </li>
                            </ul>

                        <div id="Sustainability">
                            <h2 className="                                        
                                        font-bold
                                        text-4xl
                                        lg:text-5xl
                                        text-indigo-900
                                        pt-12
                                        pb-8"
                            >
                                {links[7].name}
                            </h2>
                        </div>

                            <p>
                            The EmpowerItaly datasets encompass information gathered from catalogs related to various aspects of the Italian labor market. Originally established as part of a University of Bologna course, the catalog is no longer actively maintained. However, the datasets utilized in this catalog are under the care of their respective institutions. Despite the catalog&#39;s lack of ongoing maintenance, our scripts remain accessible and can be executed on new files whenever necessary.
                            </p>
                            <p>
                            If someone identifies that a newer version of one of our input files exists, we welcome notification to facilitate the updating of our files through our automated script. It&#39;s important to note that our scripts are licensed under <Link target="_blank" className="font-bold underline" href="https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1">CC BY-NC 4.0.</Link> We extend an invitation to the community to participate in the enhancement of our files by contributing updated versions to our <Link target="_blank" className="font-bold underline" href="https://github.com/openaccesstoimmigrants/openaccesstoimmigrants">GitHub</Link> project. Submitted files will undergo review, and if found accurate, they will be added to the project.
                            </p>

                        <div id="Visualization">
                            <h2 className="                                        
                                        font-bold
                                        text-4xl
                                        lg:text-5xl
                                        text-indigo-900
                                        pt-12
                                        pb-8"
                            >
                                {links[8].name}
                            </h2>
                        </div>

                            <p>
                            Throughout the visualizations presented in the project is possible to perceive the constant presence of the chosen time span to be investigated, from 2018 to 2022, since it&#39;s a more recent scenario to look at with an event that impacted profoundly the world economy: the COVID-19 pandemic.</p>
                            <p>For this reason, the charts presented are either a bar chart or a line one. Since those are the ones facilitaing one&#39;s understanding regarding data over time.
                            </p>
                            <p>
                            <i>Occupation by sector between Italians and immigrants:</i> The bar chart was chosen to display the different sectors in which Italians and foreigners are present, allowing the user to compare the numbers one sector at a time by choosing the options made available.
                            </p>
                            <p>
                            <i> Mashup:</i> In the mashup line chart our goal was to make a more narrowed down visualition, making also possible for the user investigate for himself/herself the scenario regarding activity and unemployment rates between immigrants and italians based on their educational levels, so they could come up with conclusions just observing this data and choose among the available variables.
                            </p>

                        <div id="RDF">
                            <h2 className="                                        
                                        font-bold
                                        text-4xl
                                        lg:text-5xl
                                        text-indigo-900
                                        pt-12
                                        pb-8"
                            >
                                {links[9].name}
                            </h2>
                        </div>


                            <p><em>This section is strictly related to the Technical and Ethical Analysis. For more, consult point 4 and 5 of this documentation</em></p>
                            <p>This section has been written following the <Link target="_blank" className="font-bold underline" href="https://www.agid.gov.it/sites/default/files/repository_files/lg-open-data_v.1.0_1.pdf">Guidelines containing technical rules for data opening and reuse of public sector information by Agid</Link>. These guidelines, which pertain to the opening of data and the reuse of public sector information, are mandated by art. 12 of Legislative Decree no. 36/2006, as amended by Legislative Decree no. 200/2021, implementing the European Directive EU 2019/1024 (commonly referred to as the Open Data Directive).</p>
                            <p>Adhering to the FAIR principles published by the GO FAIR Initiative during the development of the project, we strived to ensure the Findability, Accessibility, Interoperability, and Reusability of digital assets, emphasizing machine-actionability. In this regard, the overview of FAIR Principles provided by GO Fair has been employed as a checklist, aligned with AGID&#39;s guidelines, to thoroughly examine our project.</p>
                            <p>In alignment with the specifications outlined in the DCAT-AP_IT standard, as recommended by AGID&#39;s guidelines for the valorization of public information heritage, and to facilitate data harvesting, each dataset used and all generated mashup datasets have undergone meticulous documentation in RDF/XML, enriching the metadata format. This approach is in accordance with the Open Data indications by AGID, wherein statistical data are presented and made available in both CSV and JSON formats, as employed in the data scraping and visualization testing phase. Furthermore, all datasets and metadata enrichments are easily accessible through download icons on the website.</p>
                            <p>The analysis, description, and utilization of source datasets aim to facilitate exploitation not only through RDF/XML serialization but also by adhering to AGID&#39;s recommended metadata quality assessment across four main levels.</p>
                            <p>It is worth noting that our data preparation process, as considered in this project, excludes the &#39;conservation and historicization&#39; step. As articulated in <Link target="_blank" className="font-bold underline" href="https://github.com/AgID/lg-documenti-informatici-docs/blob/master/conservazione.rst">&quot;The conservation system is logically distinct from the document management system&quot;</Link>, we affirm that our approach does not include this step, as the project&#39;s data is not intended for future return, ensuring its non-reusability.</p>

                        <div id="Praxis">
                            <h2 className="                                        
                                        font-bold
                                        text-4xl
                                        lg:text-5xl
                                        text-indigo-900
                                        pt-12
                                        pb-8"
                            >
                                {links[10].name}
                            </h2>
                        </div>

                            <h3>We agree on the Tech Stewardship Practice, since &quot;Starting in 2015, a coalition of diverse engineers, technologists and creators began meeting around the question: <strong>how can we ensure technology is beneficial for all?</strong>&quot; </h3>
                            <h4>We tried to make the two worlds dialogue: the humanities and the digital one. In this sense, we tried not to polarize a vision over the other - always for the sake of one main principle: <strong>EXPRESSIVENESS OF CODE</strong>. Simply put, code readability refers to how easily one can understand the purpose of the code. It relies on the effective use of programming skills, such as appropriately naming variables and adding comments. </h4>
                            <h4>Finally, we relied on simple yet strong principles - known as the zen code principles - we leave here a brief hint of them. </h4>
                            <ol>
                            <li>Prioritize simplicity in code for better performance and maintainability.</li>
                            <li>Embrace complexity but avoid over-engineering to maintain application efficiency.</li>
                            <li>Be explicit in code and communication for scalable code and transparent collaboration.</li>
                            <li>Prefer immutable states in code for clarity and maintainability.</li>
                            <li>Foster horizontal relationships in teams for better interactions and feature design.</li>
                            <li>Prioritize rhythm over volume in development for agile, resource-efficient solutions.</li>
                            <li>Treat errors explicitly in both code and human processes for continuous improvement.</li>
                            <li>Ensure solutions are easy to explain, indicating clear design understanding and effectiveness.</li>
                            </ol>

                        <div id="Conclusions">
                            <h2 className="                                        
                                        font-bold
                                        text-4xl
                                        lg:text-5xl
                                        text-indigo-900
                                        pt-12
                                        pb-8"
                            >
                                {links[11].name}
                            </h2>
                        </div>

                            <p>
                            This project aimed at understanding significant differences between immigrants and Italians in the labour market, assessing the foreign distribution in the country, their level of education and making a comparison between these two groups in the industry sectors and in terms of activity and unemployment. In an overall it's clear the existence of a significant disparity. 
                            </p>
                            <p>
                            Since the immigrant population is substantially smaller compared to the Italian one, they will consequently represent a smaller proportion in the labour market, but still they are always present in all the shown sectors and with further studies it could be understood if they complement the labour market when there's a lack of professionals in Italy or not.
                            </p>
                            <p>
                            Observing the mashup visualization is interesting to notice that immigrants with a low level of education (less than primary, primary and lower secondary school) always show a high activity rate compared to Italians. And only in the South and Islands showing a smaller unemployment rate compared to natives.
                            </p>
                            <p>
                            In all other cases, foreigners indeed face a higher unemployment rate even though being sometimes equally or more active than natives. We understand that there is a difference between those groups that can be explained by other factors not considered here, since the aspects of the labour market are too many to be covered in this project.
                            </p>
                    </div>
                </div>
            </article>
        </section>
    )
}