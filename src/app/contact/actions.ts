'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Failed to send message. Please check the errors below.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  // Simulate sending an email
  console.log('New contact form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);

  // In a real application, you would integrate an email service here (e.g., SendGrid, Resend)
  // For example:
  // try {
  //   await sendEmail({ to: 'your-email@example.com', from: email, subject, text: message });
  //   return { message: 'Your message has been sent successfully!', success: true };
  // } catch (error) {
  //   console.error('Email sending error:', error);
  //   return { message: 'Failed to send message. Please try again later.', success: false };
  // }

  return {
    message: 'Your message has been sent successfully! We will get back to you soon.',
    success: true,
  };
}
