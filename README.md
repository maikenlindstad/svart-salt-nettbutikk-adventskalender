# Svart Salt Advent Calendar

In this repository, I am making an advent calender for my live e-commerce.

The idea is that the app will be fun to make, fun to use, and it will spread creepy holiday joy around
Norway.

Creepy? Yes!

My store is all about Witches and Halloween. While it is nice to have cosy cups of cocoa and jolly christmas
movies on the TV, it can also be fun to read about Krampus, fantasy monsters and terrible misfortunes.

It's all good fun, of course.

## Workflow

How I will go forward with the project.

### Scope

I want to make sure that the app is done by December 1th, which means that I have 10 days to make it. But I also want to spend some time marketing the calendar, so I will spend 3 days in the marketing section. This gives me 7 days to make the app.

### Design

A style tile to set the tone is always nice. Check out both style tile and prototype in the images/design folder. This would never stay in the app. This is just for repository purposes, so that you can have a look at it from here. The design was made earlier this year.

### Developing

I will start to make the app by adding an API. Since the app is small and short lived, I will make the API inside the app itself. Even though I won't add all my content yet, I will make sure the API provides enough
text to help in developing the app.

_js/data/api.js_

export default [
{
id: 1,
title: "Lorem ipsum",
...
},
{
id: 2,
title: "Lorem ipsum",
...
},
]

Next up I will loop through the array and make it show in index.html.

I start by adding an js/index.js where I want to get the array and loop through it.

_js/index.js_
import adventBoxes from "./data/api.js";

I make sure that there is a div/container to push to in index. This will look something like this:

_index.html_

<div class="adventCalendar"></div>

Then, back in index.js I loop through the array and push it to the index.html

_js/index.js_

const adventCalendarContainer = document.querySelector(".adventCalendar");

adventBoxes.forEach(adventBox => {
adventCalendarContainer.innerHTML += `<div class="advent-box">
                                          <h2>${adventBox.title}</h2>
                                          <p>${adventBox.content}</p>
                                        </div>`;
})

And I have made sure to add this code in the bottom of <body> in index.html
_index.html_

<script src="js/index.js" type="module"></script>

When this is done I know for sure that the api is showing on the front end.

However, I do not want the title to show. I want to be able to click the id: 1, 2, 3... and have the front end
show me what "hides" inside each box.

When clicking the ID I want the box to open and expose:

- Image
- Image source
- Title
- Paragraph
- Links
- Other

So I change the code to only display the id. I look at the prototype and add the style, so that it is easier to visualize how to code going forward.
