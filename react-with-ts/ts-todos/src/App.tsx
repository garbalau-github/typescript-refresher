import { useEffect, useState } from 'react';
import './App.css';
import { ReminderList } from './components/ReminderList';
import { Reminder } from './types/Reminder';
import { NewReminder } from './components/NewReminder';

// Fetching Service
import ReminderService from './services/Reminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async (): Promise<void> => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  };

  const removeReminder = async (id: number): Promise<void> => {
    const result = reminders.filter((reminder) => reminder.id !== id);
    setReminders(result);
  };

  const addReminder = async (title: string): Promise<void> => {
    const newReminder = await ReminderService.addReminder(title);
    // setReminders([newReminder, ...reminders]);
  };

  return (
    <div>
      <NewReminder onAddReminder={addReminder} />
      <br />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
