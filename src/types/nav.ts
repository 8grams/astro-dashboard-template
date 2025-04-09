export type Nav = {
  link: string;
  name: string;
  icon: string;
};

export interface SidebarNav extends Nav {
  childrens?: Nav[];
}
