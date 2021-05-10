import './App.css';
import 'antd/dist/antd.css';
import ScriptTableControl from "./scriptTableControl";
import {Layout, Button, Row, Col, Table} from "antd";


const {Header, Content, Footer, Sider} = Layout;


function App() {
    return (
        <div className="App">
            <nav className={"site-header"}>
                <div></div>
                <div></div>
                <div></div>
            </nav>
            <Layout>
                <Sider theme={"light"}>
                    <Button>test</Button>
                    <Button>test</Button>
                </Sider>
                <div style={{margin: '8px', marginTop: "8px", marginBottom: "-8px"}}>
                    <ScriptTableControl/>
                </div>
            </Layout>
        </div>
    );
}

export default App;
