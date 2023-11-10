# Open Access

# EmpowerItaly: Exploring Immigrants' Contribution to Italian Economic Growth

## Hypothesis questions:

## Does the number of immigrants impact on the labor market?

### This hypothesis question addresses the potential difference in unemployment rates between immigrants and native Italians. It allows to investigate the labor market dynamics and assess whether there might be disparities in employment opportunities for immigrants.

## for me: https://noi-italia.istat.it/pagina.php?L=0&categoria=4&dove=ITALIA

## 1. Introduction

Our project aims to provide a comprehensive analysis of the phenomenon of immigration in Italy. This topic is widely discussed by Italian politicians, but it is often based on assumptions rather than data. For instance, some people claim that "Italy has been invaded by migrants," as reported by articles like "[Siamo invasi dai migranti, la più grande tra le fake news](https://www.huffingtonpost.it/archivio/2017/06/28/news/siamo_invasi_dai_migranti_la_piu_grande_tra_le_fake_news-10640403/)." Other statements, like "an ethnic replacement is in act in order to delete Italian culture," are even more absurd, as reported by the article "[Italian minister sparks fury for saying immigration leads to ‘ethnic replacement’](https://edition.cnn.com/2023/04/19/europe/italy-immigration-lollobrigida-intl/index.html)."

We acknowledge that immigration is a complex topic that requires a multidimensional approach. Therefore, we focus on the contribution of migrants to the national economy as our main research question. Specifically, [REVISE THIS AND CHECK IF ITS COMPLIANT WITH DATA] our hypothesis question explores the potential positive impact of immigrants on the economy by examining their entrepreneurial activities. We aim to investigate whether immigrants create new businesses, generate employment opportunities, and contribute to the overall economic development of Italy.

## 2. Scenario

EmpowerItaly aligns data from various sources to generate insights about past and current migrational flows throughout Italy. Specifically, we are interested in how the number of entrants has changed over time, [REVISE THIS AND CHECK IF ITS COMPLIANT WITH DATA] and in analyzing where people are moving to and from. Additionally, we aim to analyze the level of education to explore active participation in Italy's economy. 

In order to obtain an exhaustive picture of the phenomenon, we will align:

