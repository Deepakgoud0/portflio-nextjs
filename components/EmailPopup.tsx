// import React, { useState } from 'react';

// interface EmailPopupProps {
//   onClose: () => void;
// }

// const EmailPopup: React.FC<EmailPopupProps> = ({ onClose }) => {
//   const [recipient, setRecipient] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Here you would typically send the email using a service like EmailJS or your backend API
//     // Example using EmailJS (you need to set it up):
//     /*
//     const templateParams = {
//       to_email: recipient,
//       subject: subject,
//       message: message,
//     };

//     await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID');
//     */
//     alert('Email sent!'); // Placeholder for actual email sending
//     onClose(); // Close the popup after sending
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white rounded-lg p-6 w-70vw h-70vh">
//         <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-2">Recipient Email:</label>
//             <input
//               type="email"
//               value={recipient}
//               onChange={(e) => setRecipient(e.target.value)}
//               required
//               className="border rounded w-full p-2"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Subject:</label>
//             <input
//               type="text"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               required
//               className="border rounded w-full p-2"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Message:</label>
//             <textarea
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//               className="border rounded w-full p-2"
//               rows={4}
//             />
//           </div>
//           <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//             Send Email
//           </button>
//           <button type="button" onClick={onClose} className="ml-2 bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
//             Cancel
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EmailPopup; 