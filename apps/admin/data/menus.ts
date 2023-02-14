const menus = ['attendance', 'activity', 'user', 'session'] as const;
type MenuKey = (typeof menus)[number];

export { menus };
export type { MenuKey };
