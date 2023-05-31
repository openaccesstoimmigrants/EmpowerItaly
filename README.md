# Open Access

# EmpowerItaly: Exploring Immigrants' Contribution to Italian Economic Growth

## Possible hypothesis questions:

## A - Are immigrants in Italy more likely to be unemployed compared to the native population?

### This hypothesis question addresses the potential difference in unemployment rates between immigrants and native Italians. It allows to investigate the labor market dynamics and assess whether there might be disparities in employment opportunities for immigrants.

## B - Do immigrants contribute to the economic growth of Italy through their entrepreneurial activities?

### This hypothesis question focuses on the potential positive impact of immigrants on the economy by examining their entrepreneurial endeavors. It allows to investigate whether immigrants create new businesses, generate employment opportunities, and contribute to the overall economic development of Italy.

## 1. Introduction

Our project aims to provide a comprehensive analysis of the phenomenon of immigration in Italy. This topic is widely discussed by Italian politicians, but it is often based on assumptions rather than data. For instance, some people claim that "Italy has been invaded by migrants," as reported by articles like "[Siamo invasi dai migranti, la più grande tra le fake news](https://www.huffingtonpost.it/archivio/2017/06/28/news/siamo_invasi_dai_migranti_la_piu_grande_tra_le_fake_news-10640403/)." Other statements, like "an ethnic replacement is in act in order to delete Italian culture," are even more absurd, as reported by the article "[Italian minister sparks fury for saying immigration leads to ‘ethnic replacement’](https://edition.cnn.com/2023/04/19/europe/italy-immigration-lollobrigida-intl/index.html)."

We acknowledge that immigration is a complex topic that requires a multidimensional approach. Therefore, we focus on the contribution of migrants to the national economy as our main research question. Specifically, our hypothesis question explores the potential positive impact of immigrants on the economy by examining their entrepreneurial activities. We aim to investigate whether immigrants create new businesses, generate employment opportunities, and contribute to the overall economic development of Italy.

## 2. Scenario

EmpowerItaly aligns data from various sources to generate insights about past and current migrational flows throughout Italy. Specifically, we are interested in how the number of entrants has changed over time, and in analyzing where people are moving to and from. Additionally, we aim to analyze the level of education to explore active participation in Italy's economy. 

In order to obtain an exhaustive picture of the phenomenon, we will align:

1. Immigrants' nationality and distribution
2. Compare the educational level of both Italians and immigrants
3. Average salary and criminal rate per region
4. Employment and unemployment rate

### 2.1. The Open Data scenario

