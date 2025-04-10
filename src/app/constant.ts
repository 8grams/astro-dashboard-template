import type { SidebarNav } from "@/types/nav";

export const sidebar_navs: SidebarNav[] = [
  {
    name: "Dashboard",
    icon: "ti ti-chart-pie-filled",
    link: "/",
  },
  {
    name: "Layouts",
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
