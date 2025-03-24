import { motion } from "motion/react"
// import './App.css'

function App() {
 

  return (
    <>
   
     <div className="w-screen" >
      
      <motion.h1
      initial={{
    x:0
      }}
      animate={{
        x:1000,
        scale:3
      }}
      transition={{
        duration:5,
        
      }}
      >hellow!</motion.h1>
      <motion.img  src="https://www.partysuppliesindia.com/cdn/shop/products/1_36_9f92dde3-d77d-4459-a21f-63744a94c836.jpg?v=1735574298&width=1500"
      className='w-32 h-32 mt-10' 
      
      animate={{x:1000,
       rotate:360
 }} transition={{
  duration:3,
  delay:2,
  repeat:2,
  ease:'anticipate'
 }}
 >
       
      </motion.img>
     </div>
    </>
  )
}

export default App
