import React from 'react';
//import ReactDOM from 'react-dom';
import Home from '../pages/containers/home'
import {render} from 'react-dom';
import data from '../playlist/api.json';
//import Playlist from './src/playlist/components/playlist';
//ReactDOM.render("que voy ha renderizar", donde lo hare)
const homeContainer = document.getElementById('home-container')

//render(<Media type="video" title='Porque aprender React' author="Gabriela Guaman" image="./images/covers/cover.jpg" />, app);
//render(<Playlist  data={data}/>, app)
render(<Home data={data} />, homeContainer)
