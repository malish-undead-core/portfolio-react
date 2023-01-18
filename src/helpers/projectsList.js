import miniProjects from "../img/projects/miniProjects.png";
import miniProjectsBig from "../img/projects/miniProjectsBig.png";

import gameStore from "../img/projects/gameStore.png";
import gameStoreBig from "../img/projects/gameStoreBig.png";

// import parallaxJs from "../img/projects/parallaxJs.png";
import parallaxJsBig from "../img/projects/parallaxJsBig.png";
import parallaxJSVideo from "../video/parallax-JS.mp4"

import todoList from '../img/projects/todoList.png'
import todoListBig from '../img/projects/todoListBig.png'

import reactPosts from "../img/projects/reactPosts.png";
import reactPostsBig from "../img/projects/reactPostsBig.png";

import beeman from '../img/projects/beeman.png'
import beemanBig from '../img/projects/beemanBig.png'

import myResume from "../img/projects/myResume.png"
import myResumeBig from "../img/projects/myResumeBig.png"

// import parallaxJQuery from "../img/projects/parallaxJQuery.png"
import parallaxJQueryBig from "../img/projects/parallaxJQueryBig.png"
import parallaxjQueryVideo from "../video/parallax-jQuery.mp4"


const projects = [
    {
        id: '0',
        title: 'My Mini Projects',
        img: miniProjects,
        imgBig: miniProjectsBig,
        skills: 'JavaScript, HTML, CSS',
        gitHubLink: 'https://github.com/malish-undead-core/mini-projects.git',
    },
    {
        id: '1',
        title: 'Game Store',
        img: gameStore,
        imgBig: gameStoreBig,
        skills: 'ReactJS, HTML, CSS',
        gitHubLink: 'https://github.com/malish-undead-core/game-store.git',
        gitHubPage: 'https://malish-undead-core.github.io/game-store'
    },
    {
        id: '2',
        title: 'Parallax JS',
        // img: parallaxJs,
        imgBig: parallaxJsBig,
        video: parallaxJSVideo,
        skills: 'JS, HTML, CSS',
        gitHubLink: 'https://github.com/malish-undead-core/parallax-JS.git',
        gitHubPage: 'https://malish-undead-core.github.io/parallax-JS'
    },
    {
        id: '3',
        title: 'Todo List',
        img: todoList,
        imgBig: todoListBig,
        skills: 'ReactJS, HTML, CSS',
        gitHubLink: 'https://github.com/malish-undead-core/todo-react.git',
        gitHubPage: 'https://malish-undead-core.github.io/todo-react'
    },
    {
        id: '4',
        title: 'React Posts',
        img: reactPosts,
        imgBig: reactPostsBig,
        skills: 'ReactJS, HTML, CSS, Axios',
        gitHubLink: 'https://github.com/malish-undead-core/react-posts.git',
        gitHubPage: 'https://malish-undead-core.github.io/react-posts'
    },
    {
        id: '5',
        title: 'Beeman',
        skills: 'JavaScript, jQuery, HTML, CSS, PHP',
        img: beeman,
        imgBig: beemanBig,
        gitHubLink: 'https://github.com/malish-undead-core/beeman.git',
        gitHubPage: 'https://malish-undead-core.github.io/beeman'
    },
    {
        id: '6',
        title: 'My Resume',
        skills: 'HTML, CSS',
        img: myResume,
        imgBig: myResumeBig,
        gitHubLink: 'https://github.com/malish-undead-core/my-resume.git',
    },
    {
        id: '7',
        title: 'Parallax jQuery',
        skills: 'JavaScript, jQuery, HTML, CSS',
        // img: parallaxJQuery,
        imgBig: parallaxJQueryBig,
        video: parallaxjQueryVideo,
        gitHubLink: 'https://github.com/malish-undead-core/parallax-jQuery.git',
        gitHubPage: 'https://malish-undead-core.github.io/parallax-jQuery'
    }
];

export { projects }