import * as React from "react";

interface EmailTemplateProps {
  senderName: string;
  request: string;
}
  
  export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    senderName,
    request,
  }) => (
    <div>
      <h1>Olá! Você tem uma nova demanda...</h1>
      <h2>{senderName}</h2>
      <p>{request}</p>
    </div>
  );