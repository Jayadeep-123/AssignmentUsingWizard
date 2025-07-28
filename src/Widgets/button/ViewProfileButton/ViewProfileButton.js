import React from "react";

const ViewProfileButton = () => (
  <button
    style={{
      backgroundColor: "#3425FF",
      color: "#FFFFFF",
      fontSize: "14px",
      fontWeight: 600,
      padding: "8px 14px",
      border: "none",
      borderRadius: "6px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
      fontFamily: "Inter, sans-serif",
      lineHeight: "20px",
    }}
    type="button"
    aria-label="View full profile"
  >
   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4994 9C14.2342 9 13.9799 8.89464 13.7923 8.70711C13.6048 8.51957 13.4994 8.26522 13.4994 8C13.4994 7.73478 13.6048 7.48043 13.7923 7.29289C13.9799 7.10536 14.2342 7 14.4994 7H19.4994C19.7646 7 20.019 7.10536 20.2065 7.29289C20.3941 7.48043 20.4994 7.73478 20.4994 8V13C20.4994 13.2652 20.3941 13.5196 20.2065 13.7071C20.019 13.8946 19.7646 14 19.4994 14C19.2342 14 18.9799 13.8946 18.7923 13.7071C18.6048 13.5196 18.4994 13.2652 18.4994 13V10.414L14.2064 14.707C14.0189 14.8945 13.7646 14.9998 13.4994 14.9998C13.2343 14.9998 12.98 14.8945 12.7924 14.707L10.4994 12.414L6.20643 16.707C6.01783 16.8892 5.76523 16.99 5.50303 16.9877C5.24083 16.9854 4.99002 16.8802 4.80461 16.6948C4.6192 16.5094 4.51403 16.2586 4.51176 15.9964C4.50948 15.7342 4.61027 15.4816 4.79243 15.293L9.79243 10.293C9.97996 10.1055 10.2343 10.0002 10.4994 10.0002C10.7646 10.0002 11.0189 10.1055 11.2064 10.293L13.4994 12.586L17.0854 9H14.4994Z" fill="white"/>
</svg>
    View full Profile
  </button>
);

export default ViewProfileButton;
