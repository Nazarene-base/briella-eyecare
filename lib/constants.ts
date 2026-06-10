export const CONTACT_INFO = {
    locations: [
        {
            label: "Head Office",
            address: "1, Eheneden Street, off Ekehuan Road, Benin City",
            mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979!2d5.6068656!3d6.3368985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3a71435378d%3A0x15cb5602209693a2!2sBriella%20Eye%20Care!5e0!3m2!1sen!2sng!4v1749547200000"
        },
        {
            label: "Branch Office",
            address: "31, Akenzua Street, off Airport Road, Benin City",
            mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979!2d5.6118637!3d6.3314923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d38efc90f11f%3A0x23707006f03fb6ee!2sBriella%20Eyecare%20Clinic!5e0!3m2!1sen!2sng!4v1749547200000"
        },
    ],
    phone: "0909 036 8786",
    whatsapp: "2349090368786", // International format
    email: "Briellaeyecare@gmail.com",
    hours: [
        "Monday – Friday: 8:00am – 5:00pm",
        "Saturday: 10:00am – 2:00pm",
        "Sunday: Closed"
    ],
    socials: {
        facebook: "https://www.facebook.com/amadin.ogbebor.uwamarin",
        instagram: "https://www.instagram.com/briella.eyecare.ng"
    }
};

export const SERVICES = [
    {
        id: 1,
        title: "Comprehensive Eye Examinations",
        description: "A complete assessment of vision and eye health, screening for systemic diseases and visual acuity issues.",
        icon: "Eye",
        image: "/services/eye-exam.jpg"
    },
    {
        id: 2,
        title: "Refraction",
        description: "The specific test used to determine the exact lens power needed to correct nearsightedness, farsightedness, or astigmatism.",
        icon: "Focus",
        image: "/services/auto ref equipment.jpg"
    },
    {
        id: 3,
        title: "Prescription Services",
        description: "The issuance of a formal medical prescription for corrective lenses based on the findings of the refraction test.",
        icon: "FileText",
        image: "/services/prescription.jpg"
    },
    {
        id: 4,
        title: "Sales of Eyeglasses and Contact Lenses",
        description: "The dispensing and retail service where patients can select frames, order lenses, and purchase contact lens supplies.",
        icon: "Glasses",
        image: "/services/eyeglasses.jpg"
    },
    {
        id: 5,
        title: "Disease Diagnosis & Management",
        description: "The medical identification and treatment of ocular conditions such as glaucoma, cataracts, infections, and dry eye syndrome.",
        icon: "Activity",
        image: "/services/Disease Diagnosis & Management.jpeg"
    },
    {
        id: 6,
        title: "Pediatric Optometry",
        description: "Specialized eye care focused on the visual development and eye health of infants and children.",
        icon: "Baby",
        image: "/services/Pediatric Optometry.jpeg"
    },
    {
        id: 7,
        title: "Vision Therapy",
        description: "A customized program of exercises designed to retrain the brain and eyes to work together more effectively.",
        icon: "Target",
        image: "/services/vision train.jpg"
    }
];

export const TOP_SERVICES = [1, 4, 6]; // IDs of services to show on homepage

