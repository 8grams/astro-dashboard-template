export type Nav = {
  link: string;
  name: string;
};

export interface SidebarNav extends Nav {
  icon: string;
  childrens?: Nav[];
}
