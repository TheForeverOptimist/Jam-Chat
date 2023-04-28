import React from "react";
import "./SidebarChannel.css";

function SidebarChannel({ id, channel, selected, onClick, setSelectedRoom }) {
    const handleClick = () => {
        setSelectedRoom({ id, name: channel });
        onClick();
    };
    return (
        <div
            className={`sidebarChannel ${
                selected && "sidebarChannel--selected"
            }`}
            onClick={() => onClick(id, channel)}
        >
            <h4>
                <span className="sidebarChannel_hash">#</span>
                {channel.name}
            </h4>
        </div>
    );
}

export default SidebarChannel;
