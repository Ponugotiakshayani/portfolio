type Props = {
    name: string;
    email: string;
    message: string;
  };
  
  export default function ContactMessage({ name, email, message }: Props) {
    return (
      <div>
        <h2>New message from your portfolio 🚀</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Message:</strong></p>
        <p>{message}</p>
      </div>
    );
  }
  