const aboutLink = document.querySelector("#about");
const portfolioLink = document.querySelector("#portfolio");
const contactLink = document.querySelector("#contact");
const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio");
const contact = document.querySelector(".contact");
const projects = document.querySelectorAll(".project");
const projectsContainer = document.querySelector(".projects");
const showcase = document.querySelector(".showcase");
const back = document.querySelectorAll(".back");
const form = document.querySelector("form");
const success = document.querySelector(".sent");
const screenshots = document.querySelector(".screenshots");
const body = document.querySelector("body");
const showcaseLinks = document.querySelector("#showcaseLinks");
const githubLink = document.querySelector("#githubLink");
const liveLink = document.querySelector("#liveLink");
const synopsis = document.querySelector(".synopsis");
const projectsData = {
  "campusExplorer": {
    title: "Campus Explorer",
    imgs: [{
      img: "./assetts/photos/campusexplorer.png",
      caption: `The capstone project for the UBCx MicroMasters Software Development program was very backend heavy. It was broken into 4 sprints to mock 
                agile development. In the first sprint I developed a testing suite of more than 100 tests using Mocha and Chai that tested my projects abilities to 
                interpret a query language and ensure the correct results were being returned. In the second sprint I built the query language using typescript and created a 
                backend that was able to interpret queries and display the results.`
    }, {
      img: "./assetts/photos/campusexplorerresults.png",
      caption: `In the third sprint, I extended the query language to allow advanced features such as grouping and performing manipulations on the data like 
                takeing the average, sum, min, and max of the dataset. I also added the ability to query XML files in addition to CSV files. In the fourth sprint, I created a front end interface 
                and deployed the application to heroku`
    }],
    tech: ["css", "html", "ts", "ajax", "node"],
    desc: "Using Typescript and without the help of third-party libraries," + "I created a domain specific language that can be used to query data according to" + "the specifications set forth in the class's EBNF. I wrote a program that would parse" + "zipped files that contained either CSV or XML documents that encoded information about" + "specific classes or buildings on the UBC campus. The DSL has the ability to perform" + "complex queries including chained and/or statements, can group data together, and perform" + "calculations such as min, max, count, sum, and average. The final sprint involved developing a" + "RESTful application that utilized the back end and provided endpoints to post new data to be parsed" + "and saved on the server, a UI to complete and view the results of queries, and delete datasets." + "While not required, I decided to publish my project to Heroku, the link is included here.",
    github: "https://github.com/ccunnin8/CapstoneProject",
    link: "https://peaceful-mesa-96455.herokuapp.com"
  },
  "collab": {
    title: "Collaborate",
    tech: ["ts", "firebase", "node", "html", "css", "sass", "bulma"],
    imgs: [{
      img: "./assetts/photos/collab1.png",
      caption: `This is a project that I built using Node and Firebase for the backend and React for the front end. I used the Bulma CSS framework
                to quickly create a nice looking landing page.`
    }, {
      img: "./assetts/photos/collab2.png",
      caption: `The register page I made uses vanilla JS to walk the user through a three page sign up form and validates the from through HTML and because that can easily be disabled, JS as well.`
    }, {
      img: "./assetts/photos/collab3.png",
      caption: "Once signed up users can log in. This is the default login that is displayed if the user is not logged in and tries to access the app."
    }, {
      img: "./assetts/photos/collab4.png",
      caption: `This is the homepage for the app portion of the project. The search, newsfeed, request, profile, and teams sections are all React components. Under the search box is a list of users that are logged on and the user can filter users by typing in the search box. 
                Users can create a new "Tweet" by typing in the input above the newsfeed and the newsfeed shows the latest 10 tweets. The avatar for the anonymous user is undefined because it was not set, but shows the user's avatar when it is set.`
    }],
    desc: "This was a project that I made that uses Node, React, Firebase, HTMl/CS/JS, and Bulma. Users can register, login in, message each other, tweet, send requests to join teams, view profiles, and view teams.",
    github: "https://github.com/ccunnin8/collab"
  },
  "drawingEditor": {
    title: "Drawing Editor",
    tech: ["java"],
    imgs: [{
      img: "./assetts/photos/drawingEditorGIF.gif",
      caption: `This project was made for the UBCx Software Construction class. The purpose of this class was to learn design principles. In the final project we had to extend
                a java program. This program allows a user to draw shapes and the UI will play different tones for different lengths of time depending on the location and size of the shape. 
                We had to allow the program to user ovals in addition to rectangles, extract out different classes decrease coupling.`
    }],
    desc: "Project I made for Software Construction class. It is built using the Java language.",
    github: "https://github.com/ccunnin8/software_construction_1_final"
  },
  "appointments": {
    title: "Appointments",
    tech: ["python", "django", "javascript", "html", "css", "sql"],
    imgs: [{
      img: "./assetts/photos/appointment.png",
      caption: `This is a project that I made while attending Coding Dojo Bootcamp. It allows users to track their appointments!
                It uses Django, Python, HTML, CSS, and Javascript. Users can register and login in from the main screen.`
    }, {
      img: "./assetts/photos/appointment2.png",
      caption: `The main application screen allows users to view their current and past tasks. They can edit or delete these tasks. Clicking on these links open seperate pages but 
                the application uses AJAX to add a new appointment`
    }],
    github: "https://github.com/ccunnin8/django/tree/master/appointments",
    desc: "Django project I made while attending Coding Dojo. Uses Django, Python, Javascript, Ajax, HTML, CSS"
  },
  "stockphotos": {
    title: "Stock Photos",
    tech: ["css", "html", "javascript"],
    imgs: [{
      img: "./assetts/photos/stockphotos.png",
      caption: `This is a project that I made for TeamTreehouse techdegree that uses HTML and CSS to replicate the PDF given and to optimize performance so that the page loads as fast as possible.
                This was done by replacing external CSS files with CDNs where applicable and reducing the size of images, while attempting to retain image quality.`
    }],
    github: "https://github.com/ccunnin8/performance",
    link: "https://ccunnin8.github.io/performance/",
    desc: "Project I made for TeamTreehose Techdegree Program"
  },
  "dashboard": {
    title: "Custom Dashboard",
    tech: ["css", "html", "javascript"],
    imgs: [{
      img: "./assetts/photos/dashboard.png",
      caption: `This is a custom dashboard that was made using HTMl, CSS, and Javascript. It is fully responsive and was built to with a mobile first methodology.
                It uses ChartJS for the graphs.`
    }],
    github: "https://github.com/ccunnin8/web_app_dashboard",
    link: "https://ccunnin8.github.io/web_app_dashboard/",
    desc: "Project I made for TeamTreehouse Techdegree Program"
  },
  "lightbox": {
    title: "Custom Lightbox",
    tech: ["css", "html", "javascript", "jquery"],
    imgs: [{
      video: "./assetts/photos/lightboxVIDEO.mp4",
      caption: "Custom lightbox effect using jQuery that mimics lightbox plugins. Creates a  "
    }],
    github: "https://github.com/ccunnin8/photo_gallery/blob/master/index.html",
    link: "https://ccunnin8.github.io/photo_gallery/"
  },
  "dungeon": {
    title: "Dungeon Game",
    tech: ["react", "javascript", "css", "html"],
    link: "https://codepen.io/Corey8804/pen/RGPpyX",
    imgs: [{
      img: "./assetts/photos/dungeon.png",
      caption: `This project uses React to create a 2-dimensional game where the user can move the blue piece through different rooms in a dungeon. The green pieces are food.
                The object of the game is to find the exit to the next room (the black circle). Beware of the red pieces as they are enemies and will kill you if you happen upon them.
                The user can cheat by turning off the lights, but the real challenge is traversing the dungeon in the dark.`
    }],
    desc: "This is a project I made using ReactJS for FreeCodeCamp.com. It was created on codepen.com"
  },
  "gameoflife": {
    title: "Game of Life",
    tech: ["react", "javascript", "css", "html"],
    link: "https://codepen.io/Corey8804/pen/kkYkGZ",
    imgs: [{
      img: "./assetts/photos/gameoflife.png",
      caption: `This project uses ReactJS to recreate "Conway's Game of Life". The rules of the game are as follows (from wikipedia): 
        The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
        Any live cell with fewer than two live neighbors dies, as if by underpopulation.
        Any live cell with two or three live neighbors lives on to the next generation.
        Any live cell with more than three live neighbors dies, as if by overpopulation.
        Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
        The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.`
    }],
    desc: "This is a project I made using ReactJS for FreeCodeCamp.com. It was created on codepen.com"
  },
  "meteors": {
    title: "Meteors D3 Map",
    tech: ["d3", "javascript", "css", "html"],
    link: "https://codepen.io/Corey8804/pen/rLqJpa",
    imgs: [{
      img: "./assetts/photos/meteors.png",
      caption: "This is a map I made using D3.js, that plots different meteor sites around the world. The size of the dot is related to the size of the meteor. You can hover above a dot to get more information about the meteor"
    }],
    desc: "Project I made using D3js for FreeCodeCamp"
  },
  "surfacetemp": {
    title: "Surface Temp D3 Graph",
    tech: ["d3", "javascript", "css", "html"],
    link: "https://codepen.io/Corey8804/pen/KrZRPb",
    imgs: [{
      img: "./assetts/photos/surfacetemp.png",
      caption: `This is a graph I amde using D3js that plots the different surface temperatures of earch in different months starting from 1753 ending in 2015.
                The darker red colors indicate a higher surface temperature.`
    }],
    desc: "Project I made using D3js for FreeCodeCamp"
  }
}; // function scroll() {
//     const synopsis = document.querySelector(".synopsis");
//     const homepage = document.querySelector(".homepage");
//     synopsis.classList.add("hide");
//     homepage.classList.remove("hidden");
// }

