import React from "react";
import { Route, Switch } from "react-router-dom";
//引入子路由组件
import Index from "./Index/index";
import House from "./House";
import News from "./News";
import User from "./User";
//引入样式
import "./index.scss";
//引入antd
import { TabBar } from "antd-mobile";

let tabs = [
  {
    title: "首页",
    icon: "icon-ind",
    path: "/home",
  },
  {
    title: "找房",
    icon: "icon-findHouse",
    path: "/home/house",
  },
  {
    title: "资讯",
    icon: "icon-infom",
    path: "/home/news",
  },
  {
    title: "我的",
    icon: "icon-my",
    path: "/home/user",
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: this.props.location.pathname,
      hidden: false,
    };
  }

  render() {
    return (
      <div className="Home">
        {/* 配置嵌套路由 */}
        <Switch>
          <Route exact path="/home" component={Index}></Route>
          <Route path="/home/house" component={House}></Route>
          <Route path="/home/news" component={News}></Route>
          <Route path="/home/user" component={User}></Route>
        </Switch>
        <div className="listBar">
          <TabBar
            unselectedTintColor="#333"
            tintColor="lime"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            {tabs.map((v) => (
              <TabBar.Item
                title={v.title}
                key={v.title}
                icon={<span className={`iconfont ${v.icon}`}></span>}
                selectedIcon={<span className={`iconfont ${v.icon}`}></span>}
                selected={this.state.selectedTab === v.path}
                onPress={() => {
                  this.setState({
                    selectedTab: v.path,
                  });
                  this.props.history.push(v.path);
                }}
              ></TabBar.Item>
            ))}
          </TabBar>
        </div>
      </div>
    );
  }
}

export default Home;
