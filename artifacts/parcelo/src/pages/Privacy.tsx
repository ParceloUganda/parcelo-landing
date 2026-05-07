import React from 'react';
import { Link } from 'wouter';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SECTIONS = [
  {
    number: '1',
    title: 'About Parcelo',
    content: `Parcelo Freight Solutions Limited is a company duly incorporated under the laws of the Republic of Uganda, with its registered office at Ruthent Towers, Bukoto Street, Plot 96A, Kampala, Uganda. Through the Services, Parcelo sources, purchases, and delivers goods from the United Kingdom, the United States of America, the United Arab Emirates, and the People's Republic of China to clients located in Uganda. For the purposes of the DPPA, Parcelo is the data controller responsible for your Personal Information.`,
  },
  {
    number: '2',
    title: 'Your Consent',
    content: `By accessing or using the Website, by engaging the Services, or by otherwise providing Personal Information to us, you acknowledge that you have read this Notice and consent to the collection, use, processing, retention, transfer, and disclosure of your Personal Information in accordance with the terms set out herein. If you do not agree with any provision of this Notice, you must not access or use the Website or the Services.`,
  },
  {
    number: '3',
    title: 'Changes to This Notice',
    content: `Parcelo reserves the right to modify this Notice from time to time. Any modifications will become effective upon being posted to the Website. Where we make material changes, we will notify you by conspicuously posting a notice on the Website and, where we consider it appropriate, by direct communication via email or WhatsApp prior to such changes taking effect. Each version of this Notice will be marked with the date on which it was last updated. Your continued use of the Website or the Services following the posting of any modification constitutes your acceptance of the modified Notice.`,
  },
  {
    number: '4',
    title: 'Information We Collect',
    subsections: [
      {
        title: '4.1 Personal Information',
        content: `"Personal Information" means any information relating to an identified or identifiable natural person, in accordance with the definition prescribed by the DPPA. We may collect Personal Information directly from you, including when you submit a quotation request, contact form, or sign-up form on the Website; register for an account or use the Services; communicate with us by email, WhatsApp, telephone, or any other channel; or otherwise provide Personal Information to us in the course of your relationship with Parcelo.\n\nThe categories of Personal Information we typically collect include: your full name; your email address; your telephone number; your delivery address within Uganda; details of the goods you wish to source, including product descriptions, links, sizes, and preferences; and the contents of any messages, photographs, or other materials you transmit to us in connection with your enquiry or order.`,
      },
      {
        title: '4.2 Non-Personal Information and Automatically Collected Information',
        content: `When you visit the Website, we may collect non-personal information automatically through the use of analytics tools, cookies, and similar technologies. We use PostHog, a third party product analytics provider, to assist us in understanding how the Website is used. The information collected through such means may include: the pages of the Website you visit and the time spent on each; the source from which you arrived at the Website; your approximate geographic location derived from your IP address; the type of device, operating system, and browser you use; and your interactions with the Website, including clicks, scrolls, and form submissions.`,
      },
      {
        title: '4.3 Information We Do Not Collect through the Website',
        content: `For the avoidance of doubt, Parcelo does not, through the Website, collect: bank account numbers, payment card numbers, or other financial credentials, all of which are collected and processed directly by our payment partners; copies of identification documents, including the National Identification Number, passport, or driving licence; or Tax Identification Numbers (TINs).`,
      },
    ],
  },
  {
    number: '5',
    title: 'How We Use the Information We Collect',
    bullets: [
      'To respond to your enquiries, quotation requests, and other communications',
      'To establish, administer, and maintain your account',
      'To source, purchase, deliver, and otherwise fulfil the Services you have requested',
      'To process payments and complete transactions in connection with the Services',
      'To provide you with administrative communications, including order confirmations, payment notices, and delivery updates',
      'To operate, maintain, improve, and personalise the Website and the Services',
      'To send you marketing communications only where you have provided opt-in consent',
      'To comply with our legal, regulatory, customs, tax, accounting, and record-keeping obligations',
      'To enforce our terms of service, this Notice, and any other agreement entered into between you and Parcelo',
      'To protect our rights, our staff, and the safety of our clients and the public',
      'To investigate, prevent, or take action in respect of suspected fraud, illegal activity, or violations of our policies',
    ],
  },
  {
    number: '6',
    title: 'Information Sharing and Disclosure',
    content: `Parcelo does not sell, rent, lease, or trade your Personal Information. We share your Personal Information only as described in this Notice or as otherwise permitted or required by applicable law.\n\nIn the ordinary course of providing the Services, Parcelo purchases goods using its own accounts and forwarding facilities, and accordingly your Personal Information is generally not disclosed to overseas retailers, suppliers, or forwarding agents in the course of sourcing or in-bound logistics.`,
    subsections: [
      {
        title: '6.1 Payment Partners',
        content: `When you make a payment in connection with the Services, your payment information is collected and processed directly by: Pesapal Limited (card and bank payments); MTN Mobile Money; and Airtel Money. Parcelo does not store your payment card or mobile money credentials on its systems and receives only confirmation of the payment from the relevant payment partner.`,
      },
      {
        title: '6.2 Government, Regulators & Compliance',
        content: `Parcelo may share Personal Information with the Uganda Revenue Authority for the purposes of customs declarations and tax compliance, and with other governmental, regulatory, or judicial authorities where Parcelo is required or permitted by applicable law to do so.`,
      },
      {
        title: '6.3 Legal Process and Protection of Rights',
        content: `Parcelo may disclose Personal Information where it considers, in good faith, that such disclosure is necessary to comply with a court order or other legal process; establish, exercise, or defend legal claims; enforce our policies; protect the rights, property, or safety of Parcelo, its employees, its clients, or the public; or investigate suspected fraud or illegal activity.`,
      },
      {
        title: '6.4 Service Providers',
        content: `Parcelo engages a limited number of third party service providers to assist with hosting, communications, analytics, and other operational functions. Such providers are granted access only to the Personal Information they require to perform their services on our behalf, and are bound by written agreements requiring them to maintain confidentiality and security.`,
      },
      {
        title: '6.5 Business Transactions',
        content: `In the event that Parcelo is involved in a merger, acquisition, divestiture, restructuring, or sale of all or a portion of its assets, your Personal Information may be transferred to the successor or acquirer as part of such transaction. Where this occurs, Parcelo will provide notice on the Website.`,
      },
    ],
  },
  {
    number: '7',
    title: 'Cookies and Analytics',
    content: `The Website uses cookies and similar tracking technologies provided by PostHog to facilitate the operation of the Website and to allow us to understand how visitors interact with it. You may disable cookies through your browser settings; however, doing so may impair the functionality of certain features of the Website. Parcelo does not use cookies to identify you personally on the Website, and we do not sell or share PostHog data with advertisers or third party marketing networks.`,
  },
  {
    number: '8',
    title: 'WhatsApp Communications and Communities',
    content: `WhatsApp is the principal channel through which Parcelo communicates with its clients regarding the Services. By engaging Parcelo or otherwise providing your WhatsApp number to us, you acknowledge that we may send you transactional communications via WhatsApp, including quotation confirmations, payment instructions, and delivery updates.\n\nParcelo may, from time to time, invite clients to opt in to its WhatsApp communities for the purpose of receiving marketing communications and educational content. You will only be added to a WhatsApp community after you have provided express opt-in consent. You may withdraw such consent at any time by leaving the relevant WhatsApp community or by writing to privacy@parcelo.ug.`,
  },
  {
    number: '9',
    title: 'International Transfers',
    content: `Certain of the third party providers we engage, including PostHog and our hosting partners, process Personal Information on infrastructure located outside Uganda. Where we transfer your Personal Information outside Uganda, we take reasonable steps to ensure that the recipient affords your Personal Information a level of protection equivalent to that required under the DPPA, including by way of contractual safeguards. By providing your Personal Information to Parcelo, you acknowledge and consent to such transfers.`,
  },
  {
    number: '10',
    title: 'Data Retention',
    content: `Parcelo retains your Personal Information for a period of seven (7) years from the date of your last order or interaction with us, in order to satisfy our customs, tax, accounting, and other legal record-keeping obligations under Ugandan law. Following the expiry of this period, we will delete or anonymise your Personal Information, save to the extent we are required by law to retain it for a longer period.\n\nWhere you request the earlier deletion of your Personal Information in accordance with Section 11, Parcelo will comply with such request to the extent we are not legally required to retain the information.`,
  },
  {
    number: '11',
    title: 'Your Rights under Ugandan Data Protection Law',
    bullets: [
      'The right to be informed of the manner in which your Personal Information is processed',
      'The right of access to the Personal Information we hold about you',
      'The right to request the rectification of inaccurate or incomplete Personal Information',
      'The right to request the erasure of your Personal Information, subject to any legal obligation to retain it',
      'The right to object to the processing of your Personal Information, including for direct marketing purposes',
      'The right to withdraw any consent you have previously given to the processing of your Personal Information',
      'The right to data portability, in accordance with applicable law',
      'The right to lodge a complaint with the Personal Data Protection Office of Uganda',
    ],
    content: `To exercise any of these rights, please contact us at privacy@parcelo.ug. We will respond to your request within the timeframes prescribed by applicable law. Parcelo will not charge a fee for the reasonable exercise of these rights, save where a request is manifestly unfounded, excessive, or repetitive.`,
  },
  {
    number: '12',
    title: 'Data Protection Officer',
    content: `Parcelo has appointed a Data Protection Officer responsible for overseeing compliance with this Notice and applicable data protection law. The Data Protection Officer may be contacted by writing to privacy@parcelo.ug.`,
  },
  {
    number: '13',
    title: 'Security',
    content: `Parcelo implements technical, organisational, and administrative measures designed to protect Personal Information against unauthorised access, use, disclosure, alteration, loss, or destruction. These measures include access controls, role-based permissions, staff training on data handling, and periodic review of our practices.\n\nNotwithstanding our efforts, no method of transmission over the internet or method of electronic storage is entirely secure, and Parcelo cannot guarantee the absolute security of your Personal Information. If you have reason to believe that your account or your Personal Information has been compromised, please contact us immediately at privacy@parcelo.ug.`,
  },
  {
    number: '14',
    title: 'Adults Only',
    content: `The Services are intended solely for use by individuals who are eighteen (18) years of age or older. By registering an account, requesting a quotation, or otherwise using the Services, you represent and confirm that you are at least eighteen (18) years of age. Parcelo does not knowingly collect Personal Information from individuals under the age of eighteen (18). If you become aware that Personal Information of a person under the age of eighteen (18) has been provided to Parcelo, please contact us at privacy@parcelo.ug.`,
  },
  {
    number: '15',
    title: 'Links to Third Party Websites',
    content: `The Website may contain links to third party websites, including those of overseas retailers and partners. Parcelo does not control such third party websites and is not responsible for their content, practices, or privacy policies. We encourage you to review the privacy policies of any third party website before providing your Personal Information to such third party.`,
  },
  {
    number: '16',
    title: 'Contact Us',
    content: `For any questions, requests, or concerns regarding this Notice or our handling of your Personal Information, you may contact us at:\n\nParcelo Freight Solutions Limited\nRuthent Towers, Bukoto Street, Plot 96A\nKampala, Uganda\n\nEmail: privacy@parcelo.ug\nWeb: parcelo.ug`,
  },
];

