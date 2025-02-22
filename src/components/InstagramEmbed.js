import Instafeed from "instafeed.js";
import React, { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
    const feed = new Instafeed({
      accessToken: "EAAS1x7car5kBO26tcSZCsExnZANd5bDHlCu0On1200mtkq0u3x6rYu9WZByR1ZB69MVNTV78SjoWZBdKzQMOukAtUAesS5MGzHCNUhnSymkvGM4TyHyibk2dLWXG1kSN0QIrEuQJHySJ5NUd7cBSfXgCyArtfSYG5YQpsaocuw1CoiMqd6ZA9ZBRje2jwT0sPe19UclDMi4r7mcKbHiz5eei2iyBva7gfhmkCIKrtJZArvfs7xqDV2HGiI0uFZAGI9x5wXHTXKqlXZAbUZD",
      target: "instafeed",
      template: '<a href="{{link}}"><img src="{{image}}" /></a>',
    });
    feed.run();
  }, []);

  return <div id="instafeed"></div>;
};

export default InstagramFeed;
