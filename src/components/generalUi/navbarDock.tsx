import {

    HomeIcon,
    Package,
    // SunMoon,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import Link from 'next/link';

const data = [
    {
        title: 'Home',
        icon: (
            <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
        ),
        href: '/',
    },
    {
        title: 'Blog',
        icon: (
            <Package className='h-full w-full text-neutral-600 dark:text-neutral-300' />
        ),
        href: '/blog',
    },
    // {
    //     title: 'Theme',
    //     icon: (
    //         <SunMoon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    //     ),
    //     href: '#',
    // },
];

export function NavbarDock() {
    return (
        <div className='absolute bottom-4 left-1/2 max-w-full -translate-x-1/2'>
            <Dock className='items-end pb-3'>
                {data.map((item, idx) => (

                    <Link
                        href={item?.href}
                        key={idx}
                    >
                        <DockItem

                            className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
                        >
                            <DockLabel>{item.title}</DockLabel>
                            <DockIcon>{item.icon}</DockIcon>
                        </DockItem>
                    </Link>
                ))}
            </Dock>
        </div>
    );
}
