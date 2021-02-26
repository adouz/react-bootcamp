import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Avatar } from 'antd';
import "antd/dist/antd.css";

const { Meta } = Card;

const card = {
    title: 'Elon Musk',
    description: 'Elon Reeve Musk FRS is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX',
    avatar: 'http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg',
    cover: 'https://media.vanityfair.com/photos/574f453fbdf148e4205f29df/16:9/w_1200,h_630,c_limit/hive-contributor-profile-elon-musk.jpg'
};

const element = (
    <div>
        <Card
            style={{ width: 300 }}
            cover={
            <img
                alt="cover"
                src={card.cover}
            />
            }
        >
            <Meta
                avatar={<Avatar src={card.avatar} />}
                title={card.title}
                description={card.description}
            />
        </Card>
    </div>
);

ReactDOM.render(element, document.getElementById('root'));