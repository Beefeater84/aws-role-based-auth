import {TabMenu} from "primereact/tabmenu";
import {MenuItem} from "primereact/menuitem";
import {useMemo} from "react";

export default function MainMenu() {
    const items: MenuItem[] = useMemo(() => [
        {
            label: 'Main',
            url: '/'
        },
        {
            label: 'Red Team',
            url: '/red-team'
        },
        {
            label: 'Blue Team',
            url: '/blue-team'
        },
        {
            label: 'About',
            url: '/about'
        },
        {
            label: 'Dont exist',
            url: '/noooooo'
        },
    ], [])

    return (
        <TabMenu model={items}/>
    )
}