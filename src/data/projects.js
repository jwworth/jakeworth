const projects = [
  {
    title: 'Today I Learned',
    link: 'https://til.hashrocket.com',
    stack: 'Elixir, Phoenix, PostgreSQL, Heroku',
    repo: 'https://github.com/hashrocket/tilex/',
    description:
      "TIL was my apprentice project at Hashrocket. It has grown into a popular developers blog with 2000+ posts, millions of page views per year, and the top-ranked answers on Google to many an esoteric developer question. It's also open-source, one of the first such Phoenix repositories online. My team and I used TIL to learn Elixir and develop our growing Elixir practice.",
    purpose:
      "The purpose of this application was to help me develop my skills as a programmer. Today, TIL exists to catalogue the sharing and accumulation of Hashrocket's knowledge as it happens day-to-day. Posts have a 200-word limit, and posting is open to any Rocketeer as well as selected friends of Hashrocket. I maintain the codebase, collaborating with several interested Hashrocket colleagues and alumni.",
    stackExplanation:
      'TIL launched as a Ruby on Rails app. In 2016, I initiated an Elixir rewrite because I wanted to learn Elixir and see how Phoenix stacked up against Ruby on Rails.',
    image: 'https://i.imgur.com/6JMNieU.png',
    lessonsLearned:
      'Learning in public is a valuable offering. Elixir is a joy to write. Phoenix stacks up well against Ruby on Rails.',
  },
  {
    title: 'The Bell',
    link: 'https://www.thebellisringing.com/',
    stack: 'Elixir, Phoenix, WebSockets, PostgreSQL, Gigalixir',
    description:
      "The Bell is my COVID-19 social-distancing project— a way to stay connected when you're apart.",
    purpose:
      'The purpose of this project was to feel connected with other people, build something calming that defied simple explanations, and direct visitors to a charity supporting relief efforts.',
    stackExplanation:
      'The idea chose my stack: I wanted real-time, virtually unlimited connections, and Elixir with WebSockets exists for this use case. I chose Gigalixir because it offers platform-as-a-service without limitations on some core Elixir features.',
    image: 'https://i.imgur.com/HuvOHqP.png',
    lessonsLearned:
      'This project challenged me as a designer and as a programmer. How to I make the bell look and feel amazing? I felt success was binary: it was either engaging or it was not. My takeaway is that I enjoy building products that follow my imagination.',
  },
  {
    title: 'Game of Life',
    link: 'https://conway.now.sh/',
    stack: 'React.js, TypeScript, Zeit',
    repo: 'https://github.com/jwworth/conway',
    description:
      "This is my implementation of the classic cellular automaton and programming puzzle, Conway's Game of Life.",
    purpose:
      'I used this project as a vehicle to better learn React.js and contribute to a growing menagerie of implementations by my team at Hashrocket.',
    stackExplanation:
      "As a visual concept, I chose React.js with TypeScript. For hosting, Zeit's push-to-deploy and global CDN have been outstanding.",
    image: 'https://i.imgur.com/gsfpbsx.gif',
    lessonsLearned:
      "React is a fantastic platform for visual programs. TypeScript helps me feel more confident in code I didn't test-drive.",
  },
  {
    title: 'Ceramic Nation',
    link: 'http://novel.herokuapp.com',
    repo: 'https://github.com/jwworth/novel',
    stack: 'Ruby, Ruby on Rails, PostgreSQL, Heroku',
    description:
      'Ceramic Nation is an auto-generated internet novel, one chapter per day, supported by a Ruby gem I wrote called Remarkovable. It produces sometimes enlightening, nonsensical content based on a corpus of classic literature.',
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
