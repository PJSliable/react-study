import {
    Route,
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function AppMovie() {
    return <Router>
        <Switch>
            <Route path="/hello">
                <h1>Hello</h1>
            </Route>
            <Route path="/movie/:id">
                <Detail />
            </Route>
            <Route path="/">
            <Home />
            </Route>
        </Switch>
    </Router>;
}

export default AppMovie;
