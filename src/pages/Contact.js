import React from 'react'
import Layout from '../component/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        my: 5,
        ml: 10,
        "& h4": {
          fontWeight: "bold",
          mb: 2,
        },
      }}>
        <Typography variant="h4">
          Contact My Resturant
        </Typography>
        <p>
          A restaurant is a business that prepares and serves food and drinks to customers.
          [1] Meals are generally served and eaten on the premises, but many restaurants also offer take-out
          and food delivery services. Restaurants vary greatly in appearance and offerings,
          including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants
          and cafeterias to mid-priced family restaurants,
          to high-priced luxury establishments.
        </p>
      </Box>
      <Box sx={{
        m: 3, width: "600px",
        ml: 10,
        "@media (max-width:600px)": {
          width: "300px",
        },
      }}>
        <TableContainer component={Paper}>
          <Table aria-label='contact-table' >
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "black", color: "white", }} align='center'>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: 'red' }} /> 1800-1200-3400 (tollfree number)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: 'sky' }} /> help@myresturant@outlook.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <PhoneIcon sx={{ color: 'green' }} /> 9021122000 (tollfree number)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact