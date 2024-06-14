
export const Title = ({ label = 'Test Label', className = '' }) => {
  return (
    <h1 className={ `text-4xl text-center font-semibold mb-10 ${ className }` }>
      { label }
    </h1>
  );
}
