import React from 'react';
import { Link } from 'wouter';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

type Clause = { id: string; text: string; bullets?: string[] };
type Section = { number: string; title: string; intro?: string; clauses?: Clause[] };

const SECTIONS: Section[] = [
  {
    number: '1',
    title: 'Acceptance and Amendment',
    clauses: [
      { id: '1.1', text: 'These Terms of Use ("Terms") govern the relationship between Parcelo Freight Solutions Limited ("Parcelo", "we", "us", "our") and any person or entity ("Client", "you", "your") who requests, uses, or pays for any service offered by Parcelo, whether through our WhatsApp channel, our website, our team in person, or any other communication channel we operate from time to time.' },
      { id: '1.2', text: 'You accept these Terms when any of the following occurs:', bullets: [
        'you confirm a Quotation we have issued to you;',
        'you pay the full landed cost, or any other amount, in connection with an Order;',
        'you authorise us in writing, by message, or by voice note to source, purchase, or deliver Goods on your behalf; or',
        'you continue to use our Service after we have notified you that the Terms have been updated.',
      ]},
      { id: '1.3', text: 'If you are placing an Order on behalf of an organisation, you confirm that you have the authority to bind that organisation, and references to "you" in these Terms include that organisation.' },
      { id: '1.4', text: 'We may amend these Terms from time to time. When we do, we will publish the updated version on our website and notify active Clients through our usual communication channels. The Last Updated date at the top of this document tells you when the most recent change took effect. If you do not agree with a change, you may close your account or stop using our Service before placing any new Order. Continued use of our Service after the Last Updated date confirms your acceptance of the updated Terms.' },
      { id: '1.5', text: 'In the event of a conflict between these Terms and any individual Quotation, invoice, or written agreement we have signed with you, the more recent and specifically negotiated document will prevail for that engagement.' },
    ],
  },
  {
    number: '2',
    title: 'Definitions',
    intro: 'In these Terms, the following words carry the meanings set out below.',
    clauses: [
      { id: '', text: '"Concierge Service" or "Service" means the end-to-end service Parcelo provides, including sourcing, negotiating, purchasing, consolidating, transporting, clearing, and delivering Goods from a Source Country to a Client in Uganda.' },
      { id: '', text: '"Concierge and Fulfilment Fee" means the fee charged by Parcelo for the Service, calculated as twelve per cent (12%) of the costs in clause 6.1(a) to (d), or such other fee as is specifically agreed in writing for a particular Order.' },
      { id: '', text: '"Client, you, or your" means the person or organisation requesting or receiving the Service.' },
      { id: '', text: '"Delivery" means the handover of Goods to the Client at the agreed delivery point in Uganda, or to a person nominated by the Client at that point.' },
      { id: '', text: '"ETA" means the Estimated Time of Arrival for Delivery stated in a Quotation.' },
      { id: '', text: '"Goods or Items" means the products that the Client has requested Parcelo to source, purchase, and deliver.' },
      { id: '', text: '"Order" means a request from a Client that has been confirmed by issue of a Receipt following payment of the full landed cost, after which Parcelo is engaged to perform the Service for those specific Goods.' },
      { id: '', text: '"Parcelo, we, us, or our" means Parcelo Freight Solutions Limited, a company incorporated under the laws of Uganda, having its registered office at Ruthent Towers, Bukoto Street, Plot 96A, Kampala, Uganda.' },
      { id: '', text: '"Prohibited Items" means Goods that Parcelo will not source, purchase, or deliver under any circumstances, as set out in clause 8 and as updated from time to time.' },
      { id: '', text: '"Quotation" means a written estimate issued by Parcelo through WhatsApp, email, or our website, that sets out the proposed Goods, total landed cost, and ETA for a particular request.' },
      { id: '', text: '"Receipt" means the formal document Parcelo issues on successful receipt of full payment, confirming Order creation.' },
      { id: '', text: '"Restricted Items" means Goods that Parcelo may agree to handle only on additional terms, as set out in clause 8.' },
      { id: '', text: '"Source Country" means the country from which Goods are sourced, currently the United Kingdom, the United States of America, the United Arab Emirates, and the People\'s Republic of China, and any other country we may add to our Service from time to time.' },
      { id: '', text: '"Verified Channel" means a communication channel that Parcelo has verified with the relevant provider and registered to Parcelo Freight Solutions Limited, as set out in clause 5.1.' },
      { id: '', text: '"Working Day" means any day from Monday to Friday, excluding public holidays observed in Uganda.' },
    ],
  },
  {
    number: '3',
    title: 'The Service',
    clauses: [
      { id: '3.1', text: 'Parcelo operates a premium international shopping concierge service. We source, purchase, consolidate, transport, clear, and deliver Goods from approved Source Countries to Clients in Uganda.' },
      { id: '3.2', text: 'What the Service includes. The Service typically covers the following activities for each Order:', bullets: [
        'researching and identifying suitable suppliers in the Source Country;',
        'preparing a Quotation that captures the total landed cost and ETA;',
        'purchasing the Goods from the supplier in Parcelo\'s name and using Parcelo\'s payment instruments, as further described in clause 7;',
        'receiving the Goods at our overseas consolidation facility;',
        'arranging international transport to Uganda;',
        'handling customs clearance with the Uganda Revenue Authority and any other competent authority; and',
        'arranging last-mile Delivery to your registered address.',
      ]},
      { id: '3.3', text: 'What the Service does not include. The Service does not include legal advice, tax advice, advice on the suitability of any product for your purposes, after-sales support beyond Delivery, warranty servicing of branded Goods, or any service that is not expressly described in your Quotation.' },
      { id: '3.4', text: 'Concierge, not freight forwarder. Parcelo positions itself as a concierge and fulfilment partner, not as a regulated freight forwarder. Where we engage carriers, customs agents, or other third parties to perform parts of the Service, we do so as your concierge, on the terms set out in these Terms and in the relevant Quotation.' },
      { id: '3.5', text: 'Variations to the Service. We may from time to time add, modify, or retire elements of the Service, including adding or removing Source Countries, payment methods, or product categories. Material changes are notified through our Verified Channels. Changes do not retroactively affect Orders that have already been created.' },
    ],
  },
  {
    number: '4',
    title: 'Eligibility and Account',
    clauses: [
      { id: '4.1', text: 'By engaging Parcelo through any Verified Channel, you confirm that you are at least eighteen (18) years of age and have the legal capacity to enter into a binding contract under the laws of Uganda.' },
      { id: '4.2', text: 'Where you engage Parcelo on behalf of an organisation, you further confirm that the organisation is duly constituted under applicable law, and that you are authorised to bind it to these Terms.' },
      { id: '4.3', text: 'No documentary KYC at onboarding. For our Concierge Service to individual Clients (B2C), we do not collect identification documents, such as national identification cards or passports, at onboarding. Your age and capacity are confirmed by your engagement with us under clause 4.1.' },
      { id: '4.4', text: 'Right to request information. Notwithstanding clause 4.3, we may request reasonable information or documentation where:', bullets: [
        'we are required to do so under applicable law, including any obligations arising under the Anti-Money Laundering Act 2013 or guidance issued by the Financial Intelligence Authority;',
        'an Order is of unusually high value or otherwise raises a reasonable concern;',
        'Goods of a category that requires permits, licences, or special clearances are involved; or',
        'we need to confirm authority where you have asked us to deliver to a person other than yourself.',
      ]},
      { id: '4.5', text: 'Account information. You are responsible for keeping the contact information you provide to us, including your delivery address, your phone number, and any email address, accurate and current. We are entitled to rely on the most recent information we hold for you.' },
      { id: '4.6', text: 'One Client, one engagement. You may not use our Service for the purpose of resale to third parties on a commercial scale, multi-level marketing, money or value transmission, or any business practice that is easily subject to abuse or that is restricted under Ugandan law.' },
    ],
  },
  {
    number: '5',
    title: 'Communication Channels and Order Placement',
    clauses: [
      { id: '5.1', text: 'Verified Channels. Parcelo communicates with Clients only through business channels that we have verified with the relevant providers and that are registered to Parcelo Freight Solutions Limited. Our Verified Channels currently include our WhatsApp Business line (verified by Meta), our LinkedIn business page, our official website at parcelo.ug, our official email domain, and any further channels we may add from time to time. If you are contacted by any person claiming to represent Parcelo through a channel not on this list, that person is not authorised to act on our behalf. Do not share personal information, accept Quotations, or send payments on the basis of such communications.' },
      { id: '5.2', text: 'Stages of an engagement. Engaging Parcelo follows four stages: (a) Request — you describe the Goods through any Verified Channel; (b) Quotation — we issue a written Quotation with the total landed cost and ETA; (c) Payment — you pay the full landed cost; (d) Receipt and Order creation — on successful receipt of full payment we issue a Receipt and the Order is created.' },
      { id: '5.3', text: 'No Order without a Receipt. A Quotation, however detailed, does not by itself create a binding obligation on either party. There is no Order, and we are under no obligation to source, purchase, or deliver any Goods, until full payment has been received and a Receipt issued.' },
      { id: '5.4', text: 'Quotation validity. Each Quotation is valid only on the Working Day on which it is issued. If payment is not received that day, the Quotation expires and any subsequent engagement requires a fresh Quotation. This protects both parties from foreign exchange movements and supplier price changes.' },
      { id: '5.5', text: 'Pre-quote screening. Before we issue a Quotation, we check the requested Goods against our Restricted Items and Prohibited Items lists set out in clause 8. If we identify a problem at this stage, we will not issue a Quotation, and we will tell you why.' },
      { id: '5.6', text: 'Right to refuse after Order creation. In rare cases, after a Receipt has been issued, we may discover that the Goods are restricted, prohibited, or otherwise cannot lawfully or practically be delivered. Where this happens we will notify you promptly, refund all amounts paid that have not been irrecoverably committed to a supplier or carrier, and use reasonable efforts to recover any amounts that have been committed.' },
      { id: '5.7', text: 'Sourcing timeline. On Order creation, we will use reasonable endeavours to commence sourcing on the same Working Day. Where we are unable to do so for reasons within our control, that delay is at our risk, and it does not change the Goods, prices, or delivery commitments set out in your Quotation and Receipt.' },
    ],
  },
  {
    number: '6',
    title: 'Pricing, Fees, Payment, and Currency',
    clauses: [
      { id: '6.1', text: 'Landed cost. Each Quotation states a single total landed cost, which is the only amount you pay to receive the Goods at your agreed delivery point. The landed cost covers:', bullets: [
        'the purchase price of the Goods at source, including any taxes, duties, or fees charged by the source vendor or source country;',
        'international transport from the Source Country to Uganda;',
        'clearance and any duties or taxes payable in Uganda, including those payable to the Uganda Revenue Authority;',
        'last-mile Delivery to your agreed delivery point in Uganda; and',
        'the Concierge and Fulfilment Fee.',
      ]},
      { id: '6.2', text: 'Concierge and Fulfilment Fee. Our Concierge and Fulfilment Fee is twelve per cent (12%) of the costs in clauses 6.1(a) to (d), unless a different rate is specifically agreed in writing for a particular Order. The Fee covers our sourcing, negotiation, purchasing, consolidation, clearance coordination, and delivery work on your behalf.' },
      { id: '6.3', text: 'Full payment in advance. The full landed cost is payable in advance. Orders are not created on part payment or instalment. This allows us to commit immediately to suppliers and carriers and protects you from cost movements during the Order cycle.' },
      { id: '6.4', text: 'Payment methods. Accepted payment methods are stated in each Quotation and currently include: mobile money to verified Parcelo Freight Solutions Limited paybill or merchant numbers; bank transfer to our verified business account; and card and online payments processed through Pesapal. We do not accept payments to personal accounts, or to any numbers or accounts not published through our Verified Channels.' },
      { id: '6.5', text: 'Currency and foreign exchange. Quotations are issued in Uganda Shillings (UGX). Where the underlying Goods or transport are priced in a foreign currency, the UGX amount stated in the Quotation is the amount payable, converted at the rate we apply on the day the Quotation is issued. If the Quotation expires, any new engagement is re-quoted at the rate of the new day.' },
      { id: '6.6', text: 'Refunds. Refunds are made only in the limited circumstances set out in these Terms, principally clause 5.6. Where a refund is due, we make it to the same payment instrument used for the original payment within five (5) Working Days of our written confirmation, for the recoverable amount — meaning amounts not irrecoverably committed to a supplier, carrier, or other third party. For Goods lost or damaged in transit, our remedy is replacement of the Goods, not a refund. See clause 11.' },
    ],
  },
  {
    number: '7',
    title: 'Authority to Purchase on Your Behalf',
    clauses: [
      { id: '7.1', text: 'Limited authority. By creating an Order under clause 5, you authorise Parcelo to source and purchase the Goods described in your Quotation on your behalf, using the funds you have paid as part of the landed cost. This authority is limited strictly to that Order and to the actions reasonably necessary to perform the Service.' },
      { id: '7.2', text: 'Parcelo as counterparty to suppliers. Although the Goods are purchased on your behalf and for your benefit, Parcelo places orders with overseas suppliers, carriers, and clearing agents in the name of Parcelo Freight Solutions Limited, using Parcelo\'s accounts, payment instruments, and overseas delivery facilities. The supplier\'s contract is with Parcelo, and the supplier owes its delivery and quality obligations to Parcelo.' },
      { id: '7.3', text: 'Title to the Goods. Title to the Goods passes to you upon successful Delivery to your agreed delivery point in Uganda, or to a person nominated by you at that point. Until then, the Goods are held by Parcelo or our subcontractors on your behalf.' },
      { id: '7.4', text: 'No general agency. Nothing in this clause makes Parcelo your general agent. We have no authority to make any commitment, representation, or agreement on your behalf beyond the specific purchase of the Goods described in your Quotation.' },
      { id: '7.5', text: 'Variations during sourcing. If, during sourcing, we discover that a quoted item is unavailable, materially different from what was described, or has changed in price beyond what we can reasonably absorb, we will contact you and propose an alternative item, a revised Quotation, or a refund if no alternative is acceptable. We will not substitute Goods or change suppliers without your written confirmation.' },
    ],
  },
  {
    number: '8',
    title: 'Restricted and Prohibited Items',
    clauses: [
      { id: '8.1', text: 'Our published lists. Parcelo maintains a Restricted Items List and a Prohibited Items List, both published on our website. The lists are drawn from requirements imposed by Ugandan law, the Uganda Revenue Authority, IATA, our airline and shipping line partners, and our own operational policy. We update the lists from time to time as those requirements change.' },
      { id: '8.2', text: 'Prohibited Items. Parcelo will not source, purchase, or deliver Prohibited Items under any circumstances. Categories currently include:', bullets: [
        'firearms, ammunition, weapons, and parts thereof;',
        'explosives, fireworks, and pyrotechnics;',
        'narcotic drugs, psychotropic substances, and controlled substances;',
        'hazardous, flammable, corrosive, radioactive, or toxic materials regulated by IATA Dangerous Goods Regulations or equivalent;',
        'currency, bearer instruments, and items easily convertible to cash;',
        'live animals, human or animal remains, and biological samples;',
        'perishable foodstuffs that cannot survive the transit window;',
        'counterfeit, pirated, or otherwise infringing Goods;',
        'items the import of which is prohibited under Ugandan law; and',
        'any other items listed on our published Prohibited Items List from time to time.',
      ]},
      { id: '8.3', text: 'Restricted Items. Restricted Items may be handled by Parcelo only on additional terms, which may include permits or licences, additional documentation, additional fees, or specific carrier arrangements. We will identify any applicable additional terms in your Quotation. If you do not accept those terms, we will not proceed.' },
      { id: '8.4', text: 'Updates to the lists. Because the underlying legal and operational requirements change, we update the lists from time to time. The version of each list in force at the date your Quotation is issued is the version that applies to your engagement.' },
      { id: '8.5', text: 'Discovery after Order creation. If we discover, after an Order has been created, that the Goods are or have become Prohibited or Restricted, clause 5.6 applies.' },
      { id: '8.6', text: 'Misrepresentation about the Goods. If you describe Goods inaccurately, or omit information that would have caused us to identify them as Prohibited or Restricted, you bear all losses, costs, fines, and consequences arising from that misrepresentation, in line with clauses 9.4 and 13.' },
    ],
  },
  {
    number: '9',
    title: 'Customs, Duties, and Taxes',
    clauses: [
      { id: '9.1', text: 'Clearance by Parcelo. All Goods imported into Uganda are subject to inspection, classification, and the imposition of duties, taxes, and fees by the Uganda Revenue Authority ("URA") and any other competent authority. Parcelo handles customs clearance as part of the Service.' },
      { id: '9.2', text: 'B2C Orders, final landed cost. For Orders placed by individual Clients, the landed cost on your Receipt is final. If URA reclassifies the Goods at a higher tariff, applies a different valuation, or imposes additional charges beyond what we quoted, Parcelo absorbs the difference. You will not be asked to pay more than the amount on your Receipt.' },
      { id: '9.3', text: 'B2B Orders, estimate only. For Orders placed under a B2B engagement, the customs, duties, and taxes component of the Quotation is an estimate given in good faith. Actual charges levied by URA may differ; any positive difference is borne by the Client and is payable on demand, and any negative difference is refunded. A Quotation is treated as a B2C Quotation by default. The B2B treatment applies only where the Quotation or a signed agreement says so explicitly.' },
      { id: '9.4', text: 'Your disclosure obligations. You confirm that in respect of every Order you are not subject to any sanction or legal prohibition that prevents you from importing the Goods; you have disclosed any permits, licences, or special clearances applicable to the Goods; and the description, value, and intended use of the Goods is accurate. If any of these is untrue and the Goods are detained, seized, surcharged, returned, or destroyed as a result, all related costs are borne by you.' },
      { id: '9.5', text: 'Detention outside either party\'s fault. Where Goods are detained by URA for reasons that are not your fault and not a Parcelo error, we will use reasonable efforts to clear the Goods promptly, and any storage or demurrage charges are absorbed by Parcelo for B2C Orders. The delivery timeline is suspended for the period of the detention.' },
      { id: '9.6', text: 'Documentation. We retain URA clearance documentation for each Order in line with applicable law. You may request a copy for your Order through any of our Verified Channels.' },
    ],
  },
  {
    number: '10',
    title: 'Delivery, Timelines, and Authorised Recipients',
    clauses: [
      { id: '10.1', text: 'Delivery address. Delivery is made to the address you provide to us at onboarding, or such other address in Uganda as you confirm to us in writing through one of our Verified Channels before we dispatch for last-mile Delivery. The cost of last-mile Delivery to that address is included in the landed cost on your Receipt.' },
      { id: '10.2', text: 'Estimated Time of Arrival. Each Quotation states an ETA for Delivery. Parcelo commits to meet the ETA on your Receipt. If we anticipate that we will not meet the ETA, we will notify you through your registered channel as soon as we become aware, with a revised ETA and the reason for the delay.' },
      { id: '10.3', text: 'Pre-Delivery confirmation. Before our team dispatches for last-mile Delivery, we will check in with you through your registered channel to confirm that you, or a person you have authorised, will be available to receive the Goods.' },
      { id: '10.4', text: 'Failed Delivery. If our team arrives at the agreed address and no authorised recipient is available: the Goods are returned to our office and held safely on your behalf; re-Delivery is rescheduled at a time convenient to you; and the cost of re-Delivery is borne by you and is payable in advance of the re-Delivery.' },
      { id: '10.5', text: 'Authorised recipients. You may authorise another person to receive the Goods on your behalf. We will deliver to a person other than you only where you have instructed us in writing through one of our Verified Channels before Delivery, identifying the recipient by name. On handover to that person, the Goods are treated as having been delivered to you.' },
      { id: '10.6', text: 'Delivery confirmation. On Delivery, we record the time, place, and recipient. Delivery is treated as complete at that moment, at which point title and risk in the Goods pass to you under clauses 7.3 and 11.1 respectively.' },
      { id: '10.7', text: 'Inspection at Delivery. You are encouraged to inspect the Goods at the point of Delivery and to raise any visible issue with our team on the spot. This does not replace your right to notify us of issues within seventy-two (72) hours under clause 11.6.' },
    ],
  },
  {
    number: '11',
    title: 'Loss, Damage, Vendor Errors, and Replacement',
    clauses: [
      { id: '11.1', text: 'Risk in transit. Parcelo bears the risk of loss or damage to the Goods from the moment they are received at our overseas consolidation facility in the Source Country until Delivery is completed at your agreed delivery point in Uganda. Risk passes to you on Delivery.' },
      { id: '11.2', text: 'Replacement, not refund. Where Goods are lost or damaged while at Parcelo\'s risk under clause 11.1, your remedy is replacement of the Goods at our cost. We do not issue cash refunds in this scenario. We will procure the same item, or where the same item is genuinely no longer available, an item of equivalent specification and value, and deliver it to you at no additional cost.' },
      { id: '11.3', text: 'Limits on the replacement promise. Replacement under clause 11.2 does not apply to damage caused by inherent defect or normal handling; damage caused by your acts or instructions; one-of-a-kind or irreplaceable Goods (where we will use reasonable efforts to recover the value from the responsible party); loss or damage caused by force majeure; or Goods we have warned you in writing we cannot replace before you proceeded with the Order.' },
      { id: '11.4', text: 'Vendor errors and disputes. If a source vendor sends the wrong item, a damaged item, an incomplete order, or commits any other supply failure, Parcelo will pursue the dispute with the vendor on your behalf, keep you informed during the process, and pass on any remedy recovered in full. Where we are unable to recover from the vendor despite reasonable efforts, the loss is borne by you.' },
      { id: '11.5', text: 'Parcelo errors. Where loss, damage, or shortage is caused by Parcelo\'s own error, we will at our cost either replace the Goods or refund the amount you paid for that item, at your election. This is the only category in which we issue cash refunds for loss or damage.' },
      { id: '11.6', text: 'Notice of issues. You must notify us of any loss, damage, shortage, or non-conformity within seventy-two (72) hours of Delivery, through one of our Verified Channels. Photographs and a description of the issue are required. Claims raised after this period may not be actionable.' },
    ],
  },
  {
    number: '12',
    title: 'Limitation of Liability',
    clauses: [
      { id: '12.1', text: 'Scope of this clause. This clause sets out the limits of Parcelo\'s liability to you arising out of, or in connection with, the Service, an Order, these Terms, or any related matter, whether the claim is brought in contract, in tort (including negligence), under statute, or on any other basis.' },
      { id: '12.2', text: 'Liability cap. Subject to clauses 12.4 and 12.5, our total aggregate liability to you in respect of any Order is capped at the landed cost paid by you for that Order, as stated on your Receipt. This cap is the maximum amount you can recover from Parcelo for all claims, losses, and remedies in connection with that Order taken together.' },
      { id: '12.3', text: 'Excluded losses. Subject to clauses 12.4 and 12.5, Parcelo is not liable to you for any of the following, whether direct or indirect, foreseeable or otherwise: indirect, special, or consequential losses; loss of profit, revenue, or anticipated savings; loss of business, business opportunities, or contracts; loss of, or corruption to, data; and loss of, or damage to, goodwill or reputation.' },
      { id: '12.4', text: 'What this clause does not limit. Nothing in these Terms limits or excludes our liability for fraud or fraudulent misrepresentation; wilful misconduct or gross negligence; death or personal injury caused by our negligence; or any other liability that cannot lawfully be limited or excluded under the laws of Uganda.' },
      { id: '12.5', text: 'Specific remedies preserved. The cap in clause 12.2 and the exclusions in clause 12.3 do not reduce or replace the specific remedies set out elsewhere in these Terms, including replacement of Goods lost or damaged in transit under clause 11.2, refunds in the limited circumstances set out in clauses 5.6, 6.6, and 11.5, and absorption of customs reclassifications for B2C Orders under clause 9.2.' },
      { id: '12.6', text: 'Time limit for claims. You must commence any formal legal action against Parcelo within six (6) months from the date of Delivery of the Order to which the claim relates, or within six (6) months from the date the claim arose where the Order was not delivered. Any claim brought after this period is time-barred.' },
      { id: '12.7', text: 'Reasonableness. You acknowledge that the limits and exclusions in this clause are reasonable given the nature of the Service, the level of the Concierge and Fulfilment Fee, and the operational realities of international sourcing and delivery, and that you have had the opportunity to review them before placing any Order.' },
    ],
  },
  {
    number: '13',
    title: 'Client Warranties and Indemnity',
    clauses: [
      { id: '13.1', text: 'By engaging Parcelo, you warrant and represent to us that:', bullets: [
        'you have the legal capacity and authority to enter into these Terms and to place each Order;',
        'all information you provide to us, including the description, value, and intended use of the Goods, is accurate and complete;',
        'the Goods are intended for your personal use, household use, or, where you are an organisation, your bona fide business use;',
        'the Goods are not Prohibited Items under clause 8 and, if Restricted Items, you will comply with the additional terms we identify;',
        'the funds you use to pay for the Service are from a lawful source;',
        'you are not subject to any sanction, restriction, or legal prohibition that affects your ability to import the Goods; and',
        'your use of our Service complies with all applicable Ugandan and other relevant laws.',
      ]},
      { id: '13.2', text: 'Indemnity. You agree to indemnify, defend, and hold harmless Parcelo, its directors, employees, contractors, and agents, from and against any loss, damage, claim, fine, penalty, cost, or expense (including reasonable legal fees) arising out of your breach of any of the warranties in clause 13.1, your breach of these Terms, your negligent or unlawful act or omission, any inaccurate or incomplete information you provide to us, or any third-party claim arising from your conduct in connection with the Service.' },
      { id: '13.3', text: 'Cooperation. Where a claim against Parcelo gives rise to your indemnity, we will notify you of the claim and allow you to participate in the response. We retain control of any settlement, but we will not settle on terms that admit liability on your behalf without your consent, which is not to be unreasonably withheld.' },
    ],
  },
  {
    number: '14',
    title: 'Intellectual Property',
    clauses: [
      { id: '14.1', text: 'The Parcelo name, the Parcelo logo, the brand persona "Walter | The Shopping Concierge", and all related marks, taglines, designs, photography, written content, and visual identity (the "Parcelo Brand") are the property of Parcelo Freight Solutions Limited or its licensors. Nothing in these Terms grants you any right or licence to use the Parcelo Brand for any commercial purpose.' },
      { id: '14.2', text: 'The contents of our website, WhatsApp catalogues, marketing materials, and any documentation we share with you are protected by copyright. You may view, download, and print such content for your personal, non-commercial use in connection with our Service. You may not reproduce, republish, distribute, modify, or commercially exploit any of this content without our prior written consent.' },
      { id: '14.3', text: 'You may not use any robot, scraper, or automated system to access, copy, or extract data from our website or any of our communication channels.' },
      { id: '14.4', text: 'If you submit feedback, suggestions, photographs of received Goods, testimonials, or any other content to us, you grant Parcelo a non-exclusive, royalty-free, worldwide licence to use that content for internal records and customer service improvement. We will only use such content for marketing purposes where you have given us specific written consent to do so.' },
      { id: '14.5', text: 'Goods sourced and delivered to you remain the intellectual property of their respective brand owners and manufacturers. Parcelo makes no warranty as to the authenticity of branded Goods beyond confirming the source from which we purchased them on your behalf.' },
    ],
  },
  {
    number: '15',
    title: 'Privacy and Data Protection',
    clauses: [
      { id: '15.1', text: 'Privacy Policy. Our collection and processing of personal data is governed by our Privacy Policy, which is published on our website and forms part of these Terms. By engaging our Service, you confirm that you have read and understood our Privacy Policy.' },
      { id: '15.2', text: 'Lawful processing. Parcelo processes personal data in accordance with the Data Protection and Privacy Act 2019 of Uganda and any regulations and guidance issued under it.' },
      { id: '15.3', text: 'What we collect and why. To provide the Service, we typically collect your name, phone number, email address, and delivery address; the description and value of Goods you ask us to source; payment information necessary to process your payment; your communications with us through our Verified Channels; and any additional information we reasonably require for clearance, delivery, or compliance.' },
      { id: '15.4', text: 'Sharing. We share personal data only as necessary to provide the Service, including with overseas suppliers, carriers, customs agents, payment processors, and other partners. We do not sell your personal data.' },
      { id: '15.5', text: 'Your rights. Subject to applicable law, you have rights of access to, correction of, and (in certain circumstances) deletion of your personal data, as described in our Privacy Policy. You may exercise these rights by contacting us through any Verified Channel.' },
    ],
  },
  {
    number: '16',
    title: 'Force Majeure',
    clauses: [
      { id: '16.1', text: 'Neither party is liable for any failure or delay in performing its obligations under these Terms to the extent that the failure or delay is caused by an event beyond its reasonable control (a "Force Majeure Event").' },
      { id: '16.2', text: 'Force Majeure Events include, without limitation:', bullets: [
        'acts of God, fire, flood, earthquake, severe weather, and other natural disasters;',
        'war, armed conflict, civil unrest, terrorism, and acts of public enemies;',
        'epidemic, pandemic, and public health emergencies;',
        'actions of governments and regulatory authorities, including border closures, embargoes, sanctions, sudden regulatory changes, and customs detentions outside the parties\' control;',
        'failure or disruption of carriers, airlines, shipping lines, ports, airports, or other essential infrastructure;',
        'failure or disruption of telecommunications, internet, banking, or payment infrastructure;',
        'strikes, lockouts, and labour disputes affecting third parties; and',
        'any other event of similar character that is beyond the affected party\'s reasonable control.',
      ]},
      { id: '16.3', text: 'The party affected by a Force Majeure Event will notify the other party as soon as reasonably practicable, describe the event, and use reasonable efforts to mitigate its effects and to resume performance.' },
      { id: '16.4', text: 'If a Force Majeure Event prevents performance for more than sixty (60) consecutive days, either party may terminate the affected Order by written notice. On such termination, Parcelo refunds the recoverable amount under clause 6.6, and neither party has any further claim against the other in respect of that Order, save for liabilities accrued before the Force Majeure Event.' },
    ],
  },
  {
    number: '17',
    title: 'Suspension and Termination',
    clauses: [
      { id: '17.1', text: 'Suspension by Parcelo. We may suspend our provision of the Service to you, in whole or in part, where:', bullets: [
        'you are in breach of these Terms and have not remedied the breach within a reasonable period after we have asked you to do so;',
        'we reasonably suspect fraud, money laundering, sanctions evasion, or other unlawful conduct in connection with your engagement;',
        'you have failed to provide information we have reasonably requested under clause 4.4;',
        'an Order is on hold pending clearance of an issue, including under clauses 5.6, 8, or 9; or',
        'Goods have remained at our office without rescheduled Delivery for more than thirty (30) days.',
      ]},
      { id: '17.2', text: 'Termination by Parcelo. We may terminate our relationship with you, with immediate effect by notice through any Verified Channel, where you have committed a material breach of these Terms that cannot be remedied; we are required to do so by law; you become insolvent or bankrupt; or continued provision of the Service would expose Parcelo to material legal, regulatory, reputational, or operational risk.' },
      { id: '17.3', text: 'Termination by you. You may stop using our Service at any time by notifying us through any Verified Channel. Termination by you does not affect Orders already created, which remain governed by these Terms until completed or otherwise resolved.' },
      { id: '17.4', text: 'Effect of termination. On termination, any in-flight Order continues to be governed by these Terms until completed; amounts properly due to either party remain payable; and clauses that by their nature are intended to survive termination (including clauses 11, 12, 13, 14, 15, 18, and 19) continue to apply.' },
      { id: '17.5', text: 'Goods at our office. Where Goods remain at our office after termination, we may, after giving you written notice and a further reasonable period to collect, charge reasonable storage fees, arrange disposal of perishable or hazardous Goods, or exercise any rights available to us under applicable law in respect of unclaimed property.' },
    ],
  },
  {
    number: '18',
    title: 'Governing Law and Dispute Resolution',
    clauses: [
      { id: '18.1', text: 'Governing law. These Terms, and any dispute or claim arising out of or in connection with them, the Service, an Order, or any related matter, are governed by and construed in accordance with the laws of Uganda.' },
      { id: '18.2', text: 'Three-step dispute resolution. If a dispute arises, the parties agree to follow the three steps below in order. Step 1 — Direct resolution: you raise the issue through one of our Verified Channels and the parties try to resolve the dispute informally for a period of thirty (30) days. Step 2 — Mediation: if unresolved, either party may refer the dispute to mediation administered by the Centre for Arbitration and Dispute Resolution (CADER) in Kampala. Step 3 — Courts: if unresolved through mediation, either party may commence proceedings in the courts of Uganda, which have exclusive jurisdiction.' },
      { id: '18.3', text: 'Time limits preserved. The dispute resolution process in this clause does not extend the time limits in clauses 11.6 and 12.6. You must take steps within those time limits to preserve your rights, even while a dispute is being worked through Steps 1 and 2.' },
      { id: '18.4', text: 'B2B arrangements. For B2B engagements under a separately signed B2B service agreement, the parties may agree a different dispute resolution path, including binding arbitration. Where a B2B service agreement specifies a different path, that path applies in place of this clause for that engagement.' },
    ],
  },
  {
    number: '19',
    title: 'Entire Agreement, Severability, Waiver, and Assignment',
    clauses: [
      { id: '19.1', text: 'These Terms, together with any Quotation we have issued to you, any invoice we have raised, and our Privacy Policy, constitute the entire agreement between you and Parcelo for the Service. They supersede all previous communications, proposals, and representations, whether spoken or written, between you and Parcelo on the same subject matter.' },
      { id: '19.2', text: 'If any part of these Terms is found to be unlawful, void, or unenforceable by a court or competent authority, that part will be severed from the rest, and the remaining Terms will continue in full force and effect.' },
      { id: '19.3', text: 'If we do not enforce a right or provision of these Terms on any occasion, that does not mean we have given up the right to enforce it on a future occasion. A waiver is only effective if it is in writing and signed by a person duly authorised by Parcelo.' },
      { id: '19.4', text: 'You may not assign, transfer, or delegate any of your rights or obligations under these Terms without our prior written consent. We may assign or transfer our rights and obligations to any successor in our business, or to any of our affiliates, on written notice to you.' },
      { id: '19.5', text: 'The headings in these Terms are for convenience only and do not affect the interpretation of any clause. Nothing in these Terms creates a partnership, joint venture, or employment relationship between you and Parcelo.' },
    ],
  },
  {
    number: '20',
    title: 'Contact and Notices',
    clauses: [
      { id: '20.1', text: 'Our primary communication channel is WhatsApp. By engaging our Service, you consent to receiving messages, voice notes, photographs, Quotations, invoices, and notices from us through WhatsApp at the number you have registered with us.' },
      { id: '20.2', text: 'You may reach us through any of the following: WhatsApp: +256 792 170 962 · Email: info@parcelo.ug · Office: Ruthent Towers, Bukoto Street, Plot 96A, Kampala, Uganda.' },
      { id: '20.3', text: 'We may communicate with you and serve notices through WhatsApp, email, SMS, voice call, or postal mail at the most recent address we hold for you. It is your responsibility to keep your contact details current with us.' },
      { id: '20.4', text: 'A notice is treated as received: when sent by WhatsApp or email, at the time of successful delivery to the recipient\'s device or inbox; when sent by SMS, at the time of successful delivery as confirmed by the network operator; when delivered by hand or by courier, at the time of physical delivery; or when sent by post, three Working Days after posting.' },
      { id: '20.5', text: 'If you have a complaint, concern, or dispute, please contact us first using the details in clause 20.2 so we can attempt to resolve it directly. Clause 18 sets out the formal dispute resolution process if direct contact does not resolve the matter.' },
    ],
  },
];

