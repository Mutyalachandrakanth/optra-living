"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Container,
  useMediaQuery,
  useTheme,
  Divider,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Services", href: "/#services" },
  { label: "Plans", href: "/plans" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            backgroundColor: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(26,60,94,0.08)",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ height: 72 }}>
              {/* Logo */}
              <Box
                component="a"
                href="/"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.25,
                  textDecoration: "none",
                  flexGrow: { xs: 1, md: 0 },
                }}
              >
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: "10px",
                    background:
                      "linear-gradient(135deg, #1a3c5e 0%, #2d5f8a 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(26,60,94,0.25)",
                  }}
                >
                  <HomeWorkIcon sx={{ color: "#e8a838", fontSize: 21 }} />
                </Box>
                <Box sx={{ lineHeight: 1 }}>
                  <Box
                    component="span"
                    sx={{
                      fontSize: "1.15rem",
                      fontWeight: 800,
                      color: "primary.main",
                      fontFamily: '"Playfair Display", serif',
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Optra
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: "1.15rem",
                      fontWeight: 800,
                      color: "secondary.main",
                      fontFamily: '"Playfair Display", serif',
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {" "}
                    Living
                  </Box>
                </Box>
              </Box>

              {/* Desktop nav */}
              {!isMobile && (
                <Box sx={{ display: "flex", gap: 0.5, ml: 6, flexGrow: 1 }}>
                  {navLinks.map((link) => (
                    <Button
                      key={link.label}
                      component="a"
                      href={link.href}
                      sx={{
                        color: "text.secondary",
                        fontWeight: 500,
                        px: 2.5,
                        py: 1,
                        borderRadius: 2,
                        fontSize: "0.9rem",
                        letterSpacing: 0.2,
                        "&:hover": {
                          color: "primary.main",
                          bgcolor: "rgba(26,60,94,0.05)",
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  ))}
                </Box>
              )}

              {!isMobile && (
                <Box sx={{ display: "flex", gap: 1.5 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    href="#contact"
                    sx={{
                      fontWeight: 600,
                      px: 2.5,
                      borderRadius: 2,
                      borderWidth: "1.5px",
                      "&:hover": { borderWidth: "1.5px" },
                    }}
                  >
                    Talk to Us
                  </Button>
                </Box>
              )}

              {isMobile && (
                <IconButton
                  onClick={() => setDrawerOpen(true)}
                  sx={{ color: "primary.main" }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { width: 290, borderLeft: "1px solid rgba(26,60,94,0.08)" },
        }}
      >
        <Box
          sx={{
            p: 2.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              fontWeight: 800,
              fontSize: "1.1rem",
              fontFamily: '"Playfair Display", serif',
            }}
          >
            <Box component="span" sx={{ color: "primary.main" }}>
              Optra
            </Box>
            <Box component="span" sx={{ color: "secondary.main" }}>
              {" "}
              Living
            </Box>
          </Box>
          <IconButton onClick={() => setDrawerOpen(false)} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ pt: 1 }}>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                component="a"
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                sx={{ px: 3, py: 1.5, borderRadius: 2, mx: 1, my: 0.25 }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            p: 2.5,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            mt: "auto",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            fullWidth
            href="#contact"
            onClick={() => setDrawerOpen(false)}
          >
            Talk to Us
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
