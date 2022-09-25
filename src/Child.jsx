export function Child(props) {
  return (
    <div>
      <button onClick={() => props.toggle()}>Toggle</button>
    </div>
  );
}
