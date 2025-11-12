import React, { useState } from "react";
import { Button, Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const items = [
    { key: "home", label: "Home" },
    { key: "about", label: "About Us" },
    { key: "skills", label: "Skills" },
    { key: "projects", label: "Projects" },
  ];

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>Sri Kailashnathan Senthilnathan</div>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <Menu
            mode="horizontal"
            items={items}
            selectable={false}
            className={styles.navbarMenu}
          />
          <Button type="primary" shape="round" className={styles.navbarButton}>
            LET’S TALK
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className={styles.mobileMenuIcon} onClick={showDrawer}>
          <MenuOutlined />
        </div>

        {/* Mobile Drawer */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          open={open}
          className={styles.mobileDrawer}
        >
          <Menu
            mode="vertical"
            items={items}
            selectable={false}
            onClick={onClose}
          />
          <Button
            type="primary"
            shape="round"
            block
            className={styles.navbarButton}
            onClick={onClose}
          >
            LET’S TALK
          </Button>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
