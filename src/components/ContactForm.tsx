export default function ContactForm() {
  return (
    <form className='flex flex-col p-4'>
      <div className='flex space-x-4'>
        <input
          type='text'
          placeholder='First Name'
          className='bg-secondary focus:outline-none focus:ring-accent focus:ring-4 placeholder-slate-600 rounded-lg p-2 my-2 w-1/2'
        />
        <input
          type='text'
          placeholder='Last Name'
          className='bg-secondary focus:outline-none focus:ring-accent focus:ring-4 placeholder-slate-600 rounded-lg p-2 my-2 w-1/2'
        />
      </div>
      <input
        type='email'
        placeholder='Email'
        className='bg-secondary focus:outline-none focus:ring-accent focus:ring-4 placeholder-slate-600 rounded-lg p-2 my-2'
      />
      <input
        type='subject'
        placeholder='Subject'
        className='bg-secondary focus:outline-none focus:ring-accent focus:ring-4 placeholder-slate-600 rounded-lg p-2 my-2'
      />
      <textarea
        placeholder='Message'
        className='bg-secondary focus:outline-none focus:ring-accent focus:ring-4 placeholder-slate-600 resize-none rounded-lg p-2 my-2'
        rows={5}
        cols={40}
      />
      <button
        type='submit'
        className='bg-secondary hover:bg-accent rounded-lg p-2 my-2'>
        Submit
      </button>
    </form>
  );
}
