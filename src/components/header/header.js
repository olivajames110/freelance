import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-nav">
        <div className="logo">
          <img src="https://digitalmarketing.blob.core.windows.net/9096/images/items/image483475.png" width="150px" height="70px" />
        </div>
        <div className="nav-search">
         
        </div>
        <div className="profile">
         <i class="fa fa-user-circle"></i>
         <div className="user-login-name">David Lillienstein</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
