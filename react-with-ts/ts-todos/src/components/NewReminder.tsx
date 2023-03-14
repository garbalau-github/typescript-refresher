import { useState } from 'react';

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

export const NewReminder = ({
  onAddReminder,
}: NewReminderProps): JSX.Element => {
  const [title, setTitle] = useState<string>('');

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    onAddReminder(title);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor='title'></label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id='title'
        type='text'
        className='form-control'
      />
      <button type='submit' className='btn btn-primary my-3'>
        Add Reminder
      </button>
    </form>
  );
};
