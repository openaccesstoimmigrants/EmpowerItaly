2023-18-11␣␣Stefano Renzetti␣␣<stefano.renzetti3@studio.unibo.it>

    * Updated `Footer.tsx` links.

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