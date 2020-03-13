# project0
Full Stack Web application practice

Day 1: 
Created a wireframe using LucidCharts for home page. Looking for a minimalistic and fun design. 
Started programming the home page. The navbar was created using vanilla javascript, DOM, HTML, CSS. Utilized the old <span>, class, and display: inline-block trick to create a horizontal field. 
Some problems that occured during the process was creating an image element. Consistently kept inserting "src=" in the setAttribute() method, even though the parameters were validName: string, value: string. Another problem was that apparently javascript doesn't allow two of the same elements to be created in the same scope. Potential fix to this could be to create a new variable that holds the second similar element.  

Day 2:
Modified the CSS of navbar using Flexbox web style model. Properties were a little strange compared to the normal box model I usually use. The pros I can see so far is that it auto adjusts itself when the browser is zoomed out and in on. It might be useful with more practice. I also added the main contents into the home page; About me, Project list, Games. One messy aspect of flexbox is that it gets rid of bullets. Apparently display: flex eliminates the list styles entirely. Which is kind of a shame. Need to find a workaround for that problem. 