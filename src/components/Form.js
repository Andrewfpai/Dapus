import { Tooltip, Text, InputGroup, Stack, FormControl, Input, Spacer, Image, Button, ButtonGroup, Flex, SimpleGrid, Box, Heading, HStack, VStack } from '@chakra-ui/react'
import Illustration from '../images/Illustration.svg'
import '../styles/theme.scss'
import {useState} from 'react'
import {CopyIcon, CheckCircleIcon} from '@chakra-ui/icons'


import DatePicker from "react-multi-date-picker"


function Form() {
    const [judul, setJudul] = useState()
    const [link, setLink] = useState()
    const [nama, setNama] = useState()
    const [namaPenulis, setNamaPenulis] = useState()
    const [tanggal, setTanggal] = useState()
    const [jam, setJam] = useState()
    const [tahun, setTahun] = useState()
    const [value, setValue] = useState()
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [clipboard, setClipboard] = useState()
    const [isCopied, setIsCopied] = useState(false)

    const handleChange1 = (event) => {
      setJudul(event.target.value) 
      setIsSubmitted(false)}
    const handleChange2 = (event) => {
      setLink(event.target.value)
      setIsSubmitted(false)}
    const handleChange3 = (event) => {
      setNama(event.target.value)
      setIsSubmitted(false)}
    const handleChange4 = (event) => {
      setTanggal(event.target.value)
      setIsSubmitted(false)}
    const handleChange5 = (event) => {
      setJam(event.target.value)
      setIsSubmitted(false)}
    const handleChange6 = (event) => {
      setTahun(event.target.value)
      setIsSubmitted(false)}

    let months = [ "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
           "Juli", "Agustus", "September", "Oktober", "November", "Desember" ];



    function CustomInput({ openCalendar, value, handleValueChange }) {
        return (
          <Input
            placeholder='Tgl-Bln-Thn Akses'
            className='input'
            onFocus={openCalendar}
            value={value}
            onChange={setValue}
            
          />
        )
      }

      const onSubmit = e => {
        e.preventDefault()
  

        

        if (judul.length == 0 || link.length==0 || nama.length==0 || value.length==0 || jam.length==0 || tahun.length==0){
          setIsSubmitted(false)
        
        } else{
          setIsSubmitted(true)
          editTanggal()
          ChangeNama()
        }
    
        
        
      }

      const clear = () => {
    
        setIsSubmitted(false)
        setJudul('')
        setLink('')
        setNama('')
        setNamaPenulis('')
        setTanggal('')
        setJam('')
        setTahun('')
        setValue('')

      }

      const fill = () => {
        setJudul('Sederet Transformasi Digital BEI untuk Pasar Modal Indonesia')
        setLink('https://www.liputan6.com/saham/read/4677218/sederet-transformasi-digital-bei-untuk-pasar-modal-indonesia')
        setNama('Pipit Ika Ramadhani')
        setValue('15/09/2022')
        setJam('15:25')
        setTahun('2021')
 
        
      }

      const copy = () => {
        
        navigator.clipboard.writeText(`${namaPenulis}. ${tahun}. "${judul}". ${link}, diakses pada ${tanggal} pukul ${jam}`)
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 2000)

      }

      const dataItem = (event) => {
        setClipboard(event.target.value)
        alert(clipboard)
        
      }





      const ChangeNama = () => {
        // Array isinya nama penulis kayak ['aji', 'sujipto]
        const namaPenulis = nama.split(" ");
        let length = namaPenulis.length
        let namaAkhir = namaPenulis[length-1]
        let text = `${namaAkhir}, `

        for (let i = 0; i < namaPenulis.length-1; i++) {
          text += namaPenulis[i] + ' ';
        }

        // alert(text)


        setNamaPenulis(text)
        console.log(namaPenulis)

      }

      const editTanggal = () => {

        let tanggalAwal = value.toString()
        const tanggalArray = tanggalAwal.split("/");
        let text2 = ""

        for (let i = 0; i < tanggalArray.length; i++) {
          if (i===0) {
            let sample = Number(tanggalArray[i])
            text2 += sample + ' '
          } if (i===1){
            let number = Number(tanggalArray[i])
      
      
            var namaBulan = months[number];
            text2 += namaBulan + ' '
          } if(i===2){
          text2 += tanggalArray[i] + ' ';
          }
        }
        setTanggal(text2)
      
    
      }
     
        

      const renderContent = () => {
        if (!isSubmitted) return <div className='placeholder1'></div>;
        return (
          <div className="text-format">

          
            {namaPenulis}. {tahun}. "{judul}". <span className='link'>{link}</span>, diakses pada {tanggal} pukul {jam}
          </div>
        )
      }



  return (
 

      <Flex
      minH={'100vh'}
      flexDirection='row'>

        

        <Box w='65%' bg='darkBlue' >

            <Stack justifyContent='center' mt='32px' spacing={5} mx={'auto'} maxW={'xl'}>
                {/* Bagian Heading/atas */}
                <Flex justifyContent='center'>

                <VStack color='white'>
                <Heading class='heading'>DAPUS OTOMATIS</Heading>
      
                </VStack>
               


                </Flex>

           
                <Stack spacing={5} color='white'>
                  
                   
                    <Input placeholder='Judul Berita' value={judul} onChange={handleChange1}/>
                    <Input placeholder='Url/Link Berita' value={link} onChange={handleChange2}/>
                    <Input placeholder='Nama Penulis (eg: Aji Sujipto Redana)' value={nama} onChange={handleChange3} />
    
              
                    <DatePicker render={<CustomInput />}  format='DD/MM/YYYY' value={value}
            onChange={setValue}/>

                  
                  

                    <HStack spacing={5}>
                      <Input placeholder='Jam Akses (eg: 12:00)' value={jam} onChange={handleChange5} />
                      <Input placeholder='Tahun Tayang (eg: 2022)' value={tahun} onChange={handleChange6}/>
                    </HStack>

                    <Flex spacing={5}>
                        <Stack alignItems='left' justifyContent='left' ml={0} spacing={3}>
                       
                            <Button variant='primary' size='md' w='100px' ml={0} onClick={onSubmit}>Submit</Button>
                            <Button variant='secondary' size='md' w='100px' mt={0} onClick={clear}>Clear</Button>
                            <Button variant='primary' size='md' w='100px' onClick={fill}>Test</Button>
                        </Stack>
                        <Box ml={5} p={4} pr={5} BorderColor="green" w='100%' borderWidth='1px' borderRadius='md' bg='white' color='black' >
                          <Flex justifyContent='center'>
                          {isCopied ? (
                            <Tooltip hasArrow label='Copied'>
                            <CheckCircleIcon  w='{10}' className='CheckCircleIcon' color='black' isDisabled/>
                          </Tooltip>
            ) : (<CopyIcon  w='{10}' className='copyIcon' color='black' onClick={copy} role='img' />)}
                          </Flex>
                          
                          <div className="data-item-information" onChange={dataItem}>{renderContent()}</div>
                          </Box>

                          
                        

                    </Flex>

                   
                
                </Stack>
    
         

            </Stack>
            <Text className='version' color='black'>1.0.0</Text>

        </Box>

        <Box w='35%' bg='green'>

        </Box>





      </Flex>
  
  );
}

export default Form;
