import React from 'react';
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const recipientEmail = "support@alwaysworthyoflove.com";

  const handleEmailLinkClick = () => {
    window.location.href = `mailto:${recipientEmail}`;
  };

  return (
    <div className="ComponentHeader">
      <p>
        <h1>
        {t("email_to_donate")}{' '}
        <span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleEmailLinkClick}>
          {t("click_here")}
        </span>
        </h1>
      </p>
    </div>
  );
};

export default Contact;