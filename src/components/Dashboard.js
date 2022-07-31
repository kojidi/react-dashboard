import React from "react";
import Home from "./Contents/Home";
import Posts from "./Contents/Posts";
import Setting from "./Contents/Setting";
import Theme from "./Contents/Theme";
import Users from "./Contents/Users";
import '../styles/Dashboard.css';

class Dashboard extends React.Component {
    constructor() {
        super();

        this.state = {
            menu: [
                {title: "Home", id: 1},
                {title: "Setting", id: 2},
                {title: "Users", id: 3},
                {title: "Posts", id: 4},
                {title: "Theme", id: 5},
            ],
            contents: [
                {id: 1, content: <Home />},
                {id: 2, content: <Setting />},
                {id: 3, content: <Users />},
                {id: 4, content: <Posts />},
                {id: 5, content: <Theme />},
            ],
            activeContent: {id: 1, content: <Home />}
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {    
        this.setState({
            activeContent: this.state.contents[e.target.dataset.id - 1]
        })
    }

    render() {
        const {menu, activeContent} = this.state;
        return (
            <div className="dashboard">
                <ul>
                    {menu.map(m => (
                        <li className={m.id === activeContent.id ? "menu active" : "menu"} onClick={this.handleClick} data-id={m.id} data-title={m.title} key={m.id}>{m.title}</li>
                    ))}
                </ul>

                <div>
                    {activeContent.content}
                </div>
            </div>
        )
    }
}

export default Dashboard;