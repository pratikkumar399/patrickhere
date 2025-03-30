"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
    return (
        <div className="relative w-10 flex items-center justify-center">
            <NavbarMenu className="bottom-10" />
        </div>
    );
}

function NavbarMenu({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed bottom-10 inset-x-0 w-[16rem] mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="me">
                    {/* <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="">Web Development</HoveredLink>
                    </div> */}
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="blogs">
                    {/* <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="">Web Development</HoveredLink>
                    </div> */}
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="projects">
                    {/* <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="">Web Development</HoveredLink>
                    </div> */}
                </MenuItem>
            </Menu>
        </div>
    );
}
