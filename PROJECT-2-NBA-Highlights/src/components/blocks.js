import React from "react";
import Reveal from "react-reveal/Reveal";

const generateBlocks = ({ blocks }) => {
    if (blocks) {
        return blocks.map(item => {
            return (
                <div key={item.id}>
                    <Reveal effect="fadeInUp">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eos saepe, nemo consectetur vero dolorum
                            officiis?
                        </p>
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
