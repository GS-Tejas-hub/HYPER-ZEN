
import { Section } from '@/components/Section';
import { ContactForm } from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react'; // Added Instagram
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact HyperZen | Get In Touch',
  description: 'Contact HyperZen for your web and digital solution needs. Reach out to us via our contact form, email, or phone. Let\'s discuss your project!',
};

export default function ContactPage() {
  return (
    <Section title="Get In Touch" subtitle="We'd Love To Hear From You">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">Send us a message</h3>
            <p className="text-muted-foreground mb-6">
              Have a project in mind, a question about our services, or just want to say hello? Fill out the form, and we'll get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>
        </div>
        <div className="space-y-8 p-8 bg-muted/50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-foreground">Email Us</h4>
                <a href="mailto:hyperzen360@gmail.com" className="text-primary hover:underline">
                  hyperzen360@gmail.com
                </a>
                <p className="text-sm text-muted-foreground">We typically respond within 24 hours.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-foreground">Call Us</h4>
                <a href="tel:+916381595551" className="text-primary hover:underline">
                  +91 6381595551
                </a>
                <p className="text-sm text-muted-foreground">Mon - Fri, 9am - 6pm (IST)</p> {/* Assuming IST based on country code */}
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-foreground">Our Office</h4>
                <p className="text-muted-foreground">
                  S Residency<br />Harohalli, 562112
                </p>
                <p className="text-sm text-muted-foreground">Meetings by appointment only.</p>
              </div>
            </div>
            {/* Added Instagram Link Start */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-foreground">Follow Us on Instagram</h4>
                <a 
                  href="https://www.instagram.com/hyperzen.dev_official?utm_source=qr&igsh=MTNvNG05d2EzMXU1cw==" 
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @hyperzen.dev_official
                </a>
                <p className="text-sm text-muted-foreground">Stay updated with our latest news and projects.</p>
              </div>
            </div>
            {/* Added Instagram Link End */}
          </div>
           <div className="mt-8 pt-6 border-t border-border">
            <h4 className="text-lg font-medium text-foreground mb-3">Project Inquiries</h4>
            <p className="text-muted-foreground">
              For detailed project discussions or RFP submissions, please use the form or email us directly with your project brief. We're excited to learn about your vision!
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
