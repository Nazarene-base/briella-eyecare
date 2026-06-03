import { CONTACT_INFO } from "@/lib/constants";

export function getWhatsAppUrl(message: string): string {
    return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MESSAGE = "Hello, I would like to book an appointment at Briella Eyecare.";
export const WHATSAPP_INQUIRY_MESSAGE = "Hello, I have a question about Briella Eyecare.";
