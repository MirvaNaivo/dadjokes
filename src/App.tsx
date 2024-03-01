import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardContent, Container, Divider, Grid, Typography } from '@mui/material'

function App() {

  const [joke, setJoke] = useState('No joke fetched yet')

  useEffect(() => {
    async function fetchData() {
      const url = 'https://api.api-ninjas.com/v1/dadjokes'
      const config = {
        headers: {
          'X-Api-Key': 'qFRwfcoEjiLRvRYhJirWtQ==1JTjQy3ah2MoAPgM'
        }
      }
      const response = await axios.get(url, config)
      const data = await response.data[0].joke
      setJoke(data)
    }
    fetchData()
  }, [])

  return (
    <Container>
      <Grid container alignItems='center' justifyContent='center' spacing={0} direction='column'  style={{ minHeight: '100vh' }}>
      <Card>
        <Typography padding={3}>
          Heres a dad joke for you:
        </Typography>
        <Divider/>
        <CardContent>
          {joke}
        </CardContent>
      </Card>
      </Grid>
    </Container>
  )
}

export default App