aboutLink.addEventListener("click", () => {
  if (!("hidden" in synopsis.classList)) {
    synopsis.classList.add("hidden");
  }

  about.classList.remove("hidden");
  portfolio.classList.add("hidden");
  contact.classList.add("hidden");
});
portfolioLink.addEventListener("click", () => {
  if (!("hidden" in synopsis.classList)) {
    synopsis.classList.add("hidden");
  }

  portfolio.classList.remove("hidden");
  about.classList.add("hidden");
  contact.classList.add("hidden");
});
contactLink.addEventListener("click", () => {
  if (!("hidden" in synopsis.classList)) {
    synopsis.classList.add("hidden");
  }

  contact.classList.remove("hidden");
  about.classList.add("hidden");
  portfolio.classList.add("hidden");
});

for (const project of projects) {
  project.addEventListener("click", function () {
    // scroll to top automatically
    this.scrollTo(0, 0); // get the name of the project through the data attribute 

    const name = this.dataset.name;
    const {
      title,
      imgs,
      tech,
      desc,
      github
    } = projectsData[name]; // use data to set fields for template 

    showcase.querySelector("h1").innerText = title;
    showcase.querySelector(".description").innerText = desc;

    if ("github" in projectsData[name]) {
      githubLink.setAttribute("href", github);
      githubLink.parentElement.classList.remove("hidden");
    } // check and see if the site has a libe link


    if ("link" in projectsData[name]) {
      liveLink.setAttribute("href", projectsData[name].link);
      liveLink.parentElement.classList.remove("hidden");
    }

    let count = 0; // loop through screenshot + descriptions and display them

    if ("imgs" in projectsData[name]) {
      for (const img of imgs) {
        const screenshot = document.createElement("div");
        screenshot.classList.add("screenshot");
        let newImg;

        if (img.video) {
          newImg = document.createElement("video");
          newImg.setAttribute("src", img.video);
          newImg.setAttribute("autoplay", true);
        } else {
          newImg = document.createElement("img");
          newImg.setAttribute("src", img.img);
        }

        const desc = document.createElement("div");
        desc.classList.add("desc");
        const p = document.createElement("p");
        desc.innerText = img.caption;
        desc.appendChild(p);
        newImg.setAttribute("alt", "picture of screenshot for " + title); // alter order with each screenshot

        if (count % 2 === 0) {
          screenshot.appendChild(newImg);
          screenshot.appendChild(desc);
        } else {
          screenshot.appendChild(desc);
          screenshot.appendChild(newImg);
        }

        screenshots.appendChild(screenshot);
        count++;
      }
    } // showcase.querySelector("img").setAttribute("src",img);


    showcase.classList.remove("hidden");
    projectsContainer.classList.add("hidden");
    window.scrollTo(0, 0);
  });
}

for (const b of back) {
  b.addEventListener("click", () => {
    showcase.classList.add("hidden");
    projectsContainer.classList.remove("hidden"); // reset innerHTML so that projects don't keep appending to template 

    screenshots.innerHTML = ""; // reset link hrefs 

    githubLink.setAttribute("href", "#");
    liveLink.setAttribute("href", "#");
    liveLink.parentElement.classList.add("hidden");
    githubLink.parentElement.classList.add("hidden");
    window.scrollTo(0, 0);
  });
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const name = e.target.name.value;
  const company = e.target.company.value;
  const phone = e.target.phone.value;
  const email = e.target.email.value;
  const subject = e.target.subject.value;
  const body = e.target.body.value;
  const _gotcha = e.target._gotcha.value;
  const data = {
    name,
    company,
    phone,
    _replyto: email,
    _subject: subject,
    body,
    _gotcha
  }; //    const request = new XMLHttpRequest();
  //    request.open("POST", "https://formspree.io/coreyjjc@me.com", true);
  //    request.setRequestHeader("Content-Type", "application/json");
  //    request.send(data);

  form.reset();
  success.classList.remove("hidden");
  success.classList.add("fade-in");
});