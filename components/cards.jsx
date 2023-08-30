
import styles from '../styles/Card.module.css'

class Card {
  constructor () {
    this.id = id;
    this.term = term;
    this.definition = definition;
  }
}

class CardList {
  constructor () {
    this.list = [];
  }

  newcard () {
    let c = new Card();
    this.list.push(c);
    c.id = this.list.length;
  }
}

const myCards = new CardList();

function render() {
  if (myCards != null) {
    // renderedCards = mycards.list.map( =>  )
  }
}



function Cards () {
  return (
    <div className="card">
      <h1>Term</h1>
    </div>
  );

};

export default Cards;