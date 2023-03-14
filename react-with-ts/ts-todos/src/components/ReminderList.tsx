import { Reminder } from '../types/Reminder';

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

export const ReminderList = ({
  items,
  onRemoveReminder,
}: ReminderListProps) => {
  return (
    <ul className='list-group'>
      {items.map((item) => (
        <li className='list-group-item' key={item.id}>
          <span>{item.title}</span>
          <button
            onClick={() => onRemoveReminder(item.id)}
            className='btn btn-outline-danger mx-4'
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
