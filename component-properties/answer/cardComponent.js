import { Card, Avatar } from 'antd';
import "antd/dist/antd.css";

const { Meta } = Card;

const CardComponent = ({ title, description, avatar, cover }) => (
    <div>
        <Card
            style={{ width: 300 }}
            cover={
            <img
                alt="cover"
                src={cover}
            />
            }
        >
            <Meta
                avatar={<Avatar src={avatar} />}
                title={title}
                description={description}
            />
        </Card>
    </div>
);

export default CardComponent;