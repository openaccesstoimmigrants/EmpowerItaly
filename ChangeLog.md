2023-07-01␣␣Stefano Renzetti␣␣<stefano.renzetti3@studio.unibo.it>

    * App.js (App): Added `GroupedBarChart.js` component added with ternary
        operators and fetched JSON data, created with our `SDMX-test.ipynb`
        from our GitHub Repository.

    * GroupedBarChart.js (GroupedBarChart): Created component to show the total
        immigrants to Italy divided per continent.

2023-06-30␣␣Stefano Renzetti␣␣<stefano.renzetti3@studio.unibo.it>

    * App.js (App): Test API ISTAT
    
    * Installed packages: CORS ()
        Support Cross-origin queries
        Clients written in Python, Java, .Net, etc. typically won't have any problems getting the data. But what about the HTML5/JavaScript clients running within a browser? Because of the Same-origin policy, these won't be able to access your web service without additional work, unless you enable the sharing of resources across domains. One way of doing that, is to configure your service to support CORS headers. Just make sure the CORS headers are also added in case of errors, else the JavaScript clients will be left clueless about why an error happened.

    * package.json: added `"proxy": "http://localhost:8080/"` as test to 
        fix CORS issue

2023-06-29␣␣Stefano Renzetti␣␣<stefano.renzetti3@studio.unibo.it>

    * App.js (App): Imported components and test API ISTAT
    
    * BarCharts.js (BarChart): Tested bar chart with Chart.js

    * Header.js (Header): Created component

    * Hero.js (Hero): Created component

    * Hypothesis.js (Hypothesis): Created component

    * Numbers.js (Numbers): Created component

    * Numconstants/index.js (navLinks, numbers): Created constants for menu in
        header and numbers in number component

    * BarCharts.js (unrelated_change): my changes made
    to myfile.ext but completely unrelated to the above

    * Installed packages: TailwindCSS