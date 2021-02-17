# Component properties
## Instructions

- in the exercise [user-card](https://github.com/adouz/react-bootcamp/tree/main/user-card) you just made a card for Elon musk only but what if we want to re-use the same card for multiple people?
- create a function component `<Card />` in a new file that takes the propreties `title, description, avatar, cover` and return an `ant design` [card component](https://ant.design/components/card/), and using the following array of objects to render the cards using your component inside `index.js` file

```js
const cards = [
    {
        title: 'Elon Musk',
        description: 'Elon Reeve Musk FRS is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX.',
        avatar: 'https://i.imgur.com/KN5KC9i.jpeg',
        cover: 'https://i.imgur.com/r7A2qYi.jpg'
    },
    {
        title: 'Albert Einstein',
        description: 'Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics.',
        avatar: 'https://i.imgur.com/tXWU1Zj.jpeg',
        cover: 'https://i.imgur.com/TqPdNrR.jpg'
    },
    {
        title: 'Nikola Tesla',
        description: 'Nikola Tesla was a Serbian-American inventor, electrical engineer, mechanical engineer, and futurist best known for his contributions to the design of the modern alternating current electricity supply system.',
        avatar: 'https://i.imgur.com/S3b0qFS.jpeg',
        cover: 'https://i.imgur.com/BHVYN.jpg'
    }
];
```
## your end result should look like this:
<img src="./component-properties.png">

## Reference
- https://reactjs.org/docs/lists-and-keys.html
- https://ant.design/components/card/
- https://ant.design/components/avatar/
