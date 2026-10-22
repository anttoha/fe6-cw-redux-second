// Функція, яка додає в збережений стан ключі, яких там немає
export function mergeInitialState(saved, initial) {
  if (!saved) return initial;
  if (!initial) return saved;

  // Копіюємо збережений стан, щоб не мутувати оригінал безпосередньо
  const merged = { ...saved };

  for (const key in initial) {
    if (initial.hasOwnProperty(key)) {
      // Якщо ключа немає в збереженому стані, додаємо його з початкового
      if (merged[key] === undefined) {
        merged[key] = initial[key];
      } 
      // Якщо це об'єкт (і не null), можна зробити рекурсивне злиття для вкладених ключів
      else if (typeof initial[key] === 'object' && initial[key] !== null && typeof merged[key] === 'object' && merged[key] !== null) {
        merged[key] = mergeInitialState(merged[key], initial[key]);
      }
    }
  }

  return merged;
}
