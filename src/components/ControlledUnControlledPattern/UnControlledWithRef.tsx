import { useRef } from 'react';

export default function UnControlledWithRef() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const password = passwordRef.current?.value;
    console.log({ firstName, lastName, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='first name'
        type='text'
        id='firstName'
        name='firstName'
        ref={firstNameRef}
      />
      <input
        placeholder='last name'
        type='text'
        id='lastName'
        name='lastName'
        ref={lastNameRef}
      />
      <input
        placeholder='password'
        type='password'
        id='password'
        name='password'
        ref={passwordRef}
      />
      <button type='submit'>submit</button>
    </form>
  );
}
