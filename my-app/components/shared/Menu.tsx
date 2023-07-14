
"use client";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "./../ui/navigation-menu"

const Menu = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex flex-col lg:flex-row gap-5">
                <NavigationMenuItem> Male </NavigationMenuItem>
                <NavigationMenuItem> Female </NavigationMenuItem>
                <NavigationMenuItem> Kids </NavigationMenuItem>
                <NavigationMenuItem> All products </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>

    )
}
export default Menu

