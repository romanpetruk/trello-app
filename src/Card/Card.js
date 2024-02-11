function Card(props) {

	const { card } = props;

  return (
    <>
		  <div className="card-item">
			  {card.image &&
				  <img className="card-cover" src={card.image} />
			  }
      
        {card.title}
      </div>
    </>
  );
}

export default Card;
