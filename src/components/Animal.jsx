export default function Animal(props) {
  function local() {
    console.log(`The ${props.description} ${props.type} says hi`);
  }

  return (
    <tr>
      <button name={props.name} onClick={() => props.getStar(props.name)}>
        {props.star}
      </button>

      <td>{props.name}</td>
      <td>{props.type}</td>
      <td>{props.age}</td>
      <td>{props.description}</td>
      <button onClick={local}>Say hi</button>
    </tr>
  );
}
