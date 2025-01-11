import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";

const objet1 = {id: 1, name: 'Name'};

function Home(){
    return (
        <Layout>
            Home Page
            <Card>
                {objet1.name}
            </Card>
        </Layout>
    );
}

export {Home};