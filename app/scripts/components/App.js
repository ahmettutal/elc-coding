import Menu from "../../../.local_server/js/main.min";
import Home from "./home";

/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     *
     * @returns JSX
     * @memberof App
     */
    render() {
        return (
            < div
        className = "App" >
            < Menu / >
            < Home / >
            < /div>
    )
        ;
    }

}

// Export out the React Component
module.exports = Home;