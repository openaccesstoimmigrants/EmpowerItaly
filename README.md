# Open Access

# EmpowerItaly: Exploring Immigrants and Italians disparities in the labour market

## Hypothesis questions:

## Does the number of immigrants impact on the labor market?

### This hypothesis question addresses the potential difference in unemployment rates between immigrants and native Italians. It allows to investigate the labor market dynamics and assess whether there might be disparities in employment opportunities for immigrants.

## Content:
1. [Introduction](#1-introduction)
2. [Scenario](#2-scenario)\
   2.1[The Open Data Scenario](#21-the-open-data-scenario)\
   2.2[The aims of EmpowerItaly](#22-the-aims-of-empoweritaly)\
   2.3[How EmpowerItaly can contribute to E-Governance](#23-how-empoweritaly-can-contribute-to-e-governance)
3. [Original datasets and mashup datasets](#3-original-datasets-and-mashup-datasets)\
   [Datasets](#datasets)
4. [Quality Analysis of the datasets](#4-quality-analysis-of-the-datasets)\
   4.1 [Information Quality](#41-information-quality)
5. [Legal Analysis](#5-legal-analysis-privacy-license-purpose-etc)\
   5.1 [Legal Checklist](#51-legal-checklist)\
   5.2 [Licenses](#52-licenses)
6. [Ethics](#6-ethics-analysis)
7. [Technical Analysis](#7-technical-analysis-formats-metadata-uri-provenance)
8. [Sustainability of updating the datasets over time](#8-sustainability-of-updating-the-datasets-over-time)
9. [Visualization](#9-visualization)
10. [RDF Assertation of Metadata](#10-rdf-assertion-of-the-metadata)
11. [Our Work Praxis](#11-our-work-praxis)
12. [Conclusions](#12-conclusions)

## 1. Introduction

Our project aims to provide an analysis of the phenomenon of immigration in Italy, but more specifically how either foreigners and Italians are impacted by the changes in the labour market. This topic is widely discussed by Italian politicians, but it is often based on assumptions rather than data. For instance, some people claim that "Italy has been invaded by migrants," as reported by articles like "[Siamo invasi dai migranti, la più grande tra le fake news](https://www.huffingtonpost.it/archivio/2017/06/28/news/siamo_invasi_dai_migranti_la_piu_grande_tra_le_fake_news-10640403/)." Other statements, like "an ethnic replacement is in act in order to delete Italian culture," are even more absurd, as reported by the article "[Italian minister sparks fury for saying immigration leads to ‘ethnic replacement’](https://edition.cnn.com/2023/04/19/europe/italy-immigration-lollobrigida-intl/index.html)."

We acknowledge that immigration is a complex topic that requires a multidimensional approach. Therefore, we focus on the contribution of migrants to the national economy as our main research question. Specifically, [REVISE THIS AND CHECK IF ITS COMPLIANT WITH DATA] our hypothesis question explores how much active foreigners are in the labour market and even if they are, we want to know if they are the ones more impacted or no by unempoyment rates . We aim to investigate in which regions of Italy immigrants are more present as well as the industries they work the most. And finally we want to understand if there's any kind of possible correlation among the Growth rate (GDP) of Italy x Activity rate of immigrants and Italians x Unemployment rate between immigrants and Italians.

## 2. Scenario

EmpowerItaly aligns data from various sources to generate insights about the past migrational numbers in Italy and understand were currently immigrants are concentrated the most. Specifically, we are interested in how much the immigrant population represents in the country and what's the usual level of education they present. Additionally, we aim to analyze the activity rate as well as unemployment rate in Italy's economy. 

In order to obtain an exhaustive picture of the phenomenon, we will align:

1. Immigrants' nationality and distribution
2. Immigrants educational level
3. Industry sector in which immigrants are present
4. Activity rate between immigrants and Italians
5. Unemployment rate between immigrants and Italians
6. GDP rate in Italy
7. Annual average households income


### 2.1. The Open Data scenario

We believe in Open Data and want to integrate our project into the larger picture proposed by the United Nations and the [17 Sustainable Development Goals (SDGs)](notion://www.notion.so/%5B%3Chttps://www.un.org/sustainabledevelopment/sustainable-development-goals/%3E%5D(%3Chttps://www.un.org/sustainabledevelopment/sustainable-development-goals/%3E)), which were developed by an Open Working Group of 30 member states over a two-year process. The SDGs are designed to balance the three dimensions of sustainable development: economic, social, and environmental. Open Data can help achieve the SDGs by providing critical information on natural resources, government operations, public services, and population demographics. These insights can inform national priorities and help determine the most effective paths for action on national issues. In particular, for our project, we refer to the 16th goal: ***Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.*** The kind of government transparency provided by Open Data is critical to making institutions more accountable and inclusive.

### 2.2. The aims of EmpowerItaly

1. **Analyze the nature of the datasets**, its legal basis, ownership, quality, and accuracy, and ensure compliance with privacy rules in the EU.
2. **Analyze the datasets from an ethical point of view** to avoid discrimination, cognitive biases, and prejudice.
3. **Produce Linked Open Datasets as output**, including DCAT_AP metadata and license RDF.
4. **Design and develop visualizations** to effectively communicate and exploit the results.

To achieve our goal, we will follow this procedure:

1. **Define your research question:** Clarify the specific aspect of immigrant presence and activity we want to investigate. Refine our hypothesis question and determine the variables and data needed to address it.
2. **Gather data:** Identify relevant data sources that provide information on immigrant labour activity in Italy. Look for datasets that include details on sectors, and other relevant factors. Ensure the data is reliable and covers the desired time period.
3. **Data preprocessing:** Clean and preprocess the data to ensure it's in a suitable format for analysis. This may involve handling missing values, addressing outliers, standardizing variables, and performing data transformations as needed.
4. **Data exploration and analysis:** Conduct exploratory data analysis to gain insights into the characteristics of immigrant labour contribution in Italy. Visualize the data using charts, graphs, and statistical summaries. Perform appropriate statistical analyses to test your hypothesis and identify any significant patterns or correlations.
5. **Interpretation and findings:** Analyze the results of our data analysis and interpret their implications. Discuss any observed trends, patterns, or relationships between immigrant entrepreneurship and economic growth in Italy. 
6. **Draw conclusions:** Based on our findings, draw conclusions about the role of immigrant entrepreneurship in Italy's economy. Discuss the potential benefits and resources that immigrants bring to the country through their entrepreneurial activities. Consider the limitations of our study and any recommendations for further research.
7. **Document our project:** Create a clear and well-structured report or presentation summarizing our project, including the research question, methodology, data sources, analysis techniques, and key findings. We cite our sources appropriately and include visualizations to enhance understanding.

### 2.3 How EmpowerItaly can contribute to E-Governance

In the context of E-Governance, EmpowerItaly might play a role in:

- raising awareness over the real status of immigration in Italy in order to promote ***inclusive societies for sustainable development***.
- ecc

## 3. Original datasets and mashup datasets

### Overview
For our datasets, since we are dealing with data related to Italy, our main source was [Istat](https://www.istat.it/en/), the Italian National Institute of Statistics, a public research organization that has been the main producer of official statistics since 1926, serving citizens and policy-makers. Istat provides different platforms, and sometimes it can be confusing to determine the correct source of data. For our topic, for example, we found, besides the official website, [I.Stat](http://dati.istat.it/Index.aspx?lang=en) and [Immigrants.Stat](http://stra-dati.istat.it/?lang=en), both of which store data that can be useful for our project. However, they are not compliant with any standard shared format.

For these reasons, we decided to select our datasets, whenever possible, from another new platform provided by Istat: [IstatData](https://esploradati.istat.it/databrowser/#/en). We chose to prefer this data warehouse because it is compliant with the SDMX (Statistical Data and Metadata eXchange) [ISO standard](https://www.iso.org/standard/52500.html).

Also, EUROSTAT was the complementary source used in our project, in which the used dataset was retreived in CSV.

### SDMX: A Design Choice
SDMX (Statistical Data and Metadata eXchange) is sponsored by organizations such as the World Bank, OECD, and IMF. It standardizes the formats, structures, and coding of data and metadata, as well as data exchange processes. As a result, it greatly facilitates data exchange and the consolidation of data from multiple sources.

### SDMX Metadata and Data Format
SDMX is not only about exchanging data but also about exchanging metadata, which provides information about the structure and meaning of the data. SDMX metadata includes details such as concepts, dimensions, attributes, and codes, enabling better understanding and interpretation of the data.

By leveraging the power of SDMX metadata and data formats, analysts and researchers can access standardized and interoperable data, enabling more efficient and accurate analysis, comparison, and sharing of statistical information across organizations and domains.

### SDMX Information Model (SDMX-IM): Data Structures
The SDMX Information model provides a way of modelling statistical data, structural metadata, reference metadata and the data exchange processes by the representation of concepts, relationships, constraints, rules, and operations to specify data semantics for a chosen statistical domain.
Content oriented guidelines are a set of propositions to harmonize the application of SDMX information model to provide concrete solutions for the interoperability in the exchange of data and metadata between organisations. 

A DSD (key family) specifies a set of descriptor concepts (concepts that describe and identify a set of data). It tells which concepts are dimensions (identification and description), and which are attributes (just description), and it gives the attachment level for each of these concepts, based on the packaging structure (Data Set, Group, Series/Section, Observation) as well as their status (mandatory versus conditional). It also specifies which code lists provide possible values for the dimensions, as well as the possible values for the attributes, either as code lists or as free text fields. A data structure definition can be used to describe time series data, cross-sectional and multidimensional table data.

Most of the concepts are actually SDMX Cross Domain Concepts, of the SDMX Content Oriented Guidelines (COG), which should be applied wherever possible.

For more on this topic: 
[SDMX self-learning package No. 4 Student book - Data Structure Definition](https://circabc.europa.eu/ui/group/8828dd71-a744-4914-b019-361aec02b6bb/library/836ed87f-e167-467f-9952-a72310e23676/details)

### ISTAT and SDMX
The Italian National Institute of Statistics (ISTAT) allows access to its data warehouse, [IstatDati](https://esploradati.istat.it/databrowser/#/en), through various methods. The REST API access is not widely known, but it is very convenient, although poorly documented. The following istruction are taken from [OnData](https://ondata.github.io/guida-api-istat/), updated, enriched with our tests and considerations.

For the ISTAT SDMX Toolkit: https://sdmxistattoolkit.github.io/

There is no dedicated documentation available on their official web service page or in the existing guides. However, there is a reference to "RESTful API" on this page: https://esploradati.istat.it/SDMXWS/.

To retrieve all the datasets available on Istat: https://esploradati.istat.it/SDMXWS/rest/dataflow/IT1

### How to query the APIs
The base URL for access is https://esploradati.istat.it/SDMXWS/rest/. From this, you can query the metadata and data using an HTTP GET request, practically from any client.

To test the APIs and explore the results we used [Postman API platform](https://www.postman.com/).

### Applying Filters

To obtain the correct dimensions of the dataset, it is useful to apply filters, especially for large datasets like the one in question. To apply filters, you need to know the data schema of the dataflow you want to query. This is described in the metadata resource called "datastructure," which can be queried by ID. But what is the ID of the dataset on immigrations, as mentioned in the datastructure?

The ID is specified in the dataflow. Referring back to the previous information, the ID referenced in the datastructure for immigrations is `DCIS_MIGRAZIONI`.

For our example the query will be:
`https://esploradati.istat.it/SDMXWS/rest/datastructure/IT1/DCIS_MIGRAZIONI/`

By querying the API, we will obtain an XML output that includes the `structure:DimensionList` tag, which contains the list of dimensions, i.e., the data schema of the dataset. In our case, the dimensions are as follows: `FREQ`, `ETA_NUM`, `PAESE_CITTAD`, `TERR_DEST`, `REF_AREA_0`, `STATO_EST_DEST`, `STATO_EST_PROV`, `TIPO_TRASF`, `SESSO`, `TIPO_INDDEM`.

**What is the meaning of these abbreviations?**
The answer to this question is provided by the metadata resource - the package - called `codelist`. It can be queried by ID, but we need to know the IDs of the various fields, which are written in the XML file mentioned above.

For example, for the `FREQ` field, we read <Ref id="CL_FREQ" version="1.0" agencyID="IT1" package="codelist" class="Codelist" />, which means that the corresponding ID in the codelist is "CL_FREQ". The URL to be used to retrieve information about this field is another metadata query URL: http://sdmx.istat.it/SDMXWS/rest/codelist/IT1/CL_FREQ.

The output will be an XML file, where it states that it represents the "Frequency". The XML also contains the possible values for this dimension, which for `CL_FREQ` correspond to the underlying pairs of ID and value.

#### Which codes/values are available to filter a specific dataflow by dimension?

We can explore the values available for each dimension with this query:
`https://esploradati.istat.it/SDMXWS/rest/availableconstraint/28_185`

The output is an XML file, where, for example, it can be seen that for this specific dataflow, the available value for the dimension `FREQ` (Frequency) is `A`, which represents annual frequency.

#### Build the URL to filter a dataflow, perform an attribute query

An attribute query should list the attribute values in the URL following this pattern:

`https://esploradati.istat.it/SDMXWS/rest/data/flowRef/fieldValue1.fieldValue2.fieldValue3/`

The example above shows a data structure with three fields. The field values should be separated by a dot (.) character. If a value is not specified, no filter will be applied for that field/dimension. Therefore, an URL like:

`https://esploradati.istat.it/SDMXWS/rest/data/flowRef/../`

is equivalent to not applying any filter.

For the dataflow we are using in this guide, an example could be filtering for all immigrats to Italy (not divided by province), coming from Africa, of every age and of both sexs:

`https://esploradati.istat.it/SDMXWS/rest/data/28_185/.TOTAL.AFR.ITTOT.ITTOT....9.`

Since one of our goals is to provide new datasets and visulize them, we can query the numbers of all immigrants, divided by year, for each continent:

`https://esploradati.istat.it/SDMXWS/rest/data/28_185/.TOTAL.EU27_FOR+EUR_NEU27+AFR+ASI+AME+OCE.ITTOT.ITTOT....9.`

By using these queries, we can collect different datasets from just one source.

With this technique, we obtain an SDMX-ML file in XML format. We then transform it to JSON and clean it in the dedicated Jupyter Notebook. The cleaned data is saved in a dedicated folder named 'Clean'.

To display the data in our React app, we simply save a constant with the URL of our GitHub repository that points to our new [JSON file in raw version](https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/.ipynb_checkpoints/continent_data-checkpoint.json).

# DATASETS

### D1(a) - Resident foreign population by region 2019-2023
|  |  |
| --- | --- |
| Source | [IstatData](https://esploradati.istat.it/databrowser/#/en) |
| Title | **Resident foreigners on 1st January - Stranieri residenti al 1° gennaio** |
| Viewed in date | 10/09/23 | 
| License | [CC BY 3.0 IT](https://creativecommons.org/licenses/by/3.0/it/) |
| Format | **SDMX-ML** |
| Metadata | Provided in SDMX |
| URI | [LINK](https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_FOREIGNIM/DCIS_POPSTRRES1/IT1,29_7_DF_DCIS_POPSTRRES1_1,1.0) |
|  |  |

This dataset was used to see the total number of resident immigrants, the average age and the distribution over the Italian territory. The first two data are related to year 2022, while the last, in conjunction with D1(b), respresent the distrubition on the italian territory from between 2018 and 2022.

### D1(b) - Resident foreign population by region 2001-2019
|  |  |
| --- | --- |
| Source | [IstatData](https://esploradati.istat.it/databrowser/#/en) |
| Title | **Estimated resident population - Years 2001-2019 - Popolazione residente ricostruita - Anni 2001-2019** |
| Viewed in date | 04/10/23 | 
| License | [CC BY 3.0 IT](https://creativecommons.org/licenses/by/3.0/it/) |
| Format | **SDMX-ML** |
| Metadata | Provided in SDMX |
| URI | [LINK](https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_INTCENSPOP/DCIS_RICPOPRES2011/IT1,164_164_DF_DCIS_RICPOPRES2011_1,1.0) |
|  |  |

This dataset was needed to implement D1(a) results with data relative to year 2018.

### D2 - Total immigrants to Italy by continent and region
|  |  |
| --- | --- |
| Source | [IstatData](https://esploradati.istat.it/databrowser/#/en) |
| Title | **Migration (Transfer of residence) - Migrazioni (Trasferimenti di residenza)** |
| Viewed in date | 06/10/23 | 
| License | [CC BY 3.0 IT](https://creativecommons.org/licenses/by/3.0/it/) |
| Format | **SDMX-ML** |
| Metadata | Provided in SDMX |
| URI | [LINK](https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_MIGRATIONS/DCIS_MIGRAZIONI/IT1,28_185_DF_DCIS_MIGRAZIONI_3,1.0) |
|  |  |

### D3 - Italian resident municipal population
|  |  |
| --- | --- |
| Source | [IstatData](https://esploradati.istat.it/databrowser/#/en) |
| Title | **Resident population on 1st January - Popolazione residente al 1° gennaio** |
| Viewed in date | 08/10/23 | 
| License | [CC BY 3.0 IT](https://creativecommons.org/licenses/by/3.0/it/) |
| Format | **SDMX-ML** |
| Metadata | Provided in SDMX |
| URI | [LINK](https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_POPULATION/DCIS_POPRES1/IT1,22_289_DF_DCIS_POPRES1_1,1.0) |
|  |  |

### D4 - Level of education of foreign citizens
|  |  |
| --- | --- |
| Source | [EUROSTAT](https://ec.europa.eu/eurostat) |
| Title | Population by educational attainment level, sex, age, country of birth and NUTS 2 regions (%) |
| Viewed in date | 20/10/2023 | 
| License | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| Format | CSV |
| Metadata | [LINK](https://ec.europa.eu/eurostat/cache/metadata/en/edat1_esms.htm) |
| URI | [LINK](https://ec.europa.eu/eurostat/databrowser/view/edat_lfs_9917__custom_8389265/default/table?lang=en) |
|  |  |

This dataset was used in order to understand the educational level attained by foreigners in Italy. The levels considered in this dataset are:
  - Primary (ED0-2): Less than primary, primary and lower secondary education
  - Secondary (ED3_4): Upper secondary and post-secondary non-tertiary education
  - Tertiary (ED5-8): Tertiary education
See item 3.2 in [LINK](https://ec.europa.eu/eurostat/cache/metadata/en/edat1_esms.htm)

### D5 - Activity rate between foreigners and italians
|  |  |
| --- | --- |
| Source | [ISTAT](https://www.istat.it/en/) |
| Title | Highest level of education attained, ctizenship |
| Viewed in date | 20/10/2023 | 
| License | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| Format | CSV |
| Metadata | Not provided |
| URI | [LINK]() |
|  |  |

This dataset was used in order to understand the activity rates betweens italians and foreigners. As active citizens is understood to be the ones either looking for a occupation or already inserted in the labour market.
See more in [LINK](chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.istat.it/it/files/2016/01/Glossario1.pdf)

### D6 - Presence of foreigners divided by industry sector
|  |  |
| --- | --- |
| Source | [ISTAT](https://www.istat.it/en/) |
| Title | Employment (thousands) - Nace 2007 - professional status, citizenship |
| Viewed in date | 20/10/2023 | 
| License | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| Format | CSV |
| Metadata | Not provided |
| URI | [LINK](https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,Z0500LAB,1.0/LAB_OFFER/LAB_OFF_EMPLOY/DCCV_OCCUPATIT1/DCCV_OCCUPATIT1_SECTECOACT/IT1,150_938_DF_DCCV_OCCUPATIT1_9,1.0) |
|  |  |

This dataset was retrieved in order to understand what are the sector in which foreigners work the most in Italy.
See more in [LINK](https://www4.istat.it/it/strumenti/definizioni-e-classificazioni/ateco-2007)

### D7 - Unemployment rate between foreigners and italians
|  |  |
| --- | --- |
| Source | [ISTAT](https://www.istat.it/en/) |
| Title | Unemployment Rate - Highest level of education attained, citizenship |
| Viewed in date | 20/10/2023 | 
| License | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| Format | CSV |
| Metadata | Not provided |
| URI | [LINK](https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,Z0500LAB,1.0/LAB_OFFER/LAB_OFF_UNEMPLOY/DCCV_TAXDISOCCU1/IT1,151_914_DF_DCCV_TAXDISOCCU1_3,1.0) |
|  |  | 

This dataset was retrieved in order to understand the unemployment rates between foreigners and italians.

### D8 - Annual average households income
|  |  |
| --- | --- |
| Source | [IstatData](https://esploradati.istat.it/databrowser/#/en) |
| Title | **Net income - Reddito netto** |
| Viewed in date | 06/10/23 | 
| License | [CC BY 3.0 IT](https://creativecommons.org/licenses/by/3.0/it/) |
| Format | **SDMX-ML** |
| Metadata | Provided in SDMX |
| URI | [LINK](https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,HOU,1.0/HOU_INCOME/DCCV_REDNETFAMFONTERED/IT1,32_292_DF_DCCV_REDNETFAMFONTERED_9,1.0) |
|  |  |

### D9 - GDP (Growth rate)
|  |  |
| --- | --- |
| Source | [OECD](https://stats.oecd.org/Index.aspx?DatasetCode=SNA_TABLE1) |
| Title | **Gross Domestic Product (GDP)** |
| Viewed in date | 29/11/2023 |
| License |  |
| Format | CSV, XML, SDMX, Excel, PC-Axis |
| URI | [LINK](https://stats.oecd.org/Index.aspx?DatasetCode=SNA_TABLE1) |
|  |  |

### D10 - MD1 (Activity rate and Unemployment rate)
|  |  |
| --- | --- |
| Source | [Empwer Italy](https://stats.oecd.org/Index.aspx?DatasetCode=SNA_TABLE1) |
| Title | **Activity rate and Unemployment rate by level of education** |
| Viewed in date | 29/11/2023 |
| License | CC BY 4.0 |
| Format | CSV |
| URI | [LINK](https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/MASHUP/mashup.json) |
|  |  |

## 4. Quality analysis of the datasets

The division among Italian regions is to be intented as follows, according to ISTAT:
the North, the Center and the South. <br>

The North includes the regions of the North-West (Liguria, Lombardy, Piedmont, Valle d'Aosta) and those of the North-East (Emilia-Romagna, Friuli Venezia Giulia, Trentino-Alto Adige, Veneto).
<br>
The Center includes the regions of Lazio, Marche, Tuscany and Umbria.
<br>
The South includes the regions of Southern Italy or Southern Italy (Abruzzo, Basilicata, Calabria, Campania, Molise, Puglia) and those of insular Italy (Sardinia, Sicily). Abruzzo is classified in southern Italy for historical reasons, as it was part of the Kingdom of the Two Sicilies before the unification of Italy in 1861.

### 4.1 Information quality

This section considers the requirements, established according to the "Linee guida per la valorizzazione del patrimonio informativo pubblico" by AGID [https://docs.italia.it/italia/daf/lg-patrimonio-pubblico/it/bozza/aspettiorg.html#qualita-dei-dati](https://docs.italia.it/italia/daf/lg-patrimonio-pubblico/it/bozza/aspettiorg.html#qualita-dei-dati)). The four characteristics to control the level of information quality are:

- **Accuracy** (syntactic and semantic) - the data, and its attributes, correctly represent the real value of the concept or event to which it refers;
- **Coherence** - the data, and its attributes are not contradictory to other data regarding the context of the use of the owner administration;
- **Completeness** - the data is exhaustive for all its expected values and with respect to the relative entities (sources) that contribute to the definition of the procedure;
- **Currentness** (or timeliness of updating) - the data, and its attributes is of the "right time" (it is updated) with respect to the procedure to which it refers.

|  | Accuracy | Coherence | Completeness | Curentness |
| --- | --- | --- | --- | --- |
| D1 | YES | YES | YES | YES |
| D2 | NO | YES | YES | YES |
| D3 |  | YES |  | YES |
| D4 |  | YES | NO - See point 1 and 2 | NO - See point 2 |
| D5 |  | YES | NO | YES |
| D6 |  | YES |  | YES |
| D7 |  | YES |  | YES |

1. The dataset cannot be classified as complete due the fact of presenting data on gender only regarding Italy as a total. But once data is retrieved and information about regions in Italy are recovered, the gender upon these regions is not provided anymore.

2. The institution in general follows the current NUTS 2021 classification ([see here](https://ec.europa.eu/eurostat/web/nuts/background)) but the datasets relevant to our research follow mostly the used the NUTS2 classification and for this reason it is not accurate as it could be. 

**NB: The following datasets taken into consideration are already part of a process of aggregration by ISTAT- meaning, they may represent rates, and they take into consideration the triple regional division of Nord, Sud and Centro.** <br>
#### NUTS 1 Nomenclature


The regional division belonging to NUTS level 1 do not correspond to administrative or purely geographical entities, but it is a subdivision only statistical and macroeconomic, despite being on the same NUTS level as the states of Germany or Wales, Scotland, Northern Ireland and regions of England in the United Kingdom.


Sometimes you may find another type of division, i.e. Mezzogiorno englobing the islands, since is what seems to be the ISTAT standard.


## 5. Legal analysis (privacy, license, purpose, etc.)

This analysis is designed to assess compliance with legal and ethical aspects in accordance with European, state and local regulations and compliance with good practices relating to publication in open data.

The analysis pays particular attention to aspects related to privacy, licenses, and interest for the purpose of creating a service that balances the public function, transparency and rights of individual citizens.

### 5.1. Legal Checklist

|  | To check | D1 | D2 | D3 | D4 | D5 | D6 | D7 |
| --- | --- | --- | --- | --- | --- | --- | -- | --- |
| 1. Privacy issues | 1.1 Is the dataset free of any personal data as defined in the Regulation (EU) 2016/679? | Y | Y | Y | Y | Y | Y | Y |
|  | 1.2 Is the dataset free of any indirect personal data that could be used for identifying the natural person? If so, is there a law that authorizes the PA to release them? Or any other legal basis? Identify the legal basis. | Y | Y | Y | Y | Y | Y | Y |
|  | 1.3 Is the dataset free of any particular personal data (art. 9 GDPR)? If so is there a law that authorizes the PA to release them? | Y | Y | Y | Y | Y | Y | Y |
|  | 1.4 Is the dataset free of any information that combined with common data available on the web, could identify the person? If so, is there a law that authorizes the PA to release them? | Y | Y | Y | Y | Y | Y | Y |
|  | 1.5 Is the dataset free of any information related to human rights (e.g. refugees, witness protection, etc.)? | Y | Y | Y | Y | Y | Y | Y |
|  | 1.6 Do you use a tool for calculating the range of the risk of deanonymization? Do you anonymize the dataset? With which technique? Did you check the three mandatory parameters: singling out, linking out, inference out? | N | N | N | N | N | N | N |
|  | 1.7 Are you using geolocalization capabilities? Do you check that the geolocalization process can’t identify single individuals in some circumstances? | Y | Y | Y | Y | Y | Y | Y |
|  | 1.8 Did you check that the open data platform respect all the privacy regulations (registration of the end-user, profiling, cookies, analytics, etc.)? | Y | Y | Y | Y | Y | Y | Y |
|  | 1.9 Do you know who are in your open data platform the Controller and Processor of the privacy data of the system? | Y | Y | Y | Y | Y | Y | Y |
|  | 1.10 Where the datasets are physically stored (country and jurisdiction)? Do you have a cloud computing platform? Do you have checked the privacy regulation of the country where the dataset are physically stored? (territoriality) | Y | Y | Y | Y | Y | Y | Y |
| 2. Intellectual Property Rights of the dataset | 2.1 Do you have created and generated the dataset ? | N | N | N | N | N | N | N |
|  | 2.2 Are you the owner of the dataset? Who is the owner? | N | N | N | N | N | N | N |
|  | 2.3 Are you sure to not use third party data without the proper authorization and license ? Are the dataset free from third party licenses or patents? | Y | Y | Y | Y | Y | Y | Y |
|  | 2.4 Do you have checked if there are some limitations in your national legal system for releasing some kind of datasets with an open license? |  |  |  |  |   |   |   |
| 3. License | 3.1 Do you release the dataset with an open data license? In case of the use of CC0 do you check that you have all the right necessary for this particular kind of license (e.g., jurisdiction)? |  |  |  |  |   |   |   |
|  | 3.2 Do you include the clause: "In any case the dataset can’t be used for re-identifying the person" ? |  |  |  |  |   |   |   |
|  | 3.3 Do you release the API (in case you have) with an open source license no |  |  |  |  |   |   |   |
| 4. Limitations on public access | 4.1 Do you check that the dataset concerns your institutional competences, scope and finality? Do you check if the dataset concerns other public administration competences? |  |  |  |  |   |   |   |
|  | 4.2 Do you check the limitations for the publication stated by your national legislation or by the EU directives ? |  |  |  |  |   |   |   |
|  | 4.3 Do you check if there are some limitations connected to the international relations, public security or national defence ? |  |  |  |  |   |   |   |
|  | 4.4 Do you check if there are some limitations concerning the public interest ? |  |  |  |  |   |   |   |
|  | 4.5 Do you check the international law limitations ? |  |  |  |  |   |   |   |
|  | 4.6 Do you check the INSPIRE law limitations for the spatial data? |  |  |  |  |   |   |   |
| 5. Economical Conditions | 5.1 Do you check that the dataset could be released for free ? |  |  |  |  |   |   |   |
|  | 5.2 Do you check if there are some agreements with some other partners in order to release the dataset with a reasonable price ? |  |  |  |  |   |   |   |
|  | 5.3 Do you check if the open data platform terms of service include a clause of “non liability agreement” regarding the dataset and API provided ? |  |  |  |  |   |   |   |
|  | 5.4 In case you decide to release the dataset to a reasonable price do you check if the limitation imposed by the new directive 2019/1024/EU are respected ? Are you able to calculate the “marginal cost”? Are you able to justify the “reasonable return on investment” limited to cover the costs of collection, production, reproduction, dissemination, preservation and rights clearance? There is a national law that justify your public administration to apply the “reasonable return of investment”? |  |  |  |  |   |   |   |
|  | 5.5 In case you decide to release the dataset to a reasonable price do you check the e-Commerce directive1 and regulation? |  |  |  |  |   |   |   |
| 6. Temporary aspects | 6.1 Do you have a temporary policy for updating the dataset ? |  |  |  |  |   |   |   |
|  | 6.2 Do you have some mechanism for informing the end-user that the dataset is updated at a given time to avoid mis-usage and so potential risk of damage ? |  |  |  |  |   |   |   |
|  | 6.3 Did you check if the dataset for some reason can’t be indexed by the research engines (e.g. Google, Yahoo, etc.) ? |  |  |  |  |   |   |   |
|  | 6.4 In case of personal data, do you have a reasonable technical mechanism for collecting request of deletion (e.g. right to be forgotten)? |  |  |  |  |   |   |   |

### 5.2 Licenses

<b>Immigrants.stat</b>: On the direct page in which data is available to be explored and reused no disclaimers are at sight, so is not possible to understand what are the kind of licenses being used here, meaning that other companies can recopyright the data they find. But since is known the portal belongs to the Italian institution ISTAT, the same provides a disclaimer regarding its license and it can be seen [here](https://www.istat.it/en/legal-notice). For that we understand Immigrants.stat is under the same license of the intitution that owns it, which is CC BY 3.O.

The datasets presented by the institution don't have a regular date to be published, as they are made public when surveys are concluded. [See here](https://www.istat.it/en/analysis-and-products/datasets). Besides the fact there isn't a specific date in which data is published, for most of the datasets it was possible to find data regarding the first semesters of the current year, 2023.

<b>I.stat</b>: The same information presented for Immigrants.stat can be considered for this very same item.

<b>IstatData</b>: The same information presented for Immigrants.stat can be considered for this very same item.

<b>EUROSTAT</b>: Data in the database are updated twice a day at 11:00 and 23:00, Central European Time (CET). Eurostat has a policy of encouraging free re-use of its data, both for non-commercial and commercial purposes. All statistical data, metadata, content of web pages or other dissemination tools, official publications and other documents published on its website, with the exceptions listed below, can be reused without any payment or written licence provided that:

- the source is indicated as Eurostat;
- when re-use involves modifications to the data or text, this must be stated clearly to the end user of the information.

## 6. Ethics analysis

## 7. Technical analysis (formats, metadata, URI, provenance)
This section has been written following the [Guidelines containing technical rules for data opening and reuse of public sector nformation by Agid](https://www.agid.gov.it/sites/default/files/repository_files/lg-open-data_v.1.0_1.pdf). These guidelines on the opening of data and the reuse of public sector information are provided for by art. 12 of Legislative Decree no. 36/2006, as amended by Legislative Decree no. 200/2021, which implements the European Directive EU 2019/1024 (so-called Open Data Directive).


Adhering to the specifications outlined in the DCAT-AP_IT standard as recommended by AGID's guidelines for the valorization of public information heritage, and to facilitate data harvesting, each and every used dataset and all of the generated mashup datasets have been meticulously documented through metadata enriching format RDF/XML.
Following the Open Data indications by AGID, our statistical data are presented and made available in both csv and json format, as they were used in the data scraping and visualization testing phase.
Additionally, all datasets and metadata enrichment are available via download icons in the website.


The analysis, description and use of all source datasets are meant to be exploited not only by the RDF/XML serialization, but also through metadata quality assessment four main levels, for them being indicated by AGID. 
[---]


A comprehensive documentation about the quality assessment and the metadating profile  of the outputs, can be found in our comprehensive documentation, and downloadable as Jupyter Notebooks.


It has been established that ["The conservation system is logically distinct from the document management system" ] (https://github.com/AgID/lg-documenti-informatici-docs/blob/master/conservazione.rst); for this reason, we have to say that the project data preparation process that we took into consideration does not include the "conservation and historicization" step, as we will not return to it in the future, eventually making data non-reusable. [...]

### *Immigrants.Stat*
  - Format: Excel, CSV, SDMX
  - Metadata: Not provided
  - URI: 
    - [Activity rate of foreign citizens](http://stra-dati.istat.it//Index.aspx?QueryId=64215)
    - [Presence of foreigners divided by industry sector](http://stra-dati.istat.it//Index.aspx?QueryId=64216)
  - Provenance:
    - [Activity rate of foreign citizens](http://stra-dati.istat.it//Index.aspx?QueryId=64215)
    - [Presence of foreigners divided by industry sector](http://stra-dati.istat.it//Index.aspx?QueryId=64216)

### *I.Stat*
  - Format: Excel, CSV, SDMX
  - Metadata:
  - URI:
    - [Unemployment rate between italians and foreigners](http://dati.istat.it//Index.aspx?QueryId=64217)
  - Provenance:
    - [Unemployment rate between italians and foreigners](http://dati.istat.it//Index.aspx?QueryId=64217)

### *IstatData*
  - Format: Excel, CSV, SDMX, JSON
  - Metadata:
  - URI:
    - [Resident foreign population by region 2019-2023](https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_FOREIGNIM/DCIS_POPSTRRES1/IT1,29_7_DF_DCIS_POPSTRRES1_1,1.0)
    - [Resident foreign population by region 2001-2019](https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_INTCENSPOP/DCIS_RICPOPRES2011/IT1,164_164_DF_DCIS_RICPOPRES2011_1,1.0)
    - [Total immigrants to Italy divided by continents](https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_MIGRATIONS/DCIS_MIGRAZIONI/IT1,28_185_DF_DCIS_MIGRAZIONI_3,1.0)
    - [Italian resident municipal population](https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_POPULATION/DCIS_POPRES1/IT1,22_289_DF_DCIS_POPRES1_1,1.0)
  - Provenance:

### *EUROSTAT*
  - Format: Excel, CSV, SDMX, JSON
  - Metadata:
  - URI:
    - [Level of education of foreign citizens](https://ec.europa.eu/eurostat/databrowser/view/edat_lfs_9917__custom_8389265/default/table?lang=en)
  - Provenance:
    - [Level of education of foreign citizens](https://ec.europa.eu/eurostat/databrowser/view/edat_lfs_9917__custom_8389265/default/table?lang=en)

### *OECD*
  - Format: Excel
  - Metadata:
  - URI:
  - Provenance:

## 8. Sustainability of updating the datasets over time

## 9. Visualization

Throughout the visualizations presented in the project is possible to perceive the constant presence of the chosen time span to be investigated, from 2018 to 2022, since it's a more recent scenario to look at with an event that impacted profoundly the world economy: the COVID-19 pandemic.

For this reason, the charts presented are either a bar chart or a line one. Since those are the ones facilitaing one's understanding regarding data over time. 

<i>Mashup:</i> In the mashup line chart our goal was to make a more narrowed down visualition, making also possible for the user investigate for himself/herself the scenario regarding activity and unemployment rates between immigrants and italians based on their educational levels, so they could come up with conclusions just observing this data and choose among the available variables.

And by observing it, it's possible to notice an interesting matter specially among the years 2020-2022. For most part of groups divided by education, there's an increse on the unemployment rate between 2020 and 2021 and afterwards a decrease. But in 2020 the unemployment was already pretty much lower than previous years. Hence, there's a decrease in unemployment in the country as also pointed by OECD in [this article](https://issuu.com/oecd.publishing/docs/italy-oecd-economic-outlook-november-2023).

## 10. RDF assertion of the metadata

## 11. OUR WORK PRAXIS
### We agree on the Tech Stewardship Practice, since "Starting in 2015, a coalition of diverse engineers, technologists and creators began meeting around the question: **how can we ensure technology is beneficial for all?**" <br>

#### We tried to make the two worlds dialogue: the humanities and the digital one. In this sense, we tried not to polarize a vision over the other - always for the sake of one main principle: **EXPRESSIVENESS OF CODE**. Simply put, code readability refers to how easily one can understand the purpose of the code. It relies on the effective use of programming skills, such as appropriately naming variables and adding comments. <br>
#### Finally, we relied on simple yet strong principles - known as the zen code principles - we leave here a brief hint of them. <br>

1. Prioritize simplicity in code for better performance and maintainability.
2. Embrace complexity but avoid over-engineering to maintain application efficiency.
3. Be explicit in code and communication for scalable code and transparent collaboration.
4. Prefer immutable states in code for clarity and maintainability.
5. Foster horizontal relationships in teams for better interactions and feature design.
6. Prioritize rhythm over volume in development for agile, resource-efficient solutions.
7. Treat errors explicitly in both code and human processes for continuous improvement.
8. Ensure solutions are easy to explain, indicating clear design understanding and effectiveness.


## 12. CONCLUSIONS

What makes us think that, if there's any factor impacting negatively the labour market, that would not be the number of immigrants arriving in Italy, because they're the most impacted by unemployment rates even though being very active and showing a small increase in the percentage of higher educated immigrants.

## LICENSE

Shield: [![CC BY 4.0][cc-by-shield]][cc-by]

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg