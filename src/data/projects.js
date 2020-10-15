const projects = [
  {
    uuid: '92cdf220-8f9f-4f87-bc38-5b2899e79dfb',
    title: 'Today I Learned',
    link: 'https://til.hashrocket.com',
    stack: 'Elixir, Phoenix, PostgreSQL, Heroku',
    repo: 'https://github.com/hashrocket/tilex/',
    description:
      "TIL was my apprentice project at Hashrocket. It has grown into a popular developers blog with 2000+ posts, millions of page views per year, and the top-ranked answers on Google to many an esoteric developer question. It's also open-source, one of the first such Phoenix repositories online. My team and I used TIL as a vehicle to learn Elixir and develop our growing Elixir practice.",
    purpose:
      "The purpose of this application was to help me develop my skills as a programmer. Today, TIL exists to catalogue the sharing and accumulation of Hashrocket's knowledge as it happens day-to-day. Posts have a 200-word limit, and posting is open to any Rocketeer as well as selected friends of Hashrocket. I maintain the codebase, collaborating with several interested Hashrocket colleagues and alumni.",
    stackExplanation:
      'TIL launched as a Ruby on Rails app. In 2016, I initiated an Elixir rewrite because I wanted to learn Elixir and see how Phoenix stacked up against Ruby on Rails.',
    image: 'https://i.imgur.com/6JMNieU.png',
    lessonsLearned:
      'Learning in public is a valuable offering. Elixir is a joy to write. Phoenix stacks up well against Ruby on Rails.',
  },
  {
    uuid: '00ffd5ac-93d0-4fe1-9509-4598a4e75414',
    title: 'React Explained',
    link: 'https://www.getrevue.co/profile/react-explained/',
    description:
      'Do you want to really (really!) learn React, while staying current on this exploding ecosystem? Subscribe to React Explained, a weekly newsletter of amazing, curated React news and resources, simply explained. It’s free! Subscribe now.',
    image: 'https://imgur.com/vu5MAzm.png',
  },
  {
    uuid: '5faab9e4-bf23-4021-8e2d-8156346cdb95',
    title: 'The Bell',
    link: 'https://www.thebellisringing.com/',
    stack: 'Elixir, Phoenix, WebSockets, PostgreSQL, Gigalixir',
    description:
      'The Bell was a COVID-19-inspired social-distancing code/art project I created and maintained from March until October of 2020. Over the life of the project, The Bell was clicked over 4K times by ringers around the world.',
    purpose:
      'The purpose of this project was to feel connected with other people, build something calming that defied simple explanations, and direct visitors to a charity supporting relief efforts.',
    stackExplanation:
      'The idea chose my stack: I wanted real-time, virtually unlimited connections, and Elixir with WebSockets exists for this use case. I chose Gigalixir because it offers platform-as-a-service without limitations on some core Elixir features.',
    image: 'https://i.imgur.com/C7PX353.gif',
    lessonsLearned:
      'This project challenged me as a designer and as a programmer. How to I make the bell look and feel amazing? I felt success was binary: it was either engaging or it was not. My takeaway is that I enjoy building products that follow my imagination.',
  },
  {
    uuid: '13b17d86-ff3f-4890-8450-e3f662c45e4b',
    title: 'Game of Life',
    link: 'https://conway.now.sh/',
    stack: 'React.js, TypeScript, Zeit',
    repo: 'https://github.com/jwworth/conway',
    description:
      "This is my implementation of the classic cellular automaton and programming puzzle, Conway's Game of Life.",
    purpose:
      'I used this project as a vehicle to better learn React.js and contribute to a growing menagerie of implementations by my team at Hashrocket.',
    stackExplanation:
      "I knew this project would be highly visual, so I chose React.js, and hard to test, so I added TypeScript. For hosting, Zeit's push-to-deploy and global CDN have been outstanding.",
    image: 'https://i.imgur.com/gsfpbsx.gif',
    lessonsLearned:
      "React is a fantastic platform for visual programs. TypeScript helps me feel more confident in code I didn't test-drive.",
  },
  {
    uuid: '99f717b0-b3b4-4d11-87ed-782177d50dc8',
    title: 'Ceramic Nation',
    link: 'http://novel.herokuapp.com',
    repo: 'https://github.com/jwworth/novel',
    stack: 'Ruby, Ruby on Rails, PostgreSQL, Heroku',
    description:
      'Ceramic Nation is an auto-generated internet novel, one chapter per day, supported by a Ruby gem I wrote called Remarkovable. It produces nonsensical, occasionally interesting writing based on a corpus of classic literature.',
    purpose:
      "Hashrocket Chicago had a brief obsession with Markov chains: programs that produce content based on a statistical analysis of past content. Imagine listening to a person talk for an hour and then guessing what they'll say next; that's Markov. As a new developer on the team, I embraced FOMO and wrote my own implementation.",
    stackExplanation:
      'Ceramic Nation is classic Ruby on Rails CRUD, which was my go-to stack when I wrote the application (ca. 2015).',
    image: 'https://i.imgur.com/aKp8pH3.png',
    lessonsLearned:
      'Generated content can be engaging. I can design my own frontend and feel satisfied with the result.',
  },
]

export default projects