1. Immigrants' nationality and distribution
2. Compare the educational level of both Italians and immigrants [RETREIVE INFO ABOUT ITALIAN'S ED LEVEL]
3. Average salary and criminal rate per region [IS THE CRIMINAL RATE REALLY RELEVANT FOR THE ANALYSIS?]
4. Employment and unemployment rate [REMEMBER TO RETRIEVE EMPLYMENT DATA]

### 2.1. The Open Data scenario

We believe in Open Data and want to integrate our project into the larger picture proposed by the United Nations and the [17 Sustainable Development Goals (SDGs)](notion://www.notion.so/%5B%3Chttps://www.un.org/sustainabledevelopment/sustainable-development-goals/%3E%5D(%3Chttps://www.un.org/sustainabledevelopment/sustainable-development-goals/%3E)), which were developed by an Open Working Group of 30 member states over a two-year process. The SDGs are designed to balance the three dimensions of sustainable development: economic, social, and environmental. Open Data can help achieve the SDGs by providing critical information on natural resources, government operations, public services, and population demographics. These insights can inform national priorities and help determine the most effective paths for action on national issues. In particular, for our project, we refer to the 16th goal: ***Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.*** The kind of government transparency provided by Open Data is critical to making institutions more accountable and inclusive.

### 2.2. The aims of EmpowerItaly

1. **Analyze the nature of the datasets**, its legal basis, ownership, quality, and accuracy, and ensure compliance with privacy rules in the EU.
2. **Analyze the datasets from an ethical point of view** to avoid discrimination, cognitive biases, and prejudice.
3. **Produce Linked Open Datasets as output**, including DCAT_AP metadata and license RDF.
4. **Design and develop visualizations** to effectively communicate and exploit the results.

To achieve our goal, we will follow this procedure:

1. **Define your research question:** Clarify the specific aspect of immigrant entrepreneurship [IS IT REALLY ABOUT ENTREPRENEURSHIP?] we want to investigate. Refine our hypothesis question and determine the variables and data needed to address it.
2. **Gather data:** Identify relevant data sources that provide information on immigrant entrepreneurship in Italy. Look for datasets that include details on immigrant-owned businesses, employment generated, sectors, and other relevant factors. Ensure the data is reliable and covers the desired time period.
3. **Data preprocessing:** Clean and preprocess the data to ensure it's in a suitable format for analysis. This may involve handling missing values, addressing outliers, standardizing variables, and performing data transformations as needed.
4. **Data exploration and analysis:** Conduct exploratory data analysis to gain insights into the characteristics of immigrant entrepreneurship in Italy. Visualize the data using charts, graphs, and statistical summaries. Perform appropriate statistical analyses to test your hypothesis and identify any significant patterns or correlations.
5. **Interpretation and findings:** Analyze the results of our data analysis and interpret their implications. Discuss any observed trends, patterns, or relationships between immigrant entrepreneurship and economic growth in Italy. Highlight the positive contributions of immigrant entrepreneurs and their impact on job creation and innovation.
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

As ancillary datasets in order to give more context to our hypothesis questions, the EUROSTAT was the main provider.

### SDMX: A Design Choice
SDMX is sponsored by organizations such as the World Bank, OECD, and IMF. It standardizes the formats, structures, and coding of data and metadata, as well as data exchange processes. As a result, it greatly facilitates data exchange and the consolidation of data from multiple sources. The more organizations using it, the more useful SDMX becomes. Since it has become the preferred standard for data and metadata exchange by the global statistical community, its potential is enormous. SDMX comes in several "flavors" or sub-formats, including SDMX-ML Generic, SDMX-ML Compact (also referred to as SDMX-ML Structure Specific), SDMX-JSON, and SDMX-EDI. Among these, SDMX-JSON is the most compact and efficient. However, packing all that data as tightly as possible has led to a complex structure that is difficult to interpret.

### SDMX Metadata and Data Format
SDMX (Statistical Data and Metadata eXchange) is not only about exchanging data but also about exchanging metadata, which provides information about the structure and meaning of the data. SDMX metadata includes details such as concepts, dimensions, attributes, and codes, enabling better understanding and interpretation of the data.

SDMX-ML (SDMX Markup Language) is the XML-based format used for representing SDMX metadata. It provides a standardized way to describe the structure and characteristics of datasets, making it easier to share and interpret metadata across different systems and organizations.

When it comes to the data itself, SDMX-JSON is a widely adopted format. It is a compact and efficient representation of statistical data in JSON (JavaScript Object Notation) format. SDMX-JSON organizes data into datasets, series, observations, and dimensions, following a hierarchical structure. This format allows for easy parsing and manipulation of data while maintaining its integrity and semantic meaning.

By leveraging the power of SDMX metadata and data formats, analysts and researchers can access standardized and interoperable data, enabling more efficient and accurate analysis, comparison, and sharing of statistical information across organizations and domains.

### SDMX Information Model (SDMX-IM): Data Structures

The SDMX Information model provides a way of modelling statistical data, structural metadata, reference metadata and the data exchange processes by the representation of concepts, relationships, constraints, rules, and operations to specify data semantics for a chosen statistical domain.
Content oriented guidelines are a set of propositions to harmonize the application of SDMX information model to provide concrete solutions for the interoperability in the exchange of data and metadata between organisations. 

A DSD (key family) specifies a set of descriptor concepts (concepts that describe and identify a set of data). It tells which concepts are dimensions (identification and description), and which are attributes (just description), and it gives the attachment level for each of these concepts, based on the packaging structure (Data Set, Group, Series/Section, Observation) as well as their status (mandatory versus conditional). It also specifies which code lists provide possible values for the dimensions, as well as the possible values for the attributes, either as code lists or as free text fields. A data structure definition can be used to describe time series data, cross-sectional and multidimensional table data.

Most of the concepts are actually SDMX Cross Domain Concepts, of the SDMX Content Oriented Guidelines (COG), which should be applied wherever possible.


3.4.2 Code Lists
In order to be able to exchange and understand data, it needs to be declared, what the possible values for each concept are. Besides the possibility to define text formats for free text values, which are usually used for attributes, the commonly used approach is to attach lists of values.
Such a list of possible values is known as a ‘code list’. Each value on that list has a languageindependent abbreviation - a ‘code’ - and a language-specific description. This helps us avoid problems of translation in describing the data: the code can be translated into descriptions in any language without having to change the code associated with the data itself.  Wherever possible, the values for code lists are taken from international standards; such as those proposed in the SDMX Content-Oriented Guidelines or other internationally standardized ones (for example ISO-code lists for countries and currencies).

Example query to explore the meaining of the values of a specific dimension: `http://sdmx.istat.it/SDMXWS/rest/codelist/IT1/CL_STATCIV2/`


[SDMX self-learning package No. 4 Student book - Data Structure Definition](https://circabc.europa.eu/ui/group/8828dd71-a744-4914-b019-361aec02b6bb/library/836ed87f-e167-467f-9952-a72310e23676/details)

### ISTAT and SDMX

The National Institute of Statistics (ISTAT) allows access to its data warehouse (http://dati.istat.it/) through various methods. The REST API access is not widely known, but it is very convenient, although poorly documented. The following istruction are taken from [OnData](https://ondata.github.io/guida-api-istat/) and enriched with our tests.

There is no dedicated documentation available on their official web service page or in the existing guides. However, there is a reference to "RESTful API" on this page: http://sdmx.istat.it/SDMXWS/.

### How to query the APIs

The base URL for access is http://sdmx.istat.it/SDMXWS/rest/. From this, you can query the metadata and data using an HTTP GET request, practically from any client.

To test the APIs and explore the results we used [Postman API platform](https://www.postman.com/).

### Accessing Metadata

This is the URL structure for accessing metadata:

http://sdmx.istat.it/SDMXWS/rest/resource/agencyID/resourceID/version/itemID?queryStringParameters

Some notes:
- `resource` (required): the resource you want to query (including `categorisation`, `categoryscheme`, `codelist`, `conceptscheme`, `contentconstraint`, `dataflow`, and `datastructure`).
- `agencyID`: the identifier of the agency exposing the data (here it is IT1).
- `resourceID`: the ID of the resource you want to query (some examples will be provided later).
- `version`: the version of the artifact you want to query.
- `itemID`: the ID of the element (for element schemes) or hierarchy (for hierarchical code lists) to be returned.
- `queryStringParameters`:
  - `detail`: the desired level of information. Possible values are `allstubs`, `referencestubs`, `allcompletestubs`, `referencecompletestubs`, `referencepartial, and `full`. The default is `full`.
  - `references`: the related references to be returned. Possible values are `none`, `parents`, `parentsandsiblings`, `children`, `descendants`, `all`, and `any`. The default is `none`.

An example is retrieving the `dataflows`, which is the list of queryable data flows. The URL for retrieving it is http://sdmx.istat.it/SDMXWS/rest/dataflow/IT1. From URL we found the dataset we needed, with ID 28_185.

### Applying Filters

To obtain the correct dimensions of the dataset, it is useful to apply filters, especially for large datasets like the one in question. To apply filters, you need to know the data schema of the dataflow you want to query. This is described in the metadata resource called "datastructure," which can be queried by ID. But what is the ID of the dataset on immigrations, as mentioned in the datastructure?

The ID is specified in the dataflow. Referring back to the previous information, the ID referenced in the datastructure for immigrations is `DCIS_MIGRAZIONI`.

For our example the query will be:
`http://sdmx.istat.it/SDMXWS/rest/datastructure/IT1/DCIS_MIGRAZIONI/`

By querying the API, we will obtain an XML output that includes the `structure:DimensionList` tag, which contains the list of dimensions, i.e., the data schema of the dataset. In our case, the dimensions are as follows: `FREQ`, `ETA_NUM`, `PAESE_CITTAD`, `TERR_DEST`, `REF_AREA_0`, `STATO_EST_DEST`, `STATO_EST_PROV`, `TIPO_TRASF`, `SESSO`, `TIPO_INDDEM`.

What is the meaning of these abbreviations?
The answer to this question is provided by the metadata resource - the package - called `codelist`. It can be queried by ID, but we need to know the IDs of the various fields, which are written in the XML file mentioned above.

For example, for the "FREQ" field, we read <Ref id="CL_FREQ" version="1.0" agencyID="IT1" package="codelist" class="Codelist" />, which means that the corresponding ID in the codelist is "CL_FREQ". The URL to be used to retrieve information about this field is another metadata query URL: http://sdmx.istat.it/SDMXWS/rest/codelist/IT1/CL_FREQ.

The output will be an XML file, where it states that it represents the "Frequency". The XML also contains the possible values for this dimension, which for "CL_FREQ" correspond to the underlying pairs of ID and value.

#### Which codes/values are available to filter a specific dataflow by dimension?

We can explore the values available for each dimension with this query:
`http://sdmx.istat.it/SDMXWS/rest/availableconstraint/28_185`

The output is an XML file, where, for example, it can be seen that for this specific dataflow, the available value for the dimension FREQ (Frequency) is A, which represents annual frequency.

#### Build the URL to filter a dataflow, perform an attribute query

An attribute query should list the attribute values in the URL following this pattern:

`http://sdmx.istat.it/SDMXWS/rest/data/flowRef/fieldValue1.fieldValue2.fieldValue3/`

The example above shows a data structure with three fields. The field values should be separated by a dot (.) character. If a value is not specified, no filter will be applied for that field/dimension. Therefore, an URL like:

`http://sdmx.istat.it/SDMXWS/rest/data/flowRef/../`

is equivalent to not applying any filter.

For the dataflow we are using in this guide, an example could be filtering for all immigrats to Italy (not divided by province), coming from Africa, of every age and of both sexs:

`http://sdmx.istat.it/SDMXWS/rest/data/28_185/.TOTAL.AFR.ITTOT.ITTOT....9.`

Since one of our goals is to provide new datasets and visulize them, we can query the numbers of all immigrants, divided by year, for each continent:

`http://sdmx.istat.it/SDMXWS/rest/data/28_185/.TOTAL.EU27_FOR+EUR_NEU27+AFR+ASI+AME+OCE.ITTOT.ITTOT....9.`

By using these queries, we can collect different datasets from just one source.

With this technique, we obtain an SDMX-ML file in XML format. We then transform it to JSON and clean it in the dedicated Jupyter Notebook called `D1_cleaning.ipynb`. The cleaned data is saved in a dedicated folder named 'Clean'.

To display the data in our React app, we simply save a constant with the URL of our GitHub repository that points to our new [JSON file in raw version](https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/.ipynb_checkpoints/continent_data-checkpoint.json).

### Dataset n.

Source, Title, Viewed in date, Link
License
Metadata (Provided or Not provided)
Content description

### **D1(a) - Resident foreign population by region 2019-2023**

Source: **Istat (IstatData)**
Title: **Stranieri residenti al 1° gennaio | Resident foreigners on 1st January**
Viewed in date (DD/MM/YY): **10/06/23**
Link: [https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_FOREIGNIM/DCIS_POPSTRRES1/IT1,29_7_DF_DCIS_POPSTRRES1_1,1.0](https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_FOREIGNIM/DCIS_POPSTRRES1/IT1,29_7_DF_DCIS_POPSTRRES1_1,1.0)

License: **Creative Commons License – Attribution – 3.0 (CC BY) -** [https://www.istat.it/en/legal-notice](https://www.istat.it/en/legal-notice)

Metadata: Provided in [SDMX](https://developers.italia.it/en/api/istat-sdmx-rest.html) and descriptive text at [http://siqual.istat.it/SIQual/visualizza.do?id=7779937&refresh=true&language=EN](http://siqual.istat.it/SIQual/visualizza.do?id=7779937&refresh=true&language=EN)

This dataset was used to see the total number of resident immigrants, the average age and the distribution over the Italian territory. The first two data are related to year 2022, while the last, in conjunction with D1(b), respresent the distrubition on the italian territory from between 2018 and 2022.

### **D1(b) - Resident foreign population by region 2001-2019**

Source: **Istat (IstatData)**
Title: **Popolazione residente ricostruita - Anni 2001-2019 | Estimated resident population - Years 2001-2019**
Viewed in date (DD/MM/YY): **02/11/23**
Link: [https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_INTCENSPOP/DCIS_RICPOPRES2011/IT1,164_164_DF_DCIS_RICPOPRES2011_1,1.0](https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_INTCENSPOP/DCIS_RICPOPRES2011/IT1,164_164_DF_DCIS_RICPOPRES2011_1,1.0)

License: **Creative Commons License – Attribution – 3.0 (CC BY) -** [https://www.istat.it/en/legal-notice](https://www.istat.it/en/legal-notice)

Metadata: Provided in [SDMX](https://developers.italia.it/en/api/istat-sdmx-rest.html) and descriptive text at [http://siqual.istat.it/SIQual/visualizza.do?id=7779937&refresh=true&language=EN](http://siqual.istat.it/SIQual/visualizza.do?id=7779937&refresh=true&language=EN)

This dataset was needed to implement D1(a) results with data relative to year 2018.

### **D2 - Total immigrants to Italy divided by continents**

Source: **Istat (IstatData)**
Title: **Migrazioni (Trasferimenti di residenza) | Migration (Transfer of residence)**
Viewed in date (DD/MM/YY): **30/05/23**
Link: [https://esploradati.istat.it/databrowser/#/it/dw/categories/IT1,POP,1.0/POP_MIGRATIONS/DCIS_MIGRAZIONI/IT1,28_185_DF_DCIS_MIGRAZIONI_3,1.0](https://esploradati.istat.it/databrowser/#/it/dw/categories/IT1,POP,1.0/POP_MIGRATIONS/DCIS_MIGRAZIONI/IT1,28_185_DF_DCIS_MIGRAZIONI_3,1.0)

License: **Creative Commons License – Attribution – 3.0 (CC BY) -** [https://www.istat.it/en/legal-notice](https://www.istat.it/en/legal-notice)

Metadata: Provided in [SDMX](https://developers.italia.it/en/api/istat-sdmx-rest.html) and descriptive text at [http://siqual.istat.it/SIQual/visualizza.do?id=0019400&refresh=true&language=IT](http://siqual.istat.it/SIQual/visualizza.do?id=0019400&refresh=true&language=IT)

From [SDMX Roadmap2025](https://sdmx.org/wp-content/uploads/SDMX_roadmap2025_FINAL.pdf), in the paragraph "Making data usage easier via SDMX (Simplification)" we can read at point 4:
The 2020 SDMX roadmap put a lot of emphasis on the exploration of links between SDMX and other standards (e.g. XBRL, RDF, DDI etc.). The new roadmap calls for follow-up implementation actions for improving cataloguing, navigation and discoverability (e.g. the publication of SDMX metadata assets as Linked Open Data, DCAT or Schema.org catalogues), as well as the exploration of how SDMX may relate to emerging standards for new use cases (e.g. Big Data/Microdata, Internet of Things etc.).

Content description: **The process makes it possible to quantify the non-EU foreigners who are legally present in Italy according to their socio-demographic characteristics and to measure the incoming flows (new permits issued during the year).**

### **D3 - Italian resident municipal population**

Source: **Istat (IstatData)**
Title: **Popolazione residente al 1° gennaio | Resident population  on 1st January**
Viewed in date (DD/MM/YY): **13/06/23**
Link: [https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_POPULATION/DCIS_POPRES1/IT1,22_289_DF_DCIS_POPRES1_1,1.0](https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_POPULATION/DCIS_POPRES1/IT1,22_289_DF_DCIS_POPRES1_1,1.0)

License: **Creative Commons License – Attribution – 3.0 (CC BY) -** [https://www.istat.it/en/legal-notice](https://www.istat.it/en/legal-notice)

Metadata: Provided in [SDMX](https://developers.italia.it/en/api/istat-sdmx-rest.html) and descriptive text at [http://siqual.istat.it/SIQual/visualizza.do?id=0019900&refresh=true&language=EN](http://siqual.istat.it/SIQual/visualizza.do?id=0019900&refresh=true&language=EN)







-- TODO: Fix datasets from here ------------------------------------------------

### *D4 - Level of education of foreign citizens*

|  | Metadata |
| --- | --- | 
| Source | [EUROSTAT](https://ec.europa.eu/eurostat) |
| Title | [Population by educational attainment level, sex, age, country of birth and NUTS 2 regions (%)](https://ec.europa.eu/eurostat/databrowser/view/edat_lfs_9917__custom_8389265/default/table?lang=en) |
| Last data update | 14/09/2023 23:00 | 
| License | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | 

### **DX - Citizenship foreign resident population**

Source: **Istat (IstatData)**
Title: **Stranieri residenti al 1° gennaio - Cittadinanza | esident foreigners on 1st January - Citizenship**
Viewed in date (DD/MM/YY): **15/06/23**
Link: [https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_FOREIGNIM/DCIS_POPSTRCIT1/IT1,29_317_DF_DCIS_POPSTRCIT1_1,1.0](https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_FOREIGNIM/DCIS_POPSTRCIT1/IT1,29_317_DF_DCIS_POPSTRCIT1_1,1.0)

License: **Creative Commons License – Attribution – 3.0 (CC BY) -** [https://www.istat.it/en/legal-notice](https://www.istat.it/en/legal-notice)

Metadata: Provided in [SDMX](https://developers.italia.it/en/api/istat-sdmx-rest.html) and descriptive text at [http://siqual.istat.it/SIQual/visualizza.do?id=0019700&refresh=true&language=EN](http://siqual.istat.it/SIQual/visualizza.do?id=0019700&refresh=true&language=EN)

https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_FOREIGNIM/DCIS_POPSTRCIT1/IT1,29_317_DF_DCIS_POPSTRCIT1_1,1.0

## 4. Quality analysis of the datasets

### 4.1 Information quality

This section considers the requirements, established according to the "Linee guida per la valorizzazione del patrimonio informativo pubblico" by AGID [https://docs.italia.it/italia/daf/lg-patrimonio-pubblico/it/bozza/aspettiorg.html#qualita-dei-dati](https://docs.italia.it/italia/daf/lg-patrimonio-pubblico/it/bozza/aspettiorg.html#qualita-dei-dati)). The four characteristics to control the level of information quality are:

- **Accuracy** (syntactic and semantic) - the data, and its attributes, correctly represent the real value of the concept or event to which it refers;
- **Coherence** - the data, and its attributes are not contradictory to other data regarding the context of the use of the owner administration;
- **Completeness** - the data is exhaustive for all its expected values and with respect to the relative entities (sources) that contribute to the definition of the procedure;
- **Currentness** (or timeliness of updating) - the data, and its attributes is of the "right time" (it is updated) with respect to the procedure to which it refers.

|  | Accuracy | Coherence | Completeness | Curentness |
| --- | --- | --- | --- | --- |
| D1 | YES | YES | YES | YES |
| D2 | NO - See point 1 | YES | YES | YES |
| D3 |  |  |  |  |
| D4 |  |  |  |  |

1. The dataset does not complain with the accuracy standard because…

## 5. Legal analysis (privacy, license, purpose, etc.)

This analysis is designed to assess compliance with legal and ethical aspects in accordance with European, state and local regulations and compliance with good practices relating to publication in open data.

The analysis pays particular attention to aspects related to privacy, licenses, and interest for the purpose of creating a service that balances the public function, transparency and rights of individual citizens.

### 5.1. Legal Checklist

|  | To check | D1 | D2 | D3 | D4 |
| --- | --- | --- | --- | --- | --- |
| 1. Privacy issues | 1.1 Is the dataset free of any personal data as defined in the Regulation (EU) 2016/679? |  |  |  |  |
|  | 1.2 Is the dataset free of any indirect personal data that could be used for identifying the natural person? If so, is there a law that authorizes the PA to release them? Or any other legal basis? Identify the legal basis. |  |  |  |  |
|  | 1.3 Is the dataset free of any particular personal data (art. 9 GDPR)? If so is there a law that authorizes the PA to release them? |  |  |  |  |
|  | 1.4 Is the dataset free of any information that combined with common data available on the web, could identify the person? If so, is there a law that authorizes the PA to release them? |  |  |  |  |
|  | 1.5 Is the dataset free of any information related to human rights (e.g. refugees, witness protection, etc.)? |  |  |  |  |
|  | 1.6 Do you use a tool for calculating the range of the risk of deanonymization? Do you anonymize the dataset? With which technique? Did you check the three mandatory parameters: singling out, linking out, inference out? |  |  |  |  |
|  | 1.7 Are you using geolocalization capabilities? Do you check that the geolocalization process can’t identify single individuals in some circumstances? |  |  |  |  |
|  | 1.8 Did you check that the open data platform respect all the privacy regulations (registration of the end-user, profiling, cookies, analytics, etc.)? |  |  |  |  |
|  | 1.9 Do you know who are in your open data platform the Controller and Processor of the privacy data of the system? |  |  |  |  |
|  | 1.10 Where the datasets are physically stored (country and jurisdiction)? Do you have a cloud computing platform? Do you have checked the privacy regulation of the country where the dataset are physically stored? (territoriality) |  |  |  |  |
| 2. Intellectual Property Rights of the dataset | 2.1 Do you have created and generated the dataset ? |  |  |  |  |
|  | 2.2 Are you the owner of the dataset? Who is the owner? |  |  |  |  |
|  | 2.3 Are you sure to not use third party data without the proper authorization and license ? Are the dataset free from third party licenses or patents? |  |  |  |  |
|  | 2.4 Do you have checked if there are some limitations in your national legal system for releasing some kind of datasets with an open license? |  |  |  |  |
| 3. License | 3.1 Do you release the dataset with an open data license? In case of the use of CC0 do you check that you have all the right necessary for this particular kind of license (e.g., jurisdiction)? |  |  |  |  |
|  | 3.2 Do you include the clause: "In any case the dataset can’t be used for re-identifying the person" ? |  |  |  |  |
|  | 3.3 Do you release the API (in case you have) with an open source license no |  |  |  |  |
| 4. Limitations on public access | 4.1 Do you check that the dataset concerns your institutional competences, scope and finality? Do you check if the dataset concerns other public administration competences? |  |  |  |  |
|  | 4.2 Do you check the limitations for the publication stated by your national legislation or by the EU directives ? |  |  |  |  |
|  | 4.3 Do you check if there are some limitations connected to the international relations, public security or national defence ? |  |  |  |  |
|  | 4.4 Do you check if there are some limitations concerning the public interest ? |  |  |  |  |
|  | 4.5 Do you check the international law limitations ? |  |  |  |  |
|  | 4.6 Do you check the INSPIRE law limitations for the spatial data? |  |  |  |  |
| 5. Economical Conditions | 5.1 Do you check that the dataset could be released for free ? |  |  |  |  |
|  | 5.2 Do you check if there are some agreements with some other partners in order to release the dataset with a reasonable price ? |  |  |  |  |
|  | 5.3 Do you check if the open data platform terms of service include a clause of “non liability agreement” regarding the dataset and API provided ? |  |  |  |  |
|  | 5.4 In case you decide to release the dataset to a reasonable price do you check if the limitation imposed by the new directive 2019/1024/EU are respected ? Are you able to calculate the “marginal cost”? Are you able to justify the “reasonable return on investment” limited to cover the costs of collection, production, reproduction, dissemination, preservation and rights clearance? There is a national law that justify your public administration to apply the “reasonable return of investment”? |  |  |  |  |
|  | 5.5 In case you decide to release the dataset to a reasonable price do you check the e-Commerce directive1 and regulation? |  |  |  |  |
| 6. Temporary aspects | 6.1 Do you have a temporary policy for updating the dataset ? |  |  |  |  |
|  | 6.2 Do you have some mechanism for informing the end-user that the dataset is updated at a given time to avoid mis-usage and so potential risk of damage ? |  |  |  |  |
|  | 6.3 Did you check if the dataset for some reason can’t be indexed by the research engines (e.g. Google, Yahoo, etc.) ? |  |  |  |  |
|  | 6.4 In case of personal data, do you have a reasonable technical mechanism for collecting request of deletion (e.g. right to be forgotten)? |  |  |  |  |

### 5.2 Licenses

## 6. Ethics analysis

## 7. Technical analysis (formats, metadata, URI, provenance)

### ISTAT
  Format: Excel, CSV, SDMX
  Metadata:
  URI:
  Provenance:

###OECD
  Format:
  Metadata:
  URI:
  Provenance:

###Immigrati.Stat
  Format: Excel, CSV, SDMX
  Metadata:
  URI:
  Provenance:


## 8. Sustainability of updating the datasets over time

## 9. Visualization

## 10. RDF assertion of the metadata