import { v4 as uuidv4 } from 'uuid';

import ProjOne from '../images/projectone.png';
import ProjTwo from '../images/projecttwo.png';
import ProjThree from '../images/projectthree.png';
import ProjFour from '../images/projectfour.png';
import ProjFive from '../images/projectfive.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Coinvrt',
    desc:
      'An application to track cryptocurrency data. I developed the website with my partners, Robert and Jordan. Repository for project: https://github.com/LukeMcHenry311/weekly-group-project URL of deployed application: https://lukemchenry311.github.io/weekly-group-project/',
    img: ProjOne,
  },
  {
    id: uuidv4(),
    name: 'Hogwarts Library',
    desc:
      'A fun app to find your harry potter house, or create wizards and spells with other users. Repository for project: https://github.com/Jsieler/wizard-sorting-quiz URL of deployed application: https://pacific-scrubland-02824.herokuapp.com/',
    img: ProjTwo,
  },
  {
    id: uuidv4(),
    name: 'Team-Up',
    desc:
      'Team-Up is a gaming social networking app, where you can follow your favorite games. As well as add users with similar gaming interests to team up! Repository for project: https://github.com/Jsieler/team-up URL of deployed application: https://github.com/Jsieler/team-up',
    img: ProjThree,
  },
  {
    id: uuidv4(),
    name: 'Weather Dashboard',
    desc:
      'A simple website to tell the 5-day weather forecast for any city in the world. Repository for assignment: https://github.com/LukeMcHenry311/Server-Side-Weather URL of deployed application https://lukemchenry311.github.io/Server-Side-Weather/',
    img: ProjFour,
  },
  {
    id: uuidv4(),
    name: 'Team-Profile-Generator-Xioma',
    desc:
      'A back-end node based application to generate a team-profile dynamically with minimal input from the user. Repository for assignment: https://github.com/LukeMcHenry311/Team-Profile-Generator-Xioma URL of deployed application: There is no deployed application for this assignment since it is back-end, to look over the assignment itself follow the instructions on the github link to install.',
    img: ProjFive,
  },
];

export default projects;
