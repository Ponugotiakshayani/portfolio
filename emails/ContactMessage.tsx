// emails/ContactMessage.tsx
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Hr,
} from '@react-email/components';

type Props = {
  name: string;
  email: string;
  message: string;
};

export default function ContactMessage({ name, email, message }: Props) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <Container>
          <Text style={{ fontSize: '18px', fontWeight: 'bold' }}>
            New message from your portfolio 🚀
          </Text>
          <Hr />
          <Text><strong>Name:</strong> {name}</Text>
          <Text><strong>Email:</strong> {email}</Text>
          <Text><strong>Message:</strong></Text>
          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}





// type Props = {
//     name: string;
//     email: string;
//     message: string;
//   };
  
//   export default function ContactMessage({ name, email, message }: Props) {
//     return (
//       <div>
//         <h2>New message from your portfolio 🚀</h2>
//         <p><strong>Name:</strong> {name}</p>
//         <p><strong>Email:</strong> {email}</p>
//         <p><strong>Message:</strong></p>
//         <p>{message}</p>
//       </div>
//     );
//   }
  