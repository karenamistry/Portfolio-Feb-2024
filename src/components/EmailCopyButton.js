import React, { useState } from "react";

function EmailCopyButton() {
  const [isCopied, setIsCopied] = useState(false);
  const email = "k.mistry1898@gmail.com";

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Hide popup after 2 seconds
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="relative w-full">
      <button
        title="k.mistry1898@gmail.com"
        onClick={copyEmailToClipboard}
        className="uppercase text-xs"
      >
        Copy Email
      </button>
      {isCopied && (
        <div className="absolute top-[23px] -translate-y-full bg-white text-black text-xs uppercase">
          Copied to clipboard
        </div>
      )}
    </div>
  );
}

export default EmailCopyButton;
