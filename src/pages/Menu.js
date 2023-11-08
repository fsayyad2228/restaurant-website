import React from 'react'
import Layout from '../component/Layout/Layout'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import { MenuList } from '../data/data'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",}}>
        {
          MenuList.map((menu) => (
            <Card sx={{maxWidth:"390px",m:2}}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "400px" }}
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant="body2" >
                    {menu.description}
                  </Typography>
                  <br />
                  <Divider />
                  <Typography variant="h6" sx={{mt:2}}>
                    <CurrencyRupeeIcon />{menu.price}
                    <Button variant="contained" sx={{ml:20}} >Add to Cart</Button>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </Layout>
  )
}

export default Menu