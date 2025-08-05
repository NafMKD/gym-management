import { ThemeProvider } from "@/context/theme-context";
import { SearchProvider } from "@/context/search-context";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { Header } from "@/components/layout/header";
import { TopNav } from "@/components/layout/top-nav";
import { Search } from "@/components/search";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Main } from "@/components/layout/main";
import Cookies from "js-cookie";
import "../../css/app.css";

const topNav = [
    { title: "Overview", href: "dashboard/overview", isActive: true },
    { title: "Customers", href: "dashboard/customers", isActive: false, disabled: true },
    { title: "Products", href: "dashboard/products", isActive: false, disabled: true },
    { title: "Settings", href: "dashboard/settings", isActive: false, disabled: true },
];

export default function AdminLayout({ children }) {
    const defaultOpen = Cookies.get("sidebar_state") !== "false";

    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <SearchProvider>
                <SidebarProvider defaultOpen={defaultOpen}>
                    <AppSidebar />
                    <SidebarInset>
                        <Header>
                            <TopNav links={topNav} />
                            <div className="ml-auto flex items-center space-x-4">
                                <Search />
                                <ProfileDropdown />
                            </div>
                        </Header>

                        <Main>{children}</Main>
                    </SidebarInset>
                </SidebarProvider>
            </SearchProvider>
        </ThemeProvider>
    );
}
