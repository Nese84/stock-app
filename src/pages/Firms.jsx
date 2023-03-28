import { Button, Grid } from "@mui/material"
import Typography from "@mui/material/Typography"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import FirmCard from "../components/FirmCard"
import useStockCall from "../hooks/useStockCall"
import { flex } from "../styles/globalStyle"

const Firms = () => {
  
 

      
  }

  const { getStockData } = useStockCall()
  const { firms } = useSelector((state) => state.stock)


  useEffect(()=>{
    getStockData("firms")

  }, [])
  return (
    <div>
      <Typography variant="h4" color="error">
        Firm
      </Typography>
      <Button variant="contained">New Firm</Button>
    </div>
  )
  }


export default Firms