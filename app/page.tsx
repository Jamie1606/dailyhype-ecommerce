"use client";

import { NavigationMenu, NavigationMenuLink, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="px-12 mt-4 flex items-center">
        <label className="font-bold text-3xl uppercase">DailyHype</label>
        <div className="ms-12">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </div>
  );
}
