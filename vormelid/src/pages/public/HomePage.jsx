import React, { useState } from 'react';
import "../../index.css"

const articles = [
  {
    title: "Formula 1 confirms F1 Sprint format tweaks for 2023 season",
    content: 'Formula 1 has confirmed adjustments to the F1 Sprint format for the six events that will be staged across the 2023 season, beginning with this weekend’s Azerbaijan Grand Prix. F1 Sprint made its debut back in 2021, with the original format seeing qualifying shifted to Friday and setting the grid for a new 100-kilometre dash on Saturday, which in turn determined the starting order for the main event on Sunday. However, tweaks for this year mean F1 Sprint will effectively become a standalone feature of race weekends when the format is used – with the outcome bearing no impact on the grid for the Grand Prix itself. Fridays will now include an FP1 session and standard qualifying session to set the grid for Sunday’s Grand Prix, while Saturdays will include the continuing 100km race with an additional, preceding qualifying session called the ‘Sprint Shootout’. The shootout will be a shorter session than traditional qualifying, with SQ1 set to run for 12 minutes, SQ2 for 10 minutes and SQ3 for eight minutes, and replaces the previous FP2 seen on the Saturday morning of Sprint weekends. New tyres are mandatory for each phase, with mediums for SQ1 and SQ2, and softs for SQ3. ',
    imageUrl: 'https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1677247231/content/dam/fom-website/manual/Misc/2022manual/2022Races/AzerbaijanGP/Saturday/StrategyGuide/Header%20BAKU.jpg.transform/6col/image.jpg'
  },
  {
    title: 'I told him I’d fly the ship!’ – Hamilton reveals plans to go to space with Elon Musk',
    content: 'Lewis Hamilton’s skills behind the wheel of an F1 car have often been described as out of this world – and that’s where the seven-time world champion could soon be travelling after confirming plans for a trip to space. More than 50 years on from the first humans reaching the moon, interest in space exploration only continues to grow, with several independent companies now working towards voyages alongside United States government agency NASA. He’s talking about going to Mars, but I’m ready to go to space at any stage. I told him that I’d fly the ship, but I think it’s all automated!” As for Hamilton’s current efforts on Earth, he sits fourth in the drivers’ standings after the first three rounds of the 2023 season, with his cause boosted by a second-place finish at Albert Park last time out.',
    imageUrl: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1682331418/hamilton-space.png.transform/6col/image.png'
  },
  {
    title: 'Tsunoda reveals the key areas he is looking to improve upon in 2023',
    content: 'I was doing training in Formula 3, Formula 2, but I would say how I think about training, and how I approach the training session, is a little bit different mentality than in Formula 3 and Formula 2.” He added: “I felt Formula 1 is really physically demanding. While it was one of my big limitations in my first year in Formula 1 in 2021 - those things I learned from other drivers but also learned from myself - and I think in the end those kinds of things have improved a lot. So, I’m pretty happy with my shape now.” Tsunoda was also asked where he felt he could improve going forward. While he says he can still improve physically, he also pointed to his “consistency” as one of the areas he was determined to progress in as he looks to stamp out the “unnecessary” crashes he had last year. “Of course, physical," he continued. "I think the physical thing is almost unlimited. You can train as much as you want, the more you have strength. It’s better. Also, a bit more consistency in terms of race pace."',
    imageUrl: 'https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1677765895/trackside-images/2023/F1_Grand_Prix_of_Bahrain___Previews/1470740408.jpg.transform/6col/image.jpg'
  },
  {
    title: 'Aston Martin explain how producing a competitive car has made race weekends ‘more challenging’',
    content: '“When you’ve got a competitive car, it does make the race weekend even more intense. You come home on Monday morning and you are exhausted – really exhausted. “A team at the back of the grid will say it’s working as hard as the teams at the front, and there’s a lot of truth in that, but the mental strain is much greater when you’re at the front. “There’s a lot more that you have to think of. You’re constantly risk-assessing: you want to make sure that you get absolutely everything right.” As for whether the car’s position in the pecking order has changed the way the team go about their racing, Stevenson argued to the contrary, while noting the side-effects that come from an increased level of competitiveness. “The processes are very similar,” continued Stevenson, who rose through the ranks to Chief Mechanic and then his current role. “We have to extract the maximum performance from the car and the team in every session.',
    imageUrl: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1682067095/alonso-sainz-hamilton.png.transform/6col/image.png'
  },
  {
    title: 'One point ‘not a fair reflection’ of Williams’ potential in 2023 says team boss Vowles',
    content: 'Taking stock of the situation in a video, Vowles said: “We’re three rounds through this 23-race season and encouraging, I think, is the primary word that comes to mind. “We’ve been there or thereabouts and [with] the ability to fight for points at every single one of those rounds so far, and that will continue as we go forward [to] the next few races. We have Baku coming up, and again, I think [it’s] a track that should suit the capability of our car. “Whilst we sit here 10th in the championship with just a point to our name, it’s not a fair reflection of the work that’s gone into this car so far this year, and the performance that the car can certainly have track on track.” With a month-long break soon coming to a close, Vowles is bracing himself for a busy next phase of the season, which kicks off via a back-to-back sequence in Azerbaijan and Miami – the races coming thick and fast until the summer shutdown.',
    imageUrl: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1682071268/albon-bahrain.png.transform/6col/image.png'
  }
];

function Article({ title, content, imageUrl }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="Article">
      <h2>{title}</h2>
      <p>{expanded ? content : content.slice(0, 200) + '...'}
        <button onClick={toggleExpanded}>{expanded ? 'Read less' : 'Read more'}</button>
      </p>
      {expanded && <img src={imageUrl} alt={title} />}
    </div>
  );
}


function HomePage() {
  return (
    <div>
      <h1 className='title'>Formula 1 News</h1>
      {articles.map((article, index) => (
  <Article key={index} title={article.title} content={article.content} imageUrl={article.imageUrl} />
))}
    </div>
  );
}

export default HomePage;