const TOC = [
  'About Parcelo', 'Your Consent', 'Changes to This Notice', 'Information We Collect',
  'How We Use the Information', 'Information Sharing and Disclosure', 'Cookies and Analytics',
  'WhatsApp Communications', 'International Transfers', 'Data Retention',
  'Your Rights', 'Data Protection Officer', 'Security', 'Adults Only',
  'Links to Third Party Websites', 'Contact Us',
];

function SectionBlock({ section }: { section: typeof SECTIONS[0] }) {
  return (
    <div id={`section-${section.number}`} style={{ paddingTop: '40px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '14px' }}>
        <span style={{
          fontSize: '12px', fontWeight: 800, color: 'var(--gold)',
          letterSpacing: '0.08em', flexShrink: 0,
        }}>
          {section.number.padStart(2, '0')}
        </span>
        <h2 style={{ fontSize: '18px', fontWeight: 800, margin: 0, letterSpacing: '-0.02em', color: 'var(--text)' }}>
          {section.title}
        </h2>
      </div>
      {'content' in section && section.content && (
        <div style={{ paddingLeft: '28px' }}>
          {section.content.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8, margin: '0 0 14px' }}>{para}</p>
          ))}
        </div>
      )}
      {'bullets' in section && section.bullets && (
        <ul style={{ margin: '0 0 14px', padding: '0 0 0 28px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {section.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '6px', fontSize: '8px' }}>■</span>
              <span style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {'subsections' in section && section.subsections && (
        <div style={{ paddingLeft: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {section.subsections.map((sub, i) => (
            <div key={i}>
              <h3 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 8px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{sub.title}</h3>
              {sub.content.split('\n\n').map((para, j) => (
                <p key={j} style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8, margin: '0 0 10px' }}>{para}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Privacy() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '72px 24px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: 'auto' }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
            Privacy Notice
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', margin: '0 0 12px', lineHeight: 1.7 }}>
            This Privacy Notice describes the manner in which Parcelo Freight Solutions Limited collects, uses, processes, retains, transfers, and discloses information in connection with your use of our website and services.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
            {[
              { label: 'Registration No.', value: 'PDPO20260311148' },
              { label: 'Registered Capacity', value: 'Data Collector, Processor & Controller' },
              { label: 'Date of Registration', value: '18 March 2026' },
            ].map(item => (
              <div key={item.label} style={{
                background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '10px',
                padding: '12px 18px', textAlign: 'center',
              }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-faint)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>{item.label}</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: '820px', margin: 'auto', display: 'grid', gridTemplateColumns: '220px 1fr', gap: '48px', alignItems: 'start' }}>

          {/* TOC sidebar */}
          <div style={{ position: 'sticky', top: '80px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: '12px' }}>Contents</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {TOC.map((item, i) => (
                <a
                  key={i}
                  href={`#section-${i + 1}`}
                  style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none', padding: '5px 0', display: 'flex', gap: '8px', alignItems: 'baseline' }}
                  onMouseOver={e => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseOut={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  <span style={{ fontSize: '11px', color: 'var(--gold)', fontWeight: 700, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Content */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '8px' }}>
            {SECTIONS.map(section => (
              <SectionBlock key={section.number} section={section} />
            ))}
            <div style={{ borderTop: '1px solid var(--border)', marginTop: '48px', paddingTop: '24px', textAlign: 'center' }}>
              <p style={{ fontSize: '13px', color: 'var(--text-faint)', margin: 0 }}>
                <Link href="/" style={{ color: 'var(--text-faint)', textDecoration: 'underline' }}>← Back to home</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
