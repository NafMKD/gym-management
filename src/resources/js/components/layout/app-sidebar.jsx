import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { NavGroup } from '@/components/layout/nav-group'
import { NavUser } from '@/components/layout/nav-user'
import { sidebarData } from '@/components/layout/data/sidebar-data'
import { useEffect } from "react";

export function AppSidebar(props) {
  useEffect(() => {
    console.log("%cAppLayout mounted", "color: red");
}, []);
  return (
    <Sidebar collapsible="icon" variant="floating" {...props}>
      <SidebarContent>
        {sidebarData.navGroups.map((group) => (
          <NavGroup key={group.title} {...group} />
        ))}
        
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
