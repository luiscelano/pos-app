import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

export const ProductItem = ({ product }) => {
  return (
    <Grid item md={3} xs={6}>
      <Card elevation={0}>
        <CardMedia sx={{ height: 140, objectFit: 'contain' }} image={product.imageURL} title="green iguana" />
        <CardContent>
          <Typography variant="h6" component="div">
            {product.title}
          </Typography>
          <Typography
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3
            }}
            variant="body2"
            component="div">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{ width: '100%' }} size="small" variant="contained" disableElevation>
            Agregar
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
