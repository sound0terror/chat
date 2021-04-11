import NavigationItem from "../../NavigationItem/NavigationItem";

const AnonymousMenu = () => {
    return (
        <>
            <NavigationItem to="/register" exact>Sign up</NavigationItem>
            <NavigationItem to="/login" exact>Login</NavigationItem>
        </>
    );
};

export default AnonymousMenu;
