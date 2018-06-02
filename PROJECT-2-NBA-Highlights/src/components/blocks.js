import React from "react";
import { Link } from "react-router-dom";
import Reveal from "react-reveal/Reveal";

const generateBlocks = ({ blocks }) => {
    if (blocks) {
        return blocks.map(item => {
            return (
                <div key={item.id}>
                    <Reveal effect="fadeInUp" className={`item ${item.type}`}>
                        <div className="veil" />
                        <div
                            className="image"
                            style={{
                                background: `url(/images/blocks/${
                                    item.image
                                }) no-repeat`
                            }}
                        />
                        <div className="title">
                            <Link to={item.link}>{item.title}</Link>
                        </div>
                    </Reveal>
                </div>
            );
        });
    }
};

const Blocks = props => {
    return <div className="home_blocks">{generateBlocks(props)}</div>;
};

export default Blocks;
