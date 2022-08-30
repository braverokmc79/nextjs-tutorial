import { Menu } from 'semantic-ui-react'
import { useRouter } from 'next/router';

const Gnb = () => {
    const router = useRouter();
    let activeItem;

    if (router.pathname === "/") {
        activeItem = "home";
    } else if (router.pathname === "/about") {
        activeItem = "about";
    } else if (router.pathname === "/cosmetics") {
        activeItem = "cosmetics";
    }

    function goLink(e, data) {
        if (data.name === "home") {
            router.push("/");
        } else if (data.name === "about") {
            router.push("/about");

        } else if (data.name === "cosmetics") {
            router.push("/cosmetics");
        }
    }



    return (
        <Menu inverted>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={goLink} />
            <Menu.Item name='about' active={activeItem === 'about'} onClick={goLink} />
            <Menu.Item name='Contact Us' active={activeItem === 'contact'}
                onClick={() => {
                    router.push("/contact");
                }}
            />

            <Menu.Item name='cosmetics' active={activeItem === 'cosmetics'} onClick={goLink} />
        </Menu>

    );
};

export default Gnb;