We believe in Open Data and want to integrate our project into the larger picture proposed by the United Nations and the [17 Sustainable Development Goals (SDGs)](notion://www.notion.so/%5B%3Chttps://www.un.org/sustainabledevelopment/sustainable-development-goals/%3E%5D(%3Chttps://www.un.org/sustainabledevelopment/sustainable-development-goals/%3E)), which were developed by an Open Working Group of 30 member states over a two-year process. The SDGs are designed to balance the three dimensions of sustainable development: economic, social, and environmental. Open Data can help achieve the SDGs by providing critical information on natural resources, government operations, public services, and population demographics. These insights can inform national priorities and help determine the most effective paths for action on national issues. In particular, for our project, we refer to the 16th goal: ***Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.*** The kind of government transparency provided by Open Data is critical to making institutions more accountable and inclusive.

### 2.2. The aims of EmpowerItaly

1. **Analyze the nature of the datasets**, its legal basis, ownership, quality, and accuracy, and ensure compliance with privacy rules in the EU.
2. **Analyze the datasets from an ethical point of view** to avoid discrimination, cognitive biases, and prejudice.
3. **Produce Linked Open Datasets as output**, including DCAT_AP metadata and license RDF.
4. **Design and develop visualizations** to effectively communicate and exploit the results.

To achieve our goal, we will follow this procedure:

1. **Define your research question:** Clarify the specific aspect of immigrant entrepreneurship we want to investigate. Refine our hypothesis question and determine the variables and data needed to address it.
2. **Gather data:** Identify relevant data sources that provide information on immigrant entrepreneurship in Italy. Look for datasets that include details on immigrant-owned businesses, employment generated, sectors, and other relevant factors. Ensure the data is reliable and covers the desired time period.
3. **Data preprocessing:** Clean and preprocess the data to ensure it's in a suitable format for analysis. This may involve handling missing values, addressing outliers, standardizing variables, and performing data transformations as needed.
4. **Data exploration and analysis:** Conduct exploratory data analysis to gain insights into the characteristics of immigrant entrepreneurship in Italy. Visualize the data using charts, graphs, and statistical summaries. Perform appropriate statistical analyses to test your hypothesis and identify any significant patterns or correlations.
5. **Interpretation and findings:** Analyze the results of our data analysis and interpret their implications. Discuss any observed trends, patterns, or relationships between immigrant entrepreneurship and economic growth in Italy. Highlight the positive contributions of immigrant entrepreneurs and their impact on job creation and innovation.
6. **Draw conclusions:** Based on our findings, draw conclusions about the role of immigrant entrepreneurship in Italy's economy. Discuss the potential benefits and resources that immigrants bring to the country through their entrepreneurial activities. Consider the limitations of our study and any recommendations for further research.
7. **Document your project:** Create a clear and well-structured report or presentation summarizing your project, including the research question, methodology, data sources, analysis techniques, and key findings. Make sure to cite your sources appropriately and include visualizations to enhance understanding.

### 2.3 How EmpowerItaly can contribute to E-Governance

In the context of E-Governance, EmpowerItaly might play a role in:

- raising awareness over the real status of immigration in Italy in order to promote ***inclusive societies for sustainable development***.
- ecc

## 3. Original datasets and mashup datasets

FOR THE GRUOP

Istat provides complaint open data (with SDMX metadata) only here → [https://esploradati.istat.it/databrowser/#/](https://esploradati.istat.it/databrowser/#/). 
Unfortunally data relative to immigration just goes down to 2019. 

### Dataset n.

Source, Title, Viewed in date, Link
License
Metadata (Provided or Not provided)
Content description

### D0 - Immigration by age group, sex and citizenship

Source: **EUROSTAT**
Title: **Immigration by age group, sex and citizenship - Online data code: MIGR_IMM1CTZ**
Viewed in date (DD/MM/YY): **30/05/23**
Link: [https://ec.europa.eu/eurostat/databrowser/view/MIGR_IMM1CTZ/default/table](https://ec.europa.eu/eurostat/databrowser/view/MIGR_IMM1CTZ/default/table)

License: **Creative Commons Attribution 4.0 International (CC BY 4.0) licence** [https://creativecommons.org/licenses/by/4.0/](https://creativecommons.org/licenses/by/4.0/)

Metadata: Provided in [SDMX](https://developers.italia.it/en/api/istat-sdmx-rest.html) and descriptive text at [https://ec.europa.eu/eurostat/cache/metadata/en/migr_immi_esms.htm](https://ec.europa.eu/eurostat/cache/metadata/en/migr_immi_esms.htm)

### D1 - An example of the data we need for each dataset

Source: **I.Stat**
Title: **Permessi di soggiorno dei cittadini non comunitari** (*Residence permits of non-EU citizens : [Province and citizenship](http://stra-dati.istat.it/index.aspx?queryid=4217)*)
Viewed in date (DD/MM/YY): **16/05/23**
Link: [http://dati.istat.it//Index.aspx?QueryId=60857](http://dati.istat.it//Index.aspx?QueryId=60857) - *REMINDER: In order to obtain the link you need to select the data you want (ex. from 2012 to 2022) and save the query (under “My Queries” on the web site) - THIS LINK SHOULD BE A PERSISTENT URI see this link →* [https://data.europa.eu/sites/default/files/d2.1.2_training_module_2.3_persistent_uri_design_and_management_en_edp.pdf](https://data.europa.eu/sites/default/files/d2.1.2_training_module_2.3_persistent_uri_design_and_management_en_edp.pdf)

License: **Creative Commons License – Attribution – 3.0 (CC BY) -** [https://www.istat.it/it/note-legali](https://www.istat.it/it/note-legali)

Metadata: Provided in [SDMX](https://developers.italia.it/en/api/istat-sdmx-rest.html) and descriptive text at [https://siqual.istat.it/SIQual/visualizza.do?id=7779008](https://siqual.istat.it/SIQual/visualizza.do?id=7779008)

Content description: **The process makes it possible to quantify the non-EU foreigners who are legally present in Italy according to their socio-demographic characteristics and to measure the incoming flows (new permits issued during the year).**

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

## 8. Sustainability of updating the datasets over time

## 9. Visualization

## 10. RDF assertion of the metadata