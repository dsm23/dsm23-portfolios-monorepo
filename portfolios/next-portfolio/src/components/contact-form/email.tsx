import { FunctionComponent } from "react";

interface EmailTemplateProps {
  email: string;
  message: string;
}

export const EmailTemplate: FunctionComponent<Readonly<EmailTemplateProps>> = ({
  email,
  message,
}) => (
  <div>
    <h1>From Next portfolio</h1>
    <p>Email address: {email}</p>
    <p>{message}</p>
  </div>
);
