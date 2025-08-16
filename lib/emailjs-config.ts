// EmailJS Configuration
// Update these values with your actual EmailJS credentials

export const emailjsConfig = {
  publicKey: "BhIdf8oieE2ZC7oZO", // Get this from EmailJS dashboard
  serviceId: "service_dm9mhb8", // Get this from EmailJS dashboard  
  templateId: "template_q43o777", // Get this from EmailJS dashboard
  userId: "BhIdf8oieE2ZC7oZO" // Get this from EmailJS dashboard
};

// IMPORTANT: EmailJS Template Setup Instructions
// 
// 1. Go to https://www.emailjs.com/ and sign up
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//
// Template Variables to include:
// - {{sender_name}} - Name of the person contacting you
// - {{sender_email}} - Email address of the person contacting you  
// - {{sender_subject}} - Subject line they wrote
// - {{sender_message}} - Their actual message
// - {{website}} - Your website URL (krishna17.xyz)
// - {{timestamp}} - When the message was sent (Indian timezone)
// - {{formatted_message}} - Complete formatted message with all details
//
// Example Email Template:
// Subject: New Contact Form Message from {{sender_name}}
//
// You have received a new message from your portfolio website:
//
// {{formatted_message}}
//
// Reply directly to: {{sender_email}}
// Website: {{website}}
// Sent at: {{timestamp}}
//
// 4. Replace the placeholder values above with your actual credentials
// 5. The form will then send detailed emails with full sender information
