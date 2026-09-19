"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Stack,
  Paper,
  MenuItem,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const contactItems = [
  {
    icon: <PhoneIcon sx={{ fontSize: 20 }} />,
    label: "Call Us",
    value: "+91 98765 43210",
    sub: "Mon–Sat, 9am–7pm IST",
  },
  {
    icon: <WhatsAppIcon sx={{ fontSize: 20 }} />,
    label: "WhatsApp",
    value: "+91 98765 43210",
    sub: "Quickest response",
  },
  {
    icon: <EmailIcon sx={{ fontSize: 20 }} />,
    label: "Email",
    value: "hello@optraliving.com",
    sub: "We reply within 4 hours",
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 20 }} />,
    label: "Office",
    value: "Jubilee Hills, Hyderabad",
    sub: "Telangana – 500033",
  },
];

const enquiryTypes = [
  { value: "owner", label: "Owner — list or manage my property" },
  { value: "tenant", label: "Tenant — looking for a property to rent" },
  { value: "nri", label: "NRI owner — manage my Hyderabad property" },
  { value: "other", label: "Other enquiry" },
];

export default function ContactSection() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: { xs: 9, md: 12 }, backgroundColor: "#f8f9fb" }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="flex-start">
          {/* Left */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="overline"
              sx={{
                color: "secondary.main",
                fontWeight: 700,
                letterSpacing: 2.5,
                display: "block",
                mb: 1.5,
              }}
            >
              CONTACT US
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.7rem" },
                lineHeight: 1.15,
                mb: 2.5,
              }}
            >
              Let&apos;s Talk About
              <br />
              <Box component="span" sx={{ color: "primary.main" }}>
                Your Property
              </Box>
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 5, lineHeight: 1.9, fontSize: "1.02rem" }}
            >
              Whether you&apos;re a landlord ready to list, a tenant searching
              for a home, or an NRI owner looking for reliable local management
              — our team will give you a straightforward, no-pressure
              conversation.
            </Typography>

            <Stack spacing={3}>
              {contactItems.map((item) => (
                <Box
                  key={item.label}
                  sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      flexShrink: 0,
                      bgcolor: "rgba(26,60,94,0.07)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "primary.main",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.disabled",
                        display: "block",
                        mb: 0.25,
                        fontWeight: 600,
                        letterSpacing: 0.5,
                      }}
                    >
                      {item.label.toUpperCase()}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 700, color: "text.primary" }}
                    >
                      {item.value}
                    </Typography>
                    <Typography variant="caption" color="text.disabled">
                      {item.sub}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Right — Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4.5 },
                borderRadius: 4,
                border: "1px solid rgba(26,60,94,0.08)",
                backgroundColor: "background.paper",
                boxShadow: "0 8px 40px rgba(26,60,94,0.07)",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                Send an Enquiry
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 3.5 }}
              >
                Fill in the form and we&apos;ll come back to you within 2
                business hours.
              </Typography>

              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Full Name"
                    fullWidth
                    required
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Mobile Number"
                    fullWidth
                    required
                    type="tel"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email Address"
                    fullWidth
                    type="email"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="How can we help?"
                    select
                    fullWidth
                    defaultValue=""
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                  >
                    <MenuItem value="" disabled>
                      Select an option...
                    </MenuItem>
                    {enquiryTypes.map((t) => (
                      <MenuItem key={t.value} value={t.value}>
                        {t.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Your Message"
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Tell us more about your property or what you're looking for..."
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      py: 1.6,
                      borderRadius: 2.5,
                      fontWeight: 700,
                      fontSize: "0.95rem",
                    }}
                  >
                    Send Enquiry
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="caption"
                    color="text.disabled"
                    display="block"
                    textAlign="center"
                    sx={{ lineHeight: 1.7 }}
                  >
                    Your enquiry is private and secure. We do not share your
                    details with third parties without your consent.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
