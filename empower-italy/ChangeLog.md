2023-23-11␣␣Stefano Renzetti␣␣<stefano.renzetti3@studio.unibo.it>

* `Map.tsx` updated, filtering just 2022.

* Created `Countries.tsx` to show top 10 immigrant citizenships in 2022.

2023-23-11␣␣Stefano Renzetti␣␣<stefano.renzetti3@studio.unibo.it>

* `Map.tsx` updated, to check the year been displayed.

* Created `Legend.tsx` to handle the legend in the map.

2023-23-11␣␣Stefano Renzetti␣␣<stefano.renzetti3@studio.unibo.it>

* Fixed `HorizontalBarChart.tsx`.

* Added packages `leaflet` with `yarn add leaflet` and `yarn add react-leaflet`
    and `yarn add -D @types/leaflet` for typescript support.

* Test map on `Map.tsx`.

2023-22-11␣␣Stefano Renzetti␣␣<stefano.renzetti3@studio.unibo.it>

* All home components responsive.

* Created `BarChart2.tsx` to test well formatted JSON.

* Deleted `BarChart.tsx` and renamed `BarChart2.tsx`.

* Created `Documentation.tsx` and removed `DocSidebar.tsx`.

2023-21-11␣␣Stefano Renzetti␣␣<stefano.renzetti3@studio.unibo.it>

* Created `BarChart.tsx` from not well formatted JSON. Not properly working.

2023-19-11␣␣Stefano Renzetti␣␣<stefano.renzetti3@studio.unibo.it>

* Created `BubbleChartMashUp.tsx` but data weren't definitive.

* Added ChartJs with `yarn add chart.js react-chartjs-2`.

2023-18-11␣␣Stefano Renzetti␣␣<stefano.renzetti3@studio.unibo.it>

* Updated `Footer.tsx` links.

* Testing `next-mdx-remote` added with `yarn add next-mdx-remote`

2023-11-11␣␣Stefano Renzetti␣␣<stefano.renzetti3@studio.unibo.it>

* Updated `Header.tsx` with active link style.

* Added `placeholder` and `priority` attribute to image in `Hero.tsx`

* Updated `Footer.tsx` with conditional links rendering.

2023-03-11␣␣Stefano Renzetti␣␣<stefano.renzetti3@studio.unibo.it>

* Updated `Numbers.tsx` with function to fetch and display data.

* Improved components CSS and upadated `global.css`.

* Added escape rule in `eslintrc.json`.

* Added function to get total immigrants number in `Numbers.tsx`.

* Added hero and hero's images in all pages.

* Added conditional rendering of links in `Footer.tsx`.

2023-28-10␣␣Stefano Renzetti␣␣<stefano.renzetti3@studio.unibo.it>

* Created folder `documentation` and page `page.tsx` to show it.

* Refactoring `Hero.tsx` to accept props. Defining content in `data.ts`.
    To do so I firstly created props in the component, than I specified the type of them.
    As last I imported the data also where I'm using the component, specifing
    the index of the `HERO_DATA` object.

2023-28-10␣␣Stefano Renzetti␣␣<stefano.renzetti3@studio.unibo.it>

* Created `data.ts` in `lib` folder for handle datasets metadata.

* Created folder `datasets` and page `page.tsx` to show it.

* Created `Datasets.tsx` component that fetches and diplay data from `lib/data.ts`.

* Created `Conclusion.tsx` component.

* Added animation in `tailwind.config.ts`.

* Added classes to `p` elemnts in `global.css`.

2023-28-10␣␣Stefano Renzetti␣␣<stefano.renzetti3@studio.unibo.it>

* Created `Footer.tsx` component and added to `layout.tsx`.

* Added `maxWidth` extension theme in `tailwind.config.ts`.

* Created `BarChart.tsx` component.

* Created `Numbers.tsx` component, the idea is to repeat the component with
    different props. To understand best way to retrive data to show.

* Created `Hypothesis.tsx` component.

* Created `Intro.tsx` component.

2023-26-10␣␣Stefano Renzetti␣␣<stefano.renzetti3@studio.unibo.it>

* Created `Header.tsx` component and added to `layout.tsx`.

* Created `Hero.tsx` component.

* App created with `yarn create next-app`.