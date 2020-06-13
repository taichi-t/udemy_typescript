export {};

let name = 'Atsushi';

name = 'ham';

let nickname = 'ham' as const;

nickname = 'ham';

let profile = {
  name: 'Atsushi',
  height: 178,
} as const;

// profile.name = 'ham';
// profile.height = 180;
