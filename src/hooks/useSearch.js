import { useEffect, useState } from "react";
import db from "../firebase";
import { fetchFromScraper } from "../utils";

export default (term) => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    setAnimes([]);

    db.collection("searchterms")
      .doc(term)
      .onSnapshot((searchterm) => {
        if (searchterm.exists) {
          db.collection("animes")
            .where("search_term", "==", term)
            .onSnapshot((snapshot) => {
              const animes = [];
              snapshot.forEach((doc) => animes.push(doc.data()));
              setAnimes(animes);
            });
        } else {
          const body = `project=default&spider=searchanimes&term=${term}`;
          fetchFromScraper(body);
        }
      });
  }, [term]);

  return animes;
};