const TOC = [
  'Acceptance and Amendment', 'Definitions', 'The Service', 'Eligibility and Account',
  'Communication Channels', 'Pricing, Fees, Payment', 'Authority to Purchase', 'Restricted and Prohibited Items',
  'Customs, Duties, and Taxes', 'Delivery and Timelines', 'Loss, Damage, and Replacement', 'Limitation of Liability',
  'Client Warranties and Indemnity', 'Intellectual Property', 'Privacy and Data Protection', 'Force Majeure',
  'Suspension and Termination', 'Governing Law and Disputes', 'Entire Agreement', 'Contact and Notices',
];

function SectionBlock({ section }: { section: Section }) {
  return (
    <div id={`section-${section.number}`} style={{ paddingTop: '40px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '14px' }}>
        <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--gold)', letterSpacing: '0.08em', flexShrink: 0 }}>
          {section.number.padStart(2, '0')}
        </span>
        <h2 style={{ fontSize: '18px', fontWeight: 800, margin: 0, letterSpacing: '-0.02em', color: 'var(--text)' }}>
          {section.title}
        </h2>
      </div>

      {section.intro && (
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8, margin: '0 0 12px', paddingLeft: '28px' }}>
          {section.intro}
        </p>
      )}

      {section.clauses && (
        <div style={{ paddingLeft: section.number === '2' ? '0' : '28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {section.clauses.map((clause, i) => (
            <div key={i}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                {clause.id && (
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', flexShrink: 0, minWidth: '28px', paddingTop: '2px' }}>
                    {clause.id}
                  </span>
                )}
                {section.number === '2' ? (
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8, margin: 0, paddingLeft: '28px' }}>
                    {clause.text}
                  </p>
                ) : (
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>
                    {clause.text}
                  </p>
                )}
              </div>
              {clause.bullets && (
                <ul style={{ margin: '8px 0 0', padding: '0 0 0 ' + (clause.id ? '38px' : '28px'), listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {clause.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '6px', fontSize: '8px' }}>■</span>
                      <span style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Terms() {
  return (
    <>
      <Nav />

      <section style={{ padding: '72px 24px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: 'auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(251,202,12,0.08)', border: '1px solid rgba(251,202,12,0.2)',
            borderRadius: '8px', padding: '6px 14px', marginBottom: '24px',
          }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Draft for Legal Review
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
            Terms of Use
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', margin: '0 0 12px', lineHeight: 1.7 }}>
            The agreement between Parcelo Freight Solutions Limited and any person or organisation who requests, uses, or pays for our Concierge and Fulfilment Service.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginTop: '20px' }}>
            {[
              { label: 'Document Ref.', value: 'PCL-LEGAL-TOU-26-001' },
              { label: 'Version', value: 'v0.1 (Draft)' },
              { label: 'Governing Law', value: 'Republic of Uganda' },
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
                End of Document · PCL-LEGAL-TOU-26-001 · v0.1 (Draft)
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-faint)', margin: '12px 0 0' }}>
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
