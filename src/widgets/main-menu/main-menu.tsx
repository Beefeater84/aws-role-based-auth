import {TabMenu} from "primereact/tabmenu";
import {MenuItem} from "primereact/menuitem";

export default function MainMenu(){
    const items: MenuItem[] = [
        {
            label: 'Main',
            url: '/'
        },
        {
            label: 'Blue Team',
            url: '/blue-team'
        },
        {
            label: 'Red Team',
            url: '/red-team'
        },

        {
            label: 'About',
            url: '/about'
        }
    ]

    return (
        <TabMenu model={items}/>
    )
}