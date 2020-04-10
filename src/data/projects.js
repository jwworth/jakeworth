const projects = [
  {
    title: 'Today I Learned',
    link: 'https://til.hashrocket.com',
    stack: 'Elixir, Phoenix, CircleCI, PostgreSQL, Heroku',
    repo: 'https://github.com/hashrocket/tilex/',
    description:
      "TIL was my apprentice project at Hashrocket. It has grown into a popular developers blog with 2000+ posts, millions of page views per year, and the top-ranked answers on Google to many esoteric developer questions. It's also open-source, one of the first such server-rendered Phoenix application repositories available online. I, and members of my team, used TIL to learn Elixir and develop our growing Elixir practice.",
    purpose:
      "The original purpose of this application was to help me develop my skills as a programmer and consultant while completing the Hashrocket apprenticeship. Today, TIL exists to catalogue the sharing and accumulation of my team's knowledge as it happens day-to-day. Posts have a 200-word limit, and posting is open to any Rocketeer as well as selected friends of Hashrocket. I serve as the core maintainer of the project, collaborating with several interested Hashrocket colleagues and alumni.",
    stackExplanation:
      'TIL started out was a Ruby on Rails app. In 2016, I initiated an Elixir rewrite because I wanted to learn Elixir and see how Phoenix stacked up against Ruby on Rails.',
    image: 'https://i.imgur.com/6JMNieU.png',
    lessonsLearned: 'Phoenix stacks up well against Ruby on Rails.',
  },
  {
    title: 'The Bell',
    link: 'https://www.thebellisringing.com/',
    stack: 'Elixir, Phoenix, WebSockets, PostgreSQL, Gigalixir',
    description:
      'The Bell is my COVID-19 social-distancing project— a way to stay connected when you’re apart.',
    purpose:
      'The purpose of this project was to realize an idea that I had in my head, in one weekend, under COVID-19 social distancing. I wanted to feel connected with other people, build something simple and whimsical that defied a simple explanation, and direct visitors to a charity supporting the relief efforts.',
    stackExplanation:
      'The concept drove my choices: I wanted fast, real-time, multi-tenant connections, and Elixir with WebSockets are built for this use case. This was my first project on Gigalixir, which I chose because it offers platform-as-a-service without limitations.',
    image: 'https://i.imgur.com/HuvOHqP.png',
    lessonsLearned:
      'This project challenged me as a designer and as a functional programmer. How to I make it look amazing? How to I make it feel amazing? My takeaway is that I enjoy building products that rigidly adhere to my imagination.',
  },
  {
    title: 'Game of Life',
    link: 'https://conway.now.sh/',
    stack: 'React.js, TypeScript, Zeit',
    repo: 'https://github.com/jwworth/conway',
    description:
      "This is my implementation of the classic cellular automaton / interview puzzle, Conway's Game of Life.",
    purpose:
      'I used this project as a vehicle to better learn React.js and contribute to a growing collection of implementations by my team at Hashrocket.',
    stackExplanation:
      "As an frontend-heavy, visual presentation, I chose React.js with TypeScript. For hosting, Zeit's push-to-deploy and global CDN have been outstanding.",
    image: 'https://i.imgur.com/gsfpbsx.gif',
  },
  {
    title: 'Ceramic Nation',
    link: 'http://novel.herokuapp.com',
    repo: 'https://github.com/jwworth/novel',
    stack: 'Ruby, Ruby on Rails, CircleCI, PostgreSQL, Heroku',
    description:
      'Ceramic Nation is an auto-generated internet novel, one chapter per day, supported by a Ruby gem I wrote. It produces sometimes enlightening, humorously nonsensical content based on a corpus of classic literature.',
    purpose:
      "Hashrocket Chicago had a brief obsession with Markov engines, which produce content based on a statistical analysis of past content. Imagine listening to a person talk for an hour and then guessing what they'll say next; that's Markov. As a new developer on the team, I embraced FOMO and wrote my own implementation.",
    stackExplanation:
      'Ceramic Nation is classic Rails CRUD, which was my go-to stack when I wrote the application (ca. 2015).',
    image: 'https://i.imgur.com/aKp8pH3.png',
  },
]

export default projects
