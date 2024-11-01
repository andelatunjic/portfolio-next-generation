// Sidebar.jsx
import React from "react";
import {
  MenuWrapper,
  MenuInner,
  NaviagationItem,
  NaviagationLink,
  ResumeLink,
} from "./SidebarStyle";

const Sidebar = ({ open, onClose }) => (
  <MenuWrapper open={open}>
    <MenuInner>
      <NaviagationItem>
        <NaviagationLink to="/" onClick={onClose}>
          Work
        </NaviagationLink>
      </NaviagationItem>
      <NaviagationItem>
        <NaviagationLink to="/projects" onClick={onClose}>
          Projects
        </NaviagationLink>
      </NaviagationItem>
      <NaviagationItem>
        <NaviagationLink to="/about" onClick={onClose}>
          About
        </NaviagationLink>
      </NaviagationItem>
      <ResumeLink
        href="/src/assets/placeholder.pdf"
        target="_blank"
        onClick={onClose}
      >
        Resume
      </ResumeLink>
    </MenuInner>
  </MenuWrapper>
);

export default Sidebar;
