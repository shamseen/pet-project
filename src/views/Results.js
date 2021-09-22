

export default function Results(props) {
  console.log(props.mockData)


  const renderedData = props.mockData.map(data => {
    return(
        <ul>
            <span id="animal">Animal: {data.Animal} <br></br></span>
            <span id="species">Breed: {data.Breed} <br></br></span>
            <span id="age">Age: {data.Age}</span>
        </ul>
    )
})

  return (
    <div>

      {renderedData}

    </div>
 );
}