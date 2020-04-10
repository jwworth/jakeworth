const projects = [
  {
    title: 'Today I Learned',
    link: 'https://til.hashrocket.com',
    stack: 'Elixir, Phoenix, CirclCI, PostgreSQL, Heroku.',
    repo: 'https://github.com/hashrocket/tilex/',
    description:
      'TIL was my apprentice project at Hashrocket, and it has grown into a popular dev blog with 2000+ posts, millions of page views per year, the top-ranked answers on Google to many esoteric developer questions. It is also open-source, one of the first such server-rendered Phoenix application repositories available online. I, and many members of my team, used TIL to learn Elixir and develop our growing (now well-established) Elixir practice.',
    purpose:
      "The original purpose of this application was to help me develop my skills as a programmer and consultant while completing the Hashrocket apprenticeship. TIL now exists to catalogue the sharing and accumulation of my team's knowledge as it happens day-to-day. Posts have a 200-word limit, and posting is open to any Rocketeer as well as selected friends of Hashrocket. Today I maintain the project with my fellow Rocketeers.",
    stackExplanation:
      'The original TIL was a Rails app. I initiated an Elixir rewrite because I wanted to have an Elixir project to work on and possibly get my teammates involved in.',
    image: 'https://i.imgur.com/6JMNieU.png',
    lessonsLearned: 'Too many to mention.',
  },
  {
    title: 'The Bell',
    link: 'https://www.thebellisringing.com/',
    stack: 'Elixir, Phoenix, WebSockets, PostgreSQL, Gigalixir.',
    description:
      'The Bell is my COVID-19 social-distancing project— a way to stay connected when you’re apart.',
    purpose:
      'The purpose of this project was to prove an idea that I had in my head, in a weekend, while under COVID-19 quarantine. I wanted a way to feel connected with other people, build something simple and entertaining that defied a simple explanation, and direct visitors to a way to donate to relief efforts.',
    stackExplanation:
      'The concept drove my stack choices: I knew I wanted fast, real-time, multi-tenant connections, and Elixir is perfect for this use case. This was my first project using Gigalixir, which I chose because it offers platform-as-a-service without the limitations of Heroku.',
    image: 'https://i.imgur.com/HuvOHqP.png',
    lessonsLearned:
      'This project challenged me both as a designer and as a functional programmer. My main takeaway is that I enjoy building products that must rigidly adhere to my imagination.',
  },
  {
    title: 'Game of Life',
    link: 'https://conway.now.sh/',
    stack: 'React.js, TypeScript, Zeit.',
    repo: 'https://github.com/jwworth/conway',
    description:
      "This is my implementation of the classic cellular automaton / programming interview puzzle Conway's Game of Life.",
    purpose:
      'I used this project as a vehicle to better learn React.js and contribute to a growing collection of implementations my team at Hashrocket had completed as side projects.',
    stackExplanation:
      "As an exclusively frontend, visual presentation, I chose React.js and TypeScript. For hosting, Zeit's push-to-deploy features and global CDN has been an outstanding choice.",
    image: 'https://i.imgur.com/gsfpbsx.gif',
  },
  {
    title: 'Ceramic Nation',
    link: 'http://novel.herokuapp.com',
    repo: 'https://github.com/jwworth/novel',
    stack: 'Ruby, Ruby on Rails, CircleCI, PostgreSQL, Heroku.',
    description:
      'Ceramic Nation is an auto-generated online novel, one chapter per day, supported by a Ruby gem I wrote that produces sometimes enlightening, often humorously nonsensical content based on a corpus of classic texts.',
    purpose:
      'The Hashrocket Chicago office had a brief obsession with Markov engines. As a new developer on the team, I embraced my FOMO and wrote my own implementation.',
    stackExplanation:
      'Ceramic Nation is classic Rails CRUD, which was within my comfort zone when I wrote the application (ca. 2015).',
    image: 'https://i.imgur.com/aKp8pH3.png',
  },
]

export default projects
