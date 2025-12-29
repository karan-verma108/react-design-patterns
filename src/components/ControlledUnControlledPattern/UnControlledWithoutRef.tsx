export default function UnControlledWithoutRef() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const password = formData.get('password');
    console.log('form data raw >>>', formData);
    console.log({ firstName, lastName, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='first name' type='text' name='firstName' />
      <input placeholder='last name' type='text' name='lastName' />
      <input placeholder='password' type='password' name='password' />
      <button type='submit'>submit</button>
    </form>
  );
}
