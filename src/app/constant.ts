import type { SidebarNav } from "@/types/nav";

export const sidebar_navs: SidebarNav[] = [
  {
    name: "Dashboard",
    icon: "ti ti-chart-pie-filled",
    link: "/",
  },
  {
    name: "Table",
    icon: "ti ti-table-filled",
    link: "/table",
  },
  {
    name: "Dropdown",
    icon: "ti ti-layout-filled",
    link: "#",
    childrens: [
      {
        name: "Sidebar",
        link: "/",
      },
      {
        name: "Stacked",
        link: "/",
      },
    ],
  },
];
