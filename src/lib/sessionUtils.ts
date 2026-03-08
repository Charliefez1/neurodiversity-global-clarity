export type SessionType = 'awareness' | 'champions' | 'managers' | 'leaders';

export const sessionTypeLabels: Record<SessionType, string> = {
  awareness: 'Awareness',
  champions: 'Champions',
  managers: 'Managers',
  leaders: 'Leaders',
};

export function canBookSessionType(completedStages: SessionType[], type: SessionType): boolean {
  if (type === 'awareness') return true;
  if (type === 'champions') return completedStages.includes('awareness');
  if (type === 'managers') return completedStages.includes('awareness');
  if (type === 'leaders')
    return completedStages.includes('awareness') &&
      (completedStages.includes('champions') || completedStages.includes('managers'));
  return false;
}

export const IN_PERSON_LOCATIONS = [
  'Manchester Head Office',
  'York Rail Operating Centre',
  'Manchester Piccadilly',
  'Manchester Airport',
  'Leeds',
  'Liverpool Lime Street',
  'York',
  'Newcastle',
  'Edinburgh Waverley',
  'Glasgow Central',
  'Ardwick Traincare Centre',
  'Longsight Depot',
  'York Leeman Road Depot',
] as const;

export function generateSessionTitle(
  sessionType: SessionType,
  isOnline: boolean,
  date: Date
): string {
  const label = sessionTypeLabels[sessionType];
  const mode = isOnline ? 'Online' : 'In Person';
  const dateStr = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  return `Neurodiversity Global - ${label} ${mode} - ${dateStr}`;
}
