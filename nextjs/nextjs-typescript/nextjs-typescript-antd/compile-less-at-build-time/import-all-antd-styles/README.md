- nextjs
- TypeScript
- antd
- antd styles are compiled at build time
- styles of all antd components imported regardless if they are used or not

Future: Purge unused CSS
1. https://nextjs.org/docs/advanced-features/customizing-postcss-config
2. https://purgecss.com/guides/next.html#customize-postcss-configuration-next-js-9-3
3. https://purgecss.com/ant_design.html

Resource #3 explains that doing just #1/#2 will strip ui component lib styles and how to tell purgeCSS which antd styles to keep

[WAR CHEST HOME](/../../)

