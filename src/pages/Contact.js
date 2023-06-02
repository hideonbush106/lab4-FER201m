import React from "react";
import { Box } from "@mui/material";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-around",
                alignItems: { sm: "start", xs: "center" },
                marginTop: 4,
            }}
        >
            <ContactInfo sx={{ marginBottom: 4, width: { sm: "45%", xs: "90%" } }} />
            <ContactForm sx={{ marginBottom: 4, width: { sm: "45%", xs: "90%" } }} />
        </Box>
    );
};

export default Contact;